# 02. Design pattern practice

The learner asked to practice ten patterns using the loyalty app. The first exercise is the Products repository. The other rows are options to revisit when the matching feature is ready.

## Objective

Find the design pressure that makes each pattern useful and verify what the pattern makes easier to change. Start by separating the catalog's two existing reads from the HTTP handlers. Success means the learner can swap the JSON-backed implementation for an in-memory test implementation without changing the route logic or published response shape.

## Practice opportunities

| Pattern | When and where to practice | What to verify |
| --- | --- | --- |
| Repository | Now, in Products. Extract the catalog list and ID lookup from the Express router. Start with the existing JSON fixture and revisit the same boundary during the Prisma milestone. | Swap the data source and compare the route behavior and `ProductSummary` payload. |
| Factory | During the first catalog or checkout tests. Write a simple `makeProduct()` test-data factory with defaults and optional overrides. | One caller can request zero stock while another gets a fresh normal product. |
| Singleton | During Prisma setup. Create one long-lived Prisma Client per server process and share it through application wiring. Compare that with a class that enforces a singleton. | Several repository calls use the same client instance. |
| Strategy | During loyalty rule practice. Pass the earning policy as a function to the use case. Use a second hypothetical policy in a test. | The calculation changes when the policy changes and the checkout call stays the same. |
| Observer | After simulated checkout works. Subscribe notification preview and developer metrics to `purchaseCompleted` after the purchase and points commit. | Removing a subscriber has no effect on whether checkout succeeds or points are saved. |
| Builder | During complex checkout tests. Assemble a scenario with a cart, starting points, requested discount, and simulated payment outcome. Compare the readability with a simple factory. | A test can vary one condition and keep the setup for the other conditions obvious. |
| Adapter | During Wallet issuance. Translate the app's pass-generation operation into a signing library's inputs, and use a fake generator in tests. | The loyalty use case can call either implementation through the same operation. |
| Decorator | After catalog reads are extracted. Wrap `listProducts` with a timing function that returns the same result or propagates the same error. | The wrapper adds timing while preserving behavior. |
| CQRS | Later, as a bounded exercise using one database. Compare a command model for completing a purchase with a read model for the balance and points timeline. | The timeline can change its display shape without changing purchase validation. |
| Circuit breaker | In a fault-injection exercise for a simulated email sender. Use a fake clock and repeated failures. | Calls fail fast while the breaker is open. A later probe demonstrates recovery. |

The Products router currently imports its JSON fixture and performs the ID lookup itself. That gives the repository exercise a concrete starting point. Start with the two existing reads and preserve their contract. Establish the detail endpoint's absent-ID behavior before using it as a preservation check. The exercise can use plain functions and TypeScript types.

## First learner task

Sketch the operations Express would call for `GET /products` and `GET /products/:id` if the router could no longer import the fixture. For each operation, identify its input and output. After review, implement the JSON-backed version and compare one list and one detail response before and after the change. Try a small in-memory substitute to test the boundary.

## References

- [Repository pattern](https://martinfowler.com/eaaCatalog/repository.html)
- [General design pattern guide](../../concepts/software-engineering/03-choosing-design-patterns.md)
- [Catalog contract workbook](01-product-catalog-contract-and-boundaries.md)
