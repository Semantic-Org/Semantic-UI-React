import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Header, Icon, Menu, Segment } from 'semantic-ui-react'

const PREFERENCE_EXPIRATION_MS = 1000 * 60 * 60 * 24 * 14

class CarbonAd extends Component {
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

    if (typeof fuckAdBlock === 'undefined' || typeof FuckAdBlock === 'undefined') {
      this.loadFuckAdBlock()
    }

    const script = document.createElement('script')
    script.async = true
    script.id = '_carbonads_js'
    script.type = 'text/javascript'
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=reactsemanticuicom'

    this.ifRef(ref => ref.appendChild(script))
  }

  componentWillUpdate() {
    if (location.href !== this.lastHref) {
      this.lastHref = location.href
      _.invoke(window._carbonads, 'refresh')
    }
  }


  adBlockDetected = () => this.setState({ isBlockingAds: true })

  adBlockNotDetected = () => this.setState({ isBlockingAds: false })

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

    this.ifRef(ref => ref.appendChild(script))
  }

  ifRef = (cb) => {
    const ref = document.querySelector('#docs-carbonads')
    if (ref) cb(ref)
  }

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
    const { hiddenAt, isBlockingAds } = this.state

    const preferenceExpired = Date.now() - hiddenAt > PREFERENCE_EXPIRATION_MS

    if (isBlockingAds && !preferenceExpired) return null

    const style = {
      minHeight: 199,
      background: '#000',
    }

    return (
      <Menu.Item id='docs-carbonads' style={style}>
        {isBlockingAds && this.renderMessage()}
      </Menu.Item>
    )
  }
}

export default CarbonAd
