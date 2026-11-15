# Acceptance criteria and behavior-driven development

## Make the expected outcome decidable

An acceptance criterion states an observable condition that must be satisfied for a particular requirement or behavior to be accepted. It connects a product intention to evidence someone can inspect.

"Reservations should be easy" expresses a goal but leaves acceptance open. "A successful reservation displays a reference and holds one available copy for the borrower" identifies observable behavior. Usability still needs its own investigation and criteria.

## Given, When, Then

This structure separates the relevant starting situation, the action or event, and the expected outcome. It works in ordinary prose; a tool is optional.

Here is an illustrative library example:

```gherkin
Given a verified borrower has two active loans
And a particular book copy is available
When the borrower completes a loan for that copy
Then one new loan is recorded for that borrower and copy
And the borrower has three active loans
And the copy is unavailable for another loan
```

This example depends on an illustrative three-loan limit. A rejection example would cover a borrower already at that limit and explicitly state that no new loan is recorded. Both examples should point back to the same rule.

Describe behavior at the level useful to the audience. "Click the blue button in the second panel" can make a product criterion depend on a temporary layout. [Cucumber's Gherkin guidance](https://cucumber.io/docs/bdd/better-gherkin/) recommends expressing intended behavior so interface changes do not force unrelated requirement changes.

## Criteria, examples, and tests

A rule can cover many situations. An acceptance criterion states an acceptance condition; a concrete scenario illustrates it with particular facts. An automated test executes a check against software. These artifacts can support each other without being interchangeable.

A passing test establishes what that test actually observes under its conditions. A browser test checking only a success message can miss two orders accidentally stored by the server. Choose assertions that reflect the promised outcome, including resulting state when relevant.

Some requirements also need operational measurement or user research. A short Given/When/Then example cannot by itself establish accessibility, usefulness, or reliability at a real workload.

## Where BDD fits

[Behavior-Driven Development](https://cucumber.io/docs/bdd/) combines collaborative discovery, formulation of examples, and automation. Its purpose includes shared understanding across product, engineering, and testing perspectives. The conversation can reveal that the proposed feature should be smaller or that a rule is still undecided.

Writing Gherkin after implementation without discussing the behavior misses much of that benefit. Conversely, a useful discovery conversation need not immediately produce a large automated scenario suite. Keep the scope small enough to learn from feedback.

## Reviewing a criterion

Check that the starting conditions are sufficient and relevant. The action should make sense to the actor or system being described. The expected result should expose a meaningful outcome and any important unchanged state.

For a failed loan request, say that the copy remains available and no loan is added if those are the guarantees. For an asynchronous request, define whether the immediate result is confirmation of completion or only acknowledgement that processing has started. Use separate scenarios when different rules or failure modes need independent explanations.

Avoid choosing technical response codes in a business-facing criterion unless they are part of a real caller contract. They can be added to more technical contract examples later.

## Transfer exercise

Write two acceptance scenarios for a limited-capacity workshop: one successful reservation and one rejected request. Include the resulting seat availability and explain how the rejected request preserves state.

Success means another person can distinguish correct behavior from a plausible faulty implementation without guessing the policy. Continue with [scenario analysis](04-scenarios-and-boundaries.md) and [quality requirements](10-quality-and-decision-records.md).
