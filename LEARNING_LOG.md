# Learning log

This file carries learning context between Codex chats. Record observed evidence and unresolved questions; confidence alone is not proof of understanding.

## Current position

- Session status: milestone 1 step 02 in progress; learner chose pending-email correction, a new link on address change, and five-minute expiry; an expiry acceptance criterion is next.
- Current milestone: 1. Define the product.
- Study framework: `LEARNING_FRAMEWORK.md`; navigate via `docs/learning/README.md`. Use one numbered Markdown file per substantive step within its milestone.
- Reusable concept library: `docs/concepts/README.md` indexes ten general product engineering guides with non-demo examples and transfer exercises. Maintain relevant guides alongside every milestone and step. Broader transfer and new adjacent topics remain unassessed until learner attempts provide evidence.
- Completed study step: `docs/learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md`.
- Current study step: `docs/learning/milestone-01-product-definition/02-product-definition.md`; learner draft saved in `artifacts/02-customer-interaction-flow.md` within that milestone directory.
- Next learner task: write a Given/When/Then criterion for a verification link followed six minutes after issuance; then continue the remaining product-definition artifacts while tracking open retry/resend rules.
- Next tutoring question: using Given/When/Then, how would you describe a customer following a verification link six minutes after it was issued?
- Support by concept: points calculations at independent-with-feedback after a successful changed example; context boundaries at coached practice after learner reported confusion about external responsibilities. Module versus deployment versus system boundary distinction needs transfer assessment. Implementation skills remain unassessed.
- Implementation evidence: no application implementation has been verified during tutor setup.
- Architecture task: learner draws a context sketch and defines observable quality scenarios.
- Known misconceptions: none assessed; do not invent them.
- Review topics for later sessions: retrieve the price-cap-before-balance rule and idempotency reasoning; assess atomicity and unknown checkout outcomes before implementation.

## Requested focused practice

Reported on 2026-11-15: practice distinguishing `useState`, `useMemo`, and `useCallback` in React. These are self-reported practice needs, not diagnosed misconceptions. The main curriculum remains at milestone 1; this practice is attached to milestones 6 and 6a and can be explored separately.

- Learner-provided reference summary: state stores changing component data; memoization caches a calculated value or function reference according to dependencies.
- Topics to assess: state versus derived values, functional updates, dependency identity, stale closures, interaction with memoized children, and measured benefit versus unnecessary memoization.
- Understanding / implementation evidence: no independent explanation, prediction, implementation, or transfer exercise assessed yet.
- Initial objective: distinguish source state from a transaction list derived from that state.
- Diagnostic pending: given transaction history and a search field, explain where the filtered list belongs and how it stays synchronized.
- Support level: unassessed; start with one concrete scenario and adapt to the response.
- Architecture connection: ownership of server data, temporary UI state, and derived representations; performance optimization must preserve behavior.

See the focused practice checklist in milestone 6 of `MVP_PLAN.md`. Do not mark mastery from the supplied reference summary alone.

## Milestone tracker

Track implementation and understanding separately. Replace “Not assessed” with evidence-based notes as you proceed.

| Milestone | Implementation / artifacts | Understanding / transfer |
| --- | --- | --- |
| 1. Product definition | Step 01 study notes and step 02 workbook created; journey, decision table, and learner acceptance criterion recorded; full brief pending | Correct changed example combines conversion, discount, net-spend earning, rounding, and final balance; failed-checkout balance preservation explained; context/screen sketches and remaining criteria pending |
| 2. Language and HTTP fundamentals | Not verified | Not assessed |
| 3. System boundaries and API contract | Not verified | Not assessed |
| 4. PostgreSQL and Prisma modeling | Not verified | Not assessed |
| 5. First backend feature | Not verified | Not assessed |
| 5a. Server quality rules and tests | Not verified | Not assessed |
| 6. React experience | Not verified | Not assessed |
| 6a. Client quality rules and tests | Not verified | Not assessed |
| 7. Purchases, redemptions, and concurrency | Not verified | Not assessed |
| 8. Behavior and access boundaries | Not verified | Not assessed |
| 8a. PR checks and deployment-ready CI | Not verified | Not assessed |
| 9. Initial Wallet issuance | Not verified | Not assessed |
| 10. Deployment and operations | Not verified | Not assessed |
| 11. Wallet updates, stretch goal | Not verified | Not assessed |

