import React from 'react'
import { Grid, Image, Label, Segment } from 'stardust'

const imageStyles = {
  marginBottom: '1rem',
  marginTop: '1rem',
}

const LabelExampleAttached = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Label attached='top'>HTML</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Label attached='bottom'>CSS</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Label attached='top right'>Code</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Label attached='top left'>View</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Label attached='bottom left'>User View</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Label attached='bottom right'>Admin View</Label>
          <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default LabelExampleAttached
