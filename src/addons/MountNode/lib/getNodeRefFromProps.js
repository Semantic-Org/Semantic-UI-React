import { isRefObject, toRefObject } from '@stardust-ui/react-component-ref'
import _ from 'lodash'

import { isBrowser } from '../../../lib'

/**
 * Given `this.props`, return a `node` value or undefined.
 *
 * @param {object|React.RefObject} props Component's props
 * @return {React.RefObject|undefined}
 */
const getNodeRefFromProps = (props) => {
  const { node } = props

  if (isBrowser()) {
    if (isRefObject(node)) return node
    return _.isNil(node) ? toRefObject(document.body) : toRefObject(node)
  }
}

export default getNodeRefFromProps
