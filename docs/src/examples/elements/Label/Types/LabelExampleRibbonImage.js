import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <GridColumn>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Hotel',
          icon: 'hotel',
          ribbon: true,
        }}
        src='/images/wireframe/image.png'
      />
    </GridColumn>

    <GridColumn>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'blue',
          content: 'Food',
          icon: 'spoon',
          ribbon: true,
        }}
        src='/images/wireframe/image.png'
      />
    </GridColumn>
  </Grid>
)

export default LabelExampleRibbonImage
