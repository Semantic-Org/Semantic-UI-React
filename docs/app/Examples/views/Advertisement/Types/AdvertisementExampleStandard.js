import React, { Component } from 'react'
import { Advertisement } from 'semantic-ui-react'

export default class AdvertisementExampleStandard extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    return (
      <Advertisement unit='medium rectangle'>
        <ins
          className='adsbygoogle'
          data-ad-client='ca-pub-4591861188995436'
          data-ad-format='auto'
          data-ad-slot='4640466102'
          style={{ display: 'block' }}
        />
      </Advertisement>
    )
  }
}
