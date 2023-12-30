import React from 'react'
import { GridColumn, Grid, Image, Label, Segment } from 'semantic-ui-react'

const LabelExampleRibbon = () => (
  <Grid columns={2}>
    <GridColumn>
      <Segment raised>
        <Label as='a' color='red' ribbon>
          Overview
        </Label>
        <span>Account Details</span>

        <Image src='/images/wireframe/paragraph.png' />

        <Label as='a' color='blue' ribbon>
          Community
        </Label>
        <span>User Reviews</span>

        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </GridColumn>

    <GridColumn>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>
          Specs
        </Label>
        <Image src='/images/wireframe/paragraph.png' />

        <Label as='a' color='teal' ribbon='right'>
          Reviews
        </Label>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </GridColumn>
  </Grid>
)

export default LabelExampleRibbon
