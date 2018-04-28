# Overview

Goals:

- Remove dependency on precompiled CSS stylesheets
- Support site themes/styles
- Support component themes/styles
- Support compile time/runtime updates to global/component themes/styles 

## How are we going to do this?

- Port LESS site variables to JS
- Port LESS component variables to JS
- Port LESS component definitions to JS
- Render JS definitions as fela rule functions

## What changed?

In support of the goals, the following changes were made (initially).

| File                                          | Responsibility                              |
|-----------------------------------------------|---------------------------------------------|
| `/docs/app/index.js`                          | Sets up the fela renderer/theme providers (temp, would be a single SUIR Provider)./ | 
| `/lib/styles/defaultSiteVariables.js`         | `NEW` Defines global site variables (default theme). | 
| `/elements/Label/variables.js`                | `NEW` Accepts site variables and returns component variables. | 
| `/elements/Label/rules.js`                    | `NEW` Generates fela style objects, taking in site variables and component variables. | 
| `/lib/createComponent.js`                     | `NEW` Single function that would configure all components.  Handles style, shorthand, element type, rest props, etc. | 
| `/elements/Label/Label.js`                    | Updated to use createComponent() and generated styles (classNames). | 

Look for comments and TODOs each file for more info.

Note, variable/style files were copied as LESS and are being migrated piece by piece as needed.  This also allows us to track changes and make decisions on patterns incrementally.

## `render*()` Props

This is a popular pattern in the recent React community.  Note how I've used them to allow users to pass custom elements to "component parts" and apply the generated classes:

```jsx
<Label
  image
  renderImage={({ styles }) => (
    return <img className={styles.__img} src='/assets/images/avatar/small/stevie.jpg' />
  )}
  content='Stevie'
/>
```

Normally, the `img` would be unstyled.  However, a render prop allows us to hand the `theme`, `rules`, and `styles` to the consumer so they can construct a "component part" tree and apply the styles correctly.

## :warning: How to use :warning:

- Run `yarn start`
- Go to http://localhost:8080/elements/label
- Only the `Label` is being tested, hack on it for testing

# Findings

My thoughts as I ported the Label to CSS in JS using `fela`.

## `className`

### Monolithic vs Atomic Class Names

We avoid atomic class names for a better debugging experience, consistency, extensibility, and allowing 3rd parties to more easily integrate with our components.

We allow `fela` to generate `monolithic()` `className`s.  We associate a `className` to each rule function:

```jsx
// Label/rules.js

export const label = props => ({
  className: 'ui-label',
  display: 'inline-block',
  ...
}
```

We then compose the monolithic `className`s using `cx` as we did before:

```jsx
// Label/Label.js

render() {
  const { ElementType, styles } = this.props

  const classes = cx(
    styles.label,
    ElementType === 'a' && styles.link,
  )
  
  ...
}

```

One difference is that we use BEM inspired class names. Use of `!important` should no longer be required as the new classNames are composable without collisions.

The `!important` flags existed only due to heavy reuse of common class names.  However, React component APIs are not bound by class names.  We can still provide sleek and beautiful component APIs while generating human readable but machine friendly class names.

Example:

| React API           | SUI Class         | Fela Class                   |
|:--------------------|:------------------|:-----------------------------|
| `<Label />`         | `.ui.label`       | `.ui-label`                  |
| `<Label as='a' />`  | `a.ui.label`      | `.ui-label .ui-label--link`  |
| `<Label image />`   | `.ui.image.label` | `.ui-label .ui-label--image` |

## Child Elements

Styles for child elements must be treated like state for child elements.  We can configure them for the user only when using shorthand props.  When the user defines children, they must also apply the styles themselves.

## `:first-child` (etc)

These rules are brittle as they break when a user wraps a component or changes the DOM structure.

I've included `'&:first-child': {}` rules in this first run, but I'm entertaining an explicit API like:

```jsx
<Label firstChild />
<Label lastChild />

// or
<Label first />
<Label last />
```

This would allow users to better handle cases where a component is first or last, but not necessarily so in the DOM. 

# Isolation vs Cascading

We're fixing issues with parent components reaching in and breaking the style of child components.  However, we've had issues requesting certain styles to cascade, such as inverted:
https://github.com/Semantic-Org/Semantic-UI-React/issues/2741

This is an excerpt from that conversation and includes considerations for both patterns.

### Case for isolation

When we design modular code we adhere to principles like the law of demeter, limited awareness, encapsulation, and black boxes. In functional programming, we employ pure functions, avoid side effects, and never reach outside scope. These principles (and their friends) make our code portable, reusable, easy to reason about, easy to test, and most importantly they make systems that are predictable and maintainable.

It seems to me that when it comes to styling we too easily throw these principles out. We are quick to entangle the styling of components with the implementation details of their potential neighbors.

The output of a function ought to be owned by the function alone. I see components as functions and style as output. The style of a component then ought to be owned by that component alone. A component should provide arguments for changing the style. Just as a good function provides arguments for changing its output.

Consider this analogy of an inverted Segment with a Menu inside:

const menu = () => {
  return inverted ? 'inverted menu' : 'menu'
}

const segment = () => {
  const inverted = true

  return Menu()
}
What's wrong? The menu() is relying on an out of scope variable to exist. Most PR reviewers would call this out for correction. Why? First, inverted is not defined in the menu's scope and will throw. OK, let's strictly fix the undefined issue:

const menu = () => {
  return typeof inverted === 'undefined' ? 'menu' : 'inverted menu'
}

const segment = () => {
  const inverted = true

  return Menu()
}
Still, PR reviewers would likely call this out. Why? It is not pure! The output is not predictable nor consistent. Depending on where you call this function, it will behave differently even though you used the exact same arguments. This may seem helpful in an isolated case, but a system built on these kinds of blocks will be unreasonable chaos.

In order to be pure, the menu must be honest about it's dependencies and own the value it is referencing. It needs to accept it as an argument:

const menu = (inverted = false) => {
  return inverted ? 'inverted menu' : 'menu'
}

const segment = () => {
  const inverted = true

  return Menu(inverted)
}
Cool, now this is testable, reusable, moveable, predictable, consistent, intuitive, and simple. Most PR reviewers would accept this code. I hope the correlation is clear, but here it is in JSX just in case:

<Segment inverted>
  <Menu />
</Segment>
Ask ourselves, should the Menu be inverted? I'm thinking no. Segment should not know about Menu and vice versa. Segment should not be allowed to reach into implementation details (styling) of Menu and change them. Segment and Menu both should be pure, rending the exact same UI when given the same props, no matter when or where they are rendered.

We have a real problem currently with how many child component styles are completely changed when placed in the context of a parent. Menu's do this to Labels when used in a Menu Item. The Label props are largely ignored and the Menu overrides their style. This is not good and something we will get away from.

### Case for cascading
There are limited scenarios when globals are acceptable, such as base theme information. It is clear that some aspects of styling should not be global or cascade, like borders and shadows. This is harder to answer for some aspects of styling, like sizing.

My counter thought to the isolation argument is that the concept of inverted may in fact be nothing more than a dark theme. Theme is an acceptable global and should also be configurable at any point in the tree. We can imagine changing the theme from light to dark for a given branch in the tree and expecting all components in that branch to take on the theme.

In the CSS in JS conversion, it may be that inverted goes away and we instead embrace it as a theme variant. It is also valid that we keep the concept of inverted and treat it as a theme parameter, passing it through context.
