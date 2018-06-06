import _ from 'lodash'
import React, { Component } from 'react'

const style = { minHeight: 173 }

class CarbonAd extends Component {
  componentDidMount() {
    this.lastHref = location.href

    const script = document.createElement('script')
    script.async = true
    script.id = '_carbonads_js'
    script.type = 'text/javascript'
    script.src = '//cdn.carbonads.com/carbon.js?serve=CK7DT23J&placement=reactsemanticuicom'

    this.ifRef(ref => ref.appendChild(script))
  }

  componentWillUpdate() {
    if (location.href !== this.lastHref) {
      this.lastHref = location.href
      _.invoke(window._carbonads, 'refresh')
    }
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
