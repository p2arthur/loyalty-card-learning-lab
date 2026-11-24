# Loyalty Card Learning Lab

A hands-on software engineering study project: build a café loyalty demo while learning to explain its product rules, architecture, implementation, and failures.

The learner writes the application. The tutor asks one question at a time, reviews attempts, and records evidence of understanding. This repository contains the curriculum, study references, a generated React/TypeScript client, and a Node/TypeScript server scaffold. Loyalty features have not been implemented.

## Start reading

1. [Learning framework](LEARNING_FRAMEWORK.md): the tutoring workflow and study-artifact habit.
2. [Study index](docs/learning/README.md): milestones, artifacts, and the saved next task.
3. [Five-technique requirements toolkit](docs/concepts/product-engineering/00-requirements-analysis-toolkit.md): the core definitions for journeys, rules, scenarios, domain modeling, and acceptance criteria.
4. [Requirements study](docs/learning/milestone-01-product-definition/01-requirements-elicitation-and-analysis.md): demo decisions and worked examples.
5. [Product-definition workbook](docs/learning/milestone-01-product-definition/02-product-definition.md): context, roles, and unfinished deliverables.
6. [Screen-planning workbook](docs/learning/milestone-01-product-definition/03-screen-inventory-and-sketches.md): the next learner exercise.
7. [Concept library](docs/concepts/README.md): broader product and software engineering guides with non-demo examples and transfer exercises.

Each substantive learning step maintains project notes and separate reusable concept guides. References preserve learning material; they do not establish mastery. [LEARNING_LOG.md](LEARNING_LOG.md) records learner explanations, support, checks, corrections, and gaps.

## Current position

Current work is **milestone 1: product definition**. The short retention warm-up is complete; the next task is essential customer mobile screens with one purpose per screen. Initial discovery and the revised context/checkout roles are recorded; screen sketches, the consolidated brief, remaining acceptance criteria, and quality scenarios are unfinished. Continue product design before implementing the first agreed feature slice.

The demo pairs a mobile web loyalty app with a separate cashier/kiosk checkout screen. Customers register and display their cards on a phone; the sales-point screen scans cards and hosts points selection. Products, payment, and email are simulated. Points accrue on paid amounts after loyalty discounts. Apple Wallet issuance belongs to a later milestone; automatic pass updates are a stretch goal.

The [scaffolding checkpoint](docs/learning/milestone-02-language-and-http/01-project-scaffolding.md) records the early setup practice, alternatives, and evidence. Both npm workspaces share one root lockfile. The learner chose the existing compiler pipeline for development and retained emission on compiler errors. Further setup is deferred; this does not complete the later implementation or quality milestones.

## React practice

The mock checkout is for practicing React fundamentals. Use the tabs to try conditional rendering, type into the controlled input, and press the focus button to see a ref access the input. The list and cards each get their own count from the same custom hook. Each card also starts an interval and cleans it up when it unmounts.

The rewards help experiment uses context and a reducer to share one open flag. Each card sends its help panel through a portal into a div owned by the list. Opening help from either card shows both panels because the cards read the same flag.

## Run the scaffold

Select the Node version recorded in .nvmrc using fnm or nvm, then install from the repository root:

```sh
npm ci
```

Start the React client from the repository root.

```sh
npm run dev -w client
```

For the server development loop, keep the compiler running in one terminal:

```sh
npm run dev:build -w server
```

After its initial compilation, run the compiled-file watcher in another terminal:

```sh
npm run dev -w server
```

The server entry currently contains only a comment, so execution does not create an HTTP listener. One-shot server scripts are typecheck, build, and start. Compiler errors remain errors even when JavaScript is emitted; emitted output does not establish correct behavior. The generated test scripts are still placeholders, and there is no behavior test suite.

## Recorded checks and study gaps

The learner reported the client starter in the browser, successful client build/lint, successful server compiler checks/build, and reactions from both watchers. Codex inspected artifacts and ran the compiled entry and final server typecheck under Node 24 with exit code 0. Exact errors from the learner's temporary failure experiment were not captured. The learning log distinguishes who ran each check and what remains unverified; clean-machine installation, CI, business behavior, and deployment remain open.

Use the [study-gap backlog](docs/learning/STUDY_GAPS.md) for later review. Independent assessment of `useState`, `useMemo`, and `useCallback` is planned for milestones 6 and 6a.

## Project references

| File | Purpose |
| --- | --- |
| [MVP_PLAN.md](MVP_PLAN.md) | Curriculum, scope, milestone criteria, and technical references |
| [LEARNING_LOG.md](LEARNING_LOG.md) | Chronological learning evidence and exact next task |
| [AGENTS.md](AGENTS.md) | Persistent tutor instructions |
| [TUTOR_GUIDE.md](TUTOR_GUIDE.md) | How to start and resume sessions |
