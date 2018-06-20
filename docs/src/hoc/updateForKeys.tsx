import shallowEqual from 'fbjs/lib/shallowEqual'
import _ from 'lodash'
import React, { Component } from 'react'

const updateForKeys = (propKeys): any => (ChildComponent): any =>
  class extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqual(_.pick(this.props, propKeys), _.pick(nextProps, propKeys))
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

export default updateForKeys
