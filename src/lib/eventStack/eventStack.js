import isBrowser from '../isBrowser'
import EventTarget from './EventTarget'
import normalizeTarget from './normalizeTarget'

class EventStack {
  constructor() {
    this._targets = new Map()
  }

  // ------------------------------------
  // Target utils
  // ------------------------------------

  _find = (target, autoCreate = true) => {
    const normalized = normalizeTarget(target)

    if (this._targets.has(normalized)) return this._targets.get(normalized)
    if (!autoCreate) return

    const eventTarget = new EventTarget(normalized)
    this._targets.set(normalized, eventTarget)

    return eventTarget
  }

  _remove = (target) => {
    const normalized = normalizeTarget(target)

    this._targets.delete(normalized)
  }

  // ------------------------------------
  // Pub/sub
  // ------------------------------------

  sub = (name, handlers, options = {}) => {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target)

    eventTarget.sub(name, handlers, pool)
  }

  unsub = (name, handlers, options = {}) => {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target, false)

    if (eventTarget) {
      eventTarget.unsub(name, handlers, pool)
      if (eventTarget.empty()) this._remove(target)
    }
  }
}

const instance = new EventStack()

export default instance
