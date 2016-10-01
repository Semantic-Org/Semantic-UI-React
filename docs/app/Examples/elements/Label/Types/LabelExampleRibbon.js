import React from 'react'
import { Grid, Image, Label, Segment } from 'stardust'

const imageStyles = {
  marginBottom: '1rem',
  marginTop: '1rem',
}

const LabelExampleRibbon = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>Overview</Label>

        <span>Account Details</span>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />

        <Label as='a' color='blue' ribbon>Community</Label>
        User Reviews
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>Specs</Label>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />

        <Label as='a' color='teal' ribbon='right'>Reviews</Label>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' style={imageStyles} />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbon
