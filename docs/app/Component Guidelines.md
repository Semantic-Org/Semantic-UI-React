# Stardust Component Guidelines

Every component in Stardust must conform to these guidelines.  They ensure consistency and optimal development experience for Stardust users.

This document will be minimally maintained.  See [`\test`](https://github.com/TechnologyAdvice/stardust/tree/master/test) for the current conformance tests.

## Extends React.Component

**Valid**

```jsx
import React, {Component} from 'react';

export default class MyComponent extends Component {...}
```

**Invalid**

```jsx
import React, {Component} from 'react';

export default class MyComponent {...}
```
>This is a new class, does not extend React.Component.

## Constructor name matches component name

Give `MyComponent.js` is a component attached to `stardust.MyComponent`:

**Valid**

```jsx
export default class MyComponent extends Component {...}
```

**Invalid**

```jsx
export default class extends Component {...}
```
>This is an anonymous class, actually named `_deafult`.

```jsx
export default class YourComponent extends Component {...}
```
>This class has the wrong name, it should be .

## Has the `sd-<component>` element as its first child (no wrapper elements)

**Valid**

```jsx
export default class Input extends Component {
  render() {
    return (
      <Input />
    );
  }
}
```

**Invalid**

```jsx
export default class Input extends Component {
  render() {
    return (
      <Field
        <Input />
      </Field>
    );
  }
}
```
>Never wrap the component with other components, whether DOM or Composite.

## Has props.className after `sd-<component>`

**Valid**

```jsx
<Field className='inherit-this' />
// => <div className='sd-field inherit-this field>...
```

**Invalid**

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

## Has `sd-<component>` as the first class

**Valid**

```jsx
<Divider />
// => <div className='sd-divider ui divider' /> 
```

**Invalid**

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

## Has `ui` class immediately after `sd-<component>`
Only for components that utilize the `ui` class (i.e `ui grid` but not `column`).

**Valid**

```jsx
<Grid />
// => <div className='sd-grid ui grid' /> 
```

**Invalid**

```jsx
<Grid />
// => <div className='sd-grid grid ui' /> 
```
>`grid` is immediately after `sd-grid`.

## Has props.className immediately after `ui`

Only for components that utilize the `ui` class (i.e `ui form` but not `field`).

**Valid**

```jsx
<Form />
// => <div className='sd-form ui form' /> 
```

**Invalid**

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

## Spreads props
Allows access to the underlying element of concern.

**Valid**

```jsx
<Input onFocus={this.handleFocus} />
// => <input type='text' className='sd-input ui input' onFocus={this.handleFocus} /> 
```

```jsx
<Input data-my-plugin='do-magic' />
// => <input type='text' className='sd-input ui input' data-my-plugin='do-magic' /> 
```

**Invalid**

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
