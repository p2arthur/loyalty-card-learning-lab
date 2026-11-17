# 01. Requirements elicitation and analysis

Milestone: **1. Product definition**

Status: **initial discovery pass complete**

Evidence: learner explanations, a customer journey, boundary scenarios, and an independently written acceptance criterion. No application code or executable tests have been completed.

The purpose of this step was to turn a loyalty-card idea into rules another person could understand and later implement. Completion closes this first discussion; it does not freeze the requirements or finish milestone 1. Unresolved questions are listed below and carried into [step 02](02-product-definition.md).

## What the process is called

For broader explanations that stand alone from this demo, use the [product engineering concept library](../../concepts/README.md):

| Technique in this step | General study guide |
| --- | --- |
| Requirements elicitation and analysis | [Discovery and requirements](../../concepts/product-engineering/01-discovery-and-requirements.md) |
| User journey mapping | [Journeys across time and channels](../../concepts/product-engineering/02-user-journey-mapping.md) |
| Business-rule analysis | [Policies, invariants, and decision tables](../../concepts/product-engineering/03-business-rules-and-decisions.md) |
| Scenario and boundary analysis | [Examples that expose gaps](../../concepts/product-engineering/04-scenarios-and-boundaries.md) |
| Domain modeling | [Concepts, identity, and behavior](../../concepts/product-engineering/05-domain-modeling.md) |
| Acceptance criteria | [Observable outcomes and BDD](../../concepts/product-engineering/06-acceptance-criteria-and-bdd.md) |

The library also covers scope, boundaries, failures, and quality requirements. Its additional examples and exercises are study references; they do not imply that broader understanding has already been assessed.

**Requirements elicitation** means drawing out what people need and expect from the system. **Requirements analysis** means checking those expectations for ambiguity, consistency, scope, and consequences. Asking what happens on a failed payment is requirements analysis; choosing a database transaction mechanism to enforce it comes later.

Our teaching method was Socratic questioning. We began with the customer benefit, asked for concrete behavior, changed the examples to expose assumptions, compared alternative policies, and let the learner revise the design. The learner then explained the rules through an acceptance criterion.

### Techniques we actually used

| Technique | Example from this project |
| --- | --- |
| User journey mapping | Walk through registration, card scanning, choosing a discount, and checkout |
| Business-rule analysis | Set earning and redemption values, rounding, discount limits, and validation order |
| Scenario and boundary analysis | Try 449 points against a 450-point cost; apply more points than the purchase price; lose a successful response |
| Domain modeling | Distinguish a loyalty account, its card, its balance, and an order |
| Acceptance criteria | Describe observable behavior using Given/When/Then |