## Session entry template

Copy this section after a meaningful work session. Keep it brief and specific.

```text
Session date / milestone:
Learning objective:
Learner artifact or relevant files:
What the learner explained or predicted:
Evidence observed (command/result, demonstration, or artifact):
Who ran checks / what remains unverified:
Support used by concept:
Misconception or gap / evidence / current status:
Architecture decision / alternative / tradeoff:
Teach-back and novel transfer result:
Items completed in MVP_PLAN.md:
Next task and first question:
Earlier concept to revisit:
```

## Session history

### 2026-11-15 — Milestone 1, initial product discussion

- Objective: describe the customer benefit and make the points-earning interaction concrete.
- Learner evidence: described buying coffee, accumulating points, and exchanging them for a store product later. Proposed automatic points awarding for purchases made through a cashier or self-service kiosk. Identified successful payment as the trigger: "When the payment goes through."
- Support used: one question per turn, moving from customer benefit to purchase recording and the successful-payment trigger. Tutor noted that the current MVP simulates purchases and excludes real checkout integration.
- Proposals versus decisions: cashier/kiosk integration is the learner's desired experience; no integration design or change to MVP scope has been accepted. The existing simulated-operator scope remains in the plan.
- Unresolved: how a purchase identifies its loyalty account; how payment confirmation reaches the loyalty application; how the MVP simulates this interaction. Points rules, authorization, failure behavior, and architecture alternatives remain to be explored. No misconception diagnosed from these short answers.
- Validation: conversational evidence only; no code, tests, teach-back, or transfer exercise assessed. No MVP checkboxes completed.
- Next task: identify the customer account during a kiosk purchase, then reconcile the desired flow with the simulated MVP boundary.
- Later practice: retain the React hooks practice recorded above for milestones 6 and 6a; no hooks understanding assessed in this discussion.

### 2026-11-15 — Milestone 1, demo scope clarification

- Learner evidence: proposed scanning the loyalty card at the kiosk or having the cashier scan it to identify the account. Proposed a mock "Pay with Apple Pay" action that simulates payment success. Specified that only the customer triggers simulated payment, and clarified that both points and rewards belong to the demo, using mock products.
- Accepted product scope: a customer-controlled demo checkout can award demo points after simulated payment success and offer simulated product rewards. Card scanning is the proposed account-identification interaction; the identifier format and scanning implementation remain undecided. Real Apple Pay or checkout integration has not been requested.
- Architecture comparison: the original plan used an authorized simulated operator; the learner chose customer-controlled simulation. The tutor raised earning points without spending money, and the learner clarified that rewards are simulated too. This resolves the real-reward concern for the chosen demo scope; it does not demonstrate production payment or authorization design.
- Plan alignment pending: carry the customer-controlled demo decision into the learner's product brief and reconcile operator-specific curriculum items with that brief. MVP_PLAN.md has not yet been revised or checked off.
- Support used: concrete purchase scenario, explicit comparison with a simulated checkout, and a question distinguishing real rewards from demo rewards. No implementation supplied.
- Remaining gaps: points-earning formula and rounding, reward prices, registration, scan/access behavior, retries and failures, system context sketch, and observable acceptance criteria. No technical misconception diagnosed.
- Validation: discussion only; no implementation checks, teach-back, or novel transfer assessed.
- Next task: define points earned for a $4.50 demo coffee, then generalize and test the proposed rule.

### 2026-11-15 — Milestone 1, points-earning rule

- Accepted rule: award one whole point for each complete 10 cents of an individual purchase; round down each purchase independently and discard leftover cents rather than carrying them to later purchases.
- Learner evidence: chose 45 points for $4.50; explained that $4.55 also earns 45 and reaching 46 requires $4.60. For two separate $4.55 purchases, chose 90 total points "since each purchase earned 45 rounding down."
- Support used: concrete amount, rounding boundary, and a comparison between per-purchase rounding and carrying unused cents across purchases. Learner supplied the rule and reasoning without code or a worked solution.
- Understanding: applied the rule consistently to a changed amount and a two-purchase scenario. This is evidence of product-rule reasoning, not implementation or numeric-representation mastery.
- Architecture implication: the proposed earning rule does not require accumulating leftover cents across purchases; authoritative calculation ownership and amount representation remain to be assessed later.
- Checks: conversational examples only; no executable checks run. No plan checkbox completed because the combined earning/rounding/reward-cost item still lacks a reward cost.
- Next task: choose the points cost of one mock coffee reward, then explore redemption eligibility and resulting balances.

