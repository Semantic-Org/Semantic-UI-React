import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleAttachedToSegment extends Component {
  state = { activeItem: 'section1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top'>
          <Menu.Item
            name='section1'
            active={activeItem === 'section1'}
            onClick={this.handleItemClick}
          >
            Section 1
          </Menu.Item>

          <Menu.Item
            name='section2'
            active={activeItem === 'section2'}
            onClick={this.handleItemClick}
          >
            Section 2
          </Menu.Item>
        </Menu>

        <Segment attached>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Segment>

        <Menu attached='bottom'>
          <Menu.Item
            name='section1'
            active={activeItem === 'section1'}
            onClick={this.handleItemClick}
          >
            Section 1
          </Menu.Item>

          <Menu.Item
            name='section2'
            active={activeItem === 'section2'}
            onClick={this.handleItemClick}
          >
            Section 2
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
