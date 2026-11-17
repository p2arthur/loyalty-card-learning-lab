# Study index

Start with the [learning framework](../../LEARNING_FRAMEWORK.md). The [MVP plan](../../MVP_PLAN.md) contains the full curriculum; the [learning log](../../LEARNING_LOG.md) preserves evidence and the exact next task.

## Milestone 1: product definition

Status: **in progress**. No application implementation has been verified.

| Step | Status | Study document |
| --- | --- | --- |
| 01. Requirements elicitation and analysis | Initial discovery pass complete; remaining questions carried forward | [Concepts, decisions, and examples](milestone-01-product-definition/01-requirements-elicitation-and-analysis.md) |
| 02. Product definition | Delayed-verification scenario recorded; shared-kiosk behavior under review | [Product-definition workbook](milestone-01-product-definition/02-product-definition.md) |

Later focused steps will cover screen sketches, the consolidated brief, remaining acceptance criteria, and quality scenarios. Create a separate numbered Markdown file when each step starts, and link it here.

## Reusable concepts alongside the project

The separate [product engineering library](../concepts/README.md) expands the ideas beyond this demo. Step 01 links to discovery, journeys, business rules, scenario analysis, domain modeling, acceptance criteria, and related topics. Step 02 links to boundaries and quality requirements. General transfer exercises remain unassessed until the learner attempts them.

For every future milestone and step, maintain both the project notes and relevant reusable guides. Extend existing topics rather than copying the same concept into several milestone folders.

## Future milestones

Follow the sequence in the MVP plan: language and HTTP practice; system boundaries and API contracts; PostgreSQL and Prisma; backend features and checks; React and client checks; purchases and concurrency; access control; CI; Wallet; and deployment. Add study files as these activities begin.

## Practice preserved for later

Milestones 6 and 6a include `useState`, `useMemo`, and `useCallback`. Practice source state versus derived values, functional updates, dependency identity, stale closures, memoized children, and evidence for performance changes. These are requested practice needs; understanding has not been assessed.

## Resume here

Open step 02 and the learner's [verification-flow draft](milestone-01-product-definition/artifacts/02-registration-verification-flow.md). The learner revised the simulated demo to remove clock-based link expiry and supplied a delayed-verification success scenario. Next, review the kiosk response if verification happens after another customer starts using it. The [context sketch](milestone-01-product-definition/artifacts/02-system-context-sketch.md) is recorded; full quality scenarios and the rest of milestone 1 remain unfinished.
