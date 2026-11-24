# Learning log

This file carries learning context between Codex chats. Record observed evidence and unresolved questions; confidence alone is not proof of understanding.

## Current position

- Session status: product design continued on 2026-11-18. The learner requested a direct definition of the kiosk/cashier interface. The 2026-11-17 retention warm-up and mobile inventory are recorded; additional setup practice remains deferred.
- Current milestone: 1. Define the product. Initial requirements discovery and the revised context/roles are recorded; the full milestone is unfinished.
- Current study step: docs/learning/milestone-01-product-definition/03-screen-inventory-and-sketches.md. The initial mobile inventory pass is reviewed and revised: onboarding, registration with pending/recovery/success states, and loyalty home with card/balance/history. Success automatically opens the home; the separate confirmation-screen candidate was superseded. Sales-point inventory is next; sketches and detailed criteria remain open.
- Next learner task: define the loyalty choices offered at sales-point checkout after mock product selection and before payment. The learner chose product selection as the starting view; remaining sales-point structure and mobile verification timing/update details are open.
- Next tutoring question: once the customer selects products and proceeds to checkout, which loyalty choices should the sales-point interface offer before payment?
- Setup checkpoint: docs/learning/milestone-02-language-and-http/01-project-scaffolding.md records the learner-built workspace/client/server scaffold, checks, guided corrections, decisions, and remaining setup. Do not resume another compiler exercise as the next live task.
- Emission decision: learner chose to keep emitting JavaScript despite compiler errors. Preserve the current unset noEmitOnError option (documented default false). Error diagnostics do not become passing checks; a controlled type-only-error experiment and future CI acceptance policy remain unassessed.
- Study framework: LEARNING_FRAMEWORK.md and docs/learning/README.md. Use a numbered document per substantive step and separate reusable concept guides.
- Reusable references: docs/concepts/README.md includes the requested five-technique requirements overview, ten detailed product-engineering guides, and software-engineering foundations with non-demo examples. These are references, not mastery claims.
- Personal review backlog: docs/learning/STUDY_GAPS.md separates coached concepts, unassessed skills, retention, and open decisions. Keep the saved product-design task unless the learner chooses a review topic.
- Support by concept: independent changed-example points arithmetic, source/artifact freshness, and a reasoned development-pipeline preference are recorded. On 2026-11-17, the business-rule/acceptance-criterion distinction was applied unaided to appointment booking. Initial tooling recall mixed target/lib/module; explicit correction enabled a correct target-versus-module application. Later cold retrieval remains needed. CLI/config/scripts were coached; business-feature implementation remains unassessed.
- Implementation evidence: Codex inspected manifests/lockfile, runtime record, generated client, tailored server config, scripts, and comment-only source/output. Learner supplied client browser/build/lint and server no-emit/build results; Codex ran compiled-entry start and a final publication-preparation no-emit typecheck under Node 24 with exit 0. Learner reported watch reactions; exact introduced-error diagnostics were not captured. No loyalty features, behavior tests, or HTTP listener exist.
- Architecture task: translate the established mobile/sales-point boundary into screen responsibilities, then finish the remaining quality scenarios and first feature slice. Do not restart the completed context/role discussion.
- React practice: useState/useMemo/useCallback and related needs remain deferred to milestones 6 and 6a; the generated counter is not an assessment of learner hooks implementation.
- Known misconceptions: no persistent misconception diagnosed. Keep specific coached corrections separate from product decisions and unassessed future curriculum.

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
| 1. Product definition | Requirements, revised context/role artifacts, and study backlog recorded; step 03 screen inventory ready; full brief pending | Independent checkout arithmetic and scope reflection recorded; context/verification distinctions were coached; transfer, implementation, screens, and remaining criteria need further evidence |
| 2. Language and HTTP fundamentals | Early scaffold: workspaces/client/server config, scripts, generated artifacts, and recorded checks; no business implementation | Source/artifact distinction and pipeline preference explained; CLI/config/scripts coached; broader language/HTTP skills remain unassessed |
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

### 2026-11-16 — Verification lifetime revision and delayed completion

