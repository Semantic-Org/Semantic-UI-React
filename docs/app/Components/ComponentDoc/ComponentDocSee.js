import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

import { getSeeLinks } from 'docs/app/utils'

const listStyle = { display: 'block' }

const ComponentDocSee = ({ componentName }) => {
  const links = getSeeLinks(componentName)

  return (
    <List horizontal link size='small' style={listStyle}>
      {/* still render empty lists to reserve the whitespace */}
      <List.Item>
        <Header
          color='grey'
          content={links.length > 0 ? 'See:' : ' '}
          size='tiny'
        />
      </List.Item>
      {_.map(links, ({ description, name, type }) => (
        <List.Item as={Link} key={description} to={`/${type}s/${_.kebabCase(name)}`}>
          {description}
        </List.Item>
      ))}
    </List>
  )
}

ComponentDocSee.propTypes = {
  componentName: PropTypes.string,
}

export default ComponentDocSee
