# 03. Screen inventory and sketches

Milestone: **1. Product definition**

Status: **in progress: retention warm-up complete; initial mobile pass reviewed; mock product selection chosen as first sales-point view**

The [current context](artifacts/02-current-system-context.md) separates the mobile loyalty experience from a public simulated sales-point screen. This step translates the chosen journey into the minimum useful interface structure.

## Retention warm-up: 2026-11-17

The requested short warm-up is complete. Learner independently applied business rule versus acceptance criterion to an appointment-booking example. Tooling recall mixed target/lib/module; an explicit correction enabled a correct target-versus-module application. Later cold retrieval remains needed, as recorded in the learning log and study-gap backlog. This does not become a prerequisite for the screen inventory; product design resumes below.

## Current small objective

List the essential screens or views for the separate cashier/kiosk sales-point interface, with one clear purpose each. Keep the already-established boundary with the customer's mobile loyalty app. Let the learner supply the inventory before proposing layouts.

Success criterion: another person can explain what each proposed sales-point view lets its user accomplish. Screen count and exact presentation remain design choices. The initial mobile inventory has had a first review; detailed states, sketches, and remaining criteria are still open.

## Learner artifact

Current learner inventory, revised on 2026-11-17:

| Candidate screen | Learner-stated purpose or content |
| --- | --- |
| Onboarding | Explain how to earn points, redeem them, and understand the program's advantages |
| Registration | Complete registration through form entry, pending email verification, and in-screen success states |
| Loyalty home / card | Show the card, current balance, and points transaction history, with an option to add the card to Apple Wallet |

The initial proposal had a separate verification-confirmation screen. The learner later chose confirmation as a registration success state followed by automatic navigation to the loyalty home; the current inventory therefore has three views. These are learner-proposed views, not a fixed screen-count requirement. The proposal respects the customer-mobile versus sales-point boundary. The first mobile pass now includes pending-registration recovery and a place for the planned transaction history. Detailed state/transition criteria, sketches, and a final coverage walkthrough remain open. The wallet action is a product intention; real Wallet integration remains later implementation work.

Registration now has a learner-chosen pending-verification state. After submitting the form, the customer sees a message directing them to open their email and follow the verification link. The learner chose to keep this within the registration screen rather than add another screen. The learner then refined this into pending verification with an indicator, followed by success once verification is confirmed. The success state automatically transitions to the existing loyalty home showing the card. This is interpreted as the customer-mobile flow because that is where the card/home lives in the established boundary; it does not add mobile registration to the sales-point interface. The exact indicator, success-display duration, and mechanism for detecting verification are not specified or implemented. The presentation choices are recorded, but their rationale and usability have not been tested.

Learner-defined recovery behavior in the pending-verification state:

- Show a 60-second countdown, then make resending the verification email available. This is a resend cooldown, separate from the existing link-lifetime policy.
- Provide a Return action that takes the customer back to the registration form to correct the email. The learner referred to this as the confirmation state; within this discussion it means the pending check-email state, not successful verification.
- Preserve the previously entered email and select its text on return so the customer can see what was entered and replace it easily, including clearing the selection with one Backspace. This is the intended interaction; mobile focus/selection behavior has not been implemented or tested.

Earlier registration decisions still apply when an email is changed: generate a link for the corrected address; an old-address link cannot verify the updated address. The 60-second resend cooldown does not introduce verification-link expiry. Its exact start/reset behavior on resend or address correction remains for the later acceptance-criteria pass. Other form-field retention has not been specified by this answer.

The learner placed points transaction history on the home screen alongside the card and current balance. This is recorded as the existing card view becoming the loyalty home, not an automatically added fifth screen. Its coherent purpose is an account/card overview; related information does not each require its own screen. The initial mobile inventory pass is complete enough to move to the sales-point inventory. Final navigation and detailed interaction design remain open.

## Sales-point definition requested on 2026-11-18

The learner asked the tutor to define the kiosk/cashier interface. This reference explains the already-recorded boundary and checkout responsibilities; it is tutor-provided support, not a learner-authored screen inventory or an implemented interface.

The sales-point interface is the demo's point-of-sale checkout view: the place where a mock café purchase is assembled and completed. A cashier can operate it for a customer, or a customer can operate it as self-service. Any demo participant may play that operator role, consistent with the existing public simulated-checkout decision.

The customer-mobile interface handles enrollment, email verification, card display, balance/history, and the wallet action. The sales point handles purchase and checkout. If a new customer wants to join from checkout, the sales point presents the enrollment QR/handoff; the registration form remains on the phone.

| Workflow responsibility | Intended capability from existing decisions |
| --- | --- |
| Establish a mock order | Show the order's items and price; choosing products versus starting with a prefilled coffee is still open |
| Identify loyalty participation | Scan/mock-identify an existing card, offer the mobile enrollment handoff, or continue without a linked card |
| Choose points use | For a linked account, show balance, request a points amount or zero, and display the resulting price and earning preview |
| Complete checkout | Simulate payment approval/denial and request the corresponding order outcome |
| Show the result | Show receipt/order ID and the confirmed loyalty outcome after successful checkout, or actionable failure feedback |

These are workflow responsibilities, not a claim that five separate screens are required. The backend remains authoritative for discount caps, balance validation, earning, order outcomes, and account changes. Linking a card while choosing zero redemption still permits earning after successful payment. No new backend service, hardware integration, or UI code is implied.

## Sales-point learner artifact

The learner chose mock product selection over starting with a prefilled coffee order on 2026-11-18.

| Candidate sales-point view | Purpose | Evidence/status |
| --- | --- | --- |
| Mock product selection | Build a café order by choosing mock products | Learner chose this starting view after the tutor's role/workflow explanation |

The starting-point choice is settled; the learner has not yet given a rationale or designed the catalog's fields, quantity/cart interactions, layout, or subsequent screen/state structure. Do not treat the tutor reference table as the learner's complete inventory.

Next small objective: define the loyalty choices offered when the selected order proceeds toward checkout, before payment. Keep existing enrollment, card-linking, and optional-redemption rules available as references rather than silently changing them.

## Return after scaffolding practice

At the end of the 2026-11-16 session, the learner chose to resume product design here before implementing features in the scaffold. The learner has now supplied the first inventory above. Review the next unresolved transition and coverage rather than replacing the proposal with a tutor-generated screen list; do not restart completed discovery or context work. The [five-technique toolkit](../../concepts/product-engineering/00-requirements-analysis-toolkit.md) is available for focused review, not an extra prerequisite assignment.

## General study references

Use [journeys and related views](../../concepts/product-engineering/02-user-journey-mapping.md) for moving from a flow to screen responsibilities, [acceptance criteria](../../concepts/product-engineering/06-acceptance-criteria-and-bdd.md) for observable behavior, and [scope](../../concepts/product-engineering/07-scope-and-prioritization.md) to keep the first version coherent.

These are existing reusable concept guides. Extend them or create a focused guide when a distinct new topic arises; reference availability is not evidence of mastery.

## Later work in this step

- [x] Initial learner mobile screen inventory and review; detailed states/criteria carried forward.
- [ ] Learner sales-point screen inventory and review.
- [ ] Low-detail sketches with primary actions and navigation.
- [ ] Important loading, empty, error, and success behavior.
- [ ] One walkthrough of the chosen customer journey.

No loyalty-product screen has been implemented or tested; the generated React starter does not complete this exercise. The remaining brief, acceptance criteria, and quality scenarios still belong to milestone 1.

## Resume with one question

**Once the customer has selected products and proceeds to checkout, which loyalty choices should the sales-point interface offer before payment?**
