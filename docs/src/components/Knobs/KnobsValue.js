import React from 'react'
import { createComponent } from 'react-fela'
import { rem } from 'src/lib'

const KnobsValue = createComponent(
  () => ({
    padding: `0 ${rem(0.5)}`,
  }),
  props => (
    <span className={props.className}>
      <code>{JSON.stringify(props.children, null, 2)}</code>
    </span>
  ),
)

export default KnobsValue