### 2026-11-15 — Milestone 1, reward cost and spending ratio

- Accepted reward: one $4.50 mock coffee costs 450 points. Learner described an intended ratio of $10 in product spending for each $1 of reward value.
- Learner evidence: initially described one coffee for ten purchases, then correctly rejected eligibility after ten $3 purchases because those purchases earn only 300 points. This clarifies that accumulated points, not purchase count, determine eligibility.
- Support used: tutor connected $45 spending to the 450-point reward and offered ten purchases at a different price as a counterexample. Learner independently calculated 300 points and explained ineligibility.
- Understanding: demonstrated transfer from the original coffee price to a changed purchase price. No persistent misconception diagnosed.
- Remaining details: insufficient-points and successful-redemption behavior; pricing of other mock rewards. The intended spending ratio is nominal: per-purchase rounding discards cents. Applying the ratio to arbitrary reward prices has not been assessed.
- Checks: conversational evidence only; no executable checks run and no implementation supplied. Plan alignment and checkboxes remain pending the product brief.
- Next task: specify observable behavior when 449 points are insufficient for the 450-point coffee reward.

### 2026-11-15 — Milestone 1, insufficient-points redemption

- Learner-defined UI behavior: display affordable rewards as redeemable and show a get-more-points message for unaffordable rewards.
- Learner-defined enforcement: even if an outdated screen submits a redemption, the server checks the account balance against the reward cost and rejects it when insufficient. Client feedback should show available versus required points and the shortfall.
- Learner proposed application error code: `51`, meaning insufficient points. HTTP status and response schema have not been chosen; do not interpret `51` as an HTTP status.
- Transfer evidence: for 430 points and a 450-point reward, learner described server rejection and the client message, then explicitly confirmed the balance remains 430 because the server does not charge the customer.
- Observable rejection criterion captured from the learner's answers: an attempt to redeem the 450-point coffee with 430 points fails, reports insufficient points (430 available, 450 required, 20 missing), and leaves the balance at 430.
- Architecture understanding: learner placed the balance check on the server as well as providing UI guidance. Concurrency, atomicity, and implementation of that boundary remain unassessed.
- Support used: outdated-screen scenario, a Given/When/Then prompt with a changed balance, and a focused follow-up on resulting balance. Learner explained the unchanged-balance requirement; tutor supplied no code.
- Validation: conversational evidence only; no executable checks run. A complete independent Given/When/Then criterion has not yet been produced. No plan checkboxes changed.
- Next task: learner writes the successful-redemption criterion for 500 available points and a 450-point coffee.

### 2026-11-15 — Milestone 1, successful redemption and retry intent

- Learner-defined success: deduct the 450-point coffee cost, show a thank-you message, and provide an order number for pickup. In the agreed mock-product scope, this is a simulated order/fulfillment flow. Tutor calculated the resulting balance as 50 from a starting balance of 500; learner has not independently stated that result.
- Learner-defined failure/retry behavior: up to three attempts, displaying progress such as 1/3, 2/3, 3/3. If no order is created, show a try-again message and leave the balance unchanged.
- Lost-response scenario: tutor asked about an order created and points deducted before the response is lost. Learner proposed checking whether the order exists; create it and deduct points if absent, otherwise return confirmation with the existing order number.
- Requirement formalized by tutor: retrying the same redemption should yield one order and one points deduction. Introduced the term idempotency after the learner reasoned about recovering an existing order. Independent teach-back and transfer of this term remain pending.
- Architecture gaps: how to identify the same redemption across attempts; how order creation and points deduction succeed or fail together; why a separate check then create is not by itself a concurrency guarantee. After three lost responses, the outcome may be unknown rather than definitely failed; the UI/reconciliation behavior for that case remains unresolved.
- Support used: concrete successful-redemption scenario, order-creation failure, lost-response counterexample, and a focused question about the existing-order response. Learner described the product behavior; no implementation supplied.
- Teaching self-check: consulted the skill rubric. Concrete scenarios elicited useful reasoning and near transfer; increase independent product-writing tasks and avoid prolonging arithmetic checks. No rubric score or technical mastery claimed.
- Validation: discussion only; no code or executable checks. Learner described success in ordinary prose rather than a complete Given/When/Then artifact. Plan checkboxes unchanged.
- Next task: define minimum registration information and duplicate-registration behavior, then consolidate the learner's product brief. Retain the React hooks practice for milestones 6 and 6a.

