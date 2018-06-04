import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Header, Image, Item, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

export default class StickyExampleOversized extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              {_.times(15, i => <Placeholder key={i} />)}

              <Rail position='left'>
                <Sticky context={contextRef}>
                  <Item.Group divided>
                    {_.times(12, i => (
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
                <Sticky context={contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/assets/images/wireframe/image.png' />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
