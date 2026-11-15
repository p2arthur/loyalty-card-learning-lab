# Loyalty Card MVP: Build and Study Plan

Build a React/TypeScript loyalty card application by hand to refresh frontend development, software architecture, database design, and deployment skills before an interview.

The learning goal is to explain the complete journey: a browser interaction sends an HTTP request, Node applies a business rule, PostgreSQL commits a change, and the interface reflects the result.

This plan leaves the exact schema, routes, component structure, and most library choices for you to work out. Check off a task once you can demonstrate it and explain why it works.

## Product scope

Build a loyalty program for one café and one rewards program.

- [ ] A customer can register and receive a loyalty account.
- [ ] The customer can see their points balance and transaction history.
- [ ] A customer can complete a simulated purchase that earns points.
- [ ] A customer can choose a points discount at mock checkout, with the server enforcing the account balance and purchase-price cap.
- [ ] The customer can add their loyalty card to Apple Wallet.
- [ ] The application works locally with PostgreSQL and has a deployed version.

Automatic updates to an installed Wallet pass are a stretch goal. Keep real payments, multiple businesses, and elaborate reward tiers outside the first version.

The learner revised the initial operator-led, fixed-product-reward idea during milestone 1. The current demo uses customer-controlled checkout, mock products, and simulated payments/fulfillment. New points accrue only on the amount paid after a points discount. Current rules and worked examples are recorded in [step 01](docs/learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md).

## Starting stack

These are starting choices from the original plan. Revisit them when you have a concrete reason.

| Part | Starting choice | What to practice |
| --- | --- | --- |
| Frontend | React, TypeScript, Vite | Components, state, forms, browser requests |
| Backend | Node.js, TypeScript, Express | HTTP, validation, business rules |
| Database | PostgreSQL | SQL, relationships, constraints, transactions |
| Database access | Prisma ORM | Data modeling, typed queries, relations, transactions |
| Database migrations | Prisma's migration workflow | Reviewing database changes and applying migration history |
| Local environment | PostgreSQL through Docker Compose | Configuration, networking, persistence |
| Code quality | Strict TypeScript, ESLint, Prettier | Type safety, enforceable architecture rules, consistent formatting |
| Tests | Vitest, React Testing Library, Supertest, Playwright | Unit, integration, browser, and regression checks |
| CI | GitHub Actions | Required PR checks, reproducible builds, deployment gates |
| Deployment | Node service and managed PostgreSQL | Builds, secrets, migrations, operations |

## How to use this plan

For guided practice in Codex, use `TUTOR_GUIDE.md`. The project's `AGENTS.md` sets the default teaching workflow, and `LEARNING_LOG.md` preserves your current task and learning evidence between chats.

Follow [LEARNING_FRAMEWORK.md](LEARNING_FRAMEWORK.md) and the [study index](docs/learning/README.md): each substantive learning step has its own numbered Markdown file within its milestone. Milestone 1 step 01 has completed its initial requirements discovery pass; step 02 begins product definition with the system context exercise. Completing that first step does not complete milestone 1.

At each milestone and step, also maintain linked general study guides in the separate [concept library](docs/concepts/README.md). Explain principles beyond the demo using other domains, common mistakes, and transfer exercises. Reuse existing guides and record mastery only after learner evidence, following the persistent learning framework.

For each milestone, write your proposed approach, read the relevant documentation, and make your own first attempt. Use AI for a hint, review, or counterexample after you have something to discuss. Finish by explaining the result aloud without reading your code.

Keep a short decision log using the template at the end. Add focused tests as behavior appears; milestone 8 brings those checks together. Establish the shared checks below as soon as you scaffold the project, complete the server and client steps in milestones 5a and 6a, and connect the checks to CI in milestone 8a. You can start CI earlier and expand it alongside features.

Before committing to the Wallet milestone, check the Apple account and signing prerequisites linked in milestone 9. If access is blocked, continue with the web application and record Wallet issuance as unfinished.

## Study architecture throughout the project

Treat architecture as decisions about responsibilities, dependencies, data ownership, and failure behavior. Study these while implementing each feature. Start with one backend application organized into clear modules and a separate React client. Introduce more layers or services when a concrete problem justifies their cost.

Every numbered milestone, including 5a, 6a, and 8a, has an architecture checkpoint below. Include it in that milestone's completion criteria:

- [ ] Read the linked architecture material with the current feature in mind.
- [ ] Sketch or update the relevant module, data, request-flow, or deployment view.
- [ ] Compare your choice with one plausible alternative and identify the tradeoff.
- [ ] Demonstrate the property you intended to achieve with a test, enforced rule, or small change experiment.

Keep one evolving architecture note and use the decision log for significant choices. Record the design you actually implement. A folder layout alone does not demonstrate a boundary; imports, runtime interactions, and data access determine whether it holds.

