# Builds, type checks, linting, and behavior tests

## Purpose

Engineering checks provide evidence for different claims. Knowing which claim a check supports helps a team interpret a green command and choose the next useful check. Start with the package scripts and their configuration; a command named build can include different operations in different projects.

## Mental model and distinctions

| Check | Question it helps answer | Limit of a successful result |
| --- | --- | --- |
| Dependency installation | Can the package manager resolve and install this dependency graph? | Does not establish that the application starts or meets requirements |
| Type checking | Does the checked code satisfy the configured type constraints? | Incorrect business calculations can still have valid types |
| Linting | Does the selected code satisfy the configured analysis rules? | Rules cover selected patterns; they do not encode every product requirement |
| Production build | Can this pipeline produce its configured application artifacts? | Does not by itself exercise the application's user journeys |
| Behavior test | Does this executed scenario produce its expected result? | Evidence is limited by scenarios, assertions, environment, and test quality |

Static analysis inspects code without exercising the application as a customer would. Type checking and linting are forms of static analysis; some lint rules also use type information. Their coverage can overlap.

Transpilation changes source syntax into another form, such as TypeScript into JavaScript. Bundling follows dependencies and assembles output assets. Neither operation inherently verifies a business policy. A build pipeline may additionally invoke tests, so inspect its commands before describing what passed.

## How to apply it

Read the script, identify each stage, and inspect the configuration that controls it. Record the command and observed result separately from your interpretation. Match each concern to a relevant check rather than repeatedly running unrelated commands.

For a script such as `tsc -b && vite build`, the shell starts the Vite stage only after the TypeScript stage succeeds. With `noEmit` enabled, TypeScript checks the configured projects without emitting JavaScript. Vite then transforms and bundles the browser application. Vite's TypeScript transformation does not itself perform type checking. See [TypeScript noEmit](https://www.typescriptlang.org/tsconfig/noEmit.html), [Vite TypeScript support](https://vite.dev/guide/features.html#typescript), and [production builds](https://vite.dev/guide/build.html).

## Runtime dependencies and development tools

Classify a package by the role it plays in the chosen delivery approach. For a booking server deployed as compiled JavaScript, its HTTP framework is a runtime dependency. The TypeScript compiler is development/build tooling: the build environment needs it, while the running compiled application does not invoke it. This distinction does not mean an ordinary npm install excludes development dependencies; installation mode and deployment strategy matter.

Type-declaration packages describe APIs for the type checker without implementing those APIs at runtime. For example, Express's [TypeScript installation guidance](https://expressjs.com/en/starter/installing/#typescript) separates Express from the compiler and declaration packages. Installing a library's declarations alone does not install its runtime implementation. Matching Node declarations to the intended runtime major helps avoid relying on APIs absent from that runtime; declarations still do not replace runtime verification.

## Follow the command through its wrapper

A package script names a command, while that command's own configuration controls its behavior. For example, a script invoking TypeScript can use tsconfig.json for checking and output settings; a lint script can invoke ESLint with a separate configuration. Reading package.json alone does not establish every check that will run.

