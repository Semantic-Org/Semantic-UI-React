import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as customPropTypes from './customPropTypes'
import computeElementType from './computeElementType'

export default class ElementType extends Component {
  static propTypes = {
    computeType: PropTypes.func,
    defaultElement: customPropTypes.as,
    /**
     * Called when componentDidMount.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func,
  }

  render() {
    const { as, defaultType, computeType, href, innerRef, ...rest } = this.props
    const Child = computeElementType(as, href, defaultType, computeType)

    return <Child {...rest} ref={innerRef} />
  }
}
