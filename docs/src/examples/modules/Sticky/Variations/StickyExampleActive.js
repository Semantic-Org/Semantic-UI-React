import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Rail,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () => <Image src='/images/wireframe/paragraph.png' />

export default class StickyExampleActive extends Component {
  state = { active: true }
  contextRef = createRef()

  handleToggle = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment ref={this.contextRef}>
            {_.times(10, (i) => (
              <Placeholder key={i} />
            ))}

            <Rail position='left'>
              <Sticky context={this.contextRef}>
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
              <Sticky active={active} context={this.contextRef}>
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
