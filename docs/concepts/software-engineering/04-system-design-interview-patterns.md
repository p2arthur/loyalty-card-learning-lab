# System design interview patterns

The product in an interview can change from a news feed to a checkout system, while the same engineering problems recur. Use this sheet to identify the bottleneck, pick a pattern that addresses it, and explain the cost of that choice.

## Traffic, reads, and storage

| # | Pattern | Use it when | Interview examples | Tradeoff to explain |
| --- | --- | --- | --- | --- |
| 1 | Load balancing | Requests need to be spread across healthy instances. | High-traffic APIs, checkout systems | Health checks, uneven load, and whether requests need to reach the same instance. |
| 2 | Caching | Repeated reads keep paying the same compute or database cost. | News feeds, product catalogs | Acceptable staleness, cache keys, and what happens on a miss or invalidation. |
| 3 | CDN | Users far from the origin need faster delivery of cacheable content. | Video streaming, image hosting | Cache eligibility, which request fields change the response, and freshness at the edge. [HTTP caching](https://www.rfc-editor.org/rfc/rfc9111.html#section-2) |
| 4 | Database sharding | One database can no longer handle the write throughput or data volume. | Messages, user activity | Shard-key choice, hot shards, rebalancing, and cross-shard queries or transactions. |
| 5 | Replication | Additional copies improve availability, read capacity, or both. | Catalogs, reporting systems | Replication lag, read-after-write behavior, and failover. |
| 6 | Consistent hashing | Changing the set of serving nodes would otherwise remap too many keys. | Distributed caches, storage nodes | How keys move when a node joins or leaves, and how to handle uneven load. |

## Background work and events

| # | Pattern | Use it when | Interview examples | Tradeoff to explain |
| --- | --- | --- | --- | --- |
| 7 | Batch processing | A bounded workload can run periodically or on a schedule. | Billing, daily analytics | Freshness, how to rerun a failed batch, and how to handle late records. |
| 8 | Stream processing | Events need to be processed continuously with low delay. | Fraud detection, live tracking | Ordering, duplicate events, and how long to wait for late data. |
| 9 | Message queues | Work can finish asynchronously and arrivals are burstier than worker capacity. | Emails, video processing | Backlog age, worker capacity, and safe handling of retries and duplicate delivery. |
| 10 | Publish-subscribe | Multiple independent consumers need the same update. | Alerts, live scores | Per-subscriber delivery, ordering, and how a slow subscriber catches up. |
| 11 | Event-driven architecture | A change triggers several workflows that can run independently of the initiating request. | Orders, ride tracking | Event contracts, eventual consistency, and tracing a workflow across consumers. |

## State changes and consistency

| # | Pattern | Use it when | Interview examples | Tradeoff to explain |
| --- | --- | --- | --- | --- |
| 12 | CQRS | Reads and writes benefit from different models. | Ledgers, order histories | How the read model is updated and what freshness reads need. Both models can share a data store. [CQRS](https://martinfowler.com/bliki/CQRS.html) |
| 13 | Event sourcing | The business needs to reconstruct state from its complete history of domain events. | Transaction histories, audit-heavy workflows | The event log is the source of truth. Explain replay, event evolution, and snapshots. [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) |
| 14 | Saga pattern | A workflow spans services that each commit their own local transaction. | Travel booking, food delivery | Which steps can be compensated, what users see in intermediate states, and recovery when compensation fails. [Saga orchestration](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga-orchestration.html) |
| 15 | Transactional outbox | A committed database change must reliably lead to publishing an event. | Payments, order notifications | Write the outbox record in the same transaction, then relay it. Plan for duplicate delivery and monitor the relay backlog. [Transactional outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html) |
| 16 | Idempotency | Retrying an operation could apply its side effect twice. | Payments, webhook processing | How an operation is identified, how duplicate detection stays consistent with the change, and what happens if the same key arrives with different input. [AWS Builders' Library on safe retries](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) |

## Overload, failures, and coordination

| # | Pattern | Use it when | Interview examples | Tradeoff to explain |
| --- | --- | --- | --- | --- |
| 17 | Rate limiting | A client or operation can send more requests than the system should admit. | Login attempts, public APIs | The limit's scope, how much burst is allowed, and what feedback clients receive. |
| 18 | Circuit breaker | Repeated failures make more calls to a dependency costly or unlikely to succeed. | Payments, recommendation services | When to fail fast, which fallback is safe, and how to probe for recovery. [Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html) |
| 19 | Retry with backoff | A transient failure may recover and the operation is safe to retry. | External APIs, cloud storage | Set a retry budget, cap the delay, and add jitter to spread retries across clients. [AWS Builders' Library on backoff](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) |
| 20 | Backpressure | Producers can keep sending work faster than consumers can process it. | Log ingestion, streaming analytics | How consumers signal capacity and what you do when a bounded buffer fills. |
| 21 | Leader election | Multiple nodes are eligible to coordinate the same work. | Schedulers, partition ownership | How leadership expires or is reassigned and how stale leaders are prevented from acting. |
| 22 | Distributed locking | Processes on different nodes need to coordinate access to a shared resource. | Seat booking, inventory | Lock scope, lease expiry, and how the protected store rejects stale writers. For data in one database, consider a transaction or atomic conditional update first. [Distributed locking and fencing](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html) |

## Fan-out and discovery

| # | Pattern | Use it when | Interview examples | Tradeoff to explain |
| --- | --- | --- | --- | --- |
| 23 | Fan-out strategies | One change affects many recipients or many views. | Social feeds, notifications | Fan-out on write shifts work to publishing. Fan-out on read shifts it to retrieval. Explain how high-follower accounts affect the choice. |
| 24 | Search indexing | Finding relevant text by scanning source records is too slow. | Product search, document search | Ranking, index freshness, and how updates or deletions reach the index. [PostgreSQL text search indexes](https://www.postgresql.org/docs/current/textsearch-indexes.html) |
| 25 | Geospatial indexing | Queries need to find nearby entities or entities inside an area. | Drivers, restaurants, deliveries | Location update frequency, bucket or index granularity, and when to check the exact distance. [PostGIS distance queries](https://postgis.net/docs/ST_DWithin.html) |

## How to use the sheet in an interview

1. State the main user action, the workload that matters, and one rule the system must preserve.
2. Describe the simplest design that could meet those requirements. Identify where it is likely to hit a limit.
3. Choose the pattern that addresses that limit. Name its cost, one failure case, and the signal that would tell you whether it helped.

## Worked example

A ticket sale draws a burst of traffic, and each seat can be sold only once. Use an atomic database write to enforce that rule. Event descriptions can be cached because they tolerate a short delay. Give purchase attempts an idempotency key so a timeout and retry cannot create a second purchase. If confirmation emails must survive a crash after the purchase commits, save the email event in a transactional outbox. Measure database contention and the age of queued work before changing how you partition the data.

## Common distinctions

- **Queue and backpressure.** A queue absorbs temporary bursts. Backpressure slows incoming work when consumers are at capacity.
- **CQRS and event sourcing.** CQRS separates the read and write models. Event sourcing defines the authoritative record of state changes. Make each decision for its own reason.
- **Retries, circuit breakers, and idempotency.** Retries try again after transient failures. A circuit breaker limits repeated calls to a struggling dependency. Idempotency keeps retried operations from duplicating effects.

## Practice prompt

Design a food-delivery app where customers can book a delivery slot and restaurants can see orders as they arrive. Pick one pattern for the booking write and one for restaurant updates. Explain what happens if a client times out after booking, and name the metric you would watch for the update path.

For patterns to practice in the loyalty app, see [Choosing design patterns](03-choosing-design-patterns.md) and the [project practice plan](../../learning/milestone-03-system-boundaries-and-api-contract/02-design-pattern-practice.md).
