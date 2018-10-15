import _ from 'lodash'
import React, { Component } from 'react'

import { isBrowser } from 'src/lib'

const style = {
  padding: '0.5rem',
  background: '#222',
  boxShadow: '0 0 2rem black',
}

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
  componentDidMount() {
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

  shouldComponentUpdate() {
    return false
  }

  ifRef = (cb) => {
    const ref = document.querySelector('#docs-carbonads')
    if (ref) cb(ref)
  }

  render() {
    return <div id='docs-carbonads' style={style} />
  }
}

export default CarbonAd
