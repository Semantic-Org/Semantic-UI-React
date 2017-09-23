import _ from 'lodash'
import React, { Component } from 'react'
import { Checkbox, Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

export default class StickyPushingExample extends Component {
  state = { active: true }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleToggle = () => this.setState({ active: !this.state.active })

  render() {
    const { active, contextRef } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              {_.times(10, i => <Placeholder key={i} />)}

              <Rail position='left'>
                <Sticky context={contextRef}>
                  <Segment>
                    <Checkbox
                      checked={active}
                      label='Activate Sticky on right'
                      onChange={this.handleToggle}
                      toggle
                    />
                  </Segment>
                </Sticky>
              </Rail>

              <Rail position='right'>
                <Sticky active={active} context={contextRef}>
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
