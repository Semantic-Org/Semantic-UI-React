import PropTypes from 'prop-types'
import React from 'react'
import { Menu } from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'

const ComponentPropsComponent = ({ active, name, onClick, parent }) => (
  <Menu.Item
    active={active}
    content={name === parent ? name : name.replace(parent, `${parent}.`)}
    name={name}
    onClick={onClick}
  />
)

ComponentPropsComponent.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  parent: PropTypes.string,
}

export default updateForKeys(['active'])(ComponentPropsComponent)
