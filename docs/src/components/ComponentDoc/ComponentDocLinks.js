import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { List } from 'semantic-ui-react'

import { repoURL } from '../../utils'

const linkListStyle = {
  background: '#f7f7f7',
  boxShadow: '0 0 1em 0.5em #f7f7f7',
  margin: '0.5em',
  padding: '0.5em',
  position: 'absolute',
  right: '0',
  top: '0',
}

export default class ComponentDocLinks extends PureComponent {
  render() {
    const { displayName, parentDisplayName, repoPath, type } = this.props
    const ghLink = `${repoURL}/blob/master/${repoPath}`
    const suiName = (displayName || parentDisplayName).toLowerCase()
    const suiLink = `https://semantic-ui.com/${type}s/${suiName}`

    return (
      <List link style={linkListStyle}>
        <List.Item
          content={
            <code>
              <a href={ghLink} target='_blank' rel='noopener noreferrer'>
                {repoPath}
              </a>
            </code>
          }
          icon='github'
        />
        {suiLink && (
          <List.Item
            content={
              <a href={suiLink} target='_blank' rel='noopener noreferrer'>
                Semantic UI {displayName} Docs
              </a>
            }
            icon='book'
          />
        )}
      </List>
    )
  }
}

ComponentDocLinks.propTypes = {
  displayName: PropTypes.string.isRequired,
  parentDisplayName: PropTypes.string,
  repoPath: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
