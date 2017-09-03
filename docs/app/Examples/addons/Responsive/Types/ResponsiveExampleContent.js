import React, { Component } from 'react'
import { Responsive, Button, Menu } from 'semantic-ui-react'

export default class ResponsiveExampleContent extends Component {
  state = { active: 'home' }

  handleItemClick = (e, { name }) => this.setState({ active: name })

  render() {
    const { active } = this.state

    return (
      <Menu>
        <Menu.Item active={active === 'home'} content='Home' name='home' onClick={this.handleItemClick} />
        <Menu.Item active={active === 'messages'} content='Messages' name='messages' onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Responsive
              {...Responsive.onlyMobile}
              as={Button}
              content='Switch to desktop version'
              icon='desktop'
              labelPosition='left'
            />
            <Responsive
              as={Button}
              content='Switch to mobile version'
              icon='mobile'
              labelPosition='left'
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