These activities use parts of **Behavior-Driven Development (BDD)**. BDD includes discovery, formulation, and automation. We have discussed examples and formulated behavior; automation has not started. Using Given/When/Then alone does not establish a complete BDD workflow. See [Cucumber's BDD explanation](https://cucumber.io/docs/bdd/).

## Customer benefit and demo scope

The customer buys café products, accumulates loyalty points, and uses those points to reduce a later purchase price.

The MVP is a customer-controlled demo with mock products, simulated payment success, and simulated fulfillment. A mock payment action may be labeled as an Apple Pay choice; real Apple Pay processing has not been requested or implemented. On 2026-11-16, the learner moved registration and card presentation to a mobile web app and retained a separate cashier/kiosk sales-point screen for scanning, points selection, and checkout. The current [mobile-web flow](artifacts/02-mobile-web-flow.md) supersedes the earlier kiosk-hosted registration journey. A real checkout integration has not been requested.

This revises the original curriculum's operator-led simulation. The customer drives the demo checkout. Authorization and account isolation still need design and tests; simulated payments do not establish those properties.

Apple Wallet card issuance remains a later curriculum milestone. Automatic updates to an installed pass are a stretch goal.

## Registration and card reissuance

Registration requires first and second name and email, as explicitly stated in the learner's later interaction-flow draft. Phone is **optional** because its stated purpose is future promotional messaging. Detailed naming/validation requirements still need to be settled. Promotional messaging is outside the current demo.

If an email already belongs to an account, do not immediately create another account or issue a card. Require email verification before issuing another card linked to the **existing account and balance**.

This operation can be called **card reissuance after email verification**. When it restores access to an existing account, the broader flow is **account recovery**.

The architectural idea is to keep the account separate from its cards:

- The loyalty account owns the points balance and history.
- A card refers to that continuing account.
- Issuing another card preserves the account; it does not copy points from an old card into a new one.

Real email verification establishes access to the registered inbox under the chosen verification mechanism. For the current demo, the learner chose to simulate email delivery; a simulated flow does not prove access to a real inbox. During step 02, the learner required verification before initial card issuance and proposed an app-generated link returning to the app. The learner removed the earlier five-minute expiry for the simulated demo on 2026-11-16; elapsed time alone no longer invalidates an unused current-registration link. A customer can correct a pending registration's email and receive a new link, while the old link cannot verify the changed address. Production token-lifetime guidance and reuse behavior require separate review. Offer another email when verification is not completed. Old-card validity, verification-request validation, and detailed retry/resend behavior remain open.

## Two different point conversions

Earning points and spending points use different rates. Keeping the units explicit prevents a common calculation error.

| Direction | Current rule | Example |
| --- | --- | --- |
| Money paid → points earned | One whole point for each complete 10 cents paid | $4.50 earns 45 points |
| Points spent → price discount | One point discounts one cent | 100 points discounts $1.00 |

### Earning and rounding

Calculate each purchase independently and round down. Discard unused cents rather than carrying them across purchases.

- $4.50 earns 45 points.
- $4.55 also earns 45; $4.60 earns 46.
- Two separate $4.55 purchases earn 90 points, not 91.
- Ten $3 purchases earn 300 points. A fixed number of purchases does not guarantee a particular reward value.

Only the amount paid **after the points discount** earns new points. A failed checkout earns no new points.

The intended value ratio is $10 of eligible spending for each $1 of reward value. For purchases in exact 10-cent increments, $45 earns 450 points worth a $4.50 discount. Per-purchase rounding can make the actual required spending slightly higher.

The earlier fixed-coffee reward has been replaced by a selectable checkout discount. A $4.50 coffee can still be fully covered by 450 points, but customers can also choose a smaller discount and pay the remainder.

## The current customer journey

Use the learner's [mobile-web and sales-point flow](artifacts/02-mobile-web-flow.md). The customer registers and displays their card on a phone; a separate cashier/kiosk screen offers enrollment or scans an existing card, selects points, and handles simulated checkout. The enrollment QR opens the web registration form, while the issued card QR identifies the account.

The earlier customer/application interaction flow remains a historical artifact. The current design uses an explicit return to the sales point after registration instead of pushing a registration-success modal to an old shared-kiosk session. A customer can scan the card and skip redemption while still earning points after successful checkout. Operator permissions and first-purchase points timing still need clarification.

## Client guidance and server enforcement

The client should constrain the selector by both account balance and purchase price. These controls guide the customer. The server must still check requests because a client can be outdated, altered, or bypassed.

The settled server policy is:

1. Cap the requested points at the purchase price's points equivalent.
2. Compare that capped amount with the available account balance.
3. If the balance cannot cover it, reject without deducting points.
4. Otherwise, apply the capped amount after a successful checkout.

Do **not** automatically reduce an unaffordable request to all the remaining account points. The learner wanted to avoid an oversized request unexpectedly consuming the whole balance while still leaving an amount to pay. Deliberate partial discounts remain allowed.

The learner proposed application response code `51` for insufficient points and `52` when the price cap adjusts a request. These are **application codes**, not HTTP statuses. HTTP status codes, response schemas, and how to represent an adjusted success remain implementation decisions.

### Decision table

All rows below use a $4.50 coffee. Remaining balances describe the deduction stage only, before adding any points earned from a cash remainder.

| Available points | Requested points | After price cap | Expected result | Points after deduction |
| ---: | ---: | ---: | --- | ---: |
| 1,000 | 600 | 450 | Apply 450; report adjustment (`52`) | 550 |
| 500 | 600 | 450 | Apply 450; report adjustment (`52`) | 50 |
| 300 | 600 | 450 | Reject: insufficient points (`51`) | 300 |
| 300 | 450 | 450 | Reject: insufficient points (`51`) | 300 |
| 300 | 100 | 100 | Apply the chosen partial discount; $3.50 remains to pay | 200 |

The extra requested points above the cap were never spent. They need no separate refund. A fully covered purchase is displayed as free. Under the earning rule, a zero-paid purchase earns zero new points; this consequence has not yet been independently explained by the learner.

### Alternative considered

We initially considered rejecting any request above the account balance **before** applying the price cap. The learner revised that decision. The current order accepts the 500-available/600-requested case because the capped 450 is affordable.

Another alternative would cap at both the purchase price and available balance. The learner rejected that automatic balance reduction while retaining intentional partial discounts. These are business-policy choices, not universal architecture rules.

## Complete checkout arithmetic

One early combined attempt treated 100 points as a 10-cent discount and awarded points on the original price. A prompt to recall the redemption value led the learner to correct both calculations: 100 points discounts $1, and only the discounted price earns points.

The learner then independently solved a changed example:

| Item | Amount |
| --- | ---: |
| Starting points | 500 |
| Purchase price | $5.55 |
| Points selected | 150 |
| Discount value | $1.50 |
| Amount paid | $4.05 |
| Points retained after spending | 350 |
| New points, rounded down | 40 |
| Final points balance | 390 |

### Learner-written acceptance criterion

The following restates the learner's successful Given/When/Then example:

> **Given** a customer has 500 loyalty points, **when** they complete a $5.55 purchase using 150 points, **then** they pay $4.05, spend 150 points worth $1.50, and finish with 390 points: 350 retained plus 40 earned from the new purchase.

An **acceptance criterion** states observable behavior clearly enough to decide whether the requirement has been met. This example is written evidence of understanding. It is not an automated test, and the application has not implemented it.

## Failure behavior, retries, and idempotency

If a customer starts with 300 points, selects 100 toward a $4.50 coffee, and payment of the remaining $3.50 fails, their balance stays at 300. The learner correctly explained that the order did not go through. The failed checkout also earns no new points.

The earlier order discussion proposed up to three attempts with visible progress (1/3, 2/3, 3/3), then a try-again message if no order was created. This retry intention must be checked against the revised combined points/payment flow before implementation.

One important case is a successful order whose response is lost. The learner proposed checking whether that order exists and returning its existing confirmation and order number. The tutor named the intended behavior **idempotency**. Repeating the same checkout attempt should produce one order and one points deduction.

A read that finds no order followed by a separate create operation is not by itself a concurrency guarantee. We still need to design how retries identify the same attempt and how simultaneous requests are handled.

Similarly, order creation and points changes must preserve an all-or-nothing outcome. The intended failure behavior points toward **atomicity**, but database transactions and failure recovery have not yet been studied or implemented.

Three missing responses do not prove an order failed. Its outcome could be unknown. The user-facing reconciliation behavior for that case is unresolved; do not promise an unchanged balance solely because the client timed out.

## Frameworks that can improve the next steps

| Framework or technique | Purpose here | Status |
| --- | --- | --- |
| [Example Mapping](https://cucumber.io/docs/bdd/example-mapping/) | Keep a feature's rules, examples, and unanswered questions visible together | Recommended; no formal map produced yet |
| Decision tables | Expose interactions between price caps, requested points, and balances | The table above consolidates the discussed scenarios |
| [C4 system context](https://c4model.com/diagrams/system-context) | Identify the application boundary, users, and external systems | Next learner exercise |
| [arc42 quality scenarios](https://docs.arc42.org/section-10/) | Turn correctness, access control, and changeability into measurable expectations | Planned within milestone 1 |
| [Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/) | Explore the real problem with customers and staff, define it, develop alternatives, and test solutions | Possible future product research; not performed |

The current work establishes intended behavior for a learning demo. It does not establish that real café customers need this design. Actual research and prototype feedback would provide that evidence.

No MVC, hexagonal, or other implementation architecture has been selected. Our architectural reasoning so far concerns server authority, account ownership of the balance, and failure guarantees. A context sketch is the next step.

## Evidence and remaining gaps

Demonstrated: product-rule reasoning; per-purchase rounding; distinguishing spending from purchase count; server-side validation requirements; preserving an account across card reissuance; an independent combined discount/earning example; and unchanged points after a failed checkout.

Still to assess or decide:

- System boundary, external dependencies, and which interactions are simulated.
- Main screens and the consolidated one-page brief.
- Remaining acceptance criteria for registration, reissuance, checkout, and failure recovery.
- Measurable quality scenarios for correctness, access control, and changeability.
- Account access, the simulated verification interaction, old-card validity, and first-purchase enrollment timing.
- Unknown checkout outcomes, retry identity, concurrency, and atomicity.
- Invalid amounts, technical response contracts, and the exact money representation.

The React hooks practice remains deferred to milestones 6 and 6a: `useState`, `useMemo`, and `useCallback`, including derived values, functional updates, dependency identity, stale closures, and measured performance. No hooks mastery is claimed.

Next: [product definition and system context](02-product-definition.md).
