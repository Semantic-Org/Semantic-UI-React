import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'

const ComponentPropsComponent = ({ active, displayName, onClick, parentDisplayName }) => {
  const content =
    displayName === parentDisplayName
      ? displayName
      : displayName.replace(parentDisplayName, `${parentDisplayName}.`)

  return <Menu.Item active={active} content={content} name={displayName} onClick={onClick} />
}

ComponentPropsComponent.propTypes = {
  active: PropTypes.bool,
  displayName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  parentDisplayName: PropTypes.string,
}

export default updateForKeys(['active'])(ComponentPropsComponent)
