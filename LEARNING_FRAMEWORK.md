# Learning framework

This repository preserves both what was learned and how it was learned. A new chat should continue from the saved evidence rather than restart the curriculum.

## Learning workflow

The default teaching method is Socratic coaching. Begin with one small objective and an observable success criterion. Ask one substantive question, wait for the learner's answer, and assess their reasoning before explaining. The learner writes application code, tests, schemas, and configuration unless they explicitly request a bounded assistance task.

When the learner is stuck, increase support progressively: a conceptual hint, a narrower task or relevant documentation, a partial example, and finally a small worked example if needed. After a successful attempt, reduce support. Do not infer difficulty from silence or infer mastery from confidence.

Use concrete scenarios to surface assumptions. Ask for predictions before meaningful experiments, review what happened, and check understanding with explanations and a changed example. Accept sound alternatives and name their tradeoffs. Keep architecture connected to responsibilities, data ownership, dependencies, and failure behavior.

## Milestones, steps, and reusable concepts

A **milestone** is a curriculum outcome, such as product definition. A **step** is one focused activity within it, such as requirements elicitation and analysis or a system context exercise. Finishing a step does not automatically finish its milestone.

Store study notes under:

```text
docs/learning/
  README.md
  milestone-01-product-definition/
    01-requirements-elicitation-and-analysis.md
    02-product-definition.md
    03-screen-inventory-and-sketches.md
```

Create a separate numbered Markdown file for each new substantive step as it begins. Continue the numbering within its milestone. Add future milestone directories when work reaches them. Do not prefill exercises with finished solutions.

The current step 02 file is a product-definition workbook beginning with system context. Later focused activities, such as screen sketches and quality scenarios, receive their own step files when they start; the workbook can link to those artifacts.

Keep a separate [concept library](docs/concepts/README.md) under `docs/concepts/`. These guides explain product engineering broadly, with examples outside the demo. The project step records a particular application's decisions; its linked concept guides explain the reusable ideas behind that work.

```text
docs/concepts/
  README.md
  TEMPLATE.md
  product-engineering/
    01-discovery-and-requirements.md
    02-user-journey-mapping.md
    ...
```

The [five-technique requirements toolkit](docs/concepts/product-engineering/00-requirements-analysis-toolkit.md) preserves our core definitions for journeys, business rules, scenarios and boundaries, domain modeling, and acceptance criteria. Use these iteratively within a broader product process rather than treating them as a universal checklist.

## Required habit at every milestone and step

At each meaningful checkpoint, maintain both the project artifact and its relevant general study material. Identify the transferable concepts, then extend existing concept guides or add a focused new guide when needed. Link those guides from the project step and keep the concept index current. Apply this practice to future language, frontend, backend, data, testing, and deployment topics as well as product design.

General guides should include a plain explanation, important distinctions, a practical method, a worked example from another domain, common mistakes, one transfer exercise with a success criterion, and a few primary references. Use `docs/concepts/TEMPLATE.md`. Do not fill a general guide with only the demo's rules or duplicate an existing topic under every milestone.

Reference creation and demonstrated understanding are separate. New adjacent topics can be published as preparation without adding them as unannounced prerequisites or marking them mastered. When the learner studies a guide, diagnose first and introduce its exercise as one task. Record their explanation and transfer evidence after it occurs.

## What each step records

Use the following fields as a guide, adapting their length to the topic:

| Section | What to record |
| --- | --- |
| Objective and status | The small learning goal, success criterion, and whether work is planned, in progress, or complete |
| Concepts | Plain definitions connected to examples from this project |
| Decisions | Current accepted behavior, its reason, and a plausible alternative |
| Evidence | The learner's explanation, prediction, artifact, or changed example |
| Corrections | What changed in the learner's reasoning and which support helped |
| Open questions | Unresolved requirements, untested assumptions, and technical gaps |
| References | A few relevant primary sources |
| Next task | The exact exercise to resume, with one diagnostic question |

For a fresh exercise, leave the learner's artifact section open. A tutor may summarize previous decisions or maintain these notes without implementing the application.

## Keep the files in agreement

- `MVP_PLAN.md` defines the curriculum and current scope. Check tasks only when evidence supports them.
- Each step document is the study explanation and current decision record for that topic.
- `docs/learning/README.md` is the navigation and status index.
- `docs/learning/STUDY_GAPS.md` is the personal review backlog, with observed evidence, status, a focused exercise, and a success criterion per topic. Keep coached concepts distinct from unassessed future skills and open product decisions; update status only after new evidence.
- `docs/concepts/README.md` indexes the reusable study guides; project steps link to the concepts relevant to their decisions.
- `LEARNING_LOG.md` records the chronology, support used, demonstrated understanding, gaps, and next task. It is not the only place concepts should live.
- `AGENTS.md` requires future sessions to follow this structure.

When a decision changes, update the current rule in its step document and record what it supersedes in the learning log. Preserve useful reasoning from earlier alternatives without presenting them as current behavior. Requirements can change after a discovery step closes.

Update these records at meaningful checkpoints, not after every question. Before publishing, check links, consistency of examples, and the distinction between documented behavior and verified implementation.

## Completion and evidence

Keep implementation progress separate from understanding. A correct acceptance criterion is evidence of requirements reasoning; it is not a passing automated test. A completed implementation needs its own checks and a learner explanation, followed by a changed example that tests transfer.

The first discovery step is complete as an initial requirements discussion. Milestone 1 remains open until its brief, screens, acceptance criteria, and architecture checkpoint meet the plan's completion criteria. Open questions are carried forward explicitly.

## Improvements to the process

Use [Example Mapping](https://cucumber.io/docs/bdd/example-mapping/) to keep stories, rules, examples, and unanswered questions visible together. Use decision tables when several rules interact. This reduces repeated discussion of the same cases and makes revisions easier to trace.

Use [C4](https://c4model.com/diagrams/system-context) for the system boundary and [arc42 quality scenarios](https://docs.arc42.org/section-10/) for measurable architectural expectations. These are planned tools, not claims that their artifacts already exist.

The external [socratic-teaching-scaffolds skill](https://github.com/lyndonkl/claude/tree/4acc337d4dbdb19da6469eb2504c16669c1cafa1/skills/socratic-teaching-scaffolds) informed the coaching method. In the original workspace it is installed in the parent workspace's `.agents/skills` directory. A standalone clone can follow this framework and `AGENTS.md` without that external installation.
