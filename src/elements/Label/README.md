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

In support of the goals, the following changes were made

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
