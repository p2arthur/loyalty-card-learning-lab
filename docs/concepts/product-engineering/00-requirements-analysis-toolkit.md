# Requirements elicitation and analysis: five core techniques

These five techniques form a strong core toolkit for requirements elicitation and analysis. Each helps prevent a different kind of misunderstanding.

| Technique | What it helps establish |
| --- | --- |
| **User journey analysis** | What people are trying to accomplish and where they encounter friction |
| **Business-rule analysis** | The policies, calculations, and conditions governing behavior |
| **Scenario and boundary analysis** | How those rules behave in normal, unusual, conflicting, and failure cases |
| **Domain modeling** | The meaningful concepts, identities, relationships, and responsibilities |
| **Acceptance criteria** | Observable outcomes that make the expected behavior testable |

## How they connect

A journey gives a rule its human context. Rules give scenarios something precise to challenge. Scenarios expose missing concepts, conflicting policies, and failure behavior. A domain model provides vocabulary and relationships for discussing those findings. Acceptance criteria turn the intended behavior into observable examples that can later guide verification.

Use these perspectives iteratively. A failed scenario may change a rule; a new domain distinction may change the journey; an acceptance example may reveal an unanswered question. The table is a toolkit, not a mandatory sequence to complete once and never revisit.

## Worked example outside the demo

Consider an illustrative equipment-loan service where a student may hold at most two active loans.

| Perspective | Example artifact or question |
| --- | --- |
| Journey | Find equipment, request a loan, collect it, use it, and return it. Where does the student learn that collection is ready? |
| Business rule | A student may have at most two active loans. Clarify which loan states count as active. |
| Scenarios and boundaries | Compare a request with zero, one, and two existing active loans. Explore simultaneous requests and an unavailable item. |
| Domain model | Describe Student, Equipment Item, and Loan, including identity, relationships, and loan state. |
| Acceptance criterion | Given a student with two active loans, when they request another loan, then the request is rejected and the active-loan count remains two. |

These are invented product policies for study. They demonstrate the connections without prescribing a database schema, service architecture, or interface layout.

## A broader requirements process

Use the toolkit alongside stakeholder research, problem evidence, scope and prioritization, quality requirements, constraints, validation, and change management. A well-written acceptance criterion is still an assumption until the right people validate the intended behavior. A domain model does not automatically become a database schema, and a passing build does not establish that a requirement works.

For a first pass, choose one user goal, identify its important rule, explore a normal and a challenging scenario, name the concepts involved, and write an observable outcome. Keep unanswered questions visible rather than filling them with guesses.

## Study and transfer

Choose one feature of an appointment-booking product. Produce one short artifact for each of the five perspectives. Success means the artifacts describe the same user goal consistently, include one boundary or failure case, and distinguish a business rule from an implementation choice. Leave the exercise unanswered until selected for practice.

The learner requested this reference to preserve the definitions used in the tutoring discussion. Saving or reading it is not evidence of independent application or retention.

## Detailed guides

- [User journey mapping](02-user-journey-mapping.md)
- [Business rules and decision modeling](03-business-rules-and-decisions.md)
- [Scenarios and boundaries](04-scenarios-and-boundaries.md)
- [Domain modeling](05-domain-modeling.md)
- [Acceptance criteria and BDD](06-acceptance-criteria-and-bdd.md)

For the surrounding process and primary references, see [discovery and requirements analysis](01-discovery-and-requirements.md). The demo's decisions remain separate in its [requirements study step](../../learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md).
