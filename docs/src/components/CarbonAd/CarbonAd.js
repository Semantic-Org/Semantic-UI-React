import _ from 'lodash'
import React, { Component, Fragment } from 'react'

const style = {
  padding: '1rem',
  background: '#222',
  boxShadow: '0 0 2rem black',
}

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
    return (
      <Fragment>
        <style>{`
          #docs-carbonads div {
            display: none;
          }

          #docs-carbonads #carbonads {
            display: block;
          }
        `}</style>
        <div id='docs-carbonads' style={style} />
      </Fragment>
    )
  }
}

export default CarbonAd
