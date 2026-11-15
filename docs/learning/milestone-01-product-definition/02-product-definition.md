# 02. Product definition

Milestone: **1. Product definition**

Status: **next step; learner artifact pending**

This workbook starts the next activity after the [initial requirements discovery pass](01-requirements-elicitation-and-analysis.md). It turns the discussed behavior into an explicit product boundary and, through later focused steps, a brief that someone else can implement without inventing the rules.

## First objective: system context

Draw a simple sketch showing the customer, the system being built, and the outside systems it communicates with. Mark anything simulated.

Success criterion: another person can identify what the project owns, what lies outside it, and which interactions are mocked. Keep this first view at the level of people and systems; detailed modules, routes, tables, and deployment topology come later.

The [C4 system context guide](https://c4model.com/diagrams/system-context) is the reference for this exercise. Its focus is the system's relationship with people and other systems.

## Learner artifact

Not started. The learner supplies the sketch; the tutor reviews the boundaries and asks about the highest-impact gap. A text diagram is sufficient.

Do not fill this section with a completed tutor-designed architecture before the learner's first attempt.

## Inputs already available

Use the current decisions in [step 01](01-requirements-elicitation-and-analysis.md), especially the demo scope, registration/reissuance behavior, and checkout rules. The project has a customer-controlled checkout, simulated payments, and mock products. Apple Wallet issuance remains a later milestone.

The proposed starting stack is recorded in the [MVP plan](../../../MVP_PLAN.md). A context diagram describes people and systems; the stack does not by itself settle the system boundary.

## Questions to resolve through the sketch

These are a backlog for the tutor, not a questionnaire to ask all at once:

- Which people interact directly with this demo?
- Where does the loyalty application end and the shopping/payment simulation begin?
- Which outside systems does it communicate with?
- Which interactions are simulated now, and which require real external access later?
- Which boundary or responsibility could become unclear if the demo later connects to a real checkout?

## Later product-definition artifacts

After the context exercise, create separate numbered step documents as the learner begins screen sketches, the consolidated brief, and acceptance/quality scenarios. Link those files from the study index and this workbook when they exist.

The milestone's remaining deliverables are:

- [ ] Learner-drawn context sketch and reviewed system boundary.
- [ ] Main screen sketches, including error and success states.
- [ ] Consolidated one-page product brief.
- [ ] Acceptance criteria for each main user action.
- [ ] Measurable correctness, access-control, and changeability scenarios.
- [ ] An explained architecture alternative and evidence supporting the chosen boundary.

Some requirement decisions are already made in step 01. These unchecked items track the artifacts and remaining work, not a restart of the discovery conversation.

## Resume with one question

**Which people and external systems should appear around the loyalty application in the context sketch?**

Wait for the learner's answer before supplying a diagram or introducing another question.