### 2026-11-15 — Milestone 1, registration and repeat card issuance

- Registration proposal: collect first and second name, email, and phone number. Learner explicitly made phone optional after explaining that its purpose is future promotional messaging. Promotional messaging is not a current MVP feature; detailed name-field requirements remain to be settled in the brief.
- Duplicate registration: when the email already belongs to an account, block immediate new-card issuance and require email verification before issuing another card. Learner explicitly chose to connect that card to the existing balance rather than create a separate account.
- Product/architecture distinction: the card represents access to a continuing loyalty account; issuing another card does not reset accumulated points. Learner chose the continuing balance; tutor named the account/card distinction.
- Support used: asked the purpose of phone collection, offered required/optional/deferred alternatives, and compared linking a card to the existing account with creating a separate account. Learner chose the policy; no implementation supplied.
- Remaining decisions: first-time email verification, real versus simulated verification delivery, web account access, whether another card is a copy or invalidates an earlier card, complete unavailable-server behavior, and screen/context sketches. These are unresolved decisions, not diagnosed misconceptions.
- Validation: discussion only; no tests or application changes. No milestone marked complete. React hooks practice remains recorded for later.
- Next task: fade scaffolding with a learner-written 4–6 sentence product brief describing the registration-to-reward journey; review for coherent scope and observable behavior before filling remaining milestone 1 gaps.

### 2026-11-15 — Milestone 1, learner-written journey and revised redemption

- Learner artifact: a bullet-point customer journey in chat, written independently after the brief prompt. Customer purchases at the kiosk, is offered registration and points, can accept or decline, and completes the purchase either way. Registration collects the previously discussed information.
- Explicit scope change: learner replaced fixed-product reward redemption with a selectable points discount on a subsequent purchase. Scan the loyalty card, display the balance, select points using +1/+10/+100 controls, preview the discounted price, and confirm or decline before checkout.
- Redemption value stated by learner: 10 points equals 10 cents of reward value (one point discounts one cent). This is consistent with the earlier 450 points for a $4.50 coffee, but now supports partial discounts. The previous rule that unaffordable reward products are unavailable is superseded by this new discount flow; selected-amount eligibility remains to be specified.
- Revised earning basis: only the amount paid after the points discount earns new points. The existing rate of one point per complete 10 cents and per-purchase rounding remains the working rule; a combined example has not yet been assessed.
- Understanding evidence: independently synthesized registration, optional participation, checkout, redemption selection, price preview, and earning basis; proposed a substantive product change with its own earning consequence. No code supplied or checked.
- Open requirements: maximum/minimum points selection, reducing/resetting a selection, insufficient balance, whether full points payment is allowed, timing of points deduction versus payment success, failed or unknown checkout outcomes, retry behavior for mixed points/payment orders, and first-purchase registration/points timing. The original mock-payment/mock-product scope remains in effect.
- Plan alignment: the original operator-led/fixed-reward wording in MVP_PLAN.md still needs reconciliation with the learner's consolidated brief. Do not treat older session choices as overriding this explicit redesign.
- Next task: assess final account balance for a 200-point customer spending 100 points on a $4.50 coffee, then test the revised flow's limits and failures. Preserve the React hooks practice for later milestones.

### 2026-11-15 — Milestone 1, combined discount and earning example

