import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Grid,
  Header,
  Image,
  Item,
  Rail,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () => <Image src='/images/wireframe/paragraph.png' />

export default class StickyExampleOversized extends Component {
  state = {}
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment ref={this.contextRef}>
            {_.times(15, (i) => (
              <Placeholder key={i} />
            ))}

            <Rail position='left'>
              <Sticky context={this.contextRef}>
                <Item.Group divided>
                  {_.times(12, (i) => (
                    <Item key={i}>
                      <Item.Image
                        size='tiny'
                        src='/images/wireframe/image.png'
                      />
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
              <Sticky context={this.contextRef}>
                <Header as='h3'>Stuck Content</Header>
                <Image src='/images/wireframe/image.png' />
              </Sticky>
            </Rail>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
