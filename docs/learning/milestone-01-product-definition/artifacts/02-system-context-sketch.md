# Learner draft: logical system context

Milestone 1, step 02. Consolidated from the learner's own arrows, with provider labels normalized to the agreed simulated scope. This is a logical study sketch; it does not describe deployed services or real external calls.

```text
Coffee shop customer -> Loyalty app:
  Buys coffee, registers, and earns loyalty points.

Loyalty app -> Payment provider (simulated):
  Sends order details and requests payment confirmation.

Payment provider (simulated) -> Loyalty app:
  Returns payment confirmation or denial for the order ID.

Loyalty app -> Email service (simulated):
  Requests a confirmation email for the customer.

Email service (simulated) -> Coffee shop customer:
  Simulates delivery of the confirmation email.
```

## Boundary and scope

Basic order creation and tracking belong inside the loyalty application, as chosen by the learner. The customer is the human actor. Payment confirmation and email delivery are simulated provider roles; their mock implementation does not require separate deployments. AWS SES was mentioned as an illustrative future email provider, not selected as a real demo integration.

The sketch summarizes relationships rather than a complete checkout sequence. It does not specify APIs, provider contracts, data models, or deployment topology. Wallet issuance remains later curriculum work.

## Evidence and remaining review

The learner moved from a detailed customer/application flow to system-level relationships, added the email interaction, and explicitly added the payment outcome tied to an order ID after feedback. This supports completing the basic context-sketch artifact. It does not establish mastery of production topology or implementation guarantees.

Next review: if payment succeeds but confirmation-email delivery fails, decide whether the order should still be confirmed. Record the learner's reasoning before adding a quality scenario or implementation.

Return to the [product-definition workbook](../02-product-definition.md). Related general guides: [boundaries and ownership](../../../concepts/product-engineering/08-boundaries-ownership-and-trust.md) and [failures and retries](../../../concepts/product-engineering/09-state-failures-and-retries.md).
