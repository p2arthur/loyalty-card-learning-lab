# Business rules and decision modeling

## Rules make policy explicit

A business rule states a policy, constraint, eligibility condition, or calculation that governs a product's behavior. A workflow describes how an activity progresses. An algorithm describes a method of calculation or processing. Keeping the policy understandable helps the team change the mechanism without accidentally changing the product.

For example, "a member may hold at most three active reservations" is a rule. "Open the account page and press Reserve" is an interface procedure. The reservation limit should remain meaningful if the service later accepts requests through a mobile app or staff console.

## Terms, facts, and invariants

Start by defining the terms a rule depends on. Does "active" include a reservation waiting for approval? Is a limit per person, household, or organization? What time determines whether an item is overdue?

An **invariant** is a condition that must hold at the relevant consistency boundary. "Reserved quantity never exceeds capacity" is stronger than a message saying an item looked available when the screen loaded. Enforcement has to survive the ways state can change.

A calculation also needs explicit units, rounding, and scope. Specify whether a quota counts minutes, complete hours, or calendar days, and whether rounding applies per session or to the monthly total. A rate without those decisions leaves multiple valid implementations.

## Decision tables reveal interactions

A decision table connects conditions to outcomes. It is useful when independently reasonable rules can overlap. The [ISTQB foundation syllabus, section 4.2.3](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) covers decision tables as a way to analyze combinations. Here we use one as a product-policy artifact before implementing tests.

Suppose a fictional rental service has these policies: an account must be verified, must not be suspended, and must have fewer than three active reservations.

| Verified? | Suspended? | Active reservations | Outcome |
| --- | --- | ---: | --- |
| No | Either | Any | Reject; verification required |
| Yes | Yes | Any | Reject; account suspended |
| Yes | No | 0–2 | Reservation may proceed if stock is available |
| Yes | No | 3 or more | Reject; reservation limit reached |

"Either" and "Any" compress conditions that do not affect that row's outcome. They must not conceal an unresolved priority. The table deliberately says that verification takes precedence in the user-facing response. A different service could select another explanation or return several failures; the team must choose.

Now add "staff may override the limit." That is not just another button. It changes authorization, audit needs, and the table. Decide whether staff can override suspension too, rather than letting an overly broad override bypass every rule.

## A useful analysis workflow

Write a rule in ordinary language. Identify its inputs and authoritative facts. Supply a normal example, an exact boundary, and a conflicting-condition example. Define whether an invalid request is rejected or adjusted, and what explanation the caller receives.

Review the rules with someone responsible for the policy. Then connect each rule to acceptance criteria and an intended enforcement boundary. [Example Mapping](https://cucumber.io/docs/bdd/example-mapping/) helps keep those rules beside their examples and unanswered questions.

Do not introduce a rule engine solely because a table exists. A small explicit calculation or decision function may be sufficient. More complex policy tooling needs a reason, such as frequent changes by policy owners and a practical way to review them.

## Define what skipping an optional action preserves

An optional step needs a precise outcome when declined. For an illustrative subscription renewal, identifying the customer's account and buying extra storage are different decisions. Skipping the storage upgrade can preserve the account and continue the base renewal; cancelling the renewal is another outcome entirely.

State which association remains, which change is omitted, and which later rules still execute. A generic Skip label does not define those effects by itself. Include the unchanged state in acceptance criteria so an implementation cannot accidentally discard the context needed for the rest of the workflow. This distinction also appears in booking without extras, saving without publishing, and purchasing without redeeming a benefit.

## Common mistakes

Vague words such as eligible, recent, and valid need definitions. Hidden ordering can make results depend on which conditional happens to execute first. Client-only enforcement can fail when requests arrive through another route. Confusing a rule with a temporary implementation restriction can also make an accidental limitation permanent.

## Transfer exercise

Write rules and a decision table for a shared meeting room. Consider membership status, remaining booking allowance, and room availability. Add a request that violates two conditions, and state which outcome it receives.

Success means every considered combination has a deliberate outcome and you can defend the conflict policy. See [boundary analysis](04-scenarios-and-boundaries.md) and [ownership and trust](08-boundaries-ownership-and-trust.md) for the next questions.
