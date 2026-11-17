# Current draft: mobile loyalty app and sales-point checkout

Milestone 1, step 02. Revised by the learner on 2026-11-16 to reduce the complexity of kiosk-based registration. The customer-facing loyalty app is a mobile web app for the experiment. A separate cashier/kiosk screen handles the sales-point checkout.

## Confirmed interface responsibilities

| Customer's phone | Cashier/kiosk sales-point screen |
| --- | --- |
| Open the loyalty website and registration form | Offer loyalty participation before checkout |
| Complete registration and the simulated email-verification flow | Show the loyalty modal and enrollment QR for a new customer |
| Display the issued loyalty-card QR | Scan the customer's card QR |
| Hold the customer's continuing loyalty view | Show the points selector and checkout/discount information |

The learner explicitly chose a separate cashier/sales-point screen and placed the points selector on that screen. These are interface responsibilities, not a decision to create separately deployed backend services. Basic order handling remains part of the demo unless a later decision changes it.

## Learner-proposed journey

1. Before checkout, ask whether the customer wants to use loyalty.
2. If they already have a card, the sales-point screen offers scanning of the card shown on their phone.
3. For a new customer, the sales-point screen displays an enrollment QR and instructions. In this demo the QR opens the website registration form; no native-app download is required.
4. The customer completes registration on their phone. Previously agreed verification rules still apply before card issuance; email delivery is simulated.
5. Once the card is available, the customer returns to the sales-point interaction, closes the enrollment modal, and presents the new card QR to be scanned.
6. The sales-point screen handles points selection and simulated checkout under the existing points/discount rules.

There are two QR purposes: the enrollment QR opens registration, while the card QR identifies a loyalty account. Their payloads, authorization, and scanning implementation remain future design work.

## Earn points without redeeming

The learner supplied this acceptance behavior independently: a registered customer scans their card, sees the balance and redemption choice, then confirms a discount or skips it. Skipping means no points are spent on this purchase; the account remains associated with the checkout and earns points afterward.

Consolidated criterion: given a registered customer buying coffee who does not want to spend points, when their card is scanned and they skip the loyalty discount, then redeem zero points, keep the purchase linked to that account, and credit points on the full eligible amount after successful checkout. The successful-checkout condition carries forward the existing rule; a failed checkout earns no points.

This separates card identification from the optional redemption action. The balance belongs to the account referenced by the card, not to the QR code itself. Exact screen copy and staff permissions remain to be designed.

## Scope and open decisions

The shared kiosk no longer hosts registration or needs an automatic registration-success update after a delayed email click. The new flow uses an explicit return and card presentation. Earlier kiosk-centric artifacts are historical inputs, not the current journey.

Mock products, simulated payment/email behavior, and the mathematical points rules are unchanged. The earlier removal of clock-based verification expiry remains the demo decision, with its production-security review gap. The proposed statement that onboarding takes five minutes is an untested estimate, not a measured result or a restored link-expiry rule.

Anyone may use the simulated checkout without staff login. The backend owns points calculations and final account updates. Still open: broader customer-account access rules, purchase association while registration is pending, mock versus actual camera scanning, and the revised full context view. These are backlog items; discuss one at a time.

The [revised context](02-current-system-context.md) is recorded. Next learner artifact: the mobile screen inventory in [step 03](../03-screen-inventory-and-sketches.md).

Return to [step 02](../02-product-definition.md). General background: [scope and coordination](../../../concepts/product-engineering/07-scope-and-prioritization.md).
