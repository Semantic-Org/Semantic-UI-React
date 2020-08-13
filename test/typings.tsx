import * as React from 'react'
import { Button, Dropdown } from '../index'

export const BasicAssert = () => <Button />

export const ShorthandItemElementAssert = () => (
  <Dropdown additionLabel={<i style={{ color: 'red' }}>Custom Language: </i>} />
)

export const ShorthandItemFuncAssert = () => (
  <Button
    content='Foo'
    icon={(Component, props) => (
      <div className='bar'>
        <Component name={props.name} />
      </div>
    )}
  />
)

export const ShorthandItemFuncChildren = () => (
  <Button
    content='Foo'
    label={(Component, props, children) => (
      <div className='bar'>
        <Component active={props.active}>{children}</Component>
      </div>
    )}
  />
)

export const ShorthandItemFuncNullAssert = () => <Button content='Foo' icon={() => null} />
