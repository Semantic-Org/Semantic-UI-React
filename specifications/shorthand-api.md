# Shorthand API

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
  - [DOM Structure](#dom-structure)
    - [A Moving Target](#a-moving-target)
    - [Ownership](#ownership)
  - [Intuition & Effort](#intuition--effort)
- [Proposals](#proposals)
  - [Goal](#goal)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why?

### DOM Structure

In traditional UI libraries, developers are required to memorize or copy and paste specific various brittle HTML structures to use components. The developer should be focused on a higher level of describing features.

#### A Moving Target

These structures are often required for the component to work correctly. This makes them brittle and a common source of bugs. This is only exacerbated by the fact that different variations of the same component often require slightly different structures.

The component should own and isolate the brittle nature of required markup.

#### Ownership

Developers require components to have certain styles and behaviors. Components may require a specific DOM structure to achieve those styles and behaviors. Therefore, component DOM structure is the concern and responsibility of the component, not the user.

### Intuition & Effort

When describing a component to another human we use natural language, we don't speak HTML. When defining a component via an API we should strive to use the same natural language. This frees the developer's mind to spend its effort creating actual features opposed to creating implementations of features.

Providing a high level API of natural language allows developers to use intuition and minimal effort to create features.

## Proposals

See the [docs][1].

[1]: https://stardust-ui.github.io/react
