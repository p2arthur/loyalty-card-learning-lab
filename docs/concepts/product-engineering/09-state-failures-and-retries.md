# State, failures, consistency, and safe retries

## A timeout describes knowledge

When a client waits for a response and times out, it knows that it did not receive the expected reply in time. It does not necessarily know whether the server made the requested change.

That distinction affects product messages, retry controls, support tools, and persistent data. "Could not confirm the reservation" can be more accurate than "Reservation failed" when the server's outcome is still unknown.

## Model the lifecycle

A state model defines meaningful states and permitted transitions. For an illustrative workshop reservation, the business states could include requested, confirmed, rejected, and cancelled. The client might separately be checking the outcome or unable to contact the server.

Do not automatically store "unknown" as the reservation's actual business state. It may describe the client's limited knowledge of a reservation that is already confirmed. The exact representation depends on the product and processing model.

| Situation | Actual outcome | What the client may know |
| --- | --- | --- |
| Request never reaches the server | No reservation created | No reply received |
| Server rejects before changing state | Reservation rejected | Rejection if the reply arrives |
| Server commits and the reply arrives | Reservation confirmed | Confirmation and reference |
| Server commits but the reply is lost | Reservation confirmed | No reply received |

The first and last rows can look identical to the user. Treating every retry as a new reservation can therefore create duplicates.

## Identify the same intent

**Idempotency** means repeating an operation has the same intended effect as performing it once. For a create-style API, a common design gives one logical attempt a stable identifier reused on retries. An intentional second reservation uses a different attempt identifier, even if its other details match.

[AWS's Builders' Library](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) discusses caller-provided request identifiers, parameter mismatch handling, atomic recording of results, and useful equivalent responses. A key is only part of the design: define its scope, retention, behavior for concurrent requests, and what happens if the same key arrives with different input.

Returning the original reservation reference helps the user recover the result. Merely checking for an existing reservation and then creating one in a separate unprotected step can still race with another request.

## Atomicity and consistency

If one successful booking consumes a seat and creates a reservation record, those related persistent changes must preserve the chosen invariant. **Atomicity** gives an all-or-nothing boundary for participating changes. [PostgreSQL's transaction introduction](https://www.postgresql.org/docs/current/tutorial-transactions.html) explains that guarantee for database operations.

Atomicity alone does not specify the business rule or automatically prevent all competing-request anomalies. The implementation must also choose constraints and concurrency control appropriate to the invariant, then test the actual failure cases.

A local database transaction does not automatically include an external email or payment service. Keep those boundaries visible. Some effects need later delivery, reconciliation, or compensation. For example, a confirmed seat can remain confirmed while email delivery is retried. If delayed delivery is acceptable, define how the user can retrieve the reference meanwhile.

## Retry policy is a product decision too

Retries can recover transient failures, but unlimited immediate retries can increase load and worsen an outage. Choose which failures may be retried, a bounded policy, and what feedback is truthful at each stage. Backoff and jitter can help spread retry traffic; they do not provide duplicate protection.

After the attempt limit, define how to learn the authoritative outcome. A "try again" button must be clear about whether it resumes the same logical attempt or starts a different one.

## Transfer exercise

A student reserves the final workshop seat. The server confirms it, but the reply is lost and the browser retries. Describe the states and visible outcomes, identify what should remain stable between attempts, and state the persistent invariant.

Success means your design explanation handles both duplicate delivery and an unknown client outcome without claiming that a timeout proves failure. Implementation details can remain a later exercise. Related: [boundary analysis](04-scenarios-and-boundaries.md) and [quality requirements](10-quality-and-decision-records.md).
