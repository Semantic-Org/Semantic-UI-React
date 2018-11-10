import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default DividerExampleVertical
