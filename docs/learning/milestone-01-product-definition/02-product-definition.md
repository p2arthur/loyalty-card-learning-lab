# 02. Product definition

Milestone: **1. Product definition**

Status: **in progress; revised interface split and earn-only flow recorded; current context sketch is next**

This workbook starts the next activity after the [initial requirements discovery pass](01-requirements-elicitation-and-analysis.md). It turns the discussed behavior into an explicit product boundary and, through later focused steps, a brief that someone else can implement without inventing the rules.

## Current scope revision

The learner replaced kiosk-hosted registration with a [mobile web loyalty flow](artifacts/02-mobile-web-flow.md). Registration, verification, and card display happen on the customer's phone. A separate cashier/kiosk sales-point screen scans the card, hosts the points selector, and handles simulated checkout. The learner confirmed both screen choices directly.

The learner also defined the earn-only path: scan the card, skip redemption, preserve account association, and award points after successful checkout. The new manual handoff supersedes the pending question about automatically showing a delayed registration-success modal on a shared kiosk. Earlier artifacts below preserve the learning history. Their higher-level payment/email roles remain useful, but the current journey and operator responsibilities require review under the new scope.

## First objective: system context

Draw a simple sketch showing the customer, the system being built, and the outside systems it communicates with. Mark anything simulated.

Success criterion: another person can identify what the project owns, what lies outside it, and which interactions are mocked. Keep this first view at the level of people and systems; detailed modules, routes, tables, and deployment topology come later.

The [C4 system context guide](https://c4model.com/diagrams/system-context) is the reference for this exercise. Its focus is the system's relationship with people and other systems.

For reusable background, read [system boundaries, ownership, and trust](../../concepts/product-engineering/08-boundaries-ownership-and-trust.md). Later quality work connects to [quality requirements and decision records](../../concepts/product-engineering/10-quality-and-decision-records.md). These references leave the learner's demo sketch open.

## Learner artifact

The learner supplied a detailed [registration and points-use interaction flow](artifacts/02-customer-interaction-flow.md). It shows customer/application exchanges, required and optional fields, card scanning, discount preview, payment confirmation by the customer, and receipt/balance feedback. The learner subsequently supplied a [logical system context sketch](artifacts/02-system-context-sketch.md), consolidated from their own arrows.

The review distinguished an interaction flow from a context view. The newer sketch includes the customer, application, simulated payment/email roles, and the payment provider's confirmation or denial tied to an order ID. The learner then chose to preserve order confirmation when email delivery fails; no implementation guarantee is inferred from the sketch.

Initial discussion identified payment confirmation and order creation/status as responsibilities. The learner chose to create basic order handling within the demo itself, rather than depend on an existing café ordering system. Order handling therefore belongs inside the demo's system boundary for this view.

The learner asked whether production would require a separate ordering service. The related concept guide now distinguishes internal modules, independent deployment, and external systems. Production topology is not decided by this question. Understanding of that distinction still needs a transfer example.

The learner also identified email delivery as an external-provider role and chose to simulate it in this demo. Payment confirmation is simulated too. No real payment or email-provider connection has been chosen or implemented.

For the first sketch, label payment confirmation and email delivery as simulated interactions. State that it is a logical study view, not evidence of actual external calls or separately deployed mock services. The placement of mock implementation details belongs to later design work. The learner has now drafted the customer/application and simulated-provider relationships. The sketch is a logical view; provider contracts and mock implementation details remain later work.

Do not fill this section with a completed tutor-designed architecture before the learner's first attempt.

## Inputs already available

Use the current decisions in [step 01](01-requirements-elicitation-and-analysis.md), especially the demo scope, registration/reissuance behavior, and checkout rules. The project has a customer-controlled checkout, simulated payments, and mock products. Apple Wallet issuance remains a later milestone.

The proposed starting stack is recorded in the [MVP plan](../../../MVP_PLAN.md). A context diagram describes people and systems; the stack does not by itself settle the system boundary.

## Questions to resolve through the sketch

### Email failure decision

The learner subsequently added a [registration verification flow](artifacts/02-registration-verification-flow.md): the app generates the link, the simulated email service delivers it, and the customer follows the link back to the app. Initial card issuance now requires verification, as well as reissuance. The app owns the verification decision. A provider delivery report does not establish completed verification.

Registration verification and the order-confirmation email below have different purposes. A successful paid order can remain confirmed while its notification fails; a loyalty-card registration can still await its required verification. The customer may correct a pending registration's address, which requires a new verification link. The old address's link cannot verify the updated registration. The learner removed clock-based expiry for the simulated demo on 2026-11-16, superseding the earlier five-minute policy; an unverified customer can request another email. No-clock expiry is a demo choice with a production-security review gap, not a recommendation to deploy permanent verification tokens. The timing of first-purchase points and detailed retry/resend policy remain open.

The learner chose to confirm a successful checkout even when its confirmation email cannot be delivered. Show the receipt and order ID in the application so the customer can proceed independently of email delivery. Email processing can continue in the background.

The learner proposed three background retries, then scheduling additional retries. This is a proposal requiring a stopping rule and retry timing; it is not a finalized unlimited-retry policy. Handling permanent failures, attempt limits, scheduling, and durable work remains open. This scenario assumes a successfully completed checkout; payment-provider success alone does not establish that local order creation committed.

General background is already covered in [state, failures, and safe retries](../../concepts/product-engineering/09-state-failures-and-retries.md). The next question tests when retrying remains useful before selecting implementation mechanisms.

### Remaining context questions

These are a backlog for the tutor, not a questionnaire to ask all at once:

- Which people interact directly with this demo?
- Where does the loyalty application end and the shopping/payment simulation begin?
- Which outside systems does it communicate with?
- Which interactions are simulated now, and which require real external access later?
- Which boundary or responsibility could become unclear if the demo later connects to a real checkout?

## Later product-definition artifacts

After the context exercise, create separate numbered step documents as the learner begins screen sketches, the consolidated brief, and acceptance/quality scenarios. Link those files from the study index and this workbook when they exist.

The milestone's remaining deliverables are:

- [ ] Update and review the context sketch for the current mobile/sales-point flow (earlier learner view retained as evidence).
- [ ] Main screen sketches, including error and success states.
- [ ] Consolidated one-page product brief.
- [ ] Acceptance criteria for each main user action.
- [ ] Measurable correctness, access-control, and changeability scenarios.
- [ ] An explained architecture alternative and evidence supporting the chosen boundary.

Some requirement decisions are already made in step 01. These unchecked items track the artifacts and remaining work, not a restart of the discovery conversation.

## Resume with one question

**Can you update the system context sketch for the revised mobile loyalty and sales-point flow, including the people who interact with each part?**

Wait for the learner's answer before supplying a diagram or introducing another question.
