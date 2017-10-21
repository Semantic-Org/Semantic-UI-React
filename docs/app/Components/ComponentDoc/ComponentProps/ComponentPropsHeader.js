import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'

const headerStyle = {
  cursor: 'pointer',
  display: 'inline-flex',
  margin: '1em 0.5em',
  marginLeft: 0,
}

const linkStyle = { color: 'inherit' }

const ComponentPropsHeader = ({ hasSubComponents, onClick, showProps }) => {
  const iconClasses = cx(
    showProps ? 'on' : 'off',
    'toggle',
  )

  return (
    <Header
      as='h4'
      className='no-anchor'
      color={showProps ? 'green' : 'grey'}
      style={headerStyle}
      onClick={onClick}
    >
      <a style={linkStyle}>
        <Icon name={iconClasses} />
        Props{hasSubComponents && ':'}
      </a>
    </Header>
  )
}

ComponentPropsHeader.propTypes = {
  hasSubComponents: PropTypes.bool,
  onClick: PropTypes.func,
  showProps: PropTypes.bool,
}

export default updateForKeys(['hasSubComponents', 'showProps'])(ComponentPropsHeader)
