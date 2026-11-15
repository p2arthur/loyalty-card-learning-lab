# Product discovery and requirements analysis

## Start with the outcome

Product discovery investigates who has a problem, how they handle it now, and which changes might help. Requirements elicitation draws out needs, expectations, rules, and constraints. Requirements analysis examines those statements for ambiguity, conflict, missing cases, and consequences.

An interview can uncover a need. A requirements conversation can make a proposed solution internally consistent. These are different kinds of evidence. A perfectly specified feature can still solve an unimportant problem.

[GOV.UK's user-research guidance](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) emphasizes learning from actual users and treating unsupported opinions as assumptions. That distinction matters when a founder, engineer, or tutor supplies the product idea.

## Separate the statements

Consider a fictional equipment-rental service:

| Statement | Kind of statement | What it needs next |
| --- | --- | --- |
| A technician needs to know whether a suitable drill is available before traveling | Proposed user need | Observation or interviews about the current difficulty |
| Add a live inventory map | Proposed solution | Comparison with simpler ways to meet the need |
| Customers will trust the displayed availability | Assumption | Evidence about accuracy and user confidence |
| A confirmed reservation holds one physical item | Business requirement | Precise rules and scenarios |
| The service must work with the existing stock system | Constraint | Investigation of its interface and failure behavior |
| Reservation confidence improves | Desired outcome | A definition and a practical way to observe it |

Calling every row a requirement hides important uncertainty. Keep the source of a statement and its evidence visible. A stakeholder can authorize a policy, but that does not verify that users find it useful.

## A practical discovery pass

Choose an actor and a concrete situation. Describe the task they are trying to finish, the current workaround, and the consequence of failure. Include the people who operate and support the service; their constraints can shape what customers experience.

Collect evidence before settling on one interface. Ask about a recent real event rather than only asking whether someone would like a proposed feature. Compare a few possible responses to the problem, including process changes that need little software.

Then analyze the intended behavior. Define terms, decision rules, allowed actions, and failure outcomes. Keep unresolved questions explicit. [Example Mapping](https://cucumber.io/docs/bdd/example-mapping/) offers a useful structure: a story connected to rules, concrete examples, and unanswered questions.

The output can be a short problem statement, a set of supported observations, a table of assumptions, and the next small experiment. It need not be a large specification.

## Worked example: the inventory problem changes

Suppose interviews reveal that customers already phone the rental desk and can get availability information quickly. Their actual difficulty is that an item disappears between the call and arrival.

The live-map proposal addresses visibility, while the observed problem concerns commitment. A small reservation-and-confirmation flow may be a better candidate. Before building it, investigate whether staff can reliably set stock aside and how long a hold should last. Those operational questions become product and engineering requirements.

This is an example of revising the problem definition when evidence changes. The [Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/) provides a broader frame for exploring the problem, defining it, exploring solutions, and testing them. Its stages support iteration; they do not make research a one-time prerequisite.

## Mistakes to watch for

Do not treat agreement in a planning meeting as evidence of demand. Avoid writing needs in terms of the feature you already want: "needs a map" conceals the underlying goal. Keep policy disagreements visible instead of resolving them accidentally through interface behavior.

Requirements discovery also continues after release. Support cases, abandoned flows, and unexpected use can reveal needs the first conversation missed.

## Transfer exercise

For a fictional appointment service, classify six statements of your own as needs, solutions, assumptions, rules, constraints, or outcomes. Choose the most consequential unsupported assumption and propose one way to investigate it.

Success means your proposed observation could change a product decision, and you can explain why agreement alone would not settle it.

Continue with [user journey mapping](02-user-journey-mapping.md) and [scope and prioritization](07-scope-and-prioritization.md). Introduced alongside milestone 1; independent discovery research has not been performed in the demo.
