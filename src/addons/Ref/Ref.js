import PropTypes from 'prop-types'
import React from 'react'
import { isForwardRef } from 'react-is'

import RefFindNode from './RefFindNode'
import RefForward from './RefForward'

/**
 * This component exposes a prop that supports functional and createRef() API and returns the DOM
 * node of both functional and class component children.
 */
function Ref(props) {
  const { children, innerRef } = props

  const child = React.Children.only(children)
  const ElementType = isForwardRef(child) ? RefForward : RefFindNode

  return <ElementType innerRef={innerRef}>{child}</ElementType>
}

Ref.propTypes = {
  /** Primary content. */
  children: PropTypes.element.isRequired,

  /**
   * Called when a child component will be mounted or updated.
   *
   * @param {HTMLElement} node - Referred node.
   */
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

Ref.FindNode = RefFindNode
Ref.Forward = RefForward

export default Ref
