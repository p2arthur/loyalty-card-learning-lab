# Study gaps and review backlog

Last reviewed: **2026-11-16**. Current curriculum position: milestone 1, step 03, mobile screen inventory.

This is a personal review backlog based on observed explanations and artifacts. Some concepts needed coaching; other skills have not been assessed because their milestones have not started. Neither status means a persistent misconception has been established.

Use one entry at a time when choosing a review exercise. The normal next task remains the screen inventory. No reminders or additional prerequisite assignments are created by this backlog.

## Status and priority

| ID | Topic | Current evidence status | When to revisit |
| --- | --- | --- | --- |
| G01 | Diagram purpose and abstraction | Coached; independent transfer pending | When reviewing the first screen inventory or another context sketch |
| G02 | Validation, delivery, and verification | Revised successfully after coaching; transfer pending | Before implementing registration |
| G03 | Module, deployment, and system boundaries | Explained during tutoring; independent justification pending | Milestone 3 architecture choices |
| G04 | Failure outcomes, retries, and idempotency | Product intent demonstrated; mechanisms unassessed | Milestones 3, 5a, and 7 |
| G05 | Verification and access-control tradeoffs | Open design/security decisions; implementation unassessed | Before real account access or public application deployment |
| G06 | Turning requirements into working code and checks | Not assessed; implementation has not started | Beginning with milestone 2, then throughout the project |
| G07 | Retention and transfer across products | Near transfer demonstrated for points arithmetic; delayed/far transfer pending | A later session or a different feature/domain |
| G08 | React hooks and derived state | Self-reported practice need; not assessed | Milestones 6 and 6a |

## G01. Diagram purpose and abstraction

Evidence: the first response to a context-sketch exercise described detailed registration and checkout prompts. Feedback distinguished that customer interaction flow from a view of people, systems, and their relationships. The learner then supplied provider relationships and the payment reply; later actor labels still benefited from clarification.

Practice: choose a non-demo service, such as university equipment borrowing. Produce a short context sketch and a separate interaction sequence for one borrowing action. Explain what each artifact intentionally includes and why it answers a different question.

Success criterion: a reviewer can identify the actor/system boundary in the context view and the ordered exchanges in the interaction sequence. The learner can explain the distinction without the tutor relabeling the artifacts.

References: [journeys and related views](../concepts/product-engineering/02-user-journey-mapping.md), [boundaries and ownership](../concepts/product-engineering/08-boundaries-ownership-and-trust.md).

## G02. Validation, delivery, and verification

Evidence: an early flow made the email provider report customer verification. After a prompt about the customer's action, the learner revised it: the app generates a link, the email service transports it, and the customer follows it back to the app. A proposed pre-send validity check still needed separation from proof of inbox access.

Practice: describe a school-club signup using three separate facts: the address passes the chosen format checks; delivery is reported; the app accepts a verification request. Explain what each fact establishes and which component owns the account's verified state.

Success criterion: delivery alone does not activate the account in the explanation. The learner identifies the customer action and application validation, and handles an incorrect address without assuming a provider can guarantee future delivery or account ownership.

References: [ownership and verification evidence](../concepts/product-engineering/08-boundaries-ownership-and-trust.md), [learner verification artifact](milestone-01-product-definition/artifacts/02-registration-verification-flow.md).

## G03. Module, deployment, and system boundaries

Evidence: the learner chose internal order handling for the demo and asked whether production would require a separate ordering service. Tutoring explained that a production application can retain modules within one backend and that separate deployment does not automatically mean an external business system. An independent explanation of the tradeoff has not yet been assessed.

Practice: compare one backend with booking and membership modules against two independently deployed services for a fictional club. Name one concrete reason for separation and the coordination cost it introduces. Then explain where an existing third-party booking platform appears in the context view.

Success criterion: the explanation distinguishes responsibility, deployment, and system scope. The learner justifies the choice using a specific requirement rather than assuming production requires microservices or that every responsibility needs a service.

References: [boundaries, ownership, and trust](../concepts/product-engineering/08-boundaries-ownership-and-trust.md), [quality and decision records](../concepts/product-engineering/10-quality-and-decision-records.md).

## G04. Failure outcomes, retries, and idempotency

Evidence: the learner preserved a confirmed order when email failed and kept points unchanged when checkout failed. In a lost-response scenario, the learner proposed finding the existing order and returning its number. Those are useful product requirements. Retry limits/stopping conditions, durable scheduling, request identity, atomic changes, and competing requests remain unresolved or unimplemented.

Practice: use a workshop reservation whose successful server response is lost. Describe a retry of the same attempt, an intentional second reservation, and an outcome the client cannot yet determine. State the invariant and what evidence would later verify it.

Success criterion: the learner distinguishes a known failure from an unknown outcome and explains why retrying must not create a duplicate reservation. A future implementation must prove its guarantee with relevant checks; a check-then-create explanation alone does not establish concurrency safety.

References: [state, failures, and safe retries](../concepts/product-engineering/09-state-failures-and-retries.md), [quality requirements](../concepts/product-engineering/10-quality-and-decision-records.md).

## G05. Verification and access-control tradeoffs

Evidence: the learner bound verification to the current pending email, required a new link after changing it, and later removed clock-based expiry for the simulated demo. The learner also made the mock checkout public without staff login. These are recorded product choices; production security and broader customer-account access have not been demonstrated.

Practice: compare a very short verification window, a longer bounded window with resend, and no clock-based expiry. Explain the usability goal, consequences of an unused link remaining valid, address-change handling, and behavior after first use. Separately identify what a public checkout operator may request and which private customer actions still need their own access rules.

