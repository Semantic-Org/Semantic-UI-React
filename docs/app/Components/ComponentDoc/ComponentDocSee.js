import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

import { getDocSeeItems } from 'docs/app/utils'

const listStyle = { display: 'block' }

const ComponentDocSee = ({ componentName }) => {
  const items = getDocSeeItems(componentName)

  return (
    <List horizontal link size='small' style={listStyle}>
      {/* Heads up! Still render empty lists to reserve the whitespace */}
      <List.Item>
        <Header
          color='grey'
          content={items.length > 0 ? 'See:' : ' '}
          size='tiny'
        />
      </List.Item>
      {_.map(items, ({ description, name, type }) => (
        <List.Item
          as={Link}
          content={description}
          key={description}
          to={`/${type}s/${_.kebabCase(name)}`}
        />
      ))}
    </List>
  )
}

ComponentDocSee.propTypes = {
  componentName: PropTypes.string,
}

export default ComponentDocSee
