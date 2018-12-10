import React from 'react'
import { Divider, Header, Image } from 'semantic-ui-react'

const DividerExampleHidden = () => (
  <React.Fragment>
    <Header as='h3'>Section One</Header>
    <Image src='/images/wireframe/short-paragraph.png' />

    <Divider hidden />

    <Header as='h3'>Section Two</Header>
    <Image src='/images/wireframe/short-paragraph.png' />
  </React.Fragment>
)

export default DividerExampleHidden
