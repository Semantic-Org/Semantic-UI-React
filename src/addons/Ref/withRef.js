import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Ref from './Ref'

const withRef = Child => class extends Component {
  static propTypes = {
    /**
     * Called when componentDidMount.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func.isRequired,
  }

  render() {
    const { innerRef, ...rest } = this.props

    if (typeof Child === 'string') return <Child {...rest} ref={innerRef} />
    return (
      <Ref innerRef={innerRef}>
        <Child {...rest} />
      </Ref>
    )
  }
}

export default withRef
