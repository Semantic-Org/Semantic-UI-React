import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleDividedPhrase = () => (
  <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedPhrase
