import React from 'react'
import { createComponent } from 'react-fela'

const KnobsValue = createComponent(
  () => ({
    padding: '0 0.5rem',
  }),
  props => (
    <span className={props.className}>
      <code>{JSON.stringify(props.children, null, 2)}</code>
    </span>
  ),
)

export default KnobsValue