- Learner first supplied a successful-verification scenario for an exercise about an expired link. Tutor pointed out the mismatch with the then-current five-minute rule. This did not demonstrate expiry-case handling.
- Learner then explicitly changed the product policy: remove the time limit so the same verification link can be followed after an arbitrary delay. Recorded as the current simulated-demo choice, superseding five-minute expiry; the previously chosen invalidation on email change remains in force. Behavior after first use is not inferred.
- Revised learner criterion: after six minutes, valid verification shows a mobile congratulations page, newly issued QR card, and Add to Wallet button; the kiosk also shows a success modal and balance. Under the revised demo rule this is a success scenario, not an expired-link scenario.
- Checked current OWASP primary guidance recommending time-limited, single-use verification tokens. Preserved that distinction in the general concept guide and recorded production security as an unresolved tradeoff; no permanent-link implementation or real provider integration has been built.
- New product question: an arbitrary delay may outlast the original kiosk session. Assess which device/session should receive the confirmation and how to avoid showing a previous customer's state on a shared kiosk.
- Next question: what should happen on the kiosk if the customer verifies the next day while another customer uses it? No application checks or implementation performed. Milestone 1 remains incomplete; deferred React hooks practice is unchanged.

### 2026-11-16 — Mobile loyalty app and explicit sales-point handoff

- Learner chose to simplify the demo by moving the loyalty experience to a mobile web app. Sales point offers enrollment/use of loyalty before checkout. New customers scan an enrollment QR to open the web registration form; registered customers present their card QR for scanning.
- Clarification received: purchase/checkout modal is on a separate cashier/sales-point screen. In direct chat the learner also placed the points selector on the cashier/kiosk screen. Phone owns registration/card display; the sales point owns scanning, selection, and checkout presentation.
- Captured the learner's new flow in 02-mobile-web-flow.md and marked older kiosk-registration artifacts as historical where appropriate. The explicit return and card scan replaces the question about pushing delayed registration success to a shared kiosk.
- Existing mock-product/payment/email scope, points arithmetic, and prior verification choices remain in force. No new native app, actual POS integration, scanning library, staff-authentication implementation, or separate backend service has been chosen. The proposed five-minute onboarding copy is an untested estimate and is distinct from the removed verification-expiry limit.
- Extended general scope guide 07 with channel/device coordination, manual handoffs versus automatic cross-device updates, and distinct purposes of codes. No new learner mastery claimed.
- Reopened the checkout-actor plan item because sales-point operator permissions need review after this scope revision; preserved earlier learning evidence. First-purchase timing and earning without redemption remain open.
- Next question: how should the sales-point flow handle a registered customer who wants to earn points without spending any? No application implementation or tests performed. React hooks practice remains deferred.

### 2026-11-16 — Separation-of-concerns reflection and earn-only checkout

- Learner explicitly recognized that merging checkout and loyalty onboarding had introduced unnecessary complexity and that separating those flows made the design easier. Tutor named the separation-of-concerns principle; this does not imply separate backend services or complete architectural mastery.
- Learner independently described the earn-only scenario: ask for the card, scan it, show the balance and a redemption selector, allow confirmation or Skip, and add earned points after checkout when Skip is chosen.
- Captured the current business meaning: Skip omits redemption, not account association or later earnings. Redeem zero, pay the undiscounted eligible amount, and credit earnings only after successful checkout, carrying forward the existing failure rule. No actual QR scan, balance mutation, or application test has run.
- Added the accepted scenario to the mobile-flow artifact and extended general guide 03 with the broader rule that declining an optional step must preserve explicitly required context and downstream behavior, using a subscription example.
- Next learner task: redraw the current context view with human actors for the revised mobile/sales-point arrangement. Operator authorization remains unresolved; milestone 1 is not complete. React hooks practice remains deferred.

### 2026-11-16 — Backend authority, public demo checkout, and next screen-planning step

- Learner's updated context described customer consent, card scanning, and sales-point requests to the loyalty app. On clarification, learner explicitly placed earned-points and final-balance calculations in the loyalty backend.
- Asked whether the checkout interface should be open to demo participants or require cashier/staff login. Learner chose anyone may use it. Recorded as the public simulated-checkout role; this does not settle customer-account privacy or all API permissions.
- Consolidated the learner's revised actor relationships and earlier payment/email exchanges into the current context artifact. No new service architecture was implemented. Context/actor plan items are supported by these learner artifacts; broader quality scenarios and implementation checks remain open.
- Created step 03 screen inventory/sketch workbook with the learner's artifact left blank. Reused the existing general journey, acceptance-criteria, and scope guides; extended journey guide 02 with a non-demo explanation of screen inventory versus states and modal presentation.
- Next small objective: essential mobile screens, one purpose per screen. Screen layout, sales-point inventory, full brief, remaining criteria, and quality scenarios are unfinished. No application code or tests completed; React hooks practice remains deferred.

### 2026-11-16 — Evidence-based study-gap backlog

