import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import SEMANTIC_TYPES from 'docs/app/utils/SemanticTypes'
import STARDUST_TYPES from 'docs/app/utils/StardustTypes'
import { Segment } from 'stardust'

export default class ComponentDescription extends Component {
  static propTypes = {
    /**
     * String describing the Stardust component.
     */
    description: PropTypes.string.isRequired,

    /**
     * Name of the Stardust component
     */
    name: PropTypes.string.isRequired,

    /**
     * Name of the Stardust parent component (i.e. 'Grid' for Column).
     */
    parent: PropTypes.string.isRequired,

    /**
     * Relative path to the component in the Stardust repo ('src/foo/bar/baz.js').
     */
    path: PropTypes.string.isRequired,

    /**
     * Semantic UI category for this component.
     */
    type: PropTypes.oneOf(_.union(
      _.keys(SEMANTIC_TYPES),
      _.keys(STARDUST_TYPES)
    )).isRequired,
  };

  componentWillMount() {
    this.isSemanticComponent = this.props.type in SEMANTIC_TYPES
    if (this.isSemanticComponent) {
      this.semanticDocUrl = `http://semantic-ui.com/${this.props.type}s/${this.props.parent}.html`.toLowerCase()
    }
  }

  render() {
    const semanticDocsLink = (
      <a href={this.semanticDocUrl} target='_blank'>
        <i className='book icon' />
        Semantic UI Docs
      </a>
    )
    return (
      <Segment className='basic vertical'>
        <h1 className='ui header'>
          {_.capitalize(this.props.name)}
          <code className='sub header' style={{ float: 'right' }}>
            <a href={`https://github.com/TechnologyAdvice/stardust/blob/master/${this.props.path}`} target='_blank'>
              <i className='github icon' />
              {this.props.path}
            </a>
          </code>
        </h1>
        <p>{this.props.description}</p>
        <p>{this.isSemanticComponent && semanticDocsLink}</p>
      </Segment>
    )
  }
}
