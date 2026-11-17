# Loyalty Card Learning Lab

A hands-on software engineering study project: build a café loyalty demo while learning to explain its product rules, architecture, implementation, and failures.

The learner writes the application. The tutor asks one question at a time, reviews attempts, and records evidence of understanding. The repository currently contains the curriculum and study documentation; application implementation has not started.

## Start reading

1. [Learning framework](LEARNING_FRAMEWORK.md): how sessions work and how each learning step is documented.
2. [Study index](docs/learning/README.md): milestones, completed steps, and the next exercise.
3. [Requirements elicitation and analysis](docs/learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md): concepts, product decisions, worked scenarios, and unresolved questions from the first discovery pass.
4. [Product definition workbook](docs/learning/milestone-01-product-definition/02-product-definition.md): context decisions and remaining milestone deliverables.
5. [Screen inventory and sketches](docs/learning/milestone-01-product-definition/03-screen-inventory-and-sketches.md): the current learner exercise.
6. [Product engineering concept library](docs/concepts/README.md): ten reusable guides with non-demo examples and transfer exercises, starting with discovery, journeys, rules, scenarios, domain modeling, and acceptance criteria.

Each milestone and learning step maintains both its project notes and related general concept guides. The [concept template](docs/concepts/TEMPLATE.md) makes this a recurring study practice. Creating those references does not mark the topics mastered.

## Current position

Milestone 1 is **product definition**. Its first step, requirements elicitation and analysis, has completed an initial discovery pass. The revised context and public demo-checkout role are recorded. Step 03 begins with the mobile screen inventory; further product-definition artifacts remain unfinished. The milestone remains in progress; the learning log records the exact next task.

The demo pairs a mobile web loyalty app with a separate cashier/kiosk checkout screen. Customers register and display their cards on a phone; the sales-point screen scans cards and hosts points selection. Products, payment, and email are simulated. Customers earn points on paid amounts and can choose a discount at checkout. Apple Wallet issuance belongs to a later milestone; automatic pass updates are a stretch goal.

## Project references

| File | Purpose |
| --- | --- |
| [MVP_PLAN.md](MVP_PLAN.md) | Curriculum, scope, milestone checks, and technical references |
| [LEARNING_LOG.md](LEARNING_LOG.md) | Chronological evidence, gaps, and exact next task |
| [AGENTS.md](AGENTS.md) | Persistent tutor instructions |
| [TUTOR_GUIDE.md](TUTOR_GUIDE.md) | How to start and resume a session |

React practice distinguishing `useState`, `useMemo`, and `useCallback` is preserved for milestones 6 and 6a. It has not yet been assessed.

No application tests, build, or deployment have been completed. Documented behavior is a specification to implement and verify later.
