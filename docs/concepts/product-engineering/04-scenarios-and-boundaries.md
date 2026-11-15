# Scenario and boundary analysis

## Examples challenge an incomplete rule

A scenario describes a starting situation, an action or event, and the expected outcome. A normal example makes a rule tangible. A carefully changed example reveals whether the rule is precise enough to handle conditions the first example avoided.

The technique applies during discovery, design review, test planning, and debugging. Before code exists, a scenario can expose a missing product decision. After implementation, the same scenario can become a test or investigation.

## Choose examples for different reasons

An **equivalence partition** groups inputs expected to receive the same kind of treatment. **Boundary value analysis** examines edges of ordered partitions, where rules change. Decision-table testing explores combinations; state-transition testing examines allowed changes over time. These distinct techniques are introduced in [ISTQB's foundation syllabus, sections 4.2.1–4.2.4](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf).

Use that vocabulary to explain why you chose an example. A large collection of arbitrary inputs can still miss the important change in behavior.

## Worked example: room capacity

Assume an illustrative reservation policy accepts an integer group size from 1 through 10 inclusive.

| Kind of example | Input | Question exposed |
| --- | ---: | --- |
| Ordinary valid input | 4 | Does the main flow work? |
| Lower edge and neighbors | 0, 1, 2 | Is the minimum inclusive? |
| Upper edge and neighbors | 9, 10, 11 | Is the capacity inclusive? |
| Different invalid partition | 2.5 | Are fractional people rejected? |
| Missing or malformed data | absent, text | Is the request validated at runtime? |

These examples target the rule about group size. They do not establish room availability, membership permission, or behavior under concurrent reservations. Add scenarios for those responsibilities rather than treating one set of boundary values as complete coverage.

Suppose the product later allows a capacity that varies by room. A hardcoded ten-person limit can now pass the old examples while violating the new requirement. Keep the examples connected to the current rule and use more than one room when testing the configurable limit.

## Extend from values to time and failure

Check the instant before a deadline, the deadline itself, and the instant after it, using a defined clock and precision. A date label alone does not settle a timezone or whether an end time is inclusive.

For a network operation, consider a request that never reaches the server, one rejected before making changes, and one committed whose reply is lost. The client may observe the same timeout in cases with different actual outcomes. That requires [failure and retry reasoning](09-state-failures-and-retries.md), not just more numeric test values.

Also consider two actors operating on the same resource. A room available during two independent reads may not be available for two commits. This reveals a concurrency requirement even if the product rule itself is simple.

## Keep the inquiry focused

Change one factor when diagnosing a particular uncertainty so you can explain what the example reveals. Later combine factors deliberately to test their interaction. Record unresolved expected outcomes as questions instead of letting the first implementation choose them.

When reviewing an example, identify the observable result: accepted or rejected, resulting resource state, and useful feedback. A status message alone may conceal an incorrect persistent change.

## Transfer exercise

For an upload service with an illustrative 20 MB inclusive limit, define the size unit and precision. Choose a normal case, boundary cases, and a malformed input. Then add one interrupted-upload scenario and state which product question it raises.

Success means each example has a purpose and the expected result follows from an explicit rule. Extend the result into [acceptance criteria](06-acceptance-criteria-and-bdd.md); avoid claiming that a selected set proves all possible behavior.