Use C4 context and container views when they help explain the whole system, then add focused flow sketches for transactions and failures. A C4 container means a running application or data store, and does not necessarily mean a Docker container. You do not need every diagram type or an ADR for every function.

Study: [Software Architecture Guide](https://martinfowler.com/architecture/), [C4 model](https://c4model.com/), [Architectural Decision Records](https://adr.github.io/), and [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html). Keep these as reference material throughout the project.

## Software factory: the shared contract

The goal is to make future agent-created PRs pass the same explicit checks as your own changes. Start with rules tied to concrete failure modes and prove that the checks reject violations. Linting can prevent selected patterns; tests and code review still need to assess behavior and design.

- [ ] Pin the Node and package-manager versions, commit the dependency lockfile, and use frozen-lockfile installation in CI.
- [ ] Enable TypeScript `strict` for both applications and run type checking separately from bundling.
- [ ] Use a shared ESLint flat configuration with scoped client, server, and test rules. Add typed linting for promise handling and unsafe type usage.
- [ ] Make lint violations fail validation, with zero warnings allowed. Run formatting in check mode during validation.
- [ ] Define a small set of permitted imports between modules, then enforce those boundaries with scoped import rules covering relative paths and aliases.
- [ ] Document the commands, boundaries, and test expectations in a project `AGENTS.md` and the README. Instructions describe the rules; executable checks enforce them.
- [ ] Require review of changes to lint configuration, CI, test exclusions, coverage thresholds, and regression baselines. Agents should explain these changes in the PR.

Choose equivalent script names if you prefer. The important part is a stable command contract that humans, agents, and CI all use:

| Proposed command | Required behavior |
| --- | --- |
| `format:check` | Check formatting without rewriting files |
| `lint` | Lint client, server, and tests; fail on warnings |
| `typecheck` | Check both applications and test code |
| `test:unit` | Run isolated logic and component tests once, without watch mode |
| `test:integration` | Run component/API integration tests, using real PostgreSQL for server persistence |
| `test:e2e` | Run browser journeys against the running client and server |
| `build` | Produce client and server production artifacts, including required Prisma preparation |
| `validate` | Run all required checks and return a nonzero exit code if any fail |

Document the test database and browser prerequisites so `validate` can run from a clean checkout. Keep fast local commands available, but make the complete validation command authoritative.

Study: [TypeScript strict mode](https://www.typescriptlang.org/tsconfig/strict.html), [ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files), [typed linting](https://typescript-eslint.io/getting-started/typed-linting/), and [restricted imports](https://eslint.org/docs/latest/rules/no-restricted-imports).

### Architecture checkpoint: turn design intentions into checks

- [ ] Choose one dependency rule and one behavioral guarantee. Identify which belongs in linting, tests, or review, then deliberately violate each to verify the checks.

Study: [Fitness function-driven development](https://www.thoughtworks.com/insights/articles/fitness-function-driven-development). An architecture fitness function is a repeatable check of a desired architectural property; use only checks that protect an explicit decision.

## 1. Define the product

- [ ] Write a one-page brief describing the customer, kiosk journey, and simulated checkout.
- [x] Decide which information registration requires.
- [x] Choose points earning rules, purchase amount rounding, and the points-to-discount value.
- [x] Decide who can initiate simulated purchases and points discounts.
- [ ] Describe duplicate registration, insufficient points, and unavailable-server behavior.
- [ ] Sketch the main screens on paper.
- [ ] Turn each user action into a short acceptance criterion.

Evidence for the three checked decisions: learner explanations and scenarios consolidated in [requirements elicitation and analysis](docs/learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md), including an independent checkout acceptance criterion. These are product decisions, not passing application tests. The full brief, remaining criteria, screen sketches, and architecture checkpoint are unfinished. Continue in the [product-definition workbook](docs/learning/milestone-01-product-definition/02-product-definition.md).

Questions to answer: What problem does the card solve? What should a first-time customer be able to do? What is the smallest complete demonstration?

### Architecture checkpoint: requirements that shape design

- [x] Identify the system boundary, its users, and external dependencies. Draw a small context view. Evidence: [learner logical context sketch](docs/learning/milestone-01-product-definition/artifacts/02-system-context-sketch.md); simulated roles are labeled and implementation remains unverified.
- [ ] Write measurable quality scenarios for correctness, access control, and changeability. For example, describe what must happen when a purchase is retried, then state how you will observe success.

Study: [arc42 quality requirements](https://docs.arc42.org/section-10/). Explain which requirements influence your design and which can wait.

Finish when another person can read the brief and describe the expected behavior without seeing code.

Study: [Thinking in React](https://react.dev/learn/thinking-in-react), focusing on the relationship between the design, its data, and its components.

## 2. Refresh JavaScript, TypeScript, and HTTP

- [ ] Write small functions that calculate earned points and validate purchase amounts.
- [ ] Practice transforming and formatting a transaction history with array methods.
- [ ] Review objects, modules, promises, `async`/`await`, and error handling.
- [ ] Practice TypeScript unions, narrowing, and optional properties.
- [ ] Explain why a TypeScript type does not validate an incoming HTTP request at runtime.
- [ ] Inspect a request and response in browser developer tools.

Keep these exercises small enough to write without copying a tutorial. Include a failed asynchronous request and an invalid input.

### Architecture checkpoint: module contracts and side effects

- [ ] Separate one pure points calculation from network, clock, and database effects. Define its inputs, outputs, and errors.
- [ ] Change the surrounding input source without changing the calculation. Explain cohesion, meaning related responsibilities belong together, and coupling, meaning how strongly modules depend on each other.

Study: [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Use exports to define a small public surface for your exercise.

Finish when you can write a points calculation and an asynchronous request yourself, then explain their failure paths.

Study: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html), and [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview). Read the sections you need as you encounter them.

## 3. Design system boundaries and the API contract

- [ ] Sketch the browser, Node server, PostgreSQL database, and Wallet integration.
- [ ] Describe the responsibility of each part.
- [ ] Within one backend application, distinguish request handling, loyalty rules, database access, and pass generation.
- [ ] Describe the request and response for each user action.
- [ ] Record validation, authorization, and possible errors for each action.
- [ ] Identify which data changes must succeed or fail together.
- [ ] Decide what the browser submits and what the server calculates.

The server should determine awarded points and the resulting balance. Choose your own routes and payloads after identifying the user actions.

Questions to answer: Where does each business rule belong? What can an untrusted client change? Which errors should the interface distinguish?

### Architecture checkpoint: boundaries and dependency direction

- [ ] Draw the client, API, and database as a container view, then sketch the backend modules and allowed dependencies.
- [ ] Compare a simple layered design with ports and adapters. Identify what should remain independent of Express, Prisma, and Apple, and justify any interfaces you introduce.
- [ ] Explain the cost of your approach using a likely change, such as a new earning rule or a different pass generator. Keep the design small enough to build by hand.

Study: [Hexagonal architecture, the original article](https://alistair.cockburn.us/hexagonal-architecture). Distinguish a runtime call from a source-code dependency when drawing arrows.

Finish when you can walk through a simulated purchase from button click to database commit, including a failure.

Study: [Express routing](https://expressjs.com/en/guide/routing/) and [the Node.js event loop](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick). Explain where your application waits for asynchronous work.

## 4. Model the data and establish PostgreSQL with Prisma

- [ ] Identify the facts the application must remember.
- [ ] Consider customers, loyalty accounts, purchases, redemptions, points movements, and issued passes. Decide which need separate tables.
- [ ] Sketch relationships and choose primary keys, foreign keys, uniqueness, and nullability.
- [ ] Explain the invalid state that each constraint prevents.
- [ ] Choose whether to derive the balance from points history, store a balance, or maintain both.
- [ ] Write down the consistency obligations of that choice.
- [ ] Use integer points and choose a precise representation for purchase amounts.
- [ ] Start local PostgreSQL with persistent storage through Docker Compose.
- [ ] Choose a supported Prisma major version and follow its matching documentation throughout the project.
- [ ] Initialize Prisma in the backend and configure its connection to local PostgreSQL.
- [ ] Translate your data model into Prisma models, relations, and constraints.
- [ ] Prepare the typed database client using the workflow for your chosen Prisma version.
- [ ] Create and review Prisma migrations, including the SQL they will execute, before applying them.
- [ ] Create seed data and document how to run it.
- [ ] Practice inserts, joins, aggregates, updates, and rollbacks directly in SQL.
- [ ] Rebuild an empty local database from migrations and seeds.

Use Prisma for application database access and migration management. Keep direct SQL exercises so you can explain the database behavior behind the ORM. Check which constraints your chosen Prisma version can express and how to include any additional database constraints in migrations.

Questions to answer: Can every balance change be explained? Which queries need indexes? How do Prisma models map to PostgreSQL tables? What happens to the database when the application or container restarts?

### Architecture checkpoint: data ownership and invariants

- [ ] Draw an entity-relationship view and identify which module owns changes to each concept. State invariants such as a redemption never spending unavailable points.
- [ ] Compare the balance representations you considered and explain which constraints belong in PostgreSQL, which need application logic, and how they cooperate.
- [ ] Explain how a future schema change preserves existing customer history. Keeping points movements does not by itself require an event-sourced architecture.

Study: [PostgreSQL data definition](https://www.postgresql.org/docs/current/ddl.html), alongside the constraints and transaction references below. Relate each design decision to a concrete invalid state or query.

Finish when you can rebuild the local database and explain a customer's balance using SQL.

Study: [Prisma ORM core concepts](https://www.prisma.io/docs/orm/core-concepts), [Prisma migrations](https://www.prisma.io/docs/orm/migrations/how-migrations-work), [PostgreSQL constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [transactions](https://www.postgresql.org/docs/current/tutorial-transactions.html), and [Docker Compose documentation](https://docs.docker.com/compose/). Use the documentation version selector if you choose a different Prisma major version.

## 5. Build one complete backend feature

- [ ] Choose a small action, such as customer registration.
- [ ] Implement its path from HTTP request to persisted data.
- [ ] Add runtime input validation and predictable error responses.
- [ ] Use the Prisma database client to create and retrieve records, including related data where needed.
- [ ] Understand the client's lifecycle and connection pooling; avoid creating a new client for every request.
- [ ] Translate expected Prisma/database errors, such as unique constraint violations, into predictable API responses.
- [ ] Inspect a query's SQL and compare it with the equivalent query you would write by hand.
- [ ] Keep configuration outside application code and document required environment variables.
- [ ] Add useful request/error logging without exposing secrets.
- [ ] Exercise valid and invalid requests with `curl` or an API client.
- [ ] Add reading the customer's account.
- [ ] Restart Node and verify that the data remains available.

### Architecture checkpoint: one use case across layers

- [ ] Trace registration through HTTP handling, application coordination, domain rules, and persistence. Identify who owns each validation and error translation.
- [ ] Compare putting everything in a route handler with your chosen separation. Demonstrate what would change if the same use case were called from a command-line script.

Study: [Service Layer](https://martinfowler.com/eaaCatalog/serviceLayer.html). Add abstractions only where their responsibility is clear; avoid wrapping every Prisma method without a reason.

Finish when valid requests persist correctly and invalid requests fail predictably.

Study: [Prisma ORM documentation](https://www.prisma.io/docs/orm), focusing on reading and writing records, querying relations, client configuration, and error handling. Keep runtime request validation separate from Prisma's TypeScript types.

Deployment checkpoint: once this feature works, try deploying the smallest usable version using milestone 10. Repeat deployment as features arrive.

## 5a. Make server changes enforceable and testable

Build the server checks after the first backend feature, then extend them as purchases, redemptions, and Wallet support arrive.

- [ ] Separate Express app construction from listening on a port so tests can exercise HTTP behavior without starting the production process.
- [ ] Enforce `no-floating-promises`, `no-misused-promises`, and the appropriate `no-unsafe-*` typed lint rules. Add a policy for explicit `any` and TypeScript suppression comments.
- [ ] Enforce your chosen boundaries: loyalty rules cannot import Express or Prisma, and route handlers cannot bypass the database access boundary you designed.
- [ ] Keep the Prisma client in a designated module and restrict direct database-client imports elsewhere. Exercise the restrictions using both aliased and relative imports.
- [ ] Add unit tests for points calculations, rounding, invalid amounts, and redemption eligibility without HTTP or database setup.
- [ ] Add HTTP integration tests with Supertest, the real Express app, Prisma, and an isolated PostgreSQL database built from committed migrations.
- [ ] Cover validation failures, duplicate registration, authorization, account isolation, and persistence. Extend the suite with idempotency, rollback, and competing redemptions in milestone 7.
- [ ] Assert status codes, response bodies, and final database state. Keep real database constraints and transactions active instead of mocking Prisma for these tests.
- [ ] Give parallel tests isolated data or databases. Use synchronization to coordinate concurrency scenarios instead of hoping timed delays create a race.
- [ ] For every fixed server defect, add a regression test that fails with the defect present and passes with the fix.
- [ ] Control clocks and generated identifiers where needed; use stable fixtures and explicit ordering. Stub external Wallet/APNs calls in routine CI tests.
- [ ] Set justified coverage thresholds for critical loyalty rules and error branches. Inspect uncovered behavior rather than using a coverage percentage as proof of correctness.
- [ ] Introduce an unhandled promise, a forbidden import, and a deliberate balance error in temporary changes. Verify that lint or tests fail, then remove the changes.

### Architecture checkpoint: testability as design feedback

- [ ] Map each server test to a boundary or invariant. Explain why a points rule can be tested without Express while a transaction guarantee needs PostgreSQL.
- [ ] Move one implementation detail without changing behavior. Check whether your tests survive, and examine whether failures reveal a real contract change or excessive test coupling.

Study: [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) and the shared fitness-function reference. Compare feedback speed with the realism each test layer provides.

Finish when the server's validation commands reject the selected anti-patterns and demonstrate persistence and loyalty guarantees against real PostgreSQL. Document what each check detects and what still requires review.

Study: [Vitest](https://vitest.dev/guide/), [Supertest](https://github.com/forwardemail/supertest), [coverage in Vitest](https://vitest.dev/guide/coverage.html), [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises/), and [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises/). Revisit the Prisma and PostgreSQL transaction references in milestone 7.

## 6. Build the React experience

- [ ] Build a static interface using sample data.
- [ ] Identify components from the screens and their responsibilities.
- [ ] Decide which component owns each piece of state.
- [ ] Implement controlled forms, event handlers, and immutable updates.
- [ ] Connect registration and account retrieval to the API.
- [ ] Distinguish temporary interface state from data owned by the server.
- [ ] Handle loading, empty, error, and success states.
- [ ] Make the flow usable with a keyboard and on a narrow screen.
- [ ] Inspect network requests while using the page.
- [ ] Refresh the page and confirm the persisted account can be retrieved through your chosen access flow.

Questions to answer: What causes each component to render? Which values can be derived instead of stored in state? What does the user see when a request fails?

### Focused practice: state, calculated values, and function references

Practice `useState`, `useMemo`, and `useCallback` with the loyalty account and transaction history. Start with a correct implementation using plain calculations and handlers, then investigate whether memoization helps.

- [ ] Use `useState` for a transaction search field or selected transaction type. Predict what persists across renders and what requests a UI update.
- [ ] Derive the visible transaction list from history and the selected filters. Explain whether it needs its own state and how duplicate state could become inconsistent.
- [ ] Compare repeated state updates using a captured value with functional updater calls. Predict the result before trying them.
- [ ] Measure a larger filtered/sorted history before and after `useMemo`. Change unrelated state and then a filtering dependency; explain when the cached calculation is reused.
- [ ] Explore an object or array recreated during render as a dependency. Explain reference identity and how it affects cache reuse.
- [ ] Pass a handler to a memoized child and compare an ordinary function with `useCallback`. Identify which props still change and when stabilizing the handler provides no benefit.
- [ ] Investigate a stale closure caused by a missing dependency. Predict which value the callback sees, then fix it without suppressing the dependency lint rule.
- [ ] Remove memoization and verify that the feature remains correct. Keep performance observations separate from behavioral guarantees and account for development Strict Mode when interpreting call counts.
- [ ] Check whether React Compiler is enabled in this project and explain how that changes the need for manual memoization. Use an isolated exercise if necessary to observe manual caching clearly.
- [ ] Transfer the reasoning to a reward picker: choose which values require state, which can be calculated directly, and where caching would need evidence.

Success criterion: explain state lifetime, dependency changes, closure behavior, and function identity, then justify using or omitting each hook in a new example. Memoization is a performance decision, not the authoritative store for account data.

Study: [useState](https://react.dev/reference/react/useState), especially updates based on previous state; [useMemo](https://react.dev/reference/react/useMemo), especially measuring expensive calculations and dependency caveats; and [useCallback](https://react.dev/reference/react/useCallback), especially memoized children and callback dependencies.

### Architecture checkpoint: frontend state and feature boundaries

- [ ] Map server-owned data, form state, and derived display values. Assign each a single owner and identify which components may change it.
- [ ] Compare feature-oriented organization with grouping all files by technical type. Try a small UI change and record which modules it touches.
- [ ] Explain when local state is sufficient and what evidence would justify shared state or a server-data cache.

Study: [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure). Use duplicated balances or contradictory loading flags as examples of design problems to prevent.

Finish when a customer can register and view a persisted account, and you can explain the state and data flow.

Study: [React: Managing State](https://react.dev/learn/managing-state) and [the Vite guide](https://vite.dev/guide/).

## 6a. Make client changes enforceable and testable

- [ ] Enable the recommended React Hooks lint configuration, including `rules-of-hooks` and `exhaustive-deps`, without disabling rules to silence design problems.
- [ ] Add JSX accessibility rules for labels, interactive elements, and accessible names. Verify keyboard behavior with tests as well.
- [ ] Apply typed promise and unsafe-value rules to client code. Validate untrusted API data at runtime according to the boundary you designed.
- [ ] Enforce that client modules cannot import server code, Prisma, or signing modules. Route API access through your chosen client API boundary.
- [ ] Add unit tests for client-specific formatting, validation, and state transitions. Keep authoritative points calculations on the server.
- [ ] Add behavioral regression tests for filter changes, repeated state updates, and callbacks using current input. Avoid asserting exact render counts or wall-clock timings as correctness requirements.
- [ ] Add component integration tests using React Testing Library and user interactions, with MSW controlling responses at the network boundary.
- [ ] Cover successful registration, field errors, loading, empty history, server failure, and recovery. Verify what the user can see and do rather than internal component state.
- [ ] Make unexpected network requests fail tests. Keep API fixtures consistent with the contract and retain full-stack browser tests to catch drift between mocks and the server.
- [ ] Add Playwright journeys for registration, account viewing, purchase, and redemption against the real application and test database as those features arrive.
- [ ] For each fixed client defect, add a regression case at the smallest layer that reproduces it. Add a browser regression when the defect crosses application boundaries.
- [ ] Add a small set of visual regression screenshots for important account and form states at desktop and narrow widths. Pin browser/runtime versions and control fonts, data, time, and animations.
- [ ] Review screenshot differences deliberately; never accept regenerated baselines simply to make CI pass.
- [ ] Introduce a conditional Hook call, a forbidden server import, and a deliberate form failure in temporary changes. Verify lint or tests reject them, then remove the changes.

Regression describes the purpose of a test, not a separate test layer: a unit, integration, browser, or visual test can all protect against a returning defect. Prefer behavior assertions; use snapshots where the output itself is worth reviewing.

### Architecture checkpoint: UI contracts and replaceable details

- [ ] Identify the public behavior of a form or account view separately from its component tree. Explain which tests should survive a component refactor.
- [ ] Compare a network mock, a component integration test, and a full-stack browser test. Record what each can prove and where a mock can conceal a broken API contract.

Study: [React Testing Library's guiding principles](https://testing-library.com/docs/guiding-principles/) and the test-pyramid reference in milestone 5a. Explain why lint rules and screenshots cannot establish the entire user journey's correctness.

Finish when client validation catches the selected React and boundary violations, and repeatable tests protect the main interactions and error states.

Study: [React Hooks lint rules](https://react.dev/reference/eslint-plugin-react-hooks), [JSX accessibility linting](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/docs/), [Playwright best practices](https://playwright.dev/docs/best-practices), and [visual comparisons](https://playwright.dev/docs/test-snapshots).

## 7. Implement purchases and redemptions correctly

- [ ] Write the loyalty rules independently of HTTP handling.
- [ ] Connect the rules to database operations and the interface.
- [ ] Define the changes a purchase and redemption must commit together.
- [ ] Study idempotency and choose how the server recognizes a retried operation.
- [ ] Define behavior when the same operation identifier arrives with different input.
- [ ] Study atomic operations, locking, and transaction isolation.
- [ ] Use Prisma transactions for related writes and ensure every participating query uses the transaction's client.
- [ ] Check which concurrency controls your Prisma version exposes and when safely parameterized SQL may be needed.
- [ ] Choose and document how competing redemptions avoid overspending.
- [ ] Test duplicate purchase requests.
- [ ] Test two concurrent redemptions when the account can afford only one.
- [ ] Trigger a failure partway through an operation and verify consistent data afterward.

Disabling a button can improve the interface, but the server and database must enforce correctness. Use real PostgreSQL for checks that depend on its transaction guarantees.

### Architecture checkpoint: transaction boundaries and consistency

- [ ] Draw two competing redemptions as an interleaved flow, marking reads, locks or conditional writes, and commits. Identify exactly where overspending is prevented.
- [ ] Compare your chosen concurrency control with an alternative, including contention, retries, and failure behavior. Explain why in-memory locking alone would not protect multiple server processes.
- [ ] Record the idempotency boundary and how operation records, points movements, and balances commit consistently.

Study: [PostgreSQL explicit locking](https://www.postgresql.org/docs/current/explicit-locking.html), alongside the isolation and Prisma transaction references below.

Finish when retries do not duplicate points, competing redemptions cannot overspend, and partial failures leave consistent data.

Study: [Prisma transactions](https://www.prisma.io/docs/orm/fundamentals/transactions) and [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html). Use the duplicate-request and competing-redemption scenarios to guide your reading. A transaction alone does not establish your overspending guarantee; explain the operations and concurrency controls that enforce it.

## 8. Verify behavior and access boundaries

- [ ] Test points calculations and rounding boundaries.
- [ ] Test API validation, persistence, and expected errors.
- [ ] Build the test database from Prisma migrations and seed/reset it independently of development data.
- [ ] Make duplicate-request, concurrent-redemption, and rollback checks repeatable.
- [ ] Implement customer access and authorization for each customer's own simulated checkout and loyalty account.
- [ ] Verify that changing an identifier cannot expose another customer's data.
- [ ] Verify that an unauthorized request cannot record purchases or redemptions.
- [ ] Exercise one complete browser journey from registration through redemption.
- [ ] Trace a deliberate failure through the browser, request logs, and database.

Choose a small authentication approach you can explain. Record its limitations and enforce its access rules before exposing the demo publicly.

### Architecture checkpoint: trust boundaries and authorization

- [ ] Mark untrusted inputs, identities, and protected resources on your request-flow sketch. Identify where authentication ends and authorization decisions begin.
- [ ] Compare enforcing access only in a route with enforcing it at the use-case boundary as well. Test a second entry point and explain how you avoid bypasses or inconsistent rules.

Study: [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html). Relate the guidance to customer access, account isolation, and checkout actions.

Finish when repeatable checks demonstrate the application's important behavior and access guarantees.

Study: [Vitest](https://vitest.dev/guide/) and [Playwright](https://playwright.dev/docs/intro). Browser automation covers the website; verify actual Wallet installation separately on an iPhone.

## 8a. Enforce PR checks and prepare CI for deployment

Use GitHub Actions as the starting CI platform. Connect the local commands to required checks so agent-created PRs have a concrete acceptance gate.

- [ ] Run validation for pull requests and the main branch, using the pinned toolchain and locked dependencies.
- [ ] Run formatting, lint, and type checking first, then unit and integration tests, production builds, and browser regressions. Parallelize independent jobs while preserving required dependencies.
- [ ] Start a PostgreSQL service with a health check, apply committed Prisma migrations, and seed isolated test data before persistence tests.
- [ ] Verify migration replay on an empty database. For schema changes, also test upgrading a representative previous schema with existing records.
- [ ] Run Playwright against the production build with the real API and test database. Keep browser binaries and the visual baseline environment consistent.
- [ ] Upload test reports, coverage, browser traces, and screenshot diffs on failures so an agent or reviewer can investigate the actual error.
- [ ] Reject focused tests such as `test.only`; configure the test runner or a lint rule to enforce this. Require explicit review of skipped tests and avoid allowing retries to hide flaky checks.
- [ ] Use branch protection or repository rulesets to require all validation checks and an up-to-date tested revision before merge. Confirm the required enforcement is available for your repository and account.
- [ ] Require review for changes that weaken quality gates, remove regression coverage, or change visual baselines. Add ownership rules for these files where supported.
- [ ] Put reproduction steps, the behavior changed, test evidence, and migration/deployment impact in the PR template. Add a regression case for bug fixes.
- [ ] Keep PR validation separate from deployment credentials. Deploy only a trusted revision after its required checks pass, using the tested build artifact where the hosting platform supports it.
- [ ] Define the release order: validate, prepare/apply reviewed migrations, deploy a compatible application build, then run health and smoke checks. Serialize deployments to the same environment.
- [ ] Document recovery if migrations succeed but application deployment fails; rehearse recovery on a test environment and account for schema compatibility.
- [ ] Open a trial PR with a lint violation and another with a broken regression test. Verify CI fails and merge is blocked, then fix the PRs and verify the complete pipeline passes.

### Architecture checkpoint: the build and release system

- [ ] Draw the path from source revision through validation, artifacts, migration, and deployment. Identify which inputs must remain identical for a reproducible result.
- [ ] Explain which architectural properties CI measures, who can change those checks, and what requires human judgment. Compare rebuilding during deployment with promoting a tested artifact.

Study: [Continuous delivery principles](https://continuousdelivery.com/principles/) and the deployment-controls reference below. Treat the delivery pipeline as part of the system you design.

Finish when a clean checkout passes the same checks locally and in CI, failing checks block merge, and the validated revision is ready for the deployment process in milestone 10. Passing CI supplies evidence for review; it cannot guarantee that an agent chose the right behavior.

Study: [Node.js CI with GitHub Actions](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs), [PostgreSQL service containers](https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers), [protected branches and required checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), and [deployment controls](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments).

## 9. Add initial Apple Wallet issuance

Check [Apple's Wallet identifiers and certificates prerequisites](https://developer.apple.com/help/account/capabilities/create-wallet-identifiers-and-certificates/) early. Work out the account access, Pass Type ID, and signing certificate setup before depending on this milestone for your demo.

- [ ] Study pass contents, identifiers, signing, and delivery.
- [ ] Generate one fixed, signed sample pass before using customer data.
- [ ] Keep signing keys on the backend and outside version control.
- [ ] Connect pass generation to a customer's loyalty account.
- [ ] Add the website's Add to Apple Wallet flow.
- [ ] Install the customer's signed pass on an iPhone.
- [ ] Explain how the pass maps to the account and how its displayed points were obtained.

Treat the displayed points as a snapshot. PostgreSQL remains authoritative for purchases and redemptions. Initial issuance does not complete the automatic-update stretch goal.

### Architecture checkpoint: external integration and representation

- [ ] Define the boundary between loyalty data and Apple-specific pass fields, packaging, and signing. Keep that mapping in the integration module.
- [ ] Compare generating a pass on request with storing a generated pass. Record the implications for freshness, storage, and signing work.
- [ ] Trace an Apple/signing failure and explain which parts of the loyalty application should still work.

Study: revisit [ports and adapters](https://alistair.cockburn.us/hexagonal-architecture) together with Apple's pass documentation below. Explain why a Wallet snapshot is not the authoritative account balance.

Finish when a customer can install their signed loyalty pass from your page.

Study: [Building a Pass](https://developer.apple.com/documentation/walletpasses/building-a-pass) and [Distributing and updating a pass](https://developer.apple.com/documentation/walletpasses/distributing-and-updating-a-pass).

## 10. Deploy and learn operations

Start with a minimal deployment after milestone 5, then return here as the application grows.

- [ ] Choose how the frontend reaches the backend and where TLS terminates.
- [ ] Compare a Node service serving the API and built React assets with separate frontend hosting.
- [ ] Provision managed PostgreSQL and configure application secrets.
- [ ] Define repeatable build, start, and migration steps.
- [ ] Connect deployment to the successful CI gates from milestone 8a and verify the deployed revision matches the validated revision.
- [ ] Include Prisma's required client/type preparation and runtime artifacts in the build for your chosen version.
- [ ] Apply committed migrations through Prisma's deployment workflow; keep development reset commands out of production.
- [ ] Check database connection limits and pool configuration.
- [ ] Add a health check and inspect deployed logs.
- [ ] Confirm customer data survives a redeploy.
- [ ] Learn the database backup process and practice a restore into a separate test database.
- [ ] Verify the full customer journey on the deployed URL.
- [ ] Document local setup, required configuration, tests, and deployment in the project README.

### Architecture checkpoint: runtime topology and operations

- [ ] Draw a deployment view showing processes, persistent data, network connections, secrets, and TLS boundaries.
- [ ] Walk through a server restart, database outage, and failed migration. Explain what is lost, what survives, how you detect the failure, and how you recover.
- [ ] Estimate connections if you run multiple server instances. Compare the operational cost of your hosting layout with the alternative from the deployment checklist.

Study: [The Twelve-Factor App](https://12factor.net/), focusing on configuration, backing services, build/release/run, processes, and logs. Assess each idea against this application's needs.

Finish when someone else can use the deployed flow, a redeploy preserves data, and you can explain how the application is built and operated.

Study: [Render's Node/Express deployment guide](https://render.com/docs/deploy-node-express-app) and [managed PostgreSQL documentation](https://render.com/docs/postgresql) as one concrete hosting option. Choose your provider yourself.

## 11. Stretch: update an installed Wallet pass

Start this after the core application and initial pass issuance work.

- [ ] Generate a newer pass with the same pass type identifier and serial number.
- [ ] Study device registration, authentication, update tracking, and unregistering.
- [ ] Implement the required pass update web service.
- [ ] Connect the notification flow through Apple Push Notification service.
- [ ] Verify that a device can request and install the updated pass.
- [ ] Simulate a successful purchase followed by a failed update notification.
- [ ] Choose a retry approach and verify eventual delivery after recovery.
- [ ] Study background jobs and the transactional outbox pattern if useful for that approach.

### Architecture checkpoint: asynchronous work and partial failure

- [ ] Draw the database commit, update scheduling, APNs notification, device fetch, and pass replacement. Mark where consistency is immediate and where it is eventual.
- [ ] Compare sending a notification after commit with recording an outbox item in the same transaction. Describe how a worker handles crashes, duplicate delivery, retries, and old updates.
- [ ] State what a successful purchase response guarantees even when Wallet is temporarily stale. Demonstrate recovery without awarding points again.

Study: [Transactional outbox pattern](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html). Learn the pattern from the example without adopting its hosting infrastructure unless needed.

Finish when an installed pass eventually reflects a changed balance, and notification failure never reverses a successful purchase.

Study: [Adding a Web Service to Update Passes](https://developer.apple.com/documentation/walletpasses/adding-a-web-service-to-update-passes).

## Decision log template

Copy this entry when you make a decision worth discussing in an interview.

```text
Date / milestone:
Status (proposed, accepted, superseded):
Problem:
Requirement or quality goal:
Choice:
Alternative considered:
Tradeoff:
Affected modules, dependencies, and data:
Evidence that it works:
What would make me revisit it:
```

## Interview readiness

- [ ] Rehearse a five-minute demonstration using the deployed application.
- [ ] Use the evolving architecture views to explain system boundaries, dependency direction, data ownership, and deployment.
- [ ] Discuss one architecture decision you changed after implementation evidence, including the alternative and tradeoff.
- [ ] Explain your data model and how a balance is calculated or maintained.
- [ ] Explain how Prisma models, queries, and migrations map to PostgreSQL, including the tradeoffs of using an ORM.
- [ ] Trace one request from the browser through Node to PostgreSQL and back.
- [ ] Explain retry handling and demonstrate that concurrent redemptions cannot overspend.
- [ ] Demonstrate a client and server rule violation being rejected, explain your test layers, and show how required CI checks gate an agent-created PR.
- [ ] Explain pass signing, initial issuance, and the limits of snapshot data.
- [ ] If you completed the stretch goal, explain how Wallet updates recover from failure.
- [ ] Identify a limitation you would address next and explain why.

## First work session

Write the one-page product brief, choose your points rules, and sketch the registration and account screens. Add a context sketch and a few observable quality scenarios from milestone 1. Stop when you can describe the acceptance criteria clearly enough to implement them without inventing product rules along the way.
