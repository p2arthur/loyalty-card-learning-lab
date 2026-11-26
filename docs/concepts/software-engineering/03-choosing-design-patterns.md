# Choosing design patterns

## Purpose

A design pattern names a solution to a recurring problem. Choose it when you can name the problem in your code and describe a change that the pattern should make easier.

## Mental model

| Pattern | Problem it addresses |
| --- | --- |
| Repository | Callers need meaningful ways to access records while the store or query details can change. |
| Simple factory | Several callers need to create a valid object using the same defaults or construction decisions. |
| Singleton | An application needs one instance within a defined scope. Creating and sharing an instance at startup is another way to manage this lifetime. |
| Strategy | A caller needs to choose or substitute an algorithm through a common operation. |
| Observer | Several listeners may react to a change published by one source. |
| Builder | Constructing a value has meaningful steps or many options that benefit from staged setup. |
| Adapter | An existing interface needs translation to an interface a caller can use. |
| Decorator | A wrapper adds behavior while preserving the operation callers already use. |
| CQRS | Reading and changing the same information benefit from distinct models. |
| Circuit breaker | Repeated failures from a dependency warrant temporarily skipping calls and later checking for recovery. |

A simple factory can be a function. Factory Method is the name for a specific pattern in the original object-oriented catalog. Strategy and Decorator can also be expressed as functions in TypeScript. [Design Patterns](https://www.informit.com/store/design-patterns-elements-of-reusable-object-oriented-9780321770462)

## How to apply it

Name a change or failure that matters. Write down the simplest implementation and the pattern you would compare it with. Design one exercise that can prove the claimed benefit. A repository experiment can swap stores while preserving the HTTP response. A decorator experiment can check the result and error path before and after adding instrumentation.

## Worked example

A library has a lending workflow and two kiosk models with incompatible receipt-printing APIs. An adapter can translate a common `printReceipt` operation for each kiosk. A decorator can time that operation while preserving results and errors. A circuit breaker may become useful for a remote print service with recurring timeouts. Try each design against a different problem so the reason for each layer stays visible.

## Common mistakes

- Duplicating every ORM method behind a repository without a change or test that benefits from the boundary.
- Adding a builder for a small value that callers can construct clearly in one expression.
- Treating read and write endpoints as sufficient evidence of CQRS. Compare the models and the tradeoff of maintaining both. [CQRS](https://martinfowler.com/bliki/CQRS.html)
- Moving required state updates into best-effort observers. Check whether the publisher must guarantee the side effect before it reports success.
- Retrying indefinitely when a dependency is slow. A circuit breaker has an explicit failure threshold and a recovery policy. [Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html)

## Transfer exercise

An appointment scheduler sends reminders through a remote provider. Choose between an adapter, decorator, and circuit breaker for a provider interface change, a timing requirement, and a prolonged outage. Describe one test for each choice and explain which ones are worth applying now.

See the [project practice plan](../../learning/milestone-03-system-boundaries-and-api-contract/02-design-pattern-practice.md) and [API contracts and module boundaries](02-api-contracts-and-module-boundaries.md).

For interview prompts that involve traffic, storage, messaging, or distributed coordination, use the [system design interview reference](04-system-design-interview-patterns.md).
