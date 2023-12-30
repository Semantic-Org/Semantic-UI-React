import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const LabelExampleCorner = () => (
  <Grid columns={2}>
    <GridColumn>
      <Image
        fluid
        label={{ as: 'a', corner: 'left', icon: 'heart' }}
        src='/images/wireframe/image.png'
      />
    </GridColumn>

    <GridColumn>
      <Image
        fluid
        label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
        src='/images/wireframe/image.png'
      />
    </GridColumn>
  </Grid>
)

export default LabelExampleCorner
