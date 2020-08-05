import PropTypes from 'prop-types'
import { Component } from 'react'

import { customPropTypes } from '../../lib'
import getNodeRefFromProps from './lib/getNodeRefFromProps'
import handleClassNamesChange from './lib/handleClassNamesChange'

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 */
export default class MountNode extends Component {
  constructor(props) {
    super(props)

    this.ref = getNodeRefFromProps(props)
  }

  shouldComponentUpdate({ className: nextClassName }) {
    const { className: currentClassName } = this.props

    return nextClassName !== currentClassName
  }

  componentDidMount() {
    handleClassNamesChange(this.ref, [this])
  }

  componentDidUpdate(prevProps) {
    if (this.props.node !== prevProps.node) {
      this.ref = getNodeRefFromProps(this.props)
    }

    handleClassNamesChange(this.ref, [this])
  }

  componentWillUnmount() {
    handleClassNamesChange(this.ref, [])
  }

  render() {
    return null
  }
}

MountNode.propTypes = {
  /** Additional classes. */
  className: PropTypes.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),
}
