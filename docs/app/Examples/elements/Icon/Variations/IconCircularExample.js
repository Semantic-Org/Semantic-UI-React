import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconCircularExample extends Component {
  render() {
    return (
      <div>
        <Icon circular name='users' />
        <Icon circular color='teal' name='users' />
        <Icon circular inverted name='users' />
        <Icon circular inverted color='teal' name='users' />
      </div>
    )
  }
}
