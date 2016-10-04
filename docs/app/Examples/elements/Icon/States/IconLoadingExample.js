import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconLoadingExample extends Component {
  render() {
    return (
      <div>
        <Icon loading name='spinner' />
        <Icon loading name='certificate' />
        <Icon loading name='asterisk' />
      </div>
    )
  }
}
