# Scope, assumptions, and prioritization

## Scope is a decision about learning and value

A useful first release has a coherent purpose, an identifiable audience, and an outcome that can be observed. A short feature list can still fail to provide an end-to-end experience. A larger list can consume time without addressing the riskiest assumption.

Choose scope by asking what outcome matters and what uncertainty the next increment should resolve. [GOV.UK's discovery guidance](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) describes understanding the problem and constraints before committing to a service, including deciding whether further work is worthwhile.

## Separate several kinds of uncertainty

A proposed equipment-reservation product might depend on these assumptions:

| Assumption | What is uncertain? | A possible investigation |
| --- | --- | --- |
| Renters need advance reservations | Whether the problem matters | Observe current booking and collection experiences |
| They understand the hold policy | Whether the flow communicates well | Test a simple prototype with likely users |
| Stock can be reserved accurately | Technical and operational feasibility | Exercise a small stock-hold workflow with staff |
| The service is sustainable | Operating effort and value | Estimate handling effort and inspect a small trial |

These investigations answer different questions. A technically successful prototype does not verify demand, and a positive interview does not establish inventory correctness.

The examples are possible methods, not evidence that these assumptions are true. State what result would lead you to change direction before performing an experiment.

## Choose a complete slice

For an illustrative first increment, allow a renter to reserve one item, receive a clear reference, and have staff find and close the reservation. That connects the user's task with the operational work that makes the promise real.

Supporting ten item categories, promotion codes, and a recommendation feed may add breadth while leaving collection unresolved. A thin end-to-end slice reduces breadth while keeping the selected promise coherent. Include the failure behavior and permissions required for that slice to be usable.

An MVP, a prototype, and a learning demo can have different goals. A prototype may test understanding of a flow while simulating persistence. A usable release needs the guarantees its users rely on. A learning demo can deliberately mock an external service while recording what that substitution does and does not verify.

## Make prioritization explainable

Compare candidate work using the outcome served, strength of supporting evidence, uncertainty reduced, dependencies, effort, and consequence of failure. A scoring framework can help organize discussion, but numbers based on guesses do not make the choice objective.

Write the tradeoff in plain language: "We will support one collection location so we can evaluate reliable reservations before adding cross-location transfers." Record what remains excluded and what evidence would cause that boundary to change.

Security, correctness, and accessibility requirements that protect the selected experience belong in its scope. Calling them future work does not make the current promise reliable. Their exact level should be explicit and appropriate to the audience and use.

## Measure the intended outcome

Distinguish output from outcome. Shipping a reservation screen is an output. Helping renters arrive with a usable, honored reservation is an outcome. Decide what evidence would indicate progress, such as successful collections and reasons for unsuccessful ones, while accounting for operational exceptions.

An early experiment may produce qualitative evidence rather than a statistically reliable metric. State the limitation instead of turning a few successful trials into a general claim.

## Transfer exercise

Define a first slice for a school club managing workshop attendance. State the user outcome, one risky assumption, what you would build or simulate, and one excluded feature with a reason.

Success means the slice completes a meaningful task and its evidence could change the next priority. Related: [discovery](01-discovery-and-requirements.md), [journey mapping](02-user-journey-mapping.md), and [quality tradeoffs](10-quality-and-decision-records.md).