- User requested that the gaps identified in the tutoring assessment be documented for later study. Created docs/learning/STUDY_GAPS.md with eight stable review entries and linked concept guides.
- Separated coached distinctions (artifact abstraction, verification evidence, boundary choices) from unassessed implementation skills, unassessed retention/far transfer, open security/product tradeoffs, and self-reported deferred React practice. Preserved the learner's demonstrated strengths rather than relabeling the entire unfinished curriculum as weaknesses.
- Each entry includes observed evidence, a focused non-answered practice task, a success criterion, and relevant references. No scores, completed exercises, persistent misconceptions, or new mastery claims were invented.
- Updated the study index, concept index, project README, learning framework, tutor guide, and AGENTS.md so the backlog is discoverable and maintained at meaningful checkpoints. Product decisions remain separate from learner understanding; the current demo policies were not changed.
- This was a documentation task, not a new teaching assessment. Current task remains milestone 1 step 03: list essential mobile screens with one purpose each. Review topics can be selected one at a time later; no reminders or new prerequisite sequence created. No application code or tests were run.
- Also recorded tutor-process improvements: consolidate demonstrated learning sooner, reduce repetitive follow-ups, park later implementation detail, and ask live questions directly in chat. These are not learner weaknesses. Codex documentation checks passed for 28 Markdown files, 138 local links, eight review entries, and the React-practice reference; the initial backlog prose scan had no high-severity findings.

### 2026-11-16 — Early scaffolding practice selected

- User explicitly requested scaffolding practice with the agreed technologies and no feature implementation. Started a separate study document for this setup activity; no application directories or package configuration have been generated yet.
- Read-only tool checks found the local Node/npm/Corepack/Docker CLI versions recorded in the scaffolding workbook. Supported project runtime, package versions, daemon readiness, and setup scripts remain unverified.
- Next diagnostic is a learner-proposed client/server folder layout. Continue hands-on with one question or setup task at a time. This records a topic change, not new demonstrated understanding. Milestone 1 remains incomplete and React hooks practice stays deferred.

### 2026-11-16 — Package manifests and first npm workspace

- Learner proposed client/server directories and completed the guided initialization commands. Codex verified empty client/server directories initially, then root and server manifests and root workspace registration for server. No client scaffold was found or claimed.
- Learner predicted manifest location from the working directory and independently assigned Express to the server because it handles servers/APIs. Tutor explained root coordination, per-package dependency declarations, shared dependency storage, and the independent-package alternative.
- Learner stated that applications in a workspace can still run separately. Record this as a coached boundary distinction, not independent far transfer or completed architecture mastery.
- Updated the scaffolding workbook and general boundaries guide with package/repository/process distinctions and a non-demo example. Generated test scripts remain placeholders; no application tests or services were run. React hooks practice remains deferred and milestone 1 remains unfinished.
- Next task: learner adds the boolean private field to the root coordinator package. Supported runtime selection and client generation remain pending. Package privacy governs npm publication and does not change the public GitHub repository.

### 2026-11-16 — Root package privacy and runtime preparation

- Learner added the root private field, initially as the string true. Tutor showed the JSON boolean correction; learner edited it and Codex verified `private is True` with the server workspace intact. This single correction is not evidence of a persistent misconception.
- Clarified that the field prevents npm publication of that package; it does not restrict GitHub cloning or govern downloads of an already published package.
- Codex observed Node v25.8.2 active, fnm available, and Node v24.22.3 already installed through fnm. Checked official Node release status (25 EOL, 24 LTS) and Vite runtime guidance. Next task is selecting installed Node 24 and checking its version in the learner terminal. No version switch, client scaffold, or application dependency installation has been performed by Codex.

### 2026-11-16 — Runtime selected and client scaffold generated

- Learner supplied terminal output showing fnm selected Node v24.22.3 and node reported that version. Codex sessions may still use a different runtime; no project pin has been created.
- Learner ran create-vite 9.3.4 with the react-ts template and supplied the resulting client file list. Codex read the client package manifest, Vite and ESLint configurations, source filenames, and root/client lockfile metadata. The generated client has dependencies installed locally. No build or lint checks have run.
- Tutor explained fnm versus Node/npm and its overlap with nvm. Discussed Oxlint versus ESLint using current official documentation; ESLint was recommended for the planned lessons, without claiming Oxlint cannot support the project.
- Learner noticed the root description matches the README. Tutor checked npm's installed extraction code and explained inferred defaults, acceptance with -y, and lack of automatic synchronization. No teach-back of this mechanism has been assessed.
- Next task: learner adds client to the root workspace array. Then consolidate root installation/lockfile handling, pin the runtime, and review actual setup checks. Preserve learner implementation ownership, deferred React practice, and unfinished milestone 1.

