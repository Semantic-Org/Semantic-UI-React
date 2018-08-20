import _ from 'lodash'
import React from 'react'
import { Link } from 'react-static'
import { Header, List } from 'semantic-ui-react'

import { docTypes } from 'docs/src/utils'

const listStyle = { display: 'block' }

const ComponentDocSee = ({ seeTags }) => (
  <List horizontal link size='small' style={listStyle}>
    {/* Heads up! Still render empty lists to reserve the whitespace */}
    <List.Item>
      <Header color='grey' content={seeTags.length > 0 ? 'See:' : ' '} size='tiny' />
    </List.Item>
    {_.map(seeTags, ({ displayName, to }) => (
      <List.Item as={Link} content={displayName} key={displayName} to={to} />
    ))}
  </List>
)

ComponentDocSee.propTypes = {
  seeTags: docTypes.seeTags.isRequired,
}

export default ComponentDocSee
