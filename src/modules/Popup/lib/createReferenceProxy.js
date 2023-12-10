import { isRefObject } from '@fluentui/react-component-ref'
import _ from 'lodash'

class ReferenceProxy {
  constructor(refObject) {
    this.ref = refObject
  }

  getBoundingClientRect() {
    return _.invoke(this.ref.current, 'getBoundingClientRect') || {}
  }

  get clientWidth() {
    return this.getBoundingClientRect().width
  }

  get clientHeight() {
    return this.getBoundingClientRect().height
  }

  get parentNode() {
    return this.ref.current ? this.ref.current.parentNode : undefined
  }

  get contextElement() {
    return this.ref.current;
  }
}

/**
 * Popper.js does not support ref objects from `createRef()` as referenceElement. If we will pass
 * directly `ref`, `ref.current` will be `null` at the render process. We use memoize to keep the
 * same reference between renders.
 *
 * @see https://popper.js.org/popper-documentation.html#referenceObject
 */
const createReferenceProxy = _.memoize(
  (reference) => new ReferenceProxy(isRefObject(reference) ? reference : { current: reference }),
)

export default createReferenceProxy
