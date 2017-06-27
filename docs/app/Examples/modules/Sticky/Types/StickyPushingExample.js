import React, { Component } from 'react'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'
import _ from 'lodash'

const Placeholder = () => (
  <Image
    className='wireframe paragraph image'
    src='/assets/images/wireframe/paragraph.png'
    style={{ marginTop: 14, marginBottom: 14 }}
  />
)

class StickyAdjacentContextExample extends Component {
  constructor(props) {
    super(props)
    this.state = { contextRef: null }
  }

  handleContextRef = contextRef => {
    if (!this.state.contextRef) {
      this.setState({ contextRef })
    }
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              {_.times(10, i => <Placeholder key={i} />)}

              <Rail position='left'>
                <Sticky context={this.state.contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/assets/images/wireframe/image.png' />
                </Sticky>
              </Rail>

              <Rail position='right'>
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Sticky context={this.state.contextRef} pushing>
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

export default StickyAdjacentContextExample