Success criterion: the learner can defend the tradeoff while distinguishing the demo policy from production guidance. Do not silently reverse the chosen demo behavior. Secure link generation, validation, reuse rules, and authorization require their own design and later evidence.

References: [ownership and trust](../concepts/product-engineering/08-boundaries-ownership-and-trust.md), [OWASP email-verification guidance](https://cheatsheetseries.owasp.org/cheatsheets/Email_Validation_and_Verification_Cheat_Sheet.html). OWASP recommends time-limited, single-use verification tokens; it does not prescribe this project's former five-minute rule.

## G06. Turning requirements into working code and checks

Evidence: early scaffolding now has learner-supplied client browser/build/lint and server compiler results, inspected artifacts, and a Codex-run compiled-entry start check. The learner explained source/artifact freshness and chose a development pipeline with reasons. Compiler settings, module/target distinctions, CLI forwarding, and package scripts required coaching; later retention and independent transfer remain pending. No business-feature implementation, behavior test suite, HTTP listener, persistence integration, or deployment has been assessed. This is unfinished curriculum work, not evidence of inability.

Practice when language/HTTP work resumes after product definition: write a small points calculation from the agreed rules, explain units and rounding, and choose normal, boundary, and invalid cases. Later, implement one complete feature and trace its request, validation, persistence, and user-visible outcome.

Success criterion: the learner writes and explains the work, existing appropriate checks provide recorded results, and a changed example still behaves correctly. Do not invent package scripts, passing tests, or prerequisites that have not been created.

References: [scaffolding evidence](milestone-02-language-and-http/01-project-scaffolding.md), [build/type/lint distinctions](../concepts/software-engineering/01-builds-types-lint-and-tests.md), [scenario analysis](../concepts/product-engineering/04-scenarios-and-boundaries.md), [acceptance criteria](../concepts/product-engineering/06-acceptance-criteria-and-bdd.md), [MVP plan](../../MVP_PLAN.md).

## G07. Retention and transfer across products

Evidence: after correcting an early calculation, the learner independently solved the changed $5.55/150-point example and reached 390 remaining points from a starting 500. That demonstrates near transfer of conversion, discounting, net-spend earning, and rounding. Long-term retention and broad transfer have not been checked.

Practice in a later session: without reading the demo rules first, explain one earlier principle and apply it to another product, such as metered subscription credits or a limited-capacity reservation. State units and the rule before calculating. Then compare the explanation with the saved notes and identify any needed correction.

Success criterion: the reasoning survives a changed domain or condition without relying on memorized numbers. Record the date, support used, and explanation. One successful review is evidence at that point, not a guarantee of permanent mastery.

References: [business rules](../concepts/product-engineering/03-business-rules-and-decisions.md), [learning framework](../../LEARNING_FRAMEWORK.md).

## G08. React hooks and derived state

Evidence: practice distinguishing `useState`, `useMemo`, and `useCallback` was requested before implementation. A reference summary exists, but there has been no independent explanation, code, prediction, or transfer assessment. Do not label this as a diagnosed misconception.

Practice at milestones 6 and 6a: start with transaction history and a search input. Identify source state and derive the visible list. Later investigate functional updates, dependency identity, stale closures, memoized children, and whether measurements justify caching. Transfer the reasoning to a different interface after the first exercise.

Success criterion: the learner can predict state and dependency behavior, write a correct implementation, and justify using or omitting each hook in a new example. Performance claims need evidence; a memoization hook is not proof of correctness.

References: the [focused React checklist](../../MVP_PLAN.md#focused-practice-state-calculated-values-and-function-references) and the requested-practice section of [the learning log](../../LEARNING_LOG.md).

## Evidence worth preserving

The backlog should not erase what has been demonstrated. Preserve the independent checkout arithmetic, the learner's diagnosis of unnecessary onboarding/checkout coupling, the earn-only flow that retains account association, the distinction between checkout failure and notification failure, and the explicit placement of balance authority in the backend.

Use these as starting points for retrieval rather than restarting every concept from its definition.

## Open product decisions are a separate backlog

Track these in the current step and plan; they are not automatically learner weaknesses:

- Remaining email retry timing, stopping rules, and same-address resend/reuse behavior.
- First-purchase/account association if registration or verification finishes later.
- Actual camera scanning versus a mock scan, and the QR payload/access design.
- Customer-account access rules beyond public use of the simulated checkout.
- Remaining screens, the consolidated brief, full acceptance criteria, and measurable quality scenarios.

## Tutor process improvements

The session assessment also identified a teaching-process issue: some email and boundary follow-ups became more repetitive than necessary. This is a workflow improvement for the tutor, separate from the learner's review needs.

Keep each small objective tied to an artifact and a success criterion. Once an explanation and changed example provide enough evidence, consolidate the result and move on. Park implementation-level details in the appropriate later milestone instead of making every open question block product definition. Batch routine note updates at meaningful checkpoints.

Ask live tutoring questions directly in chat, one at a time. Reduce support after demonstrated success and give the learner room to produce the next artifact independently. Do not treat a different sound design choice as a failure to guess the tutor's preferred answer.

## How to update this file

At a relevant learning checkpoint, add the learner's new evidence, support used, and date to the matching entry. Move a coached topic to independently demonstrated only after an explanation and changed example support that status. Keep later retrieval separate from implementation evidence.

Record product changes in their project step, and learning evidence in [LEARNING_LOG.md](../../LEARNING_LOG.md). Do not close entries because a reference was written or mark a topic failed simply because it has not yet been taught. The tutor introduces one selected review task at a time.