- Scenario: start with 200 points, apply 100 points to a $4.50 coffee, then complete checkout.
- Initial attempt: learner correctly subtracted 100 points from the account, but calculated a $4.40 price and 45 newly earned points, yielding 145. These values did not follow the stated redemption value or net-spending earning rule.
- Support used: one focused conversion prompt recalling the learner's rule that 10 points equals 10 cents. Tutor did not supply the discounted price or earned-points answer before the learner retried.
- Learner correction: independently stated that 100 points deduct $1, the coffee costs $3.50, and the account retains 100 unspent points plus 35 newly earned points. Tutor totaled this as 135 points.
- Assessment: corrected both conversion and net-spending calculation after one hint. Treat the initial errors as observed calculation/rule-application gaps, not a diagnosed persistent misconception. An unprompted combined example with changed values remains useful later.
- Validation: conversational arithmetic only; no implementation or executable checks.
- Next task: decide how the selector handles applying more discount value than the purchase price, followed by insufficient account balance and checkout failure cases. React hooks practice remains unchanged.

### 2026-11-15 — Milestone 1, discount limits and validation order

- Learner-defined client limits: the selector must respect both available account points and the maximum discount for the purchase. A $4.50 purchase permits at most 450 points; full coverage is displayed as free.
- Server price cap: with 1,000 available points and a request to apply 600 to a $4.50 purchase, deduct only 450 and leave 550. Learner proposed application response code `52` with requested and applied amounts, and client feedback stating that 450 points bought the free coffee. Tutor clarified that the excess 150 requested points remain unspent and need no separate refund.
- Insufficient balance: with only 300 points and a 450-point request, reject on the server with application code `51` and notify the client, even if the client should have prevented the selection.
- Overlapping rules: with 500 available points, a 600-point request, and a $4.50 price, learner explicitly chose rejection rather than capping the request to 450 and continuing. This establishes checking the requested amount against available balance before applying the purchase-price cap.
- Assessment: learner correctly calculated the capped example's resulting 550-point balance and distinguished client constraints from authoritative server enforcement. The reason for preferring rejection over automatic reduction in the overlapping case has not yet been elicited.
- Support used: oversized-discount scenario, insufficient-balance scenario, then a case combining both rules with two valid policy alternatives. Tutor did not impose one preferred policy or provide implementation.
- Open details: technical HTTP statuses/response schema (codes `51` and `52` are application codes); zero-price checkout and its earning result; cancellation/failure/unknown outcomes in the revised mixed points/payment flow; retry identification and atomicity. Earlier unchanged-balance rejection intent still applies.
- Validation: conversational scenarios only; no executable checks or application changes. The selector and server policies remain requirements to implement and test later.
- Next task: learner explains the reject-versus-adjust policy tradeoff, then complete the revised checkout's failure requirements. React hooks practice remains recorded for later.

### 2026-11-15 — Milestone 1, revision to the overlapping-limits policy

- Explicit learner revision: for a customer with 500 points requesting 600 points on a $4.50 purchase, cap the applied points at 450 and leave 50 points in the account. Learner independently stated the correct final balance.
- Supersedes: the previous entry's rejection-first decision for this case. Do not reject merely because the original request exceeds the account balance when the purchase-price cap makes the applied amount affordable.
- Still unresolved: whether the server caps only at the purchase price and then rejects an unaffordable applied amount, or also caps at the account's available points. Do not infer that the earlier code-51 rule is either abolished or unchanged without clarifying this remaining case.
- Support/evidence: learner reconsidered the policy after a tradeoff question; no implementation supplied or checks run.
- Next task: choose between applying 300 points and rejecting when the account has 300, the requested amount is 600, and the purchase costs $4.50.

### 2026-11-15 — Milestone 1, settled discount policy and partial discounts

- Accepted order: first cap the requested points at the purchase price's points equivalent, then compare that capped amount with the account balance. If insufficient, reject with application code `51` and deduct no points. Otherwise apply that capped amount. Do not automatically lower the discount to the available account balance.
- Clarifying evidence: learner explicitly chose the balance check "after applying the purchase-price cap." This supersedes the earlier rejection-first wording and resolves the apparently conflicting 500-point and 300-point examples.
- Examples: 500 available / 600 requested / $4.50 price applies 450 and leaves 50; 300 available / 600 requested / $4.50 price rejects because the capped 450 still exceeds the available 300.
- Learner rationale: avoid automatically spending all remaining points and leaving a cash amount due when the selected discount cannot be covered. This does not prohibit deliberate partial discounts: learner explicitly confirmed that using 100 of 300 points on a $4.50 coffee, leaving $3.50 to pay, is allowed.
- Support used: contrast the original request with the capped amount, then distinguish an automatic balance cap from a customer-selected partial discount. No code supplied.
- Assessment: policy now consistent across the discussed boundary examples; independent synthesis and implementation remain unverified. Application code `52` remains the earlier proposed response when the purchase-price cap adjusts the request; technical response details are deferred.
- Next task: retrieve and transfer the unchanged-balance failure principle to a mixed points/payment checkout, then consolidate the learner's revised brief. React hooks practice remains recorded for milestones 6 and 6a.

