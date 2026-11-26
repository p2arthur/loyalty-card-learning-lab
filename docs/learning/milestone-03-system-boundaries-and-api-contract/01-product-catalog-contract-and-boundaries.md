# 01. Product catalog contract and module boundaries

Status is in progress. The Products module and shared response type are in place. The live HTTP response and server type check passed. The client type check and learner walkthrough are pending.

## Objective

Trace one catalog read from the backend fixture through HTTP to the product-selection screen. Success means the learner can justify each public field and verify that the actual response can render a card using the agreed shape.

## Current evidence

- The [Express entry](../../../server/src/index.ts) mounts the [Products router](../../../server/src/modules/products/products.routes.ts) at `/products` and starts the listener. The router handles unfiltered and ID-filtered catalog reads in one list handler.
- `client` and `server` depend on the [contracts workspace](../../../packages/contracts/src/index.ts). Its `ProductSummary` includes `id`, `productName`, and `productQuantity`.
- A Codex HTTP check on 2026-11-24 observed `200` from the live `GET /products` with the three shared fields on each of two records. The request used the local Vite origin and received the matching CORS header.
- On 2026-11-25 the live route returned a JSON array for each request. `GET /products` returned two records, `GET /products?id=1` returned one, and `GET /products?id=100` returned `[]`. All three responses had status `200`. The frontend list helper reads the array. The exported `ProductsResponse` wrapper still describes an object, and the single-product helper's type does not yet reflect an empty result.
- The [frontend API client](../../../client/src/features/products/products.api.ts) handles HTTP and JSON parsing. [ProductList](../../../client/src/features/products/ProductList.tsx) requests the catalog in an effect and passes display props to ProductCard.
- The server type check passed on 2026-11-25. The old client fixture reported by the 2026-11-24 type check has been removed. The updated client type check and browser rendering remain unassessed at this checkpoint.

## Design to evaluate

The learner proposed a React frontend organized by feature and one Express backend with internal modules. Evaluate `products` as the owner of catalog data, `checkout` as the coordinator of purchase use cases, and `loyalty` as the owner of account and points rules. Keep module calls in process. Let a route handle HTTP and introduce a service function when business decisions, coordination, or another caller give it a job.

Use a public response type for `GET /products`. The API can map storage records to it, and the frontend can map the response to existing card props or revise the props if they no longer serve the screen. An npm workspace such as `packages/contracts` is a candidate if both apps benefit from importing a single definition. Compare this with documenting one JSON response and checking it at the HTTP boundary before adding a package.

Checkout and loyalty rules are already discussed in the [system context](../milestone-01-product-definition/artifacts/02-current-system-context.md). The catalog refactor is the first exercise. Revisit transaction boundaries, stale prices, and checkout failures when the next use case requires them.

## Frontend layout proposal

The learner proposed moving the list, card, and selection screen to `features/products`, moving the section and search inputs to shared components, deferring the rewards help provider and context, and putting the product type in a contracts workspace.

Review the screen by its purpose. A catalog browsing screen can belong to Products. Once the screen coordinates the cart or checkout flow, Checkout can compose the product list. Both candidate shared components currently have one caller. `SearchInput` also contains a focus demonstration, which should inform any decision to reuse it.

Removing rewards help also requires removing the card's context hook, portal, and corresponding target in the list. Define the exported contract from the intended HTTP payload before moving the existing React product type. Choose the first response fields and give both npm workspaces a package dependency if they share the definition.

## Learner exercise

Walk through one `GET /products` call and explain who owns the response shape, HTTP status handling, and rendered card props. Verify a rendered card after resolving the obsolete fixture import. As a transfer exercise, explain where to absorb a change in an internal catalog field name while keeping the published response stable.

## Architecture vocabulary

| Term | What it describes here |
| --- | --- |
| Monorepo with npm workspaces | React, Express, and a private contracts package in one repository |
| Feature-based organization | Product files grouped around the catalog on each side of HTTP |
| Modular monolith | One Express application with internal feature modules. Products is the first implemented module, with Checkout and Loyalty planned. |
| Domain-oriented decomposition | The proposal to assign catalog data, purchase coordination, and points rules to different owners. It draws on strategic Domain-Driven Design and still needs to be tested against the purchase workflow. |
| Composition root and router | The server entry wires up Express and mounts the named Products router, which owns its HTTP handlers. |
| API contract and response DTO | `GET /products` promises an HTTP status and a JSON payload shape. `ProductSummary` is the shared TypeScript type for one item in that response. |
| API client and effect | `fetchProducts` handles the HTTP call. The React effect handles when to call it and places the resolved list in component state. |
| Component composition and utility types | ProductList renders ProductCard with display props. `Omit` derives the card's props from the response type. |
| Lifting state up | The proposed checkout flow owns the cart above the product selection and order-review screens. The list can report clicks through a callback prop. |

The learner prefers `stock` for catalog inventory and `quantity` for units selected on a cart line. These names can be modeled with TypeScript types and functions. The current HTTP DTO uses `productQuantity`. The learner's naming preference does not by itself change that payload. The first checkout exercise is to pass an Add callback through the list and model a repeated Add click in cart state.

## References

- [API contracts and module boundaries](../../concepts/software-engineering/02-api-contracts-and-module-boundaries.md)
- [System boundaries, ownership, and trust](../../concepts/product-engineering/08-boundaries-ownership-and-trust.md)
- [Service Layer pattern](https://martinfowler.com/eaaCatalog/serviceLayer.html)
- [Bounded contexts and Domain-Driven Design](https://martinfowler.com/bliki/BoundedContext.html)
