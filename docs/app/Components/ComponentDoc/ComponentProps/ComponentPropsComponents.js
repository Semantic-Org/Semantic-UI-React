import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'
import ComponentPropsComponent from './ComponentPropsComponent'

const ComponentPropsComponents = ({ activeName, components, onItemClick, parent }) => {
  if (components.length === 1) return

  return (
    <Menu color='green' compact size='small' secondary>
      {_.map(components, component => (
        <ComponentPropsComponent
          active={activeName === component}
          key={component}
          name={component}
          onClick={onItemClick}
          parent={parent}
        />
      ))}
    </Menu>
  )
}

ComponentPropsComponents.propTypes = {
  activeName: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  components: PropTypes.array,
  onItemClick: PropTypes.func,
  parent: PropTypes.string.isRequired,
}

export default updateForKeys(['activeName', 'parent'])(ComponentPropsComponents)
