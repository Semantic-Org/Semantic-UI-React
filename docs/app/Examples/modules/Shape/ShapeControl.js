import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Divider, Popup } from 'semantic-ui-react'

export default class ShapeControl extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }

  handleClick = animation => () => _.invoke(this, 'props.onClick', animation)

  render() {
    return (
      <div>
        <Divider hidden />

        <Button.Group>
          <Popup
            trigger={<Button icon='left long arrow' onClick={this.handleClick('flip left')} />}
            content='Flip Left'
          />
          <Popup
            trigger={ <Button icon='up long arrow' onClick={this.handleClick('flip up')} />}
            content='Flip Up'
          />
          <Popup
            trigger={ <Button icon='down long arrow' onClick={this.handleClick('flip down')} />}
            content='Flip Down'
          />
          <Popup
            trigger={ <Button icon='right long arrow' onClick={this.handleClick('flip right')} />}
            content='Flip Right'
          />

        </Button.Group>

        <Button.Group style={{ paddingLeft: '0.5rem' }}>
          <Popup
            trigger={<Button icon='retweet' onClick={this.handleClick('flip over')} />}
            content='Flip Over'
          />
          <Popup
            trigger={<Button icon='flipped retweet' onClick={this.handleClick('flip back')} />}
            content='Flip Back'
          />
        </Button.Group>
      </div>
    )
  }
}
