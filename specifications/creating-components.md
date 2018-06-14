# Creating Components

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
- [Proposals](#proposals)
  - [createComponent() HOC](#createcomponent-hoc)
  - [BaseComponent](#basecomponent)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why?

Most UI components require a common set of behavior such as styling and accessibility.  There should be a single point of responsibility for implementing these behaviors.

## Proposals

### createComponent() HOC

This is an HOC which takes a component and a config and returns a class component.

```jsx
createComponent(Component, { ... })
```

**Pros**

- 

**Cons**

-

### BaseComponent

Adds minimal number of HOCs to the render tree.

```jsx
class Button extends BaseComponent {
  ...
}
```

**Pros**

- 

**Cons**

-
