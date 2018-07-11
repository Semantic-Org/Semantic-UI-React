# Creating Components

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
  - [Goals](#goals)
  - [Restrictions](#restrictions)
- [Proposals](#proposals)
  - [`createComponent(Component, config)`](#createcomponentcomponent-config)
  - [`<Render />`](#render-)
  - [Directly render consumers](#directly-render-consumers)
  - [HOC Context](#hoc-context)
  - [Others](#others)
- [Conclusions](#conclusions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why?

Most UI components require a common set of behavior such as styling and accessibility.  There should be a single point of responsibility for implementing these behaviors.

### Goals

1. :+1: Provide a single path for creating components.
1. :+1: Allow future extension for base features, such as state machines.
1. :+1: Expose a public API for consumers to create components.
1. :+1: Support cascading the CSS-in-JS renderer and theme in the React tree.
1. :+1: Support overriding component styles, variables, and theme.
1. :+1: Consumer's should be able to react to props/context changes using shouldComponentUpdate.

### Restrictions

1. :no_entry_sign: Avoid private and deprecated APIs.
1. :no_entry_sign: Avoid passing extra props to the component just for generating styles
1. :no_entry_sign: Limit the number of wrapping elements in the render tree
1. :no_entry_sign: Keep the component first in render tree if wrapping components are required

## Proposals

We explored the following approaches.  The below code snippets simplified for ease of review.

### `createComponent(Component, config)`

A HOC that wraps the provided component and passes features through props.

```jsx
import imageRules from './imageRules'
import imageVariables from './imageVariables'

const Image = (props) => {
  const { classes } = props

  return <img className={classes.root} />
}

export default createComponent(Image, {
  rules: imageRules,
  variables: imageVariables,
})
```

### `<Render />`

A component that takes config as props and computes all the values necessary to create your component.

```jsx
class Image extends Component {
  render() {
    return (
      <Render
        handledProps={[ ... ]}
        state={StateMachine}
        props={this.props}
        rules={...}
        variables={...}
        render={({ ElementType, rest, classes }) => (
          <ElementType {...rest} className={classes.root} />
        )}
      />
    )
  }
}
```

### Directly render consumers

Directly import context consumers and use them in the render method to access the CSS-in-JS renderer and theme.

```jsx
import Provider from '../Provider'
import imageRules from './imageRules'
import imageVariables from './imageVariables'

class Image extends Component {
  render() {
    return (
      <Provider.Consumer
        render={(theme) => {
          const classes = getClasses(this.props, imageRules, imageVariables, theme)

          return <img className={classes.root} />
        }}
      />
    )
  }
}
```

### HOC Context

A function to be returned in the render method. Calls back with the theme.  Implemented by using a theme consumer in a function.

```jsx
import Provider from '../Provider'
import imageRules from './imageRules'
import imageVariables from './imageVariables'

const Image = (props) => {
  return hocContext((theme) => {
    const classes = getClasses(props, imageRules, imageVariables, theme)

    return <img className={classes.root} />
  })
}
```

### Others

We tested and ruled out these approaches as they rely on the legacy context API and private fela APIs.

- BaseComponent - Extend a base class which provides context and a method for creating style classes.
- Functional context - "Hides" usage of the legacy context API.  Adds statics to the component and provides a function for accessing context.

## Conclusions

- Multiple wrapping elements in the React tree are unavoidable due to the need for cascading themes and CSS-in-JS renderers.
- ...

