import memoize from 'lodash/memoize'
import isNil from 'lodash/isNil'
import { isBrowser, isRefObject } from '../../../lib'

const toRef = memoize((node) => ({ current: node }))

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
    return isNil(node) ? toRef(document.body) : toRef(node)
  }
}

export default getNodeRefFromProps
