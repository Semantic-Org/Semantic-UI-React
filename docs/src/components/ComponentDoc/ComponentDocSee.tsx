import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'

import { getComponentPathname, getInfoForSeeTags } from 'docs/src/utils'

const listStyle = { display: 'block' }

const ComponentDocSee: any = ({ displayName }) => {
  const items = getInfoForSeeTags(displayName)

  return (
    <List horizontal link size="small" style={listStyle}>
      {/* Heads up! Still render empty lists to reserve the whitespace */}
      <List.Item>
        <Header color="grey" content={items.length > 0 ? 'See:' : ' '} size="tiny" />
      </List.Item>
      {_.map(items, info => (
        <List.Item
          as={Link}
          content={info.displayName}
          key={info.docblock.description}
          to={getComponentPathname(info)}
        />
      ))}
    </List>
  )
}

ComponentDocSee.propTypes = {
  displayName: PropTypes.string.isRequired,
}

export default ComponentDocSee
