# Quality requirements, tradeoffs, and decision records

## Replace vague quality goals with scenarios

Words such as fast, secure, reliable, and maintainable express intentions but leave the expected behavior unclear. A useful quality requirement identifies a situation, the response required, and how someone can decide whether it is satisfied.

[arc42's quality-requirements guidance](https://docs.arc42.org/section-10/) describes concrete, measurable usage and change scenarios. A usage scenario can examine runtime behavior under load or failure. A change scenario can examine the effect of modifying the system.

The goal is to make a consequential expectation reviewable. A number without its conditions can be just as vague as an adjective.

## Worked scenarios for a fictional booking service

The thresholds below are invented study targets, not recommended benchmarks:

| Quality concern | Situation | Required response | Evidence to collect |
| --- | --- | --- | --- |
| Correctness | Two students compete for the final seat | At most one reservation becomes confirmed | Coordinate concurrent requests and inspect final state |
| Access control | A signed-in student requests another student's private booking | Access is denied and private details are not returned | Exercise the actual protected endpoint |
| Performance | 50 concurrent users query availability against an agreed dataset | At least 95% of responses complete within 500 ms | A repeatable load test with the environment recorded |
| Recoverability | Confirmation email delivery fails after booking commits | The reservation remains retrievable and delivery can be retried | Simulate provider failure and inspect recovery |
| Changeability | The booking limit changes from three to four | The policy changes within the agreed module boundary | Make a temporary change and inspect affected modules and tests |

These concerns may interact. Stronger consistency can affect contention and latency. Caching can improve response time while making displayed availability stale. Explain the tradeoff in the context of the promised behavior.

## Match verification to the claim

A deterministic unit test can check a pure rule. A database-backed concurrency test can examine a persistence guarantee. An import rule can reject a selected dependency. User observation can reveal whether a recovery message is understood. Each produces evidence at a different boundary.

Do not substitute an easy measurement for the property you care about. Code coverage does not establish correct business rules. A polished screenshot does not establish keyboard usability. A single quick request does not establish a response-time target under load.

Use the smallest credible check for the specific claim, then retain broader checks for interactions that smaller tests cannot cover. Document what remains unverified.

## Record why a consequential choice was made

An **Architecture Decision Record (ADR)** captures the context, decision, status, and consequences of a significant architectural choice. [Michael Nygard's original description](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions) explains why the reasoning behind a decision matters to future changes.

A useful record also makes the plausible alternative and the evidence clear. Add a condition that would cause the choice to be revisited. Keep an accepted decision distinct from an experiment or proposal.

For the booking example, a small record might state that one backend and one database will own reservation changes because the team needs a clear transaction boundary and has no current need for separate deployments. Its consequences include simpler coordination and a shared release lifecycle. Independent scaling or a different ownership structure could justify reconsidering it later.

That is a reasoned choice in one context, not proof that every product should use the same structure. Business-policy decisions can use a similar short record, but not every detail needs the label "architectural."

## Avoid documentation becoming a ritual

Record choices that affect responsibilities, dependencies, important guarantees, or costly future changes. Small records close to the work are easier to keep useful than a speculative catalogue of decisions that have not been made.

When a decision changes, mark what superseded it and preserve the original rationale. A future reader should be able to distinguish an obsolete decision from the current rule without reconstructing a chat.

## Transfer exercise

For a school equipment service, write one correctness scenario and one changeability scenario. Choose a relevant design alternative and draft a short decision record explaining your choice and the evidence you would seek.

Success means a reviewer can tell what to verify, under which conditions, and what might make the decision change. Related: [boundaries](08-boundaries-ownership-and-trust.md), [failure behavior](09-state-failures-and-retries.md), and [scope](07-scope-and-prioritization.md).
