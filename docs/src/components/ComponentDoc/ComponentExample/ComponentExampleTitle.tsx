import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Header, Label } from 'semantic-ui-react'

const titleStyle = {
  margin: 0,
}

export default class ComponentExampleTitle extends PureComponent<any, any> {
  static propTypes = {
    description: PropTypes.node,
    title: PropTypes.node,
    suiVersion: PropTypes.string,
  }

  render() {
    const { description, title, suiVersion } = this.props
    return (
      <div>
        {title && (
          <Header as="h3" className="no-anchor" style={titleStyle}>
            {title}
            {suiVersion && (
              <Label
                as="a"
                color="teal"
                content={suiVersion}
                size="tiny"
                title={`Available from Semantic UI ${suiVersion}`}
              />
            )}
          </Header>
        )}
        {description && <p>{description}</p>}
      </div>
    )
  }
}