### 2026-11-16 — Root installation and first client startup

- Codex verified the learner registered both client and server, retaining the boolean root private field. Learner predicted root installation would not make React a server-declared dependency; subsequent manifests confirmed that prediction.
- Learner ran npm install at root and reported a successful install and zero audit findings. Codex verified React installed at root, workspace symlinks, and root lockfile registration. Root and client lockfiles both remain; cleanup is pending.
- Read-only review confirmed the reported unreviewed fsevents installation script warning under Node 24 npm. It is an optional macOS dependency; no approval/denial was made. Codex's default shell used a different npm without install-scripts, so the successful inspection used fnm exec with Node 24. Do not assume terminal version selection applies globally.
- After guidance to run npm run dev -w client, learner stated they see a basic React app with a counter. Record as learner-observed startup evidence; no Codex browser check, production build, lint, feature, or backend verification occurred.
- Next small objective: explain dev versus build, run the generated production build, and review its actual output. Deferred hooks practice is preserved; interacting with a generated counter does not assess hooks understanding. Milestone 1 remains unfinished.

### 2026-11-16 — Production build and behavior distinction

- Learner predicted that build creates a separate directory with JavaScript compiled from TSX. Tutor clarified scope across the application graph, tsc type checking with noEmit, and Vite output generation gated by &&.
- Learner ran npm run build -w client and provided a successful tsc/Vite build output with 20 transformed modules and emitted dist assets. Codex inspected actual dist files; no build was rerun by Codex and no browser inspection of production artifacts occurred.
- In a changed points-rule scenario, learner correctly explained that build success does not establish actual behavior, then requested more technical wording. Tutor refined the statement: configured static checking and bundling can succeed while validly typed business logic is wrong. This is near-transfer evidence; independent test implementation is unassessed.
- Created a separate general study guide on installation, types, lint, builds, and behavior tests, with a non-demo example and a later transfer exercise. Next live task is the existing client lint script, not the guide's extra exercise.
- Runtime pinning, client lockfile cleanup, root/server generated defaults, server tooling, and the unreviewed optional fsevents script remain open. Deferred hooks practice and incomplete product definition remain recorded.

### 2026-11-16 — Static checks, counter scenario, and client lint

- Learner asked for static-check terminology. Tutor explained source analysis versus executing behavior and supplied isolated type-check examples. Learner then described a counter behavior check: start at zero, click, expect one. Tutor named Arrange/Act/Assert and clarified the UI assertion should inspect the displayed result. No test code or hooks implementation was authored or assessed.
- Learner ran npm run lint -w client and supplied eslint . output with no diagnostics or failure reported. Together with the previous production build and browser observation, this establishes the generated client's initial checks, not completion of the frontend quality milestone or full scaffolding.
- Codex inspected the root lockfile and verified both workspace links and client dependency metadata. The redundant client lockfile remains. Next bounded learner task is deleting only that client lockfile; preserve the root lockfile and installed packages. Runtime pinning and server tooling follow.

### 2026-11-16 — Lockfile cleanup and Node version record verified

- Learner removed the redundant client/package-lock.json. Codex verified absence and the root lockfile still covers server and client.
- Learner asked how to create .nvmrc and its purpose. Tutor supplied a bounded shell command and explained runtime selection versus dependency locking, with fnm/nvm reading the file rather than the file installing Node. Learner reported completion; Codex verified the exact content 24.22.3 and final newline. No auto-switch or CI enforcement was tested.
- Read-only inspection found server/package.json as the server's only file. No backend code, server dependencies, or server tool configuration is present.
- Next small objective: distinguish runtime dependencies from development tools for a compiled JavaScript backend. Ask which of Express and the TypeScript compiler must remain available while that compiled server runs, then proceed with learner-run installation. Do not implement a server endpoint or loyalty feature on the learner's behalf.

### 2026-11-16 — Server runtime and development dependencies verified

- Learner correctly chose Express as the runtime requirement for a compiled JavaScript server, explaining TypeScript source has already been compiled. Tutor named dependencies versus devDependencies; this is scoped reasoning, not an implemented deployment.
- Learner installed Express in the server workspace, then TypeScript and Express/Node type declarations as devDependencies. Codex verified server manifest placement and the root lockfile entries. Node declarations use major 24 to match the selected runtime. Learner reported the second install added 9 packages, audited 239, and found zero vulnerabilities.
- Tutor explained declaration packages and the -D flag. Independent declaration-file understanding, server compiler configuration, and actual server execution remain unassessed.
- Verified no server tsconfig or source directory exists. Next task: ask the learner what tsconfig.json controls compared with package.json, then guide config initialization. Continue scaffolding without writing an application, endpoint, or loyalty behavior. Milestone 1 and later hooks practice remain unfinished.

