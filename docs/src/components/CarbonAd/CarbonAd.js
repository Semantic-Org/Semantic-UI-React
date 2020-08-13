import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { isBrowser } from 'src/lib'

let isLoading = true
let script

const adExist = () => !!document.querySelector('#docs-carbonads #carbonads')

// Heads up!
// We render docs with React-Static which performs SSR rendering.
if (isBrowser()) {
  script = document.createElement('script')

  script.async = true
  script.id = '_carbonads_js'
  script.type = 'text/javascript'
  script.src = '//cdn.carbonads.com/carbon.js?serve=CK7DT23J&placement=reactsemanticuicom'
  script.onload = () => {
    isLoading = false
  }
}

const waitForLoad = () => {
  if (adExist()) isLoading = false
  else setTimeout(waitForLoad, 50)
}

class CarbonAd extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname
  }

  componentDidMount() {
    this.loadAd()
  }

  componentDidUpdate() {
    this.loadAd()
  }

  loadAd = () => {
    this.ifRef((ref) => {
      // always add the script as it is used to insert the ad
      ref.appendChild(script)

      // On the first mount, the script fetches the first ad itself, so do nothing
      // On subsequent mounts, we need to call refresh to insert a new ad
      // Ensure we don't call refresh during an existing refresh or we'll get a double ad insert
      // https://github.com/Semantic-Org/Semantic-UI-React/pull/3215
      if (!isLoading) {
        isLoading = true
        _.invoke(window._carbonads, 'refresh')
        waitForLoad()
      }
    })
  }

  ifRef = (cb) => {
    const ref = document.querySelector('#docs-carbonads')
    if (ref) cb(ref)
  }

  render() {
    return <div id='docs-carbonads' />
  }
}

CarbonAd.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(CarbonAd)
