import PropTypes from 'prop-types'
import React from 'react'
import { Popup } from 'semantic-ui-react'

const toolTipStyle = {
  padding: '0.5em',
  textAlign: 'center',
  width: 100,
}

const ComponentControlsToolTip = ({ children, content }) => (
  <Popup
    content={content}
    inverted
    mouseEnterDelay={800}
    position='top center'
    size='tiny'
    style={toolTipStyle}
    trigger={children}
  />
)

ComponentControlsToolTip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
}

export default ComponentControlsToolTip