### 2026-11-16 — Compiler configuration and argument forwarding

- Learner identified TypeScript compilation/static-analysis configuration as the role of tsconfig. Tutor narrowed the scope to TypeScript compiler inputs/checks/output and separated ESLint configuration.
- Learner asked about the standalone -- delimiter in npm commands. Tutor checked current npm documentation and explained forwarding to launched tools. In a changed dev-script example, learner identified the client dev script as the recipient; tutor clarified that Vite receives the port flag. Record as coached command-forwarding evidence.
- Learner generated server/tsconfig.json via npm exec -w server -- tsc --init. Codex inspected the actual generic configuration, including commented rootDir/outDir examples, NodeNext module setting, and strict options. No server source or build result exists.
- Next question: what different responsibilities do rootDir and outDir have? Continue with learner edits, one small setting group at a time, without writing server implementation. Other generic compiler defaults need review; do not mark all server scaffolding or TypeScript skills complete.

### 2026-11-16 — Source layout and include placement corrected

- Learner identified outDir correctly and initially treated rootDir as input selection. Tutor clarified the distinction using official TypeScript docs and an output-path example. Learner activated rootDir src and outDir dist; Codex verified both.
- Learner added include inside compilerOptions. Tutor showed it belongs at project top level; learner recognized the distinction and moved it. Codex read the updated file and verified sibling placement with the src/**/*.ts pattern.
- These are coached corrections with verified edits. No far transfer, persistent misconception, server code, or compiler run has been established. Next task is a diagnostic on browser globals in a Node server, followed by Node environment config. Keep existing strict options while reviewing generic defaults; no application implementation requested.

### 2026-11-16 — Node environment and fixed target reasoning

- Learner explained browser DOM ownership versus the Node/HTTP backend. Tutor introduced separate target, lib, and global types responsibilities.
- Learner challenged ESNext and asked whether a fixed target was best practice. Tutor consulted TypeScript target/lib/types docs and the community Node 24 preset; refined the conservative ES2023 proposal to ES2024. Record the evidence-based adjustment and that runtime compatibility is contextual, not a universal ban on ESNext.
- First edit had retained ES2023, missed a comma, and omitted module. After a small replacement example, learner corrected target/lib to ES2024 and types to node. Codex read the actual file and confirmed those fields and input/layout settings. Module is now esnext rather than the proposed nodenext, so it remains under review.
- Next question: what does module control compared with target? No compiler run, server code, package module mode, or execution strategy has been verified. Continue learner-written configuration; preserve unfinished product definition and React hooks practice.

### 2026-11-16 — NodeNext and ES-module package metadata verified

- Learner explicitly said module versus target was unknown. Tutor explained imports/exports, ES modules versus CommonJS, and NodeNext's integration with package metadata, using primary TypeScript guidance. Keep this concept coached with independent explanation pending.
- Learner set module nodenext and then added type module to server/package.json. Codex inspected both actual files and verified the pair, with ES2024 language/library settings and Node globals intact. Tutor proposed ES modules for this project; no claim that CommonJS is invalid or that the learner independently chose the architecture.
- No source directory or backend code exists; server still contains only its manifest and config. Next small task is removing generic jsx, declaration, and declarationMap settings that are not needed for the current application scaffold. Preserve sourceMap and strict checks. No server compilation or runtime result has been established.

### 2026-11-16 — Server template cleanup and no-emit check

- Learner removed the unused jsx/declaration/declarationMap options. Codex read the file and verified cleanup with the selected environment and strict options preserved.
- Learner created the empty server source placeholder and supplied tsc --noEmit output returning silently to the prompt. Record as a learner-run static-check success for the minimal scaffold, not an Express integration or behavior test.
- Codex verified server/src/index.ts exists and is zero bytes, no server/dist exists, and server scripts still contain only the generated test placeholder. Codex did not rerun the learner's compiler check.
- Next task: learner writes typecheck/build package-script entries from previously practiced commands, with review before execution. This fades syntax support slightly; no independent script-writing competence is claimed before the attempt. Emitted build, metadata cleanup, server quality tools, and later integration work remain open.

