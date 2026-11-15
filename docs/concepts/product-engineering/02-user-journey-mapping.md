# User journey mapping

## The model

A journey map describes an actor's experience over time while pursuing a goal. It can include actions, information needs, channels, difficulties, and opportunities to improve the experience. [Nielsen Norman Group's introduction](https://www.nngroup.com/articles/journey-mapping-101/) explains the actor, scenario, phases, and experience represented in this kind of map.

A journey can cross software, people, physical spaces, and waiting periods. A user flow usually focuses more narrowly on the routes through an interface. A technical request sequence describes interactions between components. These views answer different questions and can complement one another.

### Choose the view for the question

| View | Main question | Useful level of detail |
| --- | --- | --- |
| Journey map | How does one person experience achieving a goal over time? | Phases, actions, needs, difficulties, evidence, and opportunities across channels |
| User flow | What choices and paths can a person take through the product? | Steps, decisions, branches, and alternative outcomes |
| Interaction sequence | Who sends what to whom, and in what order? | Messages and responses among people and software participants |
| System context | Which people and other systems interact with the system in scope? | System boundary, connected participants, and labeled relationships |

A written series of arrows can be a useful interaction flow without being a formal sequence diagram. A rich interaction flow may have more detail than a context view needs; that detail can still inform later screens and acceptance criteria. The [C4 context guide](https://c4model.com/diagrams/system-context) explains the higher-level focus on people and software systems.

For example, a detailed library-loan flow might list finding a book, selecting a copy, confirming a loan, and displaying a reference. A context view instead shows who uses the lending system and which other systems it communicates with. Summarize repeated exchanges at that level while retaining the detailed flow as another artifact.

## Choose a point of view

Use one actor and a specific situation to make the map coherent. A renter collecting equipment and an employee preparing it have related but different goals. Separate their views before connecting them.

Decide whether you are describing the current experience or proposing a future one. Mark observed behavior separately from an assumption. A plausible emotion or difficulty is still a hypothesis if nobody has reported or demonstrated it.

The useful output is a shared account of what the person needs at each stage and where the service breaks down. Visual polish is secondary to that understanding.

## Worked example: collecting a rental item

The following is an illustrative future journey, not research evidence:

| Stage | Actor's goal and action | Information needed | Possible difficulty | Product implication |
| --- | --- | --- | --- | --- |
| Before traveling | Check a reserved item is ready | Reservation status and opening hours | Confirmation is outdated | Provide a meaningful status and timestamp |
| On arrival | Identify the reservation | Reference or another supported lookup | Phone battery is empty | Offer an alternative lookup through staff |
| Collection | Receive the correct equipment | Item identity and collection conditions | A substitute is offered | Explain and record the substitution decision |
| After collection | Know what happens next | Return time and contact route | Receipt is lost | Make the return information retrievable |

The empty-battery case changes the design even though it is not a normal screen path. It suggests a service recovery route and a permission question for staff. The map exposes that need without dictating the final interface or database.

## How to build and review a map

State the actor, goal, starting context, and end condition. Lay out meaningful stages, then add actions and what the actor needs to know. Include waiting, interruptions, opting out, and recovery where they affect the goal.

Attach evidence to important difficulties. For a proposed experience, identify which steps need prototype testing. Assign an owner to the improvement opportunities so the artifact can influence decisions.

Review the map by following one person through it. At every handoff, check whether they know what happened, what they can do next, and who can help. Link resulting requirements to [business rules](03-business-rules-and-decisions.md) and later [acceptance criteria](06-acceptance-criteria-and-bdd.md).

## Common mistakes

A list of screens can omit the task that brought the person to the product. A journey assembled from several incompatible actors can hide conflicting needs. Happy-path-only maps miss the moments that drive support cost and abandonment.

Avoid fabricated research detail. Label an invented scenario as proposed, and do not attribute thoughts or emotions to users without evidence. Also avoid turning every opportunity into an immediate feature commitment; prioritize after examining the need and cost.

## Transfer exercise

Map a student borrowing and returning a laptop. Include one interruption outside the software, such as a closed collection desk, and one recovery route. Keep technical components out of the first draft.

Success means a reviewer can follow the student's goal across channels and identify one requirement that a screen list alone would have missed.

Related: [discovery](01-discovery-and-requirements.md), [system boundaries](08-boundaries-ownership-and-trust.md). This reference generalizes the journey technique used during milestone 1; the rental example is an independent illustration.
