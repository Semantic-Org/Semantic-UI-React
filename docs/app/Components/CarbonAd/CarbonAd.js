import _ from 'lodash'
import React, { Component } from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const transitionTime = 200

class CarbonAd extends Component {
  state = {
    opacity: 1,
  }

  componentDidMount() {
    this.lastHref = location.href

    this.refresh()
    this.watchForAdBlock()
  }

  componentDidUpdate() {
    if (location.href !== this.lastHref) {
      this.lastHref = location.href
      this.refresh()
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.refreshTimerStart)
    window.clearTimeout(this.refreshTimerEnd)
    window.clearTimeout(this.watchTimer)
    window.clearInterval(this.watchInterval)
  }

  refresh = () => {
    const { isBlockingAds } = this.state

    if (isBlockingAds) return

    this.setState({ opacity: 0 })

    this.refreshTimerStart = setTimeout(() => {
      _.invoke(window._carbonads, 'refresh')

      this.refreshTimerEnd = setTimeout(() => {
        this.setState({ opacity: 1 })
      }, transitionTime)
    }, transitionTime)
  }

  watchForAdBlock = () => {
    this.watchTimer = setTimeout(() => {
      this.watchInterval = setInterval(() => {
        const isBlockingAds = !document.querySelector('#docs-carbonads > #carbonads')

        this.setState({ isBlockingAds })
      }, 1000)
    }, 5000)
  }

  renderAd = () => (
    // Heads up!
    // This script is loaded in index.html. The script requires the markup here to match in order to work.
    <script
      async
      id='_carbonads_js'
      type='text/javascript'
      src='//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=reactsemanticuicom'
    />
  )

  renderMessage = () => (
    <Segment inverted color='pink' textAlign='center' size='large'>
      <Header icon size='small'>
        <Icon name='heart' />
        We love you
      </Header>
      <p>
        We're not funded.  Enabling ads would be super appreciated.
      </p>
    </Segment>
  )

  render() {
    const { opacity, isBlockingAds } = this.state

    const style = {
      transition: `opacity ${transitionTime}ms`,
      minHeight: 173,
      opacity,
    }

    return (
      <div id='docs-carbonads' style={style}>
        {isBlockingAds ? this.renderMessage() : this.renderAd()}
      </div>
    )
  }
}

export default CarbonAd
