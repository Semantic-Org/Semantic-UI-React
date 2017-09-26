import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import docInfo from 'docs/app/docgenInfo.json'
import { repoURL } from 'docs/app/utils'
import * as semanticUIReact from 'src'
import ComponentDoc from './ComponentDoc'

export default class ComponentDocWrapper extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    parent: PropTypes.string,
    type: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = this.computeProps(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.computeProps(nextProps))
  }

  computeComponentGroup = _.flow(
    _.filter(component => _.get('_meta.parent', component) === name),
    _.map('_meta.name'),
    _.map(name => ({
      name,
      description: _.get('docBlock.description', docInfo[name]),
      props: docInfo[name].props,
    })),
    _.keyBy('name'),
  )

  computeProps = ({ name, parent, type }) => {
    const { docBlock, path } = docInfo[name]
    const { description, tags } = docBlock

    const ghLink = `${repoURL}/blob/master/${path}`
    const suiLink = `https://semantic-ui.com/${type}s/${name || parent}`.toLowerCase()

    const componentGroup = {
      [name]: { description, props },
      ...this.computeComponentGroup(semanticUIReact),
    }
    const seeItems = _.map(({ description }) => {
      const seeMeta = _.get('_meta', semanticUIReact[description])

      if (!seeMeta) return null
      const { type, name } = seeMeta

      return { description, name, type }
    }, _.filter(['title', 'see'], tags))

    return {
      componentGroup,
      description,
      ghLink,
      path,
      seeItems,
      suiLink,
      componentName: name,
    }
  }

  render() {
    return <ComponentDoc {...this.state} />
  }
}
