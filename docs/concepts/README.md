# Product engineering concept library

These guides explain ideas that apply across products: booking systems, subscriptions, libraries, internal tools, and other services. Read them independently of the loyalty demo. The [project learning notes](../learning/README.md) preserve what we decided for that application.

The library is study material, not evidence of mastery. Live tutoring still uses one question at a time. Choose one guide and its transfer exercise when studying a topic; the exercises are a backlog, not a single assignment.

Start with the [five-technique requirements toolkit](product-engineering/00-requirements-analysis-toolkit.md) for the compact definitions and a connected non-demo example. Then use the detailed guides below.

## Reading path

| Guide | What you should be able to do after practice |
| --- | --- |
| [01. Product discovery and requirements analysis](product-engineering/01-discovery-and-requirements.md) | Separate a user need, a proposed solution, an assumption, and a verified requirement |
| [02. User journey mapping](product-engineering/02-user-journey-mapping.md) | Map an experience across time and channels, including difficulties and recovery |
| [03. Business rules and decision modeling](product-engineering/03-business-rules-and-decisions.md) | Express policies precisely and resolve overlapping conditions |
| [04. Scenario and boundary analysis](product-engineering/04-scenarios-and-boundaries.md) | Choose examples that expose missing rules and fragile transitions |
| [05. Domain modeling](product-engineering/05-domain-modeling.md) | Identify meaningful concepts, identities, relationships, and invariants |
| [06. Acceptance criteria and BDD](product-engineering/06-acceptance-criteria-and-bdd.md) | Describe observable outcomes and connect examples to later verification |
| [07. Scope, assumptions, and prioritization](product-engineering/07-scope-and-prioritization.md) | Choose a useful first slice and state what uncertainty it resolves |
| [08. System boundaries, ownership, and trust](product-engineering/08-boundaries-ownership-and-trust.md) | Assign responsibilities, distinguish repository/package/process boundaries, and explain where decisions must be enforced |
| [09. State, failures, and safe retries](product-engineering/09-state-failures-and-retries.md) | Distinguish failure from an unknown outcome and reason about repeated requests |
| [10. Quality requirements and decision records](product-engineering/10-quality-and-decision-records.md) | Turn quality goals into measurable scenarios and explain design tradeoffs |

Each guide includes a general explanation, a worked example outside the café domain, common mistakes, an exercise, and primary references. The examples and product policies are illustrative, not universal business rules.

## Software engineering foundations

| Guide | What you should be able to do after practice |
| --- | --- |
| [Builds, type checks, linting, and behavior tests](software-engineering/01-builds-types-lint-and-tests.md) | Explain what each successful check establishes and choose evidence for a business rule |

## Study method

The [personal study backlog](../learning/STUDY_GAPS.md) records which distinctions needed coaching and which skills remain unassessed. Use it to choose one of these general references for review; its statuses come from learner evidence, not from the existence of a guide.

Read for one question you want to answer. Explain the idea in your own words, make an artifact for a different product, and ask the tutor to review it. Revisit the artifact with a changed condition. Record the explanation and evidence in the learning log only after that interaction occurs.

Distinguish three kinds of progress: a reference exists; you can explain it; you can apply it in a new situation. Only the first is established merely by adding these guides.

## Habit for every milestone and step

At each meaningful learning checkpoint, keep two connected artifacts:

- A project step document under `docs/learning/` with the demo decisions and learner evidence.
- Relevant reusable guides under `docs/concepts/`, linked from that step, with principles and examples that work beyond the demo.

Extend an existing guide when it already covers the concept. Create a new focused guide when the subject is distinct. Link back to where a concept arose without copying the demo's rules into the general explanation. Follow the [concept template](TEMPLATE.md) and [learning framework](../../LEARNING_FRAMEWORK.md).

The first library was prompted by milestone 1's [requirements discovery discussion](../learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md). New guides about adjacent topics provide preparation; they do not imply those topics have already been assessed.
