import PropTypes from 'prop-types'
import React from 'react'

import { customPropTypes, useClassNamesOnNode } from '../../lib'

/**
 * A component that allows to manage classNames on a DOM node in declarative manner.
 *
 * @deprecated This component is deprecated and will be removed in next major release.
 */
function MountNode(props) {
  useClassNamesOnNode(props.node, props.className)

  // A workaround for `react-docgen`: https://github.com/reactjs/react-docgen/issues/336
  if (process.env.NODE_ENV === 'test') {
    return <div />
  }

  /* istanbul ignore next */
  return null
}

MountNode.propTypes = {
  /** Additional classes. */
  className: PropTypes.string,

  /** The DOM node where we will apply class names. Defaults to document.body. */
  node: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),
}

export default MountNode
