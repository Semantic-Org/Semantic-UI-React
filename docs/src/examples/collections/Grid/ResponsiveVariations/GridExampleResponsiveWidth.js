import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleResponsiveWidth = () => (
  <div>
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>

    <Grid>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column largeScreen={2} widescreen={1}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExampleResponsiveWidth
