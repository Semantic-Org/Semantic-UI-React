import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

const listStyle = { display: 'block' }

const ComponentDocSee = ({ items }) => (
  <List horizontal link size='small' style={listStyle}>
    {/* Heads up! Still render empty lists to reserve the whitespace */}
    <List.Item>
      <Header color='grey' content={items.length > 0 ? 'See:' : ' '} size='tiny' />
    </List.Item>
    {_.map(items, ({ dockblock: { description }, displayName, type }) => (
      <List.Item
        as={Link}
        content={description}
        key={description}
        to={`/${type}s/${_.kebabCase(displayName)}`}
      />
    ))}
  </List>
)

ComponentDocSee.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      docblock: PropTypes.shape({
        description: PropTypes.string,
      }),
      displayName: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
}

export default ComponentDocSee
