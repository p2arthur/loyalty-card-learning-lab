# System boundaries, data ownership, and trust

## Architecture begins with responsibilities

A system boundary states what an application is responsible for and which people or systems it interacts with. Boundaries help explain ownership, dependencies, integration failures, and what the team can change directly.

A [C4 system context diagram](https://c4model.com/diagrams/system-context) places the software system among its users and connected systems. It stays at that level rather than mixing in every function or database table. More detailed views can later show running applications and stores, modules, or request flows. A C4 container is not necessarily a Docker container.

## Worked example: workshop reservations

Suppose a workshop-booking application depends on an organization's identity provider and an email service.

| Responsibility | Possible owner in this example | Consequence |
| --- | --- | --- |
| Establish the signed-in identity | Identity provider plus the application's validation of that identity | Login success does not by itself authorize every booking action |
| Decide who may reserve a seat | Booking application | Policy must be enforced for each protected action |
| Maintain authoritative remaining capacity | Booking application and its persistent store | A browser's displayed count cannot be the final authority |
| Deliver a confirmation email | External email service | Delivery failure need not mean the seat reservation failed |
| Display a helpful form | Client interface | Validation improves feedback but does not replace server checks |

These are hypothetical assignments to reason about, not a universal implementation. A real organization's existing systems could own different facts.

## Authority and representation

The authoritative owner decides whether a fact changes. Other components may show snapshots, cached copies, or derived values. A displayed seat count can be stale even when it was correct moments earlier.

Ask which component may change a fact, how another component learns about changes, and what happens while its view is stale. Avoid two modules independently claiming authority over the same decision without an explicit coordination rule.

Also distinguish identity from permission. Authentication establishes who a caller is under the chosen mechanism. Authorization decides whether that caller may perform a specific action on a resource. [OWASP's authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) calls for enforcing permission checks consistently on requests, including access to individual resources.

An unguessable booking identifier does not by itself authorize access. A disabled control does not stop a crafted request. Product requirements should say who may act and what must remain protected when an interface is bypassed.

### Delivery evidence and verification authority

Separate the fact a dependency reports from the decision your application needs to make. A messaging service can report delivery without establishing that a student completed an account-verification flow. For example, [SES defines delivery](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html) as successful delivery to the recipient's mail server.

In an application-owned verification flow, the app creates a verification link, the messaging service transports it, and the student follows it back to the app. The app validates the request before changing its account state. An external identity platform could instead own this flow, but that would be a different responsibility assignment.

[OWASP's email-verification guidance](https://cheatsheetseries.owasp.org/cheatsheets/Email_Validation_and_Verification_Cheat_Sheet.html) covers the verification mechanism. Delivery events, an open-tracking event, and the account's verified state are different kinds of evidence. A completed email check also does not establish every aspect of a person's identity or grant permission to every resource.

### Bind evidence to the claim it proves

Verification evidence has a scope and a lifetime. Suppose a student changes the email on a pending equipment-service registration. A link sent to the previous inbox cannot establish access to the new inbox, even if that link is still within its original expiry period. The application needs to relate the verification request to the current pending claim before updating account state.

Expiry, address changes, and resends are distinct cases. A product must decide which earlier requests remain usable and what recovery is offered. A new link does not by itself specify how the implementation handles the old one. Record the intended behavior and test it independently of the delivery mechanism. Secure generation, storage, and validation are later implementation responsibilities, not properties established by drawing the flow.

A lifetime policy also balances usability against how long unused verification evidence remains usable. A short window may be inconvenient; increasing that window and removing expiry altogether have different consequences. [OWASP recommends time-limited, single-use verification tokens](https://cheatsheetseries.owasp.org/cheatsheets/Email_Validation_and_Verification_Cheat_Sheet.html). Choose an appropriate duration for the real product rather than treating one arbitrary short window as universal. A simulated learning policy does not establish production security.

## People, interfaces, and channels

Keep the actor's role distinct from the interface they operate and the system that owns the decision. These are useful working distinctions:

| Concept | Question |
| --- | --- |
| Role | Who is acting in this situation, and with what responsibility? |
| User interface | What information and controls does that person use to accomplish the task? |
| Channel or device context | Where and through what medium does the interaction happen? |
| System boundary | Which software capabilities and authoritative decisions are in scope? |

For an illustrative theatre-booking product, a customer may retrieve tickets on a phone while a box-office operator selects seats and completes checkout on a counter screen. A self-service station can expose related purchase capabilities to the customer. These interface and role differences do not automatically require separate backend services. Define permissions and decision ownership independently rather than assuming the screen or device makes a caller authoritative.

Naming the interface by its user task helps keep scope understandable: ticket access and purchase checkout have related data but different immediate goals. A list of responsibilities also does not dictate an equal number of pages; a workflow can use states within a view. See [journeys and screen inventories](02-user-journey-mapping.md).

## Source dependencies and runtime calls

One component can call another at runtime while the code dependency points in a different direction through an interface. Keep diagram arrows labeled so readers know whether they mean a request, a data flow, or an import.

A modular monolith can maintain useful boundaries within one backend. Separate deployable services add operational and consistency questions. Introduce them when an identified need justifies the cost, not simply because a diagram contains several concepts.

### A production system can keep internal modules

Production use does not itself require splitting responsibilities into independently deployed services. An ordering module and a membership module can remain in one backend with explicit boundaries. [Fowler's Monolith First discussion](https://martinfowler.com/bliki/MonolithFirst.html) describes reasons to begin with one application and the additional costs of separate services; it also presents the choice as contextual rather than universal.

Distinguish three decisions:

| Decision | What it determines |
| --- | --- |
| Module boundary | How responsibilities and source-code dependencies are organized |
| Deployment boundary | Which parts can run and be released independently |
| System context boundary | Which software system this view describes and which other systems it communicates with |

A separately deployed service can still be part of the software system being described. Internal deployment detail belongs in a more detailed view, such as the [C4 container diagram](https://c4model.com/diagrams/container). An existing business platform outside the chosen system's scope can instead appear as an external system, even if the same organization owns it.

Reasons to consider a separate service include independent release needs, distinct operational ownership, or an established platform that already provides the responsibility. Weigh those against network failures, coordination, observability, and consistency work. Having two responsibilities is enough reason to discuss a module boundary; it does not automatically justify a network boundary.

### Repository, package, and process boundaries

A repository groups source files under version control. A package groups code, declared dependencies, and commands for a package manager. A process is a running program. These boundaries answer different questions; putting two packages in one repository does not require them to run in one process or be deployed together.

For example, a workshop-booking product might keep its browser interface and HTTP server in one repository. Each has its own `package.json`. A root manifest can register both as [npm workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces/), enabling root-level dependency installation and commands targeted at one package. The server declares its HTTP framework; the browser package declares its UI dependencies. npm may reuse a root `node_modules` directory, while dependency ownership is still declared per manifest.

Workspaces coordinate package management. They do not create the HTTP communication between the browser and server or enforce all architectural import restrictions. Keeping packages independent without workspaces is also valid; compare maintenance convenience with the extra root configuration. A shared repository is often called a monorepo, but that term does not establish a microservice architecture.

The root coordinator can use [`"private": true`](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/#private) to make npm refuse to publish it. This field governs that package's npm publication, not the visibility of its Git repository or the publication settings of other workspace packages.

For later transfer practice, consider a university browser portal and a background reminder worker in the same repository. Explain their package dependencies and how many running processes a proposed deployment would need. Success means distinguishing dependency installation from runtime execution without assuming that workspace membership decides deployment. This exercise is preparation, not demonstrated learning.

### Distinguish a simulated role from a real integration

A prototype can simulate an interaction that a later product would have with an external provider. For example, a booking demo may display a confirmation-email preview rather than send a message. That does not establish a working connection to an email service or prove control of a real inbox.

Label the scope of the diagram: a logical interaction sketch can show an intended provider role marked simulated, while a view of the running implementation should show what actually exists. A simulation implemented inside the backend is not automatically another deployed service. Keep these facts explicit so a study diagram does not promise an integration that has not been built.

When a real provider is introduced, revisit its contract, authority, credentials, and failure behavior. A successful simulation gives evidence about the selected local behavior, not the real provider's availability or delivery guarantees.

An adapter can isolate integration-specific behavior, such as mapping a booking confirmation into an email provider's request. The architectural question is what change this separation makes easier and how to verify it. It does not require an interface around every function.

## A small review method

Draw the people and connected systems. Assign the important decisions and authoritative facts. Mark inputs that need validation or authorization. Walk through one normal request and one dependency failure. Compare the chosen responsibility with one plausible alternative.

For each proposed boundary, ask what evidence would show that it holds. An import restriction may check selected code dependencies; a refactoring experiment may show that a rule can be tested without the email provider. Neither alone proves the entire system design.

## Transfer exercise

Sketch a university equipment-booking service using an existing university login system and a separate messaging provider. Assign ownership of identity, borrowing permission, device availability, and confirmation delivery.

Success means you can explain the effect of a messaging outage and of a caller trying to access another student's reservation. Related: [domain modeling](05-domain-modeling.md), [failures](09-state-failures-and-retries.md), and [quality scenarios](10-quality-and-decision-records.md).
