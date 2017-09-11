import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Ref from '../addons/Ref'

const withRef = Child => class WithRef extends Component {
  static propTypes = {
    /**
     * Called when componentDidMount.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func,
  }

  render() {
    const { innerRef, ...rest } = this.props

    if (typeof Child === 'string') return <Child {...rest} ref={innerRef} />
    if (Child._meta) return <Child {...rest} innerRef={innerRef} />

    return (
      <Ref innerRef={innerRef}>
        <Child {...rest} />
      </Ref>
    )
  }
}

export default withRef
