import React, { Component } from 'react'
import _ from 'lodash'

const transitionTime = 200

class CarbonAd extends Component {
  state = {
    opacity: 1,
  }

  componentDidMount() {
    this.lastPath = location.pathname

    this.refresh()
  }

  componentDidUpdate() {
    if (location.pathname !== this.lastPath) {
      this.lastPath = location.pathname
      this.refresh()
    }
  }

  refresh = () => {
    this.setState({ opacity: 0 })

    setTimeout(() => {
      _.invoke(window._carbonads, 'refresh')

      setTimeout(() => {
        this.setState({ opacity: 1 })
      }, transitionTime)
    }, transitionTime)
  }

  render() {
    const { opacity } = this.state

    const style = {
      transition: `opacity ${transitionTime}ms`,
      minHeight: 173,
      opacity,
    }

    return (
      <div style={style}>
        {/*
          Heads up!
          This script is loaded in index.html. The script requires the markup here to match in order to work.
        */}
        <script
          async
          id='_carbonads_js'
          type='text/javascript'
          src='//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=reactsemanticuicom'
        />
      </div>
    )
  }
}

export default CarbonAd
