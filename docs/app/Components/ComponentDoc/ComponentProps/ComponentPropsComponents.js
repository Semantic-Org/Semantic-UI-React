import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'
import ComponentPropsComponent from './ComponentPropsComponent'

const ComponentPropsComponents = ({
  activeDisplayName,
  displayNames,
  onItemClick,
  parentDisplayName,
}) => {
  if (displayNames.length === 1) return null

  return (
    <Menu color='green' compact size='small' secondary>
      {_.map(displayNames, component => (
        <ComponentPropsComponent
          active={activeDisplayName === component}
          key={component}
          name={component}
          onClick={onItemClick}
          parentDisplayName={parentDisplayName}
        />
      ))}
    </Menu>
  )
}

ComponentPropsComponents.propTypes = {
  activeDisplayName: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  displayNames: PropTypes.array,
  onItemClick: PropTypes.func,
  parentDisplayName: PropTypes.string.isRequired,
}

export default updateForKeys(['activeDisplayName', 'parentDisplayName'])(ComponentPropsComponents)