### 2026-11-15 — Milestone 1, checkout failure and independent acceptance criterion

- Failure transfer: learner correctly stated that a customer starting with 300 points who selects 100 for a $4.50 coffee still has 300 if payment of the remaining $3.50 fails, because the order did not go through. Tutor clarified that the failed checkout also earns no new points.
- Independent acceptance criterion: given 500 points, when buying a $5.55 product using 150 points, then pay $4.05 plus the 150-point redemption and finish with 390 points: 350 retained plus 40 earned from the amount paid.
- Assessment: every value in the changed scenario is correct. Learner independently combined one-cent-per-point redemption, deduction of spent points, earning only on net spending, per-purchase rounding down, and the final balance. This provides near-transfer evidence following the earlier corrected example; no calculation hint was needed for this attempt.
- Support/fading: the prompt supplied only Given/When/Then format, starting values, and requested outcomes. Points-rule practice can now use independent attempts with feedback rather than further step-by-step arithmetic prompts.
- Validation limits: this is a learner-written behavioral acceptance criterion in chat, not an executable test or implementation. No commands checking application behavior have been run; no milestone marked complete.
- Next objective: identify the demo's system boundary with a learner-drawn context sketch, including which external interactions are simulated. Screens, consolidated one-page brief, remaining acceptance criteria/quality scenarios, and curriculum scope alignment remain unfinished. React hooks practice remains recorded for later.

### 2026-11-15 — Study documents and persistent learning framework

- User requested a public study repository, one Markdown file per learning step within each milestone, and persistent instructions to keep that structure in future sessions.
- Created step 01 requirements elicitation/analysis notes with concepts, current product decisions, examples, a decision table, the learner's acceptance criterion, corrections, framework references, and open questions. Its initial discovery pass is complete; requirements can still evolve.
- Created a separate step 02 product-definition workbook starting with system context. The learner's diagram is intentionally pending. Milestone 1 is not complete.
- Added the learning framework, study index, and project README. Updated AGENTS.md and the tutor guide so future sessions read these documents and resume the saved exercise. The standalone repository can use its own tutor guidance without the parent workspace's separately installed teaching skill.
- Aligned MVP_PLAN.md with customer-controlled simulated checkout and selectable points discounts. Checked only the three supported decisions: registration information, earning/rounding/redemption values, and who initiates demo checkout. All implementation checks remain unfinished.
- Codex verification: all 25 local Markdown links resolve; code fences and final newlines checked; documented monetary examples checked using decimal arithmetic. The six authored/rewritten study documents passed the prose scanner after one wording adjustment. These are documentation checks, not application tests.
- GitHub destination authorized by the user: p2arthur/loyalty-card-learning-lab, public. User explicitly confirmed p2arthur as the intended account after the CLI could not read account emails. Repository publication is an explicitly requested setup action, not learner implementation work.
- Next learner objective remains the step 02 context sketch: identify the customer, the application boundary, and external systems, marking simulations. Preserve the React hooks practice for milestones 6 and 6a.

### 2026-11-15 — Reusable product engineering concept library

