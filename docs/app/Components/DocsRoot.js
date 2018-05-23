import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

import ComponentDoc from '../Components/ComponentDoc'
import PageNotFound from '../Views/PageNotFound'

class DocsRoot extends Component {
  state = {}

  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    }),
  }

  componentDidMount() {
    this.fetchInfo()
  }

  fetchInfo = () => {
    const { name, type } = this.props.match.params
    const componentName = _.startCase(name).replace(/ /g, '')

    this.setLoading()

    import(`../../../src/${type}/${componentName}/${componentName}.info.json`)
      .then((info) => {
        if (info.isParent) {
          this.setInfo(info)
        } else {
          this.setError(new Error(`${componentName}.info.json is not a parent component.`))
        }
      })
      .catch((error) => {
        this.setError(error)
      })
  }

  setError = error => this.setState({ error, info: null, isLoading: false })

  setInfo = info => this.setState({ error: null, info, isLoading: false })

  setLoading = () => this.setState({ error: null, info: null, isLoading: true })

  render() {
    const { error, isLoading, info } = this.state

    if (isLoading) return <Loader active />

    if (!error && info) return <ComponentDoc info={info} />

    return <PageNotFound />
  }
}

export default DocsRoot
