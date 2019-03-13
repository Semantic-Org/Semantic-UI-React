import React, { Component, createRef } from 'react'
import { Image, Input, Menu, Segment, Sticky } from 'semantic-ui-react'
import _ from 'lodash'

const Placeholder = () => <Image src='/images/wireframe/paragraph.png' />

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
            <Menu.Item name='bio' active onClick={this.handleItemClick} />
            <Menu.Item
              name='photos'
              active={false}
              onClick={this.handleItemClick}
            />
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
          {_.times(10, i => (
            <Placeholder key={i} />
          ))}
        </Segment>
      </div>
    )
  }
}
