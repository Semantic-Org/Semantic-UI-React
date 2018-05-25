import isBrowser from '../isBrowser'
import EventTarget from './EventTarget'
import normalizeHandlers from './normalizeHandlers'
import normalizeTarget from './normalizeTarget'

export default class EventStack {
  /** @private {Map<String,EventTarget> */
  targets = new Map()

  /**
   * @param {String} eventName
   * @param {Function|Function[]} eventHandlers
   * @param {Object} [options]
   * @param {*} [options.target]
   * @param {String} [options.pool]
   */
  sub(eventName, eventHandlers, options = {}) {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this.getTarget(target)

    eventTarget.addHandlers(pool, eventName, normalizeHandlers(eventHandlers))
  }

  /**
   * @param {String} eventName
   * @param {Function|Function[]} eventHandlers
   * @param {Object} [options]
   * @param {*} [options.target]
   * @param {String} [options.pool]
   */
  unsub(eventName, eventHandlers, options = {}) {
    if (!isBrowser()) return

    const { target = document, pool = 'default' } = options
    const eventTarget = this.getTarget(target, false)

    if (eventTarget) {
      eventTarget.removeHandlers(pool, eventName, normalizeHandlers(eventHandlers))
      if (!eventTarget.hasHandlers()) this.removeTarget(target)
    }
  }

  /**
   * @private
   * @param {*} target
   * @param {Boolean} [autoCreate]
   * @return {EventTarget}
   */
  getTarget = (target, autoCreate = true) => {
    const normalized = normalizeTarget(target)

    if (this.targets.has(normalized)) return this.targets.get(normalized)
    if (!autoCreate) return null

    const eventTarget = new EventTarget(normalized)
    this.targets.set(normalized, eventTarget)

    return eventTarget
  }

  /**
   * @private
   * @param {*} target
   */
  removeTarget = (target) => {
    this.targets.delete(normalizeTarget(target))
  }
}
