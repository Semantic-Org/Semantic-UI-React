import * as React from 'react'
import { Button, Dropdown, Icon } from '../index'

export const BasicAssert = () => (
  <>
    <Button />
    <Button content='Foo' />
    <Button>Foo</Button>
  </>
)

export const RefAssert = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const iconRef = React.useRef<HTMLElement>(null)

  return (
    <>
      <Button ref={buttonRef} />
      <Icon name='history' ref={iconRef} />
    </>
  )
}

export const ShorthandItemElementAssert = () => (
  <Dropdown additionLabel={<i style={{ color: 'red' }}>Custom Language: </i>} />
)

export const ShorthandItemFuncAssert = () => (
  <>
    <Button
      icon={{
        children: (Component, props) => (
          <div className='bar'>
            <Component name={props.name} />
          </div>
        ),
      }}
    />
    <Button
      label={{
        children: (Component, props) => (
          <div className='bar'>
            <Component active={props.active}>{props.children}</Component>
          </div>
        ),
      }}
    />
    <Button label={{ children: () => <div className='bar' /> }} />
  </>
)

export const ShorthandItemFuncNullAssert = () => (
  <Button content='Foo' icon={{ children: () => null }} />
)

export const ShorthandItemBooleanAssert = () => (
  <>
    <Button icon />
    <Button icon={false} />
    <Button label={false} />
  </>
)
