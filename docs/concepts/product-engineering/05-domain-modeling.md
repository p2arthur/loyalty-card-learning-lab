# Domain modeling

## Model the meaning of the work

A domain is the area of activity a product supports. Domain modeling identifies the concepts, relationships, behavior, and rules that matter in that area. It helps people use words consistently and helps engineers assign responsibilities.

[Martin Fowler's Domain Model pattern](https://martinfowler.com/eaaCatalog/domainModel.html) includes both data and behavior in a model of the business. A conceptual model can begin as a glossary and a sketch, before choosing classes, tables, or APIs. Adopting that modeling practice does not require a particular object-oriented implementation or microservice architecture.

## Identity and value

An **entity** is tracked as the same individual concept even when its attributes change. A library's physical book copy keeps its identity after repair or relocation. Two copies of the same title remain distinct items.

A **value object** is distinguished by its values rather than a separate identity. For example, a loan-period value might combine a start and due date with rules about valid ordering. In the usual value-object approach, replace the value when it changes rather than modifying its identity over time. [Microsoft's value-object guidance](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/implement-value-objects) explains this identity distinction and immutability.

The classification depends on the domain. An address can be a value within a delivery order, while a building in a property-management service may be an entity with its own history. A label alone does not decide the model.

## Worked example: a library loan

Consider these candidate concepts:

| Concept | Why distinguish it? | Example behavior or constraint |
| --- | --- | --- |
| Title | Describes a published work | Many physical copies can share it |
| Copy | Identifies one lendable item | Cannot be actively loaned to two borrowers at once |
| Borrower | Tracks a continuing library relationship | May have several loans over time |
| Loan | Records one borrowing relationship over a period | A return closes that loan |
| Library card | Provides a way to identify a borrower | Replacing a card need not erase loans |

Combining title and copy would make two physical books difficult to distinguish. Storing loan history only on the card could make replacing an access artifact disrupt the borrower's continuing record. The conceptual distinctions expose those problems before a database schema exists.

Now ask about authority: who may establish or close a loan, and which module ensures the copy is available? The model must explain behavior, not just provide nouns for tables.

## Invariants and consistency boundaries

An invariant is a condition that must remain true at a defined boundary. Preventing two active loans for one copy needs a guarantee when competing operations commit, not only a pre-check on a screen.

An **aggregate** in domain-driven design groups domain objects behind a boundary that protects its invariants through a designated root. [Microsoft's domain-model guidance](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model) explains this consistency responsibility. It is not automatically every related database row or every object an API returns. Treat aggregate design as further study when consistency requirements justify it; do not introduce a large aggregate merely because concepts are connected.

Responsibility and persistence are related decisions, but a conceptual diagram does not prove the implementation enforces them. Constraints, transactions, code boundaries, and tests provide different parts of that evidence.

## From model to engineering choices

Build a small glossary from the actual language of users and operators. Follow one use case and identify which facts change and which rules must hold. Sketch relationships, then test the model with a change such as replacing a card, transferring an item, or correcting an error.

An API response may combine data from several concepts for convenient display. That does not mean those concepts have become one domain entity. Likewise, a database table is a persistence choice, not a definition of the concept by itself.

## Transfer exercise

Model a school equipment checkout service. Distinguish a student, a login credential, a device model, an individual device, and a borrowing event. State one invariant and show what survives when a credential is replaced.

Success means you can explain identity and responsibility without relying on table names. Related guides: [business rules](03-business-rules-and-decisions.md), [boundaries and ownership](08-boundaries-ownership-and-trust.md), and [state and consistency](09-state-failures-and-retries.md).
