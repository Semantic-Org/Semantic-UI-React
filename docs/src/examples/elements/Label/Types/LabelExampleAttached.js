import React from 'react'
import {
  GridRow,
  GridColumn,
  Grid,
  Image,
  Label,
  Segment,
} from 'semantic-ui-react'

const LabelExampleAttached = () => (
  <Grid columns={3}>
    <GridRow>
      <GridColumn>
        <Segment padded>
          <Label attached='top'>HTML</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment padded>
          <Label attached='bottom'>CSS</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment padded>
          <Label attached='top right'>Code</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn>
        <Segment padded>
          <Label attached='top left'>View</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment padded>
          <Label attached='bottom left'>User View</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment padded>
          <Label attached='bottom right'>Admin View</Label>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default LabelExampleAttached