The standalone -- delimiter also matters when a package manager launches a tool. For [npm exec](https://docs.npmjs.com/cli/v11/commands/npm-exec/#npx-vs-npm-exec), it stops npm parsing following flags as its own options. [npm initializer commands](https://docs.npmjs.com/cli/v11/commands/npm-init/#forwarding-additional-options) similarly forward additional arguments to the initializer. Inspect both layers when a command behaves unexpectedly: the workspace or package-manager selection, then the launched tool and its arguments. This principle applies beyond one particular application's setup.

## Project inputs and compiler output paths

Configuration nesting carries meaning. TypeScript's project-level include and files settings choose initial inputs, while compilerOptions contains compiler behavior. Imported dependencies can also become part of the program. A setting's name alone is not enough to determine where it belongs in the configuration schema.

The [rootDir option](https://www.typescriptlang.org/tsconfig/rootDir.html) sets the source base used to preserve relative paths in emitted output; it does not filter inputs. The [outDir option](https://www.typescriptlang.org/tsconfig/outDir.html) sets the output directory. For a workshop application with rootDir set to src and outDir set to dist, src/fees/calculate.ts emits to dist/fees/calculate.js when emission is enabled. Keeping source selection distinct from path mapping makes it easier to reason about later test files, scripts, and generated artifacts.

## Environment records and repeatability

A check result also depends on its environment. A project's .nvmrc records an intended Node runtime version, while its package lockfile records resolved package dependencies. Version managers such as [fnm](https://github.com/Schniz/fnm) can read the version file; creating that file alone does not install the runtime, enforce CI settings, or switch every existing terminal session.

For example, a booking client may build successfully in one terminal while another terminal uses a different Node version. Record the runtime and actual command alongside the result. A version record and lockfile help repeat an environment, but they do not replace checking that the selected runtime and installed dependencies match those records.

### Choosing a compiler environment

TypeScript's [target](https://www.typescriptlang.org/tsconfig/target.html) controls the language level of emitted JavaScript. ESNext follows the newest level supported by the installed compiler; upgrading the compiler can therefore change this baseline. A fixed runtime-compatible target is one way to make that choice explicit. It is not a universal rule: some pipelines delegate transformation or compatibility to another tool.

These settings answer separate questions:

| Setting | Primary concern | Example |
| --- | --- | --- |
| target | JavaScript syntax level emitted by the compiler | Whether a syntax feature is preserved or transformed for an older language level |
| lib | Standard API declarations used in checking | Whether TypeScript has definitions for an array API or the browser DOM |
| module | Import/export behavior modeled and emitted for the loader | Node module rules and ES-module/CommonJS interpretation |

A language target such as ES2023 does not itself select ES-module syntax or install an API into the runtime. Module and package settings have their own role; API declarations describe expected capabilities rather than creating them.

The [lib setting](https://www.typescriptlang.org/tsconfig/lib.html) selects standard API declarations, while [types](https://www.typescriptlang.org/tsconfig/types.html) controls automatically loaded global declarations from selected type packages. These describe capabilities; they do not provide runtime implementations or polyfills. For a Node application, avoid granting DOM types merely because a browser client also lives in the repository. Confirm the chosen runtime supports the APIs the code actually uses.

A runtime-specific preset can inform the choice. The [community Node 24 preset](https://github.com/tsconfig/bases/blob/main/bases/node24.json), linked through TypeScript's target guidance, uses an ES2024 target. Treat such a preset as an explicit reference to review, rather than assuming every option applies unchanged to every delivery pipeline.

### Language level and module behavior are separate

The compiler target sets a JavaScript language baseline, while [module configuration](https://www.typescriptlang.org/tsconfig/module.html) informs checking and emission of imports and exports. For code emitted to run directly on Node, NodeNext models Node's module rules. The nearest package's [type field](https://nodejs.org/api/packages.html#type) and file extensions help determine the module format. Setting NodeNext alone does not make every file an ES module.

A booking application's backend can explicitly choose type module for its emitted .js files while the compiler uses NodeNext. A browser package processed by a bundler can instead use a bundler-oriented configuration. Review which tool actually loads the output, then check that its module expectations agree with the compiler and package metadata. CommonJS and ES modules are both valid choices; avoid copying a frontend configuration into a backend without reviewing that execution context.

## Source freshness and the development loop

A command that executes a compiled artifact does not inherently rebuild it. For example, a workshop-fee program can keep running the previous dist version even after its TypeScript source changes. Inspect the actual command and artifact path rather than assuming a script name such as start includes compilation.

One development approach combines [TypeScript watch mode](https://www.typescriptlang.org/docs/handbook/configuring-watch.html) with [Node watch mode](https://nodejs.org/api/cli.html#--watch): one job recompiles source, while the other restarts execution when generated JavaScript changes. This preserves the compilation/execution separation but requires coordinating both commands. Do not assume that reporting type errors also blocks emission; review the compiler's emission policy explicitly.

Another approach uses [tsx watch](https://tsx.hirok.io/watch-mode) to execute transformed source and restart it. This adds a runner dependency and [does not perform type checking](https://tsx.hirok.io/typescript), so retain a separate compiler check. [Node's native TypeScript support](https://nodejs.org/api/typescript.html) can avoid that runner, but has a different syntax and configuration contract. Choose against the delivery pipeline, supported syntax, feedback needs, and maintenance cost rather than assuming one workflow is universally best.

## Worked example outside the demo

Suppose a library charges an illustrative late fee of 20 cents per day. A function instead calculates 40 cents per day. If both operands and the returned value are numbers, that error can satisfy TypeScript and still produce a bundle. A test comparing the three-day fee with the required 60 cents would expose the incorrect calculation.

A different error, returning text where a number is required, may be detected by the configured type checker. An [ESLint rule](https://eslint.org/docs/latest/use/core-concepts/) may detect a suspicious coding pattern before a behavior test encounters it. These checks complement each other; none proves every aspect of the product.

A behavior scenario can follow Arrange, Act, Assert: establish a starting condition, perform an action, and inspect the expected observable result. For a screen interaction, assert what the user sees rather than checking an unrelated local variable. Choosing the correct assertion is separate from knowing a testing library's syntax.

## Common mistakes

- Calling every successful command a passing test, without identifying what ran.
- Assuming the browser displaying a page establishes that production type checks passed.
- Assuming a successful build proves business rules or external integrations work.
- Writing tests that reproduce the implementation's formula instead of deriving expected values from the requirement.

## Transfer exercise

A parcel-pricing application adds an incorrect surcharge while still returning a number. Explain which check you would use to expose the wrong amount, and what an installation, lint, or build success would establish separately. Success means naming an input and an independently derived expected result, without treating one green command as proof of the entire application. Leave the exercise unanswered until selected for practice.

## Connections

This guide arose during [project scaffolding](../../learning/milestone-02-language-and-http/01-project-scaffolding.md). Relate test expectations to [acceptance criteria](../product-engineering/06-acceptance-criteria-and-bdd.md). The guide includes preparation beyond the checks the learner has run; publication does not establish mastery.
