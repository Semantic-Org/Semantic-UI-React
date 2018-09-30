import * as React from 'react'
import { Button, Dropdown } from '../index'

const BasicAssert = () => <Button />

const ShorthandItemElementAssert = () => (
  <Dropdown additionLabel={<i style={{ color: 'red' }}>Custom Language: </i>} />
)

const ShorthandItemFuncAssert = () => (
  <Button
    content="Foo"
    icon={(Component, props) => (
      <div className="bar">
        <Component name={props.name} />
      </div>
    )}
  />
)

const ShorthandItemFuncNullAssert = () => <Button content="Foo" icon={() => null} />

export default BasicAssert
