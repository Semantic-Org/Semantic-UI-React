import isBrowser from '../isBrowser'
import EventTarget from './EventTarget'
import normalizeHandlers from './normalizeHandlers'
import normalizeTarget from './normalizeTarget'

export default class EventStack {
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

  sub(eventName, eventHandlers, options = {}) {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target)

    eventTarget.addHandlers(pool, eventName, normalizeHandlers(eventHandlers))
  }

  unsub(eventName, eventHandlers, options = {}) {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this._find(target, false)

    if (eventTarget) {
      eventTarget.removeHandlers(pool, eventName, normalizeHandlers(eventHandlers))
      if (!eventTarget.hasHandlers()) this._remove(target)
    }
  }
}
