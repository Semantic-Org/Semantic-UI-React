import PropTypes from 'prop-types'
import React, { Component } from 'react'

import docInfo from 'docs/src/docgenInfo.json'
import { getComponentGroup, getSeeItems, repoURL } from 'docs/src/utils'

const withDocInfo = ChildComponent =>
  class extends Component {
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

    computeProps = ({ name }) => {
      const { docBlock, path } = docInfo[name]
      const { description } = docBlock

      const ghLink = `${repoURL}/blob/master/${path}`

      return {
        description,
        ghLink,
        path,
        componentGroup: getComponentGroup(docInfo, name),
        componentName: name,
        seeItems: getSeeItems(docInfo, name),
      }
    }

    render() {
      return <ChildComponent {...this.state} />
    }
  }

export default withDocInfo
