import React from 'react'
import { Segment, Button, Divider } from 'semantic-ui-react'

const DividerExampleHorizontal = () => (
  <Segment padded>
    <Button primary fluid>Login</Button>
    <Divider horizontal>Or</Divider>
    <Button secondary fluid>Sign Up Now</Button>
  </Segment>
)

export default DividerExampleHorizontal