- User explicitly requested expanded, broadly applicable study artifacts separate from the demo, covering journey mapping, business rules, scenarios/boundaries, domain modeling, acceptance criteria, and adjacent product engineering concepts. Requested this as a recurring habit for every milestone and part.
- Created docs/concepts/README.md, a reusable concept template, and ten standalone guides: discovery/requirements, journeys, business rules/decisions, scenarios/boundaries, domain modeling, acceptance criteria/BDD, scope/prioritization, boundaries/ownership/trust, state/failures/retries, and quality requirements/decision records.
- Each guide explains distinctions and a practical method, uses a worked example outside the café domain, identifies common mistakes, and includes a transfer exercise and primary references. These are references for study, not evidence that the learner has mastered the new material.
- Updated the learning framework, AGENTS.md, tutor guide, MVP plan, study index, project README, and milestone 1 step documents to require linked project-specific and general concept artifacts at meaningful checkpoints. Reuse and extend existing concepts rather than duplicating them under each milestone.
- Verified the previously interrupted initial GitHub publication completed: p2arthur/loyalty-card-learning-lab is public and main contains the first documentation commit, c88e3cf. The same authorized repository is the destination for the concept-library update.
- Codex checks: 21 Markdown files and all 80 local links checked; code fences and final newlines valid. The concept-library scanner checked 12 files with no high-severity findings. Reviewed source distinctions and corrected the aggregate reference to the accessible primary documentation. No application tests or implementation work performed.
- Next demo task remains milestone 1 step 02, system context sketch. General study exercises can be selected one at a time without marking reference creation as mastery. Deferred React hooks practice remains unchanged.

### 2026-11-15 — System context: order responsibility and deployment boundaries

- Learner initially identified payment confirmation and an order system returning status/ID as possible integrations, then reported uncertainty about other systems and context boundaries.
- Support used: a one-box explanation distinguishing responsibilities inside the chosen application from systems it communicates with, followed by a question comparing internal order handling with an existing café platform.
- Accepted demo decision: learner chose to create basic order handling within the demo itself. This is inside the demo system boundary; it is not a commitment to a separate service or a finished module design.
- Learner asked whether production would normally require a separate ordering service. Treat this as an open architecture question, not evidence of a persistent misconception.
- Extended reusable guide 08 with the distinction between module, deployment, and system context boundaries, plus the tradeoffs of separate services and primary references. Contextual production choices remain open; the project still starts from one backend with explicit responsibilities.
- Next task: use an existing café ordering platform as a changed context example, then identify the people and remaining external interactions before the learner draws the sketch. No code, application checks, or completed architecture checkpoint claimed.

### 2026-11-15 — System context: simulated email delivery

- Learner asked whether payment was the only external interaction. Tutor retrieved the earlier card-reissuance email requirement and asked whether delivery should be real or simulated.
- Accepted decision: simulate email delivery in the current demo. Learner recognized the external-provider role in a real integration. Payment confirmation was already simulated; basic order handling remains inside the application.
- Clarification added to reusable concept guide 08 and project notes: a logical sketch may show provider roles marked simulated, but this does not imply actual external calls or separately deployed mock services. Simulated verification does not establish control of a real inbox.
- Understanding limits: no learner context diagram or production-boundary transfer artifact has been assessed yet. Do not mark the context checkpoint complete or infer deployed services from the discussion.
- Next learner artifact: a small text sketch with customer, application, and simulated payment/email interactions, with arrows naming what is exchanged. No implementation supplied or application checks run. React hooks practice remains deferred.

### 2026-11-15 — Learner registration and checkout interaction-flow draft

- Learner independently supplied registration and points-use message flows and requested assessment of the artifact and its place in product design. Saved a faithful formatted draft under milestone 1 artifacts and linked it from step 02.
- Correctly included required name/email and optional phone fields, registration choice, card scanning, discount selection, original/discounted price, expected earnings, and final receipt/balance feedback. QR-code card identification is a new learner proposal; security and pass implementation remain unassessed.
- Review classification: customer interaction flow expressed as a message sequence. It is useful behavioral input within milestone 1 step 02, product definition. A system context view has a higher-level focus on the system boundary and connected people/systems; this artifact does not yet establish that view.
- Highest-impact current gap: all drafted exchanges are customer/application messages. The simulated payment/email roles are absent, and customer payment confirmation has not yet been distinguished explicitly from provider-confirmed success in this flow. The no-points branch is also not detailed; leave it in the backlog rather than asking several questions at once.
- Terminology clarification prepared with Apple's primary reference: Apple Wallet stores the eligible loyalty pass; Apple Pay concerns payments. Wallet issuance remains a later milestone. Do not treat a QR code alone as the completed Wallet integration.
- Extended reusable journey guide 02 with distinctions among journey maps, user flows, interaction sequences, and system context views, including a non-demo example. No learner mastery of those distinctions claimed yet.
- Next small task: add just the app/simulated-payment-provider exchange, then review it before adding email or drawing the simplified context. No implementation or application tests performed.

