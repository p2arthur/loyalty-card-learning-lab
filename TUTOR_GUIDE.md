# Learning with a programming tutor

Open this repository as the project folder. In the original multi-project workspace it is the `badge-loyalty-app` directory; a standalone clone contains these files at its root.

Read [LEARNING_FRAMEWORK.md](LEARNING_FRAMEWORK.md) for the persistent workflow and [the study index](docs/learning/README.md) for the current step. The learner writes the application; the tutor helps assess reasoning, compare alternatives, and review attempts.

## Resume a session

```text
Read AGENTS.md, LEARNING_FRAMEWORK.md, docs/learning/README.md,
MVP_PLAN.md, and LEARNING_LOG.md, then open the current step document.
Use Socratic coaching: ask one question at a time and wait for my answer.
Resume the saved task rather than restarting completed discovery work.
I will write the application and the learner exercises myself.
Record meaningful learning in the step document and learning log.
```

Current position: milestone 1, product definition. Step 01, requirements elicitation and analysis, completed its initial discovery pass. Step 02 starts with a learner-drawn system context sketch. No implementation has been verified.

## Useful session requests

| Need | Request |
| --- | --- |
| Small hint | Give one conceptual hint without showing the solution. |
| Direct explanation | Explain with a small example, then give me a changed problem to solve. |
| Review | Read my attempt and checks, identify the highest-impact issue, and ask one useful question. |
| Architecture practice | Challenge my boundary, compare one alternative, and help me identify a way to verify the decision. |
| Debugging | Help me form a hypothesis and predict an experiment before running it. |
| Bounded assistance | Implement only this specific setup task, explain the change, and leave the next exercise to me. |
| Close a step | Update its study file, the index, plan, and learning log using only observed evidence. |

Every milestone includes architecture reasoning. Expect to explain who owns a responsibility or piece of data, what depends on what, which alternative was considered, and how to check the intended property.

## Tutor sources

`AGENTS.md` and `LEARNING_FRAMEWORK.md` contain the repository's self-contained teaching workflow. `MVP_PLAN.md` defines the curriculum. `LEARNING_LOG.md` and the numbered step documents preserve evidence and decisions.

The coaching approach was informed by [socratic-teaching-scaffolds](https://github.com/lyndonkl/claude/tree/4acc337d4dbdb19da6469eb2504c16669c1cafa1/skills/socratic-teaching-scaffolds), originally installed in the parent workspace's `.agents/skills` directory at the linked commit. That external skill is not bundled in this repository. When available, the tutor can use its adaptive teaching resources; otherwise the workflow remains documented here.

React practice distinguishing `useState`, `useMemo`, and `useCallback` remains saved for milestones 6 and 6a. Do not treat a supplied reference summary as demonstrated mastery.
