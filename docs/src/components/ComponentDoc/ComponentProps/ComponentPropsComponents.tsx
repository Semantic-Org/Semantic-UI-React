import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'

const ComponentPropsComponents: any = ({
  activeDisplayName,
  displayNames,
  onItemClick,
  parentDisplayName,
}) => {
  if (displayNames.length === 1) return null

  return (
    <Menu color="green" compact size="small" secondary>
      {_.map(displayNames, displayName => (
        <Menu.Item
          key={displayName}
          active={activeDisplayName === displayName}
          content={
            displayName === parentDisplayName
              ? displayName
              : displayName.replace(parentDisplayName, `${parentDisplayName}.`)
          }
          name={displayName}
          onClick={onItemClick}
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
