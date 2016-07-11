import React, { Component } from 'react'
import { Loader } from 'stardust'

export default class InlineCenteredLoaderExample extends Component {
  render() {
    return (
      <Loader active inline='centered' />
    )
  }
}
