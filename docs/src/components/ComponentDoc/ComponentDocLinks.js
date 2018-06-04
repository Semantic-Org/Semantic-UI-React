import PropTypes from 'prop-types'
import React from 'react'
import { List } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'

const linkListStyle = {
  background: '#f7f7f7',
  boxShadow: '0 0 1em 0.5em #f7f7f7',
  margin: '0.5em',
  padding: '0.5em',
  position: 'absolute',
  right: '0',
  top: '0',
}

const ComponentDocLinks = ({ componentName, ghLink, path, suiLink }) => (
  <List link style={linkListStyle}>
    <List.Item
      content={(
        <code>
          <a href={ghLink} target='_blank'>{path}</a>
        </code>
      )}
      icon='github'
    />
    {suiLink && (
      <List.Item
        content={<a href={suiLink} target='_blank'>Semantic UI {componentName} Docs</a>}
        icon='book'
      />
    )}
  </List>
)

ComponentDocLinks.propTypes = {
  componentName: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  suiLink: PropTypes.string,
}

export default pure(ComponentDocLinks)
