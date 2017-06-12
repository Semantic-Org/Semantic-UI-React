import React from 'react'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => (
  <Image
    style={{ marginTop: 14, marginBottom: 14 }}
    className='wireframe paragraph image'
    src='/assets/images/wireframe/paragraph.png'
  />
)

const StickyAdjacentContextExample = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Sticky.Context>
        <Segment>
          {[...new Array(10)].map((v, i) => <Placeholder key={i} />)}

          <Rail position='left'>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Sticky offset={100}>
              <Header as='h3'>Stuck Content</Header>
              <Image src='/assets/images/wireframe/image.png' />
            </Sticky>
          </Rail>

          <Rail position='right'>
            <Sticky bottomOffset={50} offset={50} pushing>
              <Header as='h3'>Stuck Content</Header>
              <Image src='/assets/images/wireframe/image.png' />
            </Sticky>
          </Rail>
        </Segment>
      </Sticky.Context>
    </Grid.Column>
  </Grid>
)

export default StickyAdjacentContextExample
