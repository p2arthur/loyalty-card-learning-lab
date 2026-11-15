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
