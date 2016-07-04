CONTRIBUTING
============

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting Started](#getting-started)
  - [Clone & Install](#clone-&-install)
  - [Commit Messages](#commit-messages)
  - [Commands](#commands)
- [Workflow](#workflow)
  - [Create a Component](#create-a-component)
  - [Define _meta](#define-_meta)
  - [Conformance Test](#conformance-test)
  - [Open A PR](#open-a-pr)
  - [Spec out the API](#spec-out-the-api)
- [API](#api)
  - [SUI HTML Classes](#sui-html-classes)
    - [API Patterns](#api-patterns)
    - [Prop Utils](#prop-utils)
    - [Testing className](#testing-classname)
  - [SUI HTML Markup](#sui-html-markup)
    - [SUI Components vs Component Parts](#sui-components-vs-component-parts)
    - [React Components & Sub Components](#react-components-&-sub-components)
    - [Component Part Props](#component-part-props)
- [Testing](#testing)
  - [Coverage](#coverage)
  - [Common Tests](#common-tests)
    - [Usage](#usage)
    - [isConformant (required)](#isconformant-required)
- [State](#state)
  - [AutoControlledComponent](#autocontrolledcomponent)
- [Documentation](#documentation)
  - [Website](#website)
  - [Components](#components)
  - [Props](#props)
  - [Examples](#examples)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

Make sure you have at least [Node.js v6][11]:

```sh
node -v

v6.2.1
```

### Clone & Install

Start by cloning this repo and installing dependencies:

```sh
git clone git@github.com:TechnologyAdvice/stardust.git
cd stardust
npm install
```

### Commit Messages

Please follow the [Angular Git Commit Guidelines][8] format.

### Commands

>This list is not updated, you should run `npm run` to see all scripts.

```sh
npm start                     // run doc site
npm run start:local-modules   // run offline (slower builds)

npm test                      // test once
npm run test:watch            // test on file change

npm run build                 // build everything
npm run build:dist            // build dist 
npm run build:docs            // build docs
npm run build:docs-toc        // build toc for markdown files

npm run deploy:docs           // deploy gh-pages doc site 

npm run lint                  // lint once
npm run lint:fix              // lint and attempt to fix
npm run lint:watch            // lint on file change
```

## Workflow

- [Create a Component](#create-a-component)
- [Define _meta](#define-_meta)
- [Conformance Test](#conformance-test)
- [Open A PR](#open-a-pr)
- [Spec out the API](#spec-out-the-api)

### Create a Component

Create components in `src`.  The directory structure follows SUI naming conventions.  If you're updating a component, push a small change so you can open a PR early.

Stateless components should be written as a `function`:

```js
function Button(props) {
  // ...
}
```

Stateful components should be classes:
 
```js
import AutoControlledComponent from 'src/utils/AutoControlledComponent'

class Dropdown extends AutoControlledComponent {
  // ...
}
```

>You probably need to extend our [`AutoControlledComponent`](#autocontrolledcomponent) to support both [controlled][2] and [uncontrolled][3] component patterns.

### Define _meta

Every component has a static property called `_meta`.  This object defines the component.  The values here are used in `propTypes`, generated documentation, generated test cases, and some utilities.

Here's an example `_meta` object:

```js
import META from 'src/utils/Meta'

const _meta = {
  library: META.library.semanticUI,
  name: 'MyComponent',
  type: META.type.module,
  props: {
    pointing: ['bottom left', 'bottom right'],
  },
}
```

Assuming the above `_meta` is in scope, here's how you should expose it:

```js
function MyComponent() {
  return <div>Hello World</div>
}

MyComponent._meta = _meta
```

```js
class MyComponent {
  static _meta = _meta
  
  render() {
    return <div>Hello World</div>
  }
}
```

### Conformance Test

Review [common tests](#common-tests) below.  You should now add the [`isConformant()`](#isconformant-required) common test and get it to pass.  This will validate the `_meta` and help you get your component off the ground.

### Open A PR

This is a good time to open your PR.  The component has been created, but the API and internals are not yet coded.  We prefer to collaborate on these things to minimize rework.

This will also with getting early feedback and smaller faster iterations on your component.

### Spec out the API

Review the SUI documentation for the component. Spec out the component's proposed API. The spec should demonstrate how your component's API will support all the native SUI features. You can reference this [API proposal][7] for the Input.

Once we have solidified the component spec, it's time to write some code.  The following sections cover everything you'll need to spec and build your awesome component.

## API

The primary areas of focus when designing a component API are:

1. [SUI HTML Classes](#sui-html-classes)
1. [SUI HTML Markup](#sui-html-markup)

Our goal is to map these to a declarative component API.  We map HTML classes to component props.  We map markup to sub components (and sometimes props).

### SUI HTML Classes

SUI component definitions (style and behavior) are defined by HTML classes.  These classes can be split into 4 groups:

1. Standalone &mdash; `basic` `compact` `fluid`
1. Pairs &mdash; `left floated` `right floated`
1. Mixed &mdash; `corner` `top corner`, `padded` `very padded`
1. Groups &mdash; sizes: `tiny` `small` `big`, colors: `red` `green` `blue`

Each group has an API pattern and prop util for building up the `className` and a [Common test](#commont-tests).

#### API Patterns

```js
<Segment basic />                     // standalone
<Segment floated='left' />            // pairs
<Segment padded />                    // mixed
<Segment padded='very' />
<Segment size='small' color='red' />  // groups
```

```html
<div class="ui basic segment"></div>
<div class="ui left floated segment"></div>
<div class="ui padded segment"></div>
<div class="ui very padded segment"></div>
<div class="ui small red segment"></div>
```

#### Prop Utils

Use [`propUtils`][4] to extract the prop values and build up the `className`.  Grouped classes like `color` and `size` simply use the prop value as the `className`.

```js
import cx from 'classnames'
import { useKeyOnly, useValueAndKey, useKeyOrValueAndKey } from 'src/utils/propUtils'

function Segment({ size, color, basic, floated, padded }) {
  const classes = cx(
    'ui',
    size,
    color,
    useKeyOnly(basic, 'basic'),
    useValueAndKey(floated, 'floated'),
    useKeyOrValueAndKey(padded, 'padded'),
    'segment'
  )

  return <div className={classes} />
}
```

#### Testing className

Use [`commonTests`](#common-tests) to test the `className` build up for each prop.  These tests will run your component through all the possible usage permutations:
 
```js
import * as common from 'test/specs/commonTests'
import Segment from 'src/elements/Segment/Segment'

describe('Segment', () => {
  common.propValueOnlyToClassName(Segment, 'size')
  common.propValueOnlyToClassName(Segment, 'color')
  common.propKeyOnlyToClassName(Segment, 'basic')
  common.propKeyAndValueToClassName(Segment, 'floated')
  common.propKeyOrValueToClassName(Segment, 'padded')
})
````

### SUI HTML Markup

#### SUI Components vs Component Parts

It is important to first differentiate between *components* and *component parts* in SUI.  Per the [SUI Glossary][9] for `ui`:

>`ui` is a special class name used to distinguish parts of components from components.
>
>For example, a list will receive the class `ui list` because it has a corresponding definition, however a list item, will receive just the class `item`.

The `ui header` *component* is not the same as a `header` *component part*.  They share the same name but do not support the same features.

A [`ui header`][5] accepts a size class.  The `ui modal` has a *component part* called `header`.  However, the size class is not valid on the `header` *component part*.  You size the `ui modal` *component* instead.

**Header Component**

```html
<div class="ui small header">...</div>
```

**Modal Component (with header *component part*)**

```html
<div class="ui small modal">
  <div class="header">...</div>
</div>
```

#### React Components & Sub Components

Top level Stardust components correspond to SUI *components*.  Stardust sub components correspond to SUI *component parts*.

This allows us to provide accurate `propTypes` validation.  It also separates concerns, isolating features and tests.

Use sub components to design *component part* markup.

```js
<List>
  <List.Item>Apples</List.Item>
  <List.Item>Oranges</List.Item>
  <List.Item>Pears</List.Item>
</List>
```

Create the sub component as a separate component in the parent component's directory:

```js
function  ListItem() {
  // ...
}
```

Attach it to the parent via static properties:

```js
import ListItem from './ListItem'

function List() {
  // ... 
}

List.Item = ListItem
```

```js
import ListItem from './ListItem'

class List {
  static Item = ListItem
}
````

#### Component Part Props

>Warning, this pattern is experimental.  Feel free to consider it in your API spec if it makes sense.  We do not yet know if it is here to stay.

Sometimes it is convenient to use props to generate markup.  Example, the [Label][10] markup is minimal.  One configuration includes an image and detail:

```html
<a class="ui image label">
  <img src="veronika.jpg">
  Veronika
  <div class="detail">Friend</div>
</a>
```

We allow props to define these minimal *component parts*:

```jsx
<Label 
  image='veronika.jpg' 
  detail='Friend'
  text='Veronica'
/>

// or

<Label image='veronika.jpg' detail='Friend'>
  Veronica
</Label>
```

See [`propUtils`][4] for special prop renderers for handling `image` and `icon` props for this purpose.

## Testing

Run tests during development with `npm run test:watch` to re-run tests on file changes.

### Coverage

All PRs must meet or exceed test coverage limits before they can be merged.

Every time tests run, `/coverage` information is updated.  Open `coverage/lcov/index.html` to inspect test coverage.  This interactive report will reveal areas lacking test coverage.  You can then write tests for these areas and increase coverage. 

### Common Tests

There are many common things to test for.  Because of this, we have [`test/specs/commonTests.js`][1].

>This list is not updated, check the [source][1] for current tests and inline documentation.

```js
common.isConformant()
common.hasUIClassName()
common.hasSubComponents()
common.isTabbable()
common.rendersChildren()
common.implementsAlignedProp()
common.implementsIconProp()
common.implementsImageProp()
common.propKeyOnlyToClassName()
common.propValueOnlyToClassName()
common.propKeyAndValueToClassName()
common.propKeyOrValueToClassName()
````

#### Usage
  
Every common test receives your component as its first argument.

```js
import React from 'react'
import * as common from 'test/specs/commonTests'
import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'

describe('Menu', () => {
  common.isConformant(Menu)
  common.hasUIClassName(Menu)
  common.rendersChildren(Menu)
  common.hasSubComponents(Menu, [MenuItem]) // some take additional arguments
})
```

The last argument to a common test is always `requiredProps`.  If your component requires certain props to render, you can pass those last: 

```js
import * as common from 'test/specs/commonTests'
import Select from 'src/addons/Select/Select'

const requiredProps = {
  options: [],
}

describe('Select', () => {
  common.isConformant(Select, requiredProps)
})
```

#### isConformant (required)

This is the only required test.  It ensures a consistent baseline for the framework. It also helps you get your component off the ground.  You should add this test to new components right away.

>This list is not updated, check the [source][1] for the latest assertions.

1. The [static `_meta`](#_meta) object is valid
1. Component and filename are correct
1. Events are properly handled
1. Extra `props` are spread
1. Base `className`s are applied
1. Component is exported if public / hidden if private

## State

TODO

### AutoControlledComponent

TODO

>For now, you should reference Dropdown as an example implementation.  You can also consult the comments in AutoControlledComponent.js for more background. 

## Documentation

- [Website](#website)
- [Components](#components)
- [Props](#props)
- [Examples](#examples)

Our docs are generated from doc block comments, `propTypes`, and hand written examples. 

### Website

Developing against the doc site is a good way to try your component as you build it. Run the doc site with:

```sh
npm start
```

### Components

A doc block should appear above a component class or function to describe it:

```js
/**
 * A <Select /> is sugar for <Dropdown selection />.
 * @see Dropdown
 */
function Select(props) {
  return <Dropdown {...props} selection />
}
```

### Props

A doc block should appear above each prop in `propTypes` to describe them:

>Limited props shown for brevity.

```js
Label.propTypes = {
  /** A label can reduce its complexity. */
  basic: PropTypes.bool,

  /** Primary content of the label, same as text. */
  children: PropTypes.node,

  /** Classes to add to the label className. */
  className: PropTypes.string,

  /** Color of the label. */
  color: PropTypes.oneOf(Label._meta.props.colors),

  /** Place the label in one of the upper corners . */
  corner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Label._meta.props.corner),
  ]),

  /** Add an icon by icon className or pass an <Icon /> */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
}
```

### Examples

>This section is lacking in instruction as the the docs are set to be overhauled (PRs welcome!).

Usage examples for a component live in `docs/app/Examples`.  The examples follow the SUI doc site examples.

Adding documentation for new components is a bit tedious.  The best way to do this (for now) is to copy an existing component's and update them.

[1]: https://github.com/TechnologyAdvice/stardust/blob/master/test/specs/commonTests.js
[2]: https://facebook.github.io/react/docs/forms.html#controlled-components
[3]: https://facebook.github.io/react/docs/forms.html#uncontrolled-components
[4]: https://github.com/TechnologyAdvice/stardust/blob/master/src/utils/propUtils.js
[5]: http://semantic-ui.com/elements/header
[6]: http://semantic-ui.com/views/item
[7]: https://github.com/TechnologyAdvice/stardust/pull/281#issuecomment-228663527
[8]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
[9]: http://semantic-ui.com/introduction/glossary.html
[10]: http://semantic-ui.com/elements/label.html
[11]: https://nodejs.org/
