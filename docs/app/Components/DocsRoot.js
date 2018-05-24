import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

import ComponentDoc from '../Components/ComponentDoc'
import PageNotFound from '../Views/PageNotFound'

class DocsRoot extends Component {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    }),
  }

  state = {}

  componentDidMount() {
    this.fetchComponentInfo()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.fetchComponentInfo()
    }
  }

  getDisplayName = (props = this.props) => _.startCase(props.match.params.name).replace(/ /g, '')

  fetchComponentInfo = (props = this.props) => {
    const displayName = this.getDisplayName(props)

    this.setState({ loading: true })

    import(`../componentInfo/${displayName}/${displayName}.info.json`)
      .then((info) => {
        this.setState({ loading: false, info })
      })
      .catch(() => {
        this.setState({ loading: false, info: null })
      })
  }

  render() {
    const { info, loading } = this.state

    if (loading) return <Loader active />

    if (info) return <ComponentDoc info={info} />

    return <PageNotFound />
  }
}

export default DocsRoot