### 2026-11-16 — Guided scripts and first server emitted build

- Learner needed help turning compiler commands into package scripts. Tutor showed a typecheck entry and supplied a partial hint for build. Learner wrote typecheck as tsc --noEmit and build as tsc; Codex verified both. This is supported script-writing evidence, not independent fluency.
- Learner predicted server/dist/index.ts; tutor confirmed the directory and corrected the JavaScript suffix to .js. Learner then ran npm run build -w server and listed index.js and index.js.map without diagnostics.
- Codex inspected the empty source, generated JavaScript, and map source path. These match the corrected prediction. No compiler rerun, Express import, HTTP listener, or behavior test was performed.
- Consolidated the scaffolding workbook into current decisions, evidence, unresolved gaps, and the exact next task, avoiding competing historical settings in the step document. Chronology remains here in the log; generalized study guides remain separate.
- Next exercise: learner adds a start script that executes compiled JavaScript with Node, using a partial node path/to/file.js hint. Review before running. Expected empty-module execution would validate basic loading only, not a running backend service.

### 2026-11-16 — Compiled entry script and Node loading verified

- Learner initially added dev with node ./dist/index.js. The command/path were valid; tutor clarified the project naming convention and learner renamed it to start. Codex verified the updated script and the still-empty compiled entry's export marker and source-map comment.
- Learner reported completion without runtime output. Codex then ran fnm exec --using=24 npm start -w server and observed exit code 0. Attribute this runtime check to Codex, not the learner. No compiler checks were repeated.
- Basic module loading now has evidence. There is still no Express initialization, HTTP listener, business implementation, or behavior suite. This does not complete the backend milestone or all scaffolding tools.
- Next question: after editing server/src/index.ts and running npm start -w server without rebuilding, would Node execute the updated source or the previous compiled file, and why? Assess before choosing a development watcher. Preserve the learner's no-feature scope and unfinished product definition/hooks practice.

### 2026-11-16 — Artifact freshness and development workflow chosen

- Learner independently explained that start uses the existing compiled index.js and source edits need rebuilding to appear there. This supports source-versus-artifact understanding; it does not establish wider module-system fluency.
- Tutor compared compiler watch plus Node watch, tsx watch with a separate type check, and native Node TypeScript/watch. Current primary docs were consulted. Learner chose the existing compiler pipeline because alternatives add a runner dependency or have native TypeScript restrictions. Record the preference and tradeoff, not a universal rejection of the alternatives.
- Next task: learner adds dev:build and dev watcher scripts, preserving one-shot scripts, followed by review and a two-command watch check. No runner was installed, watcher started, code changed, or new check claimed. Emission-on-error policy remains an open quality decision.

### 2026-11-16 — Watch scripts and learner change experiment

- Learner initially used build --watch for dev:build. Tutor explained a package-script label is not automatically a shell executable. Learner identified tsc and corrected the entry. Codex verified dev:build uses tsc --watch and dev uses Node watch on dist/index.js, retaining the one-shot scripts.
- Learner reported both commands worked after a comment edit and both failed after introducing an error, interpreting the reactions as evidence of watching. Codex read source and output and found the comment in both; the introduced error was already removed. Exact compiler/runtime errors and whether the watcher processes remained active were not verified.
- Current compiler config does not set noEmitOnError. Tutor consulted its primary documentation: emission despite diagnostics is allowed by default. Do not conclude that the introduced error was a type-only error or that compilation stopped emission.
- Next question is the desired emission policy when type checking fails: replace generated artifacts or leave existing output untouched. A controlled type-only-error test and runtime/watcher distinction remain pending. No watcher process was started or stopped by Codex, no source edited, and no extra runner installed.

### 2026-11-16 — Session close, emission choice, and return to product definition

- Learner chose to keep compiler emission despite errors. Current configuration already uses the documented default false for noEmitOnError, so no application or compiler setting was changed. This is a development-scaffold preference; compiler diagnostics remain failures and do not certify emitted behavior.
- Learner ended the session to rest and explicitly chose product design next, followed by implementing features in the scaffold. Restored milestone 1 step 03 as the exact resume point: essential mobile screens, one purpose per screen. Keep the unfinished product brief, remaining criteria/quality work, and first implementation slice visible; do not automatically continue tooling exercises.
- Learner requested five commits and publication to the existing public GitHub repository. The additional request to save the five requirements definitions is part of this same session-close work, not a cancellation of publication.
- Added a separate five-technique requirements toolkit preserving the requested definitions, connections, a non-demo example, detailed-guide links, and an unanswered transfer exercise. Saving this reference is not evidence of independent application.
- Updated the study backlog to distinguish verified scaffold practice from unassessed business implementation. Preserved deferred React hooks needs and all unanswered learner screen exercises.
- Qualitative tutor review against the teaching skill: diagnosis and artifact inspection exposed concrete configuration/command gaps; partial examples helped after learner difficulty; source/output prediction and workflow tradeoffs supplied useful near-transfer evidence. Improve pacing by batching documentation, grouping related settings, and revisiting coached concepts later rather than extending each tiny edit into another lesson. No rubric scores or retention claims were assigned.

