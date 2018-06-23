import _ from 'lodash'
import React, { Component } from 'react'
import shallowEqual from 'shallowequal'

const updateForKeys = propKeys => ChildComponent =>
  class extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqual(_.pick(this.props, propKeys), _.pick(nextProps, propKeys))
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

export default updateForKeys
