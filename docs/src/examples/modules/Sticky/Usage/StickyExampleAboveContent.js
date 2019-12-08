import React, { Component, createRef } from 'react'
import { Image, Input, Menu, Segment, Sticky } from 'semantic-ui-react'
import _ from 'lodash'

export default class StickyExampleAboveContent extends Component {
  contextRef = createRef()

  render() {
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Menu
            attached='top'
            tabular
            style={{ backgroundColor: '#fff', paddingTop: '1em' }}
          >
            <Menu.Item as='a' active name='bio' />
            <Menu.Item as='a' active={false} name='photos' />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search users...'
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Sticky>
        <Segment attached='bottom'>
          {_.times(5, (i) => (
            <Image key={i} src='/images/wireframe/paragraph.png' />
          ))}
        </Segment>
      </div>
    )
  }
}
