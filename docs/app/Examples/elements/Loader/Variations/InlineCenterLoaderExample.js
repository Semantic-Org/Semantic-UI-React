import React, { Component } from 'react'
import { Loader } from 'stardust'

export default class InlineCenterLoaderExample extends Component {
  render() {
    return (
      <Loader active inline='centered' />
    )
  }
}