### 2026-11-15 — First logical system context sketch

- Learner summarized customer/application, application/payment-provider, application/email-service, and email-service/customer relationships, then added: payment provider returns confirmation or denial for the order ID.
- Consolidated only learner-supplied relationships into artifacts/02-system-context-sketch.md, normalizing provider names to the agreed simulated scope. Basic order handling remains inside the app. No deployment design or real provider integration is implied.
- Evidence supports the basic context-sketch item in step 02 and milestone 1. Quality scenarios, architecture tradeoffs/verification, screen sketches, complete brief, and remaining criteria remain unfinished.
- Support: feedback about abstraction level and a targeted prompt for the payment reply. Broader production-boundary transfer remains unassessed. No code or application checks performed; React hooks practice remains deferred.
- Next question: if payment succeeds but confirmation-email delivery fails, should the order still be confirmed? Elicit the learner's reasoning before stating the desired failure policy.

### 2026-11-15 — Email failure independent of checkout confirmation

- Learner explained that the order should remain confirmed when payment succeeds and email fails. Receipt and order ID should be shown in the app; email delivery continues in the background.
- Retry proposal: retry background delivery three times, then schedule more attempts. Retry timing, maximum age/attempts, permanent failure handling, and stopping conditions remain undecided; do not interpret this as an accepted infinite-retry requirement.
- Evidence: learner independently separated the core order outcome from a notification dependency and provided a customer recovery route in the app. This scenario assumes checkout completed; payment success by itself does not establish a local commit.
- Reused general concept guide 09 for failure/retry background. No new reference creation or learner implementation was needed. No application checks run.
- Next diagnostic: whether to continue scheduling retries when the recipient address does not exist. Assess the distinction before introducing retry mechanisms or completing a quality scenario.

### 2026-11-15 — Registration verification responsibility and link flow

- Learner responded to the invalid-address case by requiring email confirmation before initial loyalty-card issuance. This extends the earlier reissuance-only verification decision; delivery remains simulated.
- Initial proposed arrow made the email provider report user verification. After a prompt about the customer's action, learner revised the flow to an app-generated link delivered by the provider and followed by the customer back to the app. Saved that learner-proposed flow as an artifact.
- Correctly placed link generation and the customer return interaction with the app. Actual verification validation and token behavior remain unassessed; the learner's phrase that the provider confirms the email was received needs a delivery-versus-verification distinction.
- Checked primary SES event definitions and OWASP verification guidance. Added the general distinction between dependency-reported delivery evidence and application-owned verification to reusable guide 08. This does not implement a real provider or authentication mechanism.
- Open product issue: verification does not itself help someone receive mail at a mistyped/nonexistent address. Retry stopping, customer correction/resend behavior, and points timing while registration is pending remain undecided. The earlier post-checkout notification policy and registration gate have different purposes.
- Next question: what should the app let a customer do if they mistyped their email and cannot receive the verification link? No application implementation or tests performed.

### 2026-11-15 — Email correction, proof scope, and verification expiry

- Learner chose to allow a customer to input another email while registration is pending. Later explicitly rejected using a link for address A to verify changed address B and stated that changing the address generates a new link.
- Learner-defined link policy: expires after five minutes; offer another verification email if confirmation is not completed. Resend timing/limits and old-link behavior after a resend to the same address remain undecided.
- Learner also proposed a provider pre-check of whether an email is valid. Tutor distinguished validation of format/deliverability from verification of inbox access, then used an unexpired old-address link as a counterexample. No real provider-validation API or guaranteed-deliverability design has been accepted.
- Evidence: learner applied the address-specific proof principle after a concrete changed-address example. No secure token generation, storage, single-use behavior, or implementation has been assessed; do not infer those properties from the unique-identifier proposal.
- Updated current project rules and the registration artifact; extended reusable guide 08 with proof scope/lifetime using a non-demo example. Order-notification retries and registration verification retain separate purposes. Open retry stopping rules and first-purchase points timing are preserved.
- Next task: learner writes an expiry acceptance criterion for a link opened six minutes after issuance. No application implementation or tests performed. React hooks practice remains deferred.
