import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Divider } from 'semantic-ui-react'

const descriptionStyle = {
  color: '#777',
  fontSize: '1.08em',
}

export default class ComponentPropsDescription extends PureComponent {
  static propTypes = {
    description: PropTypes.string,
  }

  render() {
    const { description } = this.props

    return (
      <div style={descriptionStyle}>
        {description}
        <Divider />
      </div>
    )
  }
}