### 2026-11-16 — Publication preparation checks

- Confirmed the existing public repository is p2arthur/loyalty-card-learning-lab and GitHub CLI identity is p2arthur, the account previously authorized by the learner. Five scoped commits will preserve workspace/runtime declarations, generated client, server compiler scaffold, study artifacts, and session continuity.
- Codex ran the current server typecheck script under Node 24 after the temporary error had been removed; exit code 0. The client source was not changed during session-close documentation, so prior learner-run client build/lint evidence was retained rather than represented as new checks.
- Documentation validation checked 32 Markdown files and 164 relative links with no missing targets or unbalanced fences. Package JSON, the Node version record, single-lockfile setup, and generated-output ignore rules were checked. The new definitions guide's prose scanner reported no findings; this is a style aid, not proof of teaching quality.
- The first next-session task remains the learner's mobile screen inventory. No reminder, implementation exercise, or extra setup prerequisite was created for tomorrow.

### 2026-11-16 — Retention warm-up requested for next session

- After the five requested commits were published, the learner asked to test retention next session as well. Start with a short retrieval check of product concepts and one coached tooling distinction, asking one question at a time and assessing the unaided answer before explaining or giving hints.
- First pending question: distinguish a business rule from an acceptance criterion using an appointment-booking example. Later choose one tooling topic based on the recorded gaps, such as module versus target or static checks versus behavior. Do not print the answers before the learner attempts them or impose a long exam/question quota.
- Record unaided explanation, support needed, and any changed-example result after the review occurs. Retention is currently unassessed; this request is not new evidence of mastery.
- Then resume the saved mobile screen inventory. This warm-up does not replace product design or reopen the entire scaffold exercise. No reminder/automation was requested or created.

### 2026-11-17 — Short retention warm-up completed

- Objective: retrieve one product distinction and one coached tooling distinction before returning to product design. Learner was asked to begin without notes; no answer was supplied before the first attempts.
- Product evidence: learner gave a rule limiting appointments to business days, 09:00–18:00, and a Given/When/Then example rejecting a Saturday-evening request. This correctly applied the business-rule versus acceptance-criterion distinction to another product without a hint. Tutor refined the outcome to rejection with no appointment created. This is one sampled retention/application result, not mastery of all five techniques.
- Tooling evidence: learner recalled target concerns emitted JavaScript, but described it as an API version and module as the accepted API version enabling imports. Tutor separated target syntax output, lib API declarations, and module import/export/loading rules using primary TypeScript references. Initial cold recall was partial; no persistent misconception is diagnosed from this attempt.
- After that explicit correction, learner correctly explained that lowering target alone would not turn imports into require when module/package settings stay unchanged. Record this as supported recovery/application, not successful unaided tooling retention. The lib distinction was explained but not independently rechecked.
- Updated G07 with these concept-specific results and the general tooling reference with a side-by-side distinction. No scores, code changes, checks, or completed milestones were invented. Future cold retrieval of module/lib remains for a later technical session.
- Warm-up ends here to preserve the requested product-design session. Next task is the learner's essential mobile screens, one purpose each; leave the inventory blank until their attempt. Deferred React hooks needs remain unchanged.

### 2026-11-17 — First mobile screen inventory

- Learner proposed onboarding to explain earning/redemption/advantages, registration, confirmation after following the email verification link, and a loyalty-card view with balance and Apple Wallet action.
- Recorded the learner's proposal without adding a completed layout, extra screen list, or implementation. It stays within the requested customer-mobile scope; no checkout UI was mixed into the inventory. This supports initial screen-responsibility reasoning, not completed design validation.
- First review focuses on the transition between registration submission and email verification. Ask what the customer sees while pending, without assuming another screen is required. Broader coverage, states/recovery, sales-point screens, sketches, and acceptance criteria remain open.
- Existing general journey/screen-inventory guide remains the relevant reference. Do not restart email-provider responsibility analysis or settled link-lifetime policy merely to design the pending state. No application code or checks were changed.

