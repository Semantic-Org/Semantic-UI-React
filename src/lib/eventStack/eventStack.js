import _ from 'lodash'

import isBrowser from '../isBrowser'
import EventTarget from './EventTarget'
import normalizeTarget from './normalizeTarget'

class EventStack {
  _eventTargets = {}
  _targets = []

  // ------------------------------------
  // Target utils
  // ------------------------------------

  _find = (target) => {
    const normalized = normalizeTarget(target)
    let index = this._targets.indexOf(normalized)

    if (index !== -1) return this._eventTargets[index]

    index = this._targets.push(normalized) - 1
    this._eventTargets[index] = new EventTarget(normalized)

    return this._eventTargets[index]
  }

  _remove = (target) => {
    const normalized = normalizeTarget(target)
    const index = this._targets.indexOf(normalized)

    this._targets = _.without(this._targets, normalized)
    delete this._eventTargets[index]
  }

  // ------------------------------------
  // Pub/sub
  // ------------------------------------

  sub = (name, handlers, options = {}) => {
    if (!isBrowser) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target)

    eventTarget.sub(name, handlers, pool)
  }

  unsub = (name, handlers, options = {}) => {
    if (!isBrowser) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target)

    eventTarget.unsub(name, handlers, pool)
    if (eventTarget.empty()) this._remove(target)
  }
}

const instance = new EventStack()

export default instance
