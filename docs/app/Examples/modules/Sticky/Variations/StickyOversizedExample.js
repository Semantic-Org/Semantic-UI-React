import React from 'react'
import { Grid, Header, Image, Item, Rail, Segment, Sticky } from 'semantic-ui-react'

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
          {[...new Array(15)].map((v, i) => <Placeholder key={i} />)}

          <Rail position='left'>
            <Sticky>
              <Item.Group divided>
                {[...new Array(12)].map((v, i) => (
                  <Item key={i}>
                    <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                    <Item.Content>
                      <Item.Header as='a'>Followup Article</Item.Header>
                      <Item.Meta>By Author</Item.Meta>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>

            </Sticky>
          </Rail>

          <Rail position='right'>
            <Sticky>
              <Header as='h3'>Stuck Content</Header>
              <Image src='/assets/images/wireframe/image.png' />
            </Sticky>
          </Rail>
        </Segment>
      </Sticky.Context>
      <div style={{ height: 1000 }}></div>
    </Grid.Column>
  </Grid>
)

export default StickyAdjacentContextExample
