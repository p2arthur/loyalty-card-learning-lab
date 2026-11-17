# Current logical context: mobile loyalty and public demo checkout

Consolidated from the learner's revised arrows and subsequent clarifications on 2026-11-16. It records a study model, not implemented services.

## People and interfaces

The customer uses the mobile website for registration, verification, and card display. The checkout operator scans the card and requests a purchase or redemption through the cashier/kiosk screen. Any demo participant may play that operator role; there is no separate cashier/staff login for this simulated checkout. The same person can demonstrate both roles.

The mobile and sales-point views are interfaces of the demo. The loyalty backend owns the points calculations and account updates. A screen submits purchase details and requested points usage rather than selecting an authoritative final balance. Customer-account access beyond the public checkout screen remains a later permissions decision.

## Relationships supplied by the learner

```text
Customer -> Loyalty application:
  Registers, verifies an email, presents a card, and accesses loyalty points.

Demo checkout operator -> Loyalty application:
  Scans the customer's card, submits purchase details and requested points usage.

Customer <-> Checkout operator:
  Chooses whether to redeem points; choosing zero still permits earning.

Loyalty application -> Payment provider (simulated):
  Sends order details and requests payment processing.

Payment provider (simulated) -> Loyalty application:
  Returns payment confirmation or denial for the order ID.

Loyalty application -> Email service (simulated):
  Requests verification or order-notification messages.

Email service (simulated) -> Customer:
  Simulates delivery of the message.

Customer -> Loyalty application:
  Follows the app-generated verification link.
```

Basic order handling remains inside the demo. Email delivery and payment are simulated roles; their placement here does not imply real provider calls or separate deployments. The backend applies the chosen earning, discount-cap, balance-validation, and successful-checkout rules.

## Review and limits

The learner independently redrew the customer/checkout relationships, identified the backend as the authority for calculations, and chose public access to the simulated checkout. Earlier learner-defined payment and email relationships are carried forward. The tutor normalized labels and consolidated the supplied material.

This completes the current context artifact. It does not complete deployment design, API authorization, implementation checks, or all milestone 1 quality scenarios. Continue with [screen inventory](../03-screen-inventory-and-sketches.md).
