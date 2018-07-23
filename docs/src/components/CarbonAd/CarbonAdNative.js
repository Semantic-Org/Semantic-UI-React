import React, { Component } from 'react'

import { Label } from 'semantic-ui-react'

class CarbonAdNative extends Component {
  state = {}

  componentDidMount() {
    this.getAd()

    this.mounted = true
  }

  componentWillUpdate() {
    if (Date.now() - this.timeOfLastAd > 10000) {
      this.getAd()
    }
  }

  componentWillUnmount() {
    this.mounted = false
    this.cleanup()
  }

  cleanup = () => {
    if (!this.script) return

    document.getElementsByTagName('head')[0].removeChild(this.script)
    this.script = null
  }

  getAd = () => {
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
    try {
      const sanitized = json.ads
        .filter(ad => Object.keys(ad).length > 0)
        .filter(ad => !!ad.statlink)

      if (this.mounted) {
        this.setState({ ad: sanitized[0] })
      } else {
        this.cleanup()
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  render() {
    const { ad } = this.state

    if (!ad) return null

    const id = `carbon-native-${ad.timestamp}`

    return (
      <a id={id} href={ad.statlink} target='_blank' rel='noopener noreferrer'>
        <img src={ad.image} width='20' style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
        <strong>{ad.company}</strong>
        {' — '}
        <span>{ad.description}</span>
        <Label basic horizontal content='Ad' style={{ float: 'right' }} />

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

        <style>{`
          #${id} {
            transition: background 0.2s;
            display: block;
            padding: 1rem;
            width: 100%;
            background: #fff;
            border-top: 1px solid #ddd;
            color: inherit;
            cursor: pointer;
          }
          #${id}:hover {
            background: whitesmoke;
          }
        `}</style>
      </a>
    )
  }
}

export default CarbonAdNative
