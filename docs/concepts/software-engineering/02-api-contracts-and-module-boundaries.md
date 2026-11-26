# API contracts and module boundaries

## Purpose

An HTTP API contract describes the requests a caller can make, the responses it can handle, and the observable behavior it can rely on. Module boundaries assign the work behind those promises to owners with clear operations.

## Mental model

An HTTP response type describes JSON crossing the network. A persistence model describes stored facts and relationships. UI props describe the values a component needs to render. The shapes can coincide while they serve the same purpose and can diverge as requirements change. Translate them at the boundary where the difference first matters.

Sharing a TypeScript type lets callers and producers check their code against the same definition. TypeScript erases type annotations, so a JSON response still needs a runtime check if the application must detect a malformed payload. An HTTP contract test can exercise the real route and check its status and body. [TypeScript handbook on erased types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types)

## How to apply it

1. Pick one user action and identify which module makes each decision or owns each fact.
2. Write one successful HTTP exchange and one expected failure. Choose fields, units, and status codes based on what the caller needs to do.
3. Put HTTP parsing and response formatting at the edge. When an operation gains business logic or needs another caller, expose it through the module's public functions.
4. Verify one valid payload and one failure. Then change a storage field or presentation label and check which code must change to preserve the HTTP contract.

Grouping by feature puts the files that change for one capability close together. A small backend can coordinate features within one process, with each module exposing operations for other modules to call. Later, separate deployment makes sense when there is a concrete need for independent operation or release. [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html)

## Worked example

An equipment library exposes `GET /equipment`. The equipment module stores `assetTag`, `displayName`, and `lastInspectionAt`. A public list can use `{ id, name }` while the UI takes a `title` prop. A simple mapping lets staff change how they track inspections or designers change the card without altering the API.

The reservations module accepts an equipment ID for a booking and asks the equipment module about bookability through a public operation. The list screen may be stale if someone else reserves the final camera first. The server checks availability when it commits the reservation, and the API documents how the caller can distinguish a conflict from an empty list.

## Common mistakes

- Renaming a TypeScript interface and expecting JSON field names to change with it.
- Casting a parsed value to a response type and assuming the payload was checked.
- Returning entire persistence records even when the caller needs just a few fields.
- Letting another feature import a module's private data adapter, which ties the caller to the owner's storage decisions.

## Transfer exercise

Sketch the list and signup operations for a workshop system. Decide which response fields the workshop browser needs and where to enforce capacity. Success means you can describe the JSON returned for an empty workshop list and what happens when two people request the last seat.

See also [system boundaries and ownership](../product-engineering/08-boundaries-ownership-and-trust.md) and the [catalog exercise](../../learning/milestone-03-system-boundaries-and-api-contract/01-product-catalog-contract-and-boundaries.md).
