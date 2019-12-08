import PropTypes from 'prop-types'
import React from 'react'
import { Divider } from 'semantic-ui-react'

const descriptionStyle = {
  color: '#777',
  fontSize: '1.08em',
}

const ComponentPropsDescription = (props) => {
  const { description } = props

  return (
    <div style={descriptionStyle}>
      {description}
      <Divider />
    </div>
  )
}

ComponentPropsDescription.propTypes = {
  description: PropTypes.string,
}

export default React.memo(ComponentPropsDescription)
