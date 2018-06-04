import PropTypes from 'prop-types'
import React from 'react'
import { Header, Label } from 'semantic-ui-react'

import { pure } from 'docs/src/hoc'

const titleStyle = {
  margin: 0,
}

const ComponentExampleTitle = ({ description, title, suiVersion }) => (
  <div>
    {title && (
      <Header as='h3' className='no-anchor' style={titleStyle}>
        {title}
        {suiVersion && (
          <Label
            as='a'
            color='teal'
            content={suiVersion}
            size='tiny'
            title={`Available from Semantic UI ${suiVersion}`}
          />
        )}
      </Header>
    )}
    {description && <p>{description}</p>}
  </div>
)

ComponentExampleTitle.propTypes = {
  description: PropTypes.node,
  title: PropTypes.node,
  suiVersion: PropTypes.string,
}

export default pure(ComponentExampleTitle)
