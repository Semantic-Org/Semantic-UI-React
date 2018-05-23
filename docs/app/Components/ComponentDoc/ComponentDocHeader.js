import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Header } from 'semantic-ui-react'

const headerStyle = { marginBottom: '0.25em' }

export default class ComponentDocHeader extends PureComponent {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { displayName, description } = this.props

    return <Header as='h1' content={displayName} style={headerStyle} subheader={description} />
  }
}
