# Learner draft: customer interaction flow

Milestone 1, step 02. This records the learner's proposed registration and points-use flows from the tutoring conversation. Formatting is normalized for reading; unresolved details remain visible. It is a behavioral draft, not verified implementation or a completed context diagram.

## Registration

1. Customer → Loyalty app: buys a coffee.
2. Loyalty app → Customer: asks whether to use or register for the loyalty card for discounts on a later purchase.
3. Customer → Loyalty app: chooses registration and enters required first and second name, required email, and optional phone number.
4. Loyalty app → Customer: generates a card QR code and asks the customer to add the card to a digital wallet. The learner called this "like Apple Pay"; see the terminology note below.
5. Loyalty app → Customer: shows points earned for later purchases.

## Using points

1. Customer → Loyalty app: buys a coffee.
2. Loyalty app → Customer: asks whether to use or register for the loyalty card.
3. Customer → Loyalty app: chooses whether to use points.
4. Loyalty app → Customer: asks the customer to scan the loyalty card.
5. Customer → Loyalty app: scans the card.
6. Loyalty app → Customer: displays the price, current points balance, and a selector for the desired points amount.
7. Customer → Loyalty app: selects the amount of points to use.
8. Loyalty app → Customer: previews the original total, discount in points and money, remaining price, and points to be earned on this purchase.
9. Customer → Loyalty app: confirms payment.
10. Loyalty app → Customer: displays a receipt modal, earned points, and current balance.

The draft does not yet show the no-points branch or the message exchanges with simulated payment/email roles. The point at which payment is known to have succeeded is also not explicit. Do not infer that merely pressing a confirmation control authorizes awarding points.

## Review

The learner captured required versus optional registration data, enrollment choice, card identification, a partial-discount preview, and post-purchase feedback. These are useful inputs for the product brief and later screen/flow design.

The artifact is a **customer interaction flow**, written as a sequence of messages between customer and application. A system context view has a different scope: it identifies the system, connected people and other systems, and their relationships without enumerating every interface prompt. The detailed flow can help discover those relationships.

Apple Wallet is the place for the eligible loyalty pass; Apple Pay is used for payments. See [Apple's Wallet overview](https://support.apple.com/guide/iphone/about-apple-wallet-iphc05dba539/ios). A QR code alone is not the whole Wallet integration. QR-based card identification is a learner proposal; identifier security and the signed-pass implementation remain later work. Wallet issuance is still a later curriculum milestone.

## Next small revision

Add only the exchange between the loyalty app and the simulated payment provider during checkout, with arrows describing what they send and return. Review that before adding the simulated email flow or simplifying into the context view.

Return to the [step 02 workbook](../02-product-definition.md). For general background, see [journeys and related views](../../../concepts/product-engineering/02-user-journey-mapping.md).
