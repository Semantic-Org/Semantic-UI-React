# From Stardust: The V2 Manifesto

What went well with the first version of Semantic UI's React port? What didn't? And, most importantly, what are the fundamental ideas that captivated the community, and how can we make them even more prominent in future versions while reworking the weaker areas? We look to answer those questions by first distilling the philosophy behind Semantic UI, and building anew from that foundation.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [What We Learned](#what-we-learned)
  - [The Good Parts](#the-good-parts)
  - [The Bad Parts](#the-bad-parts)
- [Our Goals](#our-goals)
  - [Painless First Run Experience](#painless-first-run-experience)
  - [Pragmatic Design Language](#pragmatic-design-language)
  - [Intuitiveness](#intuitiveness)
  - [Universal Traits](#universal-traits)
  - [Shorthand Syntax](#shorthand-syntax)
  - [First-class Theming](#first-class-theming)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What We Learned

### The Good Parts
* Interactive documentation
* Auto-controlled components
* Component "as" support
* Shorthand syntax
* Integrated behaviors between components

### The Bad Parts
* Involved setup leads to a suboptimal first run experience
* Difficult to theme
* Tight coupling between markup and CSS, difficult to compose/wrap components
* Inconsistent support for universal traits
* Undiscoverable/unintuitive props and API
* Questionable organization of components (addons, views, etc.)

## Our Goals

The next major version of Semantic UI React should be [painless to setup](#painless-first-run-experience) and eliminate its dependency on external CSS. It should replace the awkward, strict adherence to semantic language ideals with a more [pragmatic](#pragmatic-design-language) approach. A set of [universal traits](#universal-traits) should be supported by all components, making it [intuitive](#intuitiveness) to work with the library after learning only a few core concepts. Finally, we should expand our support for [shorthand syntax](#shorthand-syntax) to accelerate prototyping, and provide first-class support for [theming](#first-class-theming).

### Painless First Run Experience

There should be minimal steps needed to get up and running. That means sane defaults, zero peer dependencies, and negligible (if any) configuration. There are enough barriers to entry in modern web programming as it stands, so we want our out-of-the-box experience to be as complete as possible.

```js
// Before
// ------------------------------
// * install semantic-ui-react
// * download semantic-ui css assets
// * configure your build system to support CSS, if bundling it yourself
// * optionally setup a less compiler to customize the theme

// After
// ------------------------------
// * install semantic-ui-react
// * render the Provider at the root of your application, theming is built-in
```

### Pragmatic Design Language

One of the things that we love about Semantic UI is its friendly design language, where component APIs prioritize human readability. However, this emphasis is also a tax on [intuitiveness](#intuitiveness), and we want to re-evaluate that compromise. Take the `size` property, for example:

```js
// Before
// ------------------------------
<Button size={'mini' | 'tiny' | ... | 'massive'} />
```

The possible options for `size` are familiar since they overlap our everyday language. However, language is subjective and deeply personal, so while Semantic UI understands "massive" to be the largest possible size, its chosen idioms are too restrictive to be intuitive for humans with such diverse vocabularies. Try guessing what the size under "massive" is. And what's bigger, "large" or "big"?  Should users have to spend their time with this?

```js
// After
// ------------------------------
// TODO(zuko): should this be termed `scale` instead?
// TODO(zuko): what about negative?
<Button size={0..N} />
```

Here is where we are willing to make concessions; we compromise on familiar language when it becomes impractical or unreasonable. Users must be able to move instinctively throughout the library, wield and command it, and that means we are responsible for supporting real-world usage above ideals. It means our library must be, above all else, [intuitive](#intuitiveness).

### Intuitiveness

Complementing our focus on pragmatism, we heavily emphasize intuitiveness and, when in doubt, always abide by the [Principle of Least Surprise](https://www.wikiwand.com/en/Principle_of_least_astonishment). Components should do as much as possible to fit our philosophy, but their primary responsibility is to be intuitive. If our ideals lead to an awkward API, we should do our utmost to reconcile the two, and always favor a simple, unsurprising API.


```js
// Before
// ------------------------------
<Table basic='very' /> // uh... what?

// After
// ------------------------------
// TODO(zuko): RFC
// TODO(zuko): basic might be a theme variant, not component-level? Talk about this.
```

Once the user has internalized the library's fundamentals, they should feel confident using and experimenting with it without consulting the documentation. Our goal is to provide a set of moldable, consistent building blocks, not a selection of rigid, pre-built application features to be copied wholesale, so components need to be tailored accordingly.

To accomplish this, we will provide the user with consistent, [universally available traits](#universal-traits) for manipulating components. We must also empathize with the user and anticipate how common idioms will be applied.

### Universal Traits

There should be a set of traits (i.e. `props`) that provide the user a common language for working with all components. These traits will comprise the fundamental building blocks of the library (e.g. positioning, sizing, etc.) and a user should be able to use them confidently once they are internalized.

Traits should be thought of as general ideas more than specific implementations, and so their effect can vary depending on the component. So while it is required that all components implement these traits, they can do so in a way that is natural and intuitive for their intended purpose.

```js
// Before
// ------------------------------
<Button floated />  // Yes
<Header floated />  // Yes
<Icon floated />    // No :(

// After
// ------------------------------
// TODO(zuko): additional/better/more practical examples
<Button floated />  // Yes
<Header floated />  // Yes
<Icon floated />    // Yes
```

### Shorthand Syntax

Keeping code concise is important for readability, and our shorthand syntax for components enables powerful transformations with minimal effort. This also accelerates prototyping, and provides a simplified language for defining component parts. In addition to our existing shorthand support, we also

// TODO(zuko): remove/reword/replace
 * **DO:** Support `as={shorthand}` prop on the root component.
 * **DO:** Support `part={shorthand}` syntax for defining component parts.
 * **DO NOT:** Support `partAs`, because it leads to `partProps`
 * **DO NOT:** Support `renderPart`, because we can just use `part={shorthand}` and support functions as shorthand
 * **DO NOT:** Support arrays since they are not considered shorthand primitives

```js
// Before
// ------------------------------
<Button as="a" />
<Button as={<a href="#" />} />

// After
// ------------------------------
// TODO(zuko): we now allow users to have control over the tree
// TODO(zuko): we can pass props/state to user for that tree
// TODO(zuko): e.g. dropdown menu child lacked state mgmt in v1
<Button as="a" />
<Button as={<a href="#" />} />
<Button as={(Component, props) => <Component {...props} foo="bar" />} />
```

### First-class Theming

The user should be able to create a theme without installing or configuring external tooling.

```js
// Before
// ------------------------------
TODO(zuko): do this

// After
// ------------------------------
TODO(zuko): do this
```
