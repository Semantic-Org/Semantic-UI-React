import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Label } from 'semantic-ui-react'
import { makeDebugger } from '../../../../src/lib'

const debug = makeDebugger('carbon-ad-native')

const MAX_FAILED_ADS = 10

class CarbonAdNative extends PureComponent {
  state = {}

  componentDidMount() {
    debug('componentDidMount', { mounted: this.mounted })
    this.mounted = true
    this.failedAds = 0

    this.getAd()
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate() {
    const shouldGetAd = Date.now() - this.timeOfLastAd > 10000
    debug('componentWillUpdate', { mounted: this.mounted, shouldGetAd })
    if (shouldGetAd) {
      this.getAd()
    }
  }

  componentWillUnmount() {
    this.mounted = false
    this.cleanup()
  }

  cleanup = () => {
    debug('cleanup', { script: this.script, mounted: this.mounted })
    if (!this.script) return

    document.getElementsByTagName('head')[0].removeChild(this.script)
    this.script = null
  }

  getAd = () => {
    debug('getAd', { mounted: this.mounted })
    if (!this.mounted) return

    window._handleNativeJSON = this.handleNativeJSON
    this.timeOfLastAd = Date.now()

    this.cleanup()

    this.script = document.createElement('script')
    this.script.src = `https://srv.buysellads.com/ads/CK7DC2QW.json?${[
      'segment=placement:reactsemanticuicom',
      'callback=_handleNativeJSON',
      `v=${Date.now()}`,
    ].join('&')}`

    document.getElementsByTagName('head')[0].appendChild(this.script)
  }

  handleNativeJSON = (json) => {
    debug('handleNativeJSON', { mounted: this.mounted })
    try {
      const sanitizedAd = json.ads
        .filter((ad) => Object.keys(ad).length > 0)
        .filter((ad) => !!ad.statlink)
        .filter(Boolean)[0]
      debug('handleNativeJSON sanitizedAd', sanitizedAd)

      if (!sanitizedAd) {
        this.failedAds += 1

        if (this.failedAds < MAX_FAILED_ADS) {
          this.getAd()
        }
      } else if (this.mounted) {
        this.setState({ ad: sanitizedAd })
        this.failedAds = 0
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  render() {
    const { inverted } = this.props
    const { ad } = this.state

    debug('render', ad)
    if (!ad) return null

    const id = `carbon-native-${ad.timestamp}`

    const colors = inverted
      ? {
          divider: '#333',
          background: '#222',
          backgroundHover: '#1d1d1d',
          color: '#999',
          colorHover: '#ccc',
        }
      : {
          divider: '#eee',
          background: '#fff',
          backgroundHover: 'whitesmoke',
          color: '#555',
          colorHover: '#333',
        }

    return (
      <a id={id} href={ad.statlink} target='_blank' rel='noopener noreferrer'>
        <img src={ad.image} />
        <span>{ad.company}</span>
        {' — '}
        <span>{ad.description}</span>
        <Label
          content='Ad'
          basic={!inverted}
          color={inverted ? 'black' : undefined}
          horizontal
          style={{ position: 'absolute', right: '1rem', opacity: 0.5 }}
        />

        {/* Impression */}
        <img src={`${ad.statimp}`} style={{ display: 'none' }} />

        {/* Pixel */}
        {ad.pixel &&
          ad.pixel
            .split('||')
            .map((pixel, i) => (
              <img
                key={i}
                src={`${pixel.replace('[timestamp]', ad.timestamp)}`}
                style={{ display: 'none' }}
              />
            ))}

        <style>
          {`
          #${id} {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 1rem 5rem 1rem 1rem;
            width: 100%;
            min-height: 3.5rem;
            border-top: 1px solid ${colors.divider};
            background: ${colors.background};
            color: ${colors.color};
            cursor: pointer;
          }
          #${id} > img {
            vertical-align: middle;
            width: 20px;
            margin-right: 0.5rem;
            opacity: 0.8;
          }
          #${id}:hover {
            background: ${colors.backgroundHover};
            color: ${colors.colorHover};
          }
          #${id}:hover > img {
            opacity: 1;
          }
        `}
        </style>
      </a>
    )
  }
}

CarbonAdNative.propTypes = {
  inverted: PropTypes.bool,
}

export default CarbonAdNative
