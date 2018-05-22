import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { componentInfoContext, getComponentGroup, getSeeItems, repoURL } from 'docs/app/utils'

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

    computeProps = ({ name, parent, type }) => {
      const info = componentInfoContext.fromComponentName(name)

      const ghLink = `${repoURL}/blob/master/${info.repoPath}`
      const suiLink = `https://semantic-ui.com/${type}s/${name || parent}`.toLowerCase()

      return {
        description: info.dockblock.description,
        ghLink,
        repoPath: info.repoPath,
        suiLink,
        componentGroup: getComponentGroup(name),
        componentName: name,
        seeItems: getSeeItems(name),
      }
    }

    render() {
      return <ChildComponent {...this.state} />
    }
  }

export default withDocInfo
