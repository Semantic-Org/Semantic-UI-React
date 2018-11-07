import React from 'react'
import { Flag, Segment } from 'semantic-ui-react'

const ForwardRef = React.forwardRef((props, ref) => (
  <span>
    <i {...props} ref={ref} />
  </span>
))

const FlagExampleFlag = () => (
  <Segment>
    <Flag as={ForwardRef} name='france' ref={c => console.log('ForwardRef', c)} />
    <Flag name='myanmar' ref={c => console.log('None', c)} />
    <Flag as='div' name='russia' ref={c => console.log('Simple', c)} />
  </Segment>
)

export default FlagExampleFlag
