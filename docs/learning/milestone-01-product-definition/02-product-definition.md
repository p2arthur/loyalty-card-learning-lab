# 02. Product definition

Milestone: **1. Product definition**

Status: **in progress; first logical context sketch recorded, dependency-failure review next**

This workbook starts the next activity after the [initial requirements discovery pass](01-requirements-elicitation-and-analysis.md). It turns the discussed behavior into an explicit product boundary and, through later focused steps, a brief that someone else can implement without inventing the rules.

## First objective: system context

Draw a simple sketch showing the customer, the system being built, and the outside systems it communicates with. Mark anything simulated.

Success criterion: another person can identify what the project owns, what lies outside it, and which interactions are mocked. Keep this first view at the level of people and systems; detailed modules, routes, tables, and deployment topology come later.

The [C4 system context guide](https://c4model.com/diagrams/system-context) is the reference for this exercise. Its focus is the system's relationship with people and other systems.

For reusable background, read [system boundaries, ownership, and trust](../../concepts/product-engineering/08-boundaries-ownership-and-trust.md). Later quality work connects to [quality requirements and decision records](../../concepts/product-engineering/10-quality-and-decision-records.md). These references leave the learner's demo sketch open.

## Learner artifact

The learner supplied a detailed [registration and points-use interaction flow](artifacts/02-customer-interaction-flow.md). It shows customer/application exchanges, required and optional fields, card scanning, discount preview, payment confirmation by the customer, and receipt/balance feedback. The learner subsequently supplied a [logical system context sketch](artifacts/02-system-context-sketch.md), consolidated from their own arrows.

The review distinguished an interaction flow from a context view. The newer sketch includes the customer, application, simulated payment/email roles, and the payment provider's confirmation or denial tied to an order ID. Dependency failure behavior is the next review; no implementation guarantee is inferred from the sketch.

Initial discussion identified payment confirmation and order creation/status as responsibilities. The learner chose to create basic order handling within the demo itself, rather than depend on an existing café ordering system. Order handling therefore belongs inside the demo's system boundary for this view.

The learner asked whether production would require a separate ordering service. The related concept guide now distinguishes internal modules, independent deployment, and external systems. Production topology is not decided by this question. Understanding of that distinction still needs a transfer example.

The learner also identified email delivery as an external-provider role and chose to simulate it in this demo. Payment confirmation is simulated too. No real payment or email-provider connection has been chosen or implemented.

For the first sketch, label payment confirmation and email delivery as simulated interactions. State that it is a logical study view, not evidence of actual external calls or separately deployed mock services. The placement of mock implementation details belongs to later design work. The learner has now drafted the customer/application and simulated-provider relationships. The sketch is a logical view; provider contracts and mock implementation details remain later work.

Do not fill this section with a completed tutor-designed architecture before the learner's first attempt.

## Inputs already available

Use the current decisions in [step 01](01-requirements-elicitation-and-analysis.md), especially the demo scope, registration/reissuance behavior, and checkout rules. The project has a customer-controlled checkout, simulated payments, and mock products. Apple Wallet issuance remains a later milestone.

The proposed starting stack is recorded in the [MVP plan](../../../MVP_PLAN.md). A context diagram describes people and systems; the stack does not by itself settle the system boundary.

## Questions to resolve through the sketch

These are a backlog for the tutor, not a questionnaire to ask all at once:

- Which people interact directly with this demo?
- Where does the loyalty application end and the shopping/payment simulation begin?
- Which outside systems does it communicate with?
- Which interactions are simulated now, and which require real external access later?
- Which boundary or responsibility could become unclear if the demo later connects to a real checkout?

## Later product-definition artifacts

After the context exercise, create separate numbered step documents as the learner begins screen sketches, the consolidated brief, and acceptance/quality scenarios. Link those files from the study index and this workbook when they exist.

The milestone's remaining deliverables are:

- [x] Learner-drawn context sketch and reviewed system boundary (logical study view; implementation unverified).
- [ ] Main screen sketches, including error and success states.
- [ ] Consolidated one-page product brief.
- [ ] Acceptance criteria for each main user action.
- [ ] Measurable correctness, access-control, and changeability scenarios.
- [ ] An explained architecture alternative and evidence supporting the chosen boundary.

Some requirement decisions are already made in step 01. These unchecked items track the artifacts and remaining work, not a restart of the discovery conversation.

## Resume with one question

**If payment succeeds but the confirmation email cannot be delivered, should the order still be confirmed?**

Wait for the learner's answer before supplying a diagram or introducing another question.
