import PropTypes from 'prop-types'
import React from 'react'
import { List } from 'semantic-ui-react'

import { pure } from 'docs/src/hoc'

const linkListStyle = {
  background: '#f7f7f7',
  boxShadow: '0 0 1em 0.5em #f7f7f7',
  margin: '0.5em',
  padding: '0.5em',
  position: 'absolute',
  right: '0',
  top: '0',
}

const ComponentDocLinks = ({ ghLink, path }) => (
  <List link style={linkListStyle}>
    <List.Item
      content={
        <code>
          <a href={ghLink} target='_blank'>
            {path}
          </a>
        </code>
      }
      icon='github'
    />
  </List>
)

ComponentDocLinks.propTypes = {
  ghLink: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default pure(ComponentDocLinks)