### 2026-11-17 — Pending verification within registration

- Learner specified that after submitting registration, the app should guide the customer to open email and follow the verification link. When asked where this belongs, learner chose a state of the registration screen rather than a separate screen.
- Recorded the choice within the four-screen inventory without imposing a new page or generating UI. The learner did not yet supply a rationale; do not infer independent mastery of screen-versus-state design from the selection alone.
- Next review asks about available recovery actions if email does not arrive. Keep previously settled verification rules intact and map them into the interface; broader mobile coverage and sales-point screens remain pending. No code or checks changed.

### 2026-11-17 — Pending-state recovery and preserved email input

- Learner proposed a one-minute countdown before offering resend verification. Tutor named this a resend cooldown and distinguished it from the previously settled verification-link lifetime. Exact cooldown start/reset conditions were not independently decided or tested.
- For an incorrect address, learner proposed a Return action from the pending/check-email state to the form, preserving the previous email and selecting its text so it can be seen and cleared/replaced easily. This records learner interaction detail and context preservation; it does not establish working mobile selection behavior.
- Kept existing address-change/link rules intact rather than reopening email-provider architecture. Other form-field retention and cooldown interaction with a corrected address remain later criterion details; they are not blockers for continuing the inventory.
- Next coverage check is the existing MVP requirement to view points transaction history. Let the learner place that capability; do not assume it needs a separate screen. Sales-point inventory, sketches, and the first feature slice are still pending. No UI implementation or checks occurred.

### 2026-11-17 — Loyalty home grouping and initial mobile pass complete

- Learner placed points transaction history on the home screen together with the card and current balance. Recorded this as the existing card view becoming the loyalty home, rather than inventing another screen. The account-overview purpose is a tutor summary of the learner's grouping, not a separately elicited architecture rationale.
- The initial mobile inventory now covers program explanation, registration, verification confirmation, and ongoing card/account access, with pending-registration resend/correction behavior recorded. Marked only the step's initial inventory/review subtask complete. Detailed states, timing/recovery criteria, final coverage walkthrough, sketches, and the full product milestone remain open.
- Next task is the learner's separate sales-point inventory with one purpose per view. Keep the current context/role decisions intact and leave its artifact blank until the learner attempts it. No UI code or application checks changed.

### 2026-11-17 — Registration success becomes a state, then opens home

- While the sales-point inventory was pending, learner refined registration: show email-verification instructions with an indicator, update to success once verification is confirmed, then automatically close that state and show the main/card screen.
- Interpreted this as the customer-mobile flow, consistent with the existing card/home boundary. Learner did not explicitly answer the device question; the follow-up destination supplies the working context. Do not invent a new cashier-side registration or card screen from this reply.
- Updated the current inventory: the original separate verification-confirmation candidate is superseded by an in-registration success state followed by navigation to the existing home. Onboarding, registration, and loyalty home are the current three views. No arbitrary success duration or verification-detection mechanism was chosen.
- Next task returns to the separate sales-point interface using a narrower first-view question. The broader inventory question had not yet received a sales-point proposal. No UI or backend implementation occurred.

### 2026-11-18 — Sales-point interface definition requested

- Learner asked the tutor to define the kiosk/cashier interface. Provided a concrete point-of-sale role/workflow reference using prior decisions: mock order, loyalty identification/enrollment handoff, points choice, simulated checkout, and order/loyalty result.
- Clarified that cashier-operated and self-service are ways to use the sales-point interface; mobile registration and card/account display remain on the customer's phone. Any demo participant may operate the checkout, while backend authority remains unchanged.
- The reference was explicitly requested support, not a learner-created inventory or evidence of independent boundary mastery. It does not prescribe five screens, a second backend, or implemented payment/scanning hardware.
- Next focused scope choice is mock product selection versus a prefilled coffee order as the starting view. Neither was silently selected. No code, application checks, commits, or external publication occurred in this definition task.

### 2026-11-18 — Mock product selection chosen

- After the requested sales-point definition, learner chose mock product selection instead of a prefilled coffee order as the demo's starting view. Recorded that first view and its order-building purpose.
- This is a learner scope preference following tutor-provided alternatives; no independent rationale or complete sales-point design was supplied yet. Product data, quantity/cart interactions, and layout remain for later design rather than being invented here.
- Next task is the loyalty-entry choices when the selected order proceeds toward checkout, before payment. Existing mobile enrollment/card display and backend authority boundaries remain intact. No code, application checks, commits, or publication occurred.
