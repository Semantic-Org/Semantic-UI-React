/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export const DOMFunction = props => <div {...props} id='node' />

export const CompositeFunction = props => <DOMFunction {...props} />

export class DOMClass extends Component {
  render() {
    return <div {...this.props} id='node' />
  }
}

export class CompositeClass extends Component {
  render() {
    return <DOMClass {...this.props} />
  }
}
