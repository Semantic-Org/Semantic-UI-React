import PropTypes from 'prop-types'
import { Component } from 'react'

import { customPropTypes } from '../../lib'
import getNodeRefFromProps from './lib/getNodeRefFromProps'
import handleClassNamesChange from './lib/handleClassNamesChange'
import NodeRegistry from './lib/NodeRegistry'

const nodeRegistry = new NodeRegistry()

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */
export default class MountNode extends Component {
  static propTypes = {
    /** Additional classes. */
    className: PropTypes.string,

    /** The DOM node where we will apply class names. Defaults to document.body. */
    node: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),
  }

  shouldComponentUpdate({ className: nextClassName }) {
    const { className: currentClassName } = this.props

    return nextClassName !== currentClassName
  }

  componentDidMount() {
    const nodeRef = getNodeRefFromProps(this.props)

    nodeRegistry.add(nodeRef, this)
    nodeRegistry.emit(nodeRef, handleClassNamesChange)
  }

  componentDidUpdate() {
    nodeRegistry.emit(getNodeRefFromProps(this.props), handleClassNamesChange)
  }

  componentWillUnmount() {
    const nodeRef = getNodeRefFromProps(this.props)

    nodeRegistry.del(nodeRef, this)
    nodeRegistry.emit(nodeRef, handleClassNamesChange)
  }

  render() {
    return null
  }
}
