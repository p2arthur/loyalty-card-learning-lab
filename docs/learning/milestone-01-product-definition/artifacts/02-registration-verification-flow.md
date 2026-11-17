# Learner draft: registration email verification

Channel revision, 2026-11-16: kiosk-hosted registration and kiosk registration-success feedback in this draft are historical. Use the [current mobile-web flow](02-mobile-web-flow.md) for the accepted interface split. Other rules remain current unless explicitly superseded.

Milestone 1, step 02. The learner added verification before initial card issuance and revised the message flow after distinguishing email delivery from customer confirmation. Email delivery remains simulated in this demo.

## Learner-proposed interactions

1. App → Email service: requests a verification email containing an app-generated verification link.
2. Email service → Customer: sends the message containing the link (simulated).
3. Email service → App: reports delivery status. The learner called this confirmation that the email was received; see the clarification below.
4. Customer → App: follows the verification link to complete the confirmation flow.

The existing product decision requires successful verification before issuing a loyalty card. The application must decide whether a verification request is valid; a customer action or a provider's delivery report alone is not a complete validation design.

## Delivery is different from verification

The exact delivery event depends on the provider. For example, an [SES delivery event](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html) means the recipient's mail server accepted the message. It does not establish that the customer completed the app's verification flow.

The learner's revision correctly sends the link interaction back to the app, which owns the account-verification decision. The link mechanism, reuse, and validation checks remain later design work; the latest demo lifetime decision is recorded below. [OWASP's verification guidance](https://cheatsheetseries.owasp.org/cheatsheets/Email_Validation_and_Verification_Cheat_Sheet.html) is a primary reference for that work.

## Open product behavior

The learner chose to let a customer correct the email while registration is pending. Changing the address generates a new verification link; the previous address's link cannot verify the updated registration. On 2026-11-16, the learner removed the five-minute expiry: elapsed time alone does not invalidate an unused link for the current pending registration in this simulated demo. Address-change invalidation still applies. If verification is not completed, offer another verification email. Behavior after first use is a separate unresolved decision.

This settles the recovery direction, not every mechanism. Behavior of older links after a resend to the same address, resend limits, retry stopping rules, and scheduling remain unresolved. Verification does not itself solve delivery failure.

The learner also proposed checking the address with a provider before generating a link. Format/deliverability checks must be distinguished from verification of access. No real preflight-validation API or guarantee has been selected; provider acceptance does not replace the customer's link flow.

First-purchase points while registration is pending also remain undecided. The demo simulates verification and does not prove access to a real inbox.

## Revised learner acceptance scenario

Given a customer is registering with the current email address and a valid verification link, when they follow that link after six minutes, then successful verification opens the website on their phone, congratulates them, and displays the newly issued card QR code and an Add to Wallet button. The learner also proposed a kiosk success modal with the customer's balance.

This reflects the learner's revised no-clock-expiry demo rule. The earlier five-minute rule is superseded. The phone success flow is clear; the kiosk behavior needs review when verification happens after the kiosk session has ended or another customer has started using it. Wallet issuance is still a later implementation milestone.

## Security tradeoff and next review

The no-clock-expiry choice is a learner-selected demo policy, not production security guidance. OWASP recommends time-limited, single-use verification tokens. Removing an inconvenient five-minute window and removing expiry entirely are separate choices; token security and pending-account retention still require review before any real deployment.

Next question: if verification happens the next day while another customer uses the kiosk, what should happen on the kiosk?

Return to the [step 02 workbook](../02-product-definition.md). General background: [ownership and trust](../../../concepts/product-engineering/08-boundaries-ownership-and-trust.md).
