import React, { Component } from 'react'

import { shallowEqual } from 'src/lib'

const pure = ChildComponent => class extends Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps)
  }

  render() {
    return <ChildComponent {...this.props} />
  }
}

export default pure
