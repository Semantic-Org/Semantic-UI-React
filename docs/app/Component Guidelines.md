# Stardust Component Guidelines

Every component in Stardust must conform to these guidelines.
They ensure consistency and optimal development experience for Stardust users.

1. [Classes](#Classes)
  - [Extend React.Component](#Extend React.Component)
  - [Identical class and component names](#Identical class and component names)
  - [No wrapping elements](#No wrapping elements) 
1. [Events](#Events)
1. [Props](#Props)
  - [className](#className)

## Classes

### Extend React.Component

**Always**

```jsx
import React, {Component} from 'react';

export default class MyComponent extends Component {...}
```

**Never**

```jsx
import React, {Component} from 'react';

export default class MyComponent {...}
```
>This is a new class, does not extend React.Component.

### Identical class and component names

Given `MyComponent.js` is a component attached to `stardust.MyComponent`:

**Always**

```jsx
export default class MyComponent extends Component {...}
```

**Never**

```jsx
export default class extends Component {...}
```
>This is an anonymous class, actually named `_deafult`.

```jsx
export default class YourComponent extends Component {...}
```
>This class has the wrong name, it should be `MyComponent`.

### No wrapping elements

The element with the `sd-*` className is the first child (no wrapper elements).

**Always**

```jsx
export default class Input extends Component {
  render() {
    return (
      <input className='sd-input' />
    );
  }
}
```

**Never**

```jsx
export default class Input extends Component {
  render() {
    return (
      <Field
        <input className='sd-input' />
      </Field>
    );
  }
}
```
>Never wrap the component with other components, whether DOM or Composite.

## Events

Stardust manages Semantic UI's jQuery via React events and lifecycle methods.

Example, the Message component can be dismissed on click of the close icon. Per
the Semantic UI docs, this is done by calling Semantic UI's `transition()`
jQuery plugin on the message via a jQuery click event handler. Instead, 
Stardust uses React's `onClick` listener to trigger the `transition()`.

## Props

### Spread props

Stardust components [spread](https://facebook.github.io/react/docs/jsx-spread.html) 
props onto the internal Semantic UI element of concern. This allows access to the 
underlying element.

**Always**

```jsx
<Input onFocus={this.handleFocus} />
// => <input type='text' className='sd-input ui input' onFocus={this.handleFocus} /> 
```

```jsx
<Input data-my-plugin='do-magic' />
// => <input type='text' className='sd-input ui input' data-my-plugin='do-magic' /> 
```

**Never**

```jsx
<Input onFocus={this.handleFocus} />
// => <input type='text' className='sd-input ui input' /> 
```
>`onFocus` prop was lost.

```jsx
<Input data-my-plugin='do-magic' />
// => <input type='text' className='sd-input ui input' /> 
```
>`data-my-plugin` prop was lost.

### className

Stardust components construct the `className` prop in this order.

1. `sd-<component>`
1. `ui` (Semantic UI class, if required)
1. `this.props.className`
1. `<component>` (Semantic UI class)

Where it makes sense, some optional classes are automatically applied.
For instance, the [`fitted`](http://semantic-ui.com/modules/checkbox.html#fitted)
class on checkboxes with no labels (as prescribed by the checkbox docs).
All magic is noted in the documentation examples.

#### Inherits `props.className` after `sd-<component>`

**Always**

```jsx
<Field className='inherit-this' />
// => <div className='sd-field inherit-this field>...
```

**Never**

```jsx
<Field className='inherit-this' />
// => <div className='sd-field field>...
```
>className was not inherited

```jsx
<Field className='inherit-this' />
// => <div className='inherit-this sd-field field>...
```
>className was inherited before sd-field

```jsx
<Field className='inherit-this' />
// => <div className='inherit-this sd-field field>...
```
>className was not inherited before sd-field

#### Has `sd-<component>` as the first class

**Always**

```jsx
<Divider />
// => <div className='sd-divider ui divider' /> 
```

**Never**

```jsx
<Divider />
// => <div className='ui divider' /> 
```
>Missing `sd-divider` className.

```jsx
<Divider />
// => <div className='ui sd-divider divider' /> 
```
>`sd-divider` className does not come first.

#### Has `ui` immediately after `sd-<component>`

Only for components that utilize the `ui` class (i.e `ui grid` but not `column`).

**Always**

```jsx
<Grid />
// => <div className='sd-grid ui grid' /> 
```

**Never**

```jsx
<Grid />
// => <div className='sd-grid grid ui' /> 
```
>`grid` is immediately after `sd-grid`.

#### Has `props.className` immediately after `ui`

Only for components that utilize the `ui` class (i.e `ui form` but not `field`).

**Always**

```jsx
<Form />
// => <div className='sd-form ui form' /> 
```

**Never**

```jsx
<Form className='loading' />
// => <div className='sd-form loading ui form' /> 
```
>Inherited `loading` className comes before `ui`.

```jsx
<Form className='loading' />
// => <div className='sd-form ui form loading' /> 
```
>Inherited `loading` className comes after `form`.
