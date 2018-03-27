import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Header, Icon, Menu, Segment } from 'semantic-ui-react'

const TRANSITION_TIME = 200
const PREFERENCE_EXPIRATION_MS = 1000 * 60 * 60 * 24 * 14

class CarbonAd extends Component {
  state = {
    opacity: 1,
  }

  componentWillMount() {
    try {
      this.setState({ hiddenAt: window.localStorage.getItem('hideAds') || 0 })
    } catch (e) {
      /* eslint-disable no-console */
      console.error('Semantic-UI-React could not retrieve ad settings.  LocalStorage failed.')
      console.error(e)
      /* eslint-enable no-console */
    }
  }

  componentDidMount() {
    this.lastHref = location.href

    this.refresh()

    // We look at whether FuckAdBlock already exists.
    if (typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
      // If this is the case, it means that something tries to usurp our identity
      // So, considering that it is a detection
      this.adBlockDetected()
    } else {
      this.loadFuckAdBlock()
    }
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
  }

  adBlockDetected = () => {
    this.setState({ isBlockingAds: true })
  }

  adBlockNotDetected = () => {
    this.setState({ isBlockingAds: false })
  }

  loadFuckAdBlock = () => {
    const script = document.createElement('script')
    script.onload = () => {
      window.fuckAdBlock.onDetected(this.adBlockDetected)
      window.fuckAdBlock.onNotDetected(this.adBlockNotDetected)
    }
    script.onerror = this.adBlockDetected
    script.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w='
    script.crossOrigin = 'anonymous'
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js'
    document.head.appendChild(script)
  }

  refresh = () => {
    this.setState({ opacity: 0 })

    this.refreshTimerStart = setTimeout(() => {
      _.invoke(window._carbonads, 'refresh')

      this.refreshTimerEnd = setTimeout(() => {
        this.setState({ opacity: 1 })
      }, TRANSITION_TIME)
    }, TRANSITION_TIME)
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

  hideAds = () => {
    const time = Date.now()

    this.setState({ hiddenAt: time })

    try {
      window.localStorage.setItem('hideAds', `${time}`)
    } catch (e) {
      /* eslint-disable no-console */
      console.error('Semantic-UI-React could not save ad settings.  LocalStorage failed.')
      console.error(e)
      /* eslint-enable no-console */
    }
  }

  renderMessage = () => (
    <Segment inverted color='pink' textAlign='center' size='large'>
      <Header icon size='small'>
        <Icon name='heart' />
        Support Us
      </Header>
      <p>
        We're not funded. Enable ads to support us.
      </p>
      <Button fluid inverted compact color='pink' onClick={this.hideAds}>No thanks</Button>
    </Segment>
  )

  render() {
    const { opacity, hiddenAt, isBlockingAds } = this.state

    const preferenceExpired = Date.now() - hiddenAt > PREFERENCE_EXPIRATION_MS

    if (isBlockingAds && !preferenceExpired) return null

    const style = {
      transition: `opacity ${TRANSITION_TIME}ms`,
      minHeight: 199,
      background: '#000',
      opacity: isBlockingAds ? 1 : opacity,
    }

    return (
      <Menu.Item id='docs-carbonads' style={style}>
        {isBlockingAds ? this.renderMessage() : this.renderAd()}
      </Menu.Item>
    )
  }
}

export default CarbonAd
