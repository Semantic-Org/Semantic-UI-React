import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () => <Image src='/images/wireframe/paragraph.png' />

export default class StickyExampleOffset extends Component {
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment>
              {_.times(10, i => (
                <Placeholder key={i} />
              ))}

              <Rail position='left'>
                {_.times(3, i => (
                  <Placeholder key={i} />
                ))}

                <Sticky context={this.contextRef} offset={100}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/images/wireframe/image.png' />
                </Sticky>
              </Rail>

              <Rail position='right'>
                <Sticky
                  bottomOffset={50}
                  context={this.contextRef}
                  offset={50}
                  pushing
                >
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/images/wireframe/image.png' />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
  }
}
