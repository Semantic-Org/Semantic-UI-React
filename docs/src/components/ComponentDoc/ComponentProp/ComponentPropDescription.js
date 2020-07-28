import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class ComponentPropDescription extends PureComponent {
  render() {
    const { description } = this.props
    return <p>{_.map(description, (line) => [line, <br key={line} />])}</p>
  }
}

ComponentPropDescription.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
}
