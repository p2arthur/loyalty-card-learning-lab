# Study index

Start with the [learning framework](../../LEARNING_FRAMEWORK.md). The [MVP plan](../../MVP_PLAN.md) contains the full curriculum; the [learning log](../../LEARNING_LOG.md) preserves evidence and the exact next task.

## Milestone 1: product definition

Status: **in progress; product design resumed on 2026-11-17**. Starter/tooling checks are recorded below; no loyalty feature has been implemented.

| Step | Status | Study document |
| --- | --- | --- |
| 01. Requirements elicitation and analysis | Initial discovery pass complete; remaining questions carried forward | [Concepts, decisions, and examples](milestone-01-product-definition/01-requirements-elicitation-and-analysis.md) |
| 02. Product definition | Context and checkout-role pass complete; milestone deliverables still open | [Product-definition workbook](milestone-01-product-definition/02-product-definition.md) |
| 03. Screen inventory and sketches | Initial mobile pass reviewed; sales-point product selection chosen | [Screen-planning workbook](milestone-01-product-definition/03-screen-inventory-and-sketches.md) |

Step 03 covers screen planning. Later focused steps will cover the consolidated brief, remaining acceptance criteria, and quality scenarios. Create a separate numbered Markdown file when each step starts, and link it here.

## Reusable concepts alongside the project

For focused later review, use the [study gaps and practice backlog](STUDY_GAPS.md). It distinguishes coached concepts, skills not yet assessed, retention checks, and product decisions. Each entry has evidence, references, a practice task, and a success criterion. The short retention warm-up is complete; the next task is the mobile screen inventory. Results and remaining technical review needs are recorded in the log and backlog. Setup notes and review exercises remain available for later.

The separate [product engineering library](../concepts/README.md) expands the ideas beyond this demo. Step 01 links to discovery, journeys, business rules, scenario analysis, domain modeling, acceptance criteria, and related topics. Step 02 links to boundaries and quality requirements. General transfer exercises remain unassessed until the learner attempts them.

For every future milestone and step, maintain both the project notes and relevant reusable guides. Extend existing topics rather than copying the same concept into several milestone folders.

## Future milestones

Follow the sequence in the MVP plan: language and HTTP practice; system boundaries and API contracts; PostgreSQL and Prisma; backend features and checks; React and client checks; purchases and concurrency; access control; CI; Wallet; and deployment. Add study files as these activities begin.

## Practice preserved for later

Milestones 6 and 6a include `useState`, `useMemo`, and `useCallback`. Practice source state versus derived values, functional updates, dependency identity, stale closures, memoized children, and evidence for performance changes. These are requested practice needs; understanding has not been assessed.

## Setup checkpoint

The learner chose [early scaffolding practice](milestone-02-language-and-http/01-project-scaffolding.md) before completing milestone 1. Both npm workspaces, one root lockfile, and the Node version record are verified. The learner generated the React/TypeScript/Vite client and reported its browser/build/lint checks. The server has Express/compiler dependencies, a tailored config, scripts, and a comment-only entry; learner compiler checks and a Codex-run start check are recorded. The learner reported watch reactions and chose to retain emission on compiler errors. Exact error diagnostics and a controlled type-only-error experiment remain unassessed.

Remaining tooling is deferred at the learner's request. This is a saved checkpoint, not completion of the language/HTTP, backend, or quality milestones.

## Resume here

The 2026-11-17 retention warm-up is complete. Open [step 03 screen planning](milestone-01-product-definition/03-screen-inventory-and-sketches.md), review the saved mobile inventory, then continue the separate cashier/kiosk inventory from its chosen mock-product starting view; the next question concerns loyalty choices before payment. Continue product design before the first agreed implementation slice. The [five-technique toolkit](../concepts/product-engineering/00-requirements-analysis-toolkit.md) is a study reference, not another prerequisite assignment. Do not restart completed discovery/context work or mark milestone 1 complete.
