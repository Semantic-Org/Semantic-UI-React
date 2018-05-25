import EventPool from './EventPool'

export default class EventTarget {
  /** @private {Map<String,EventPool>} */
  _pools = new Map()

  /**
   * @param {HTMLElement} target
   */
  constructor(target) {
    this._handlers = new Map()
    this.target = target
  }

  // ------------------------------------
  // Utils
  // ------------------------------------

  createEmitter = (eventType, pools) => (event) => {
    pools.forEach((pool) => {
      pool.dispatchEvent(eventType, event)
    })
  }

  // ------------------------------------
  // Listeners handling
  // ------------------------------------

  _listen(eventType) {
    const handler = this.createEmitter(eventType, this._pools)

    this._handlers.set(eventType, handler)
    this.target.addEventListener(eventType, handler)
  }

  _unlisten(eventType) {
    if (this._handlers.has(eventType)) {
      this.target.removeEventListener(eventType, this._handlers.get(eventType))
    }
  }

  /**
   * @param {String} poolName
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   */
  addHandlers(poolName, eventType, eventHandlers) {
    if (this._pools.has(poolName) === false) {
      const eventPool = new EventPool(poolName, eventType, eventHandlers)

      this._unlisten(eventType)
      this._pools.set(poolName, eventPool)
      this._listen(eventType)
      return
    }

    const pool = this._pools.get(poolName)

    this._unlisten(eventType)
    this._pools.set(poolName, pool.addHandlers(eventType, eventHandlers))
    this._listen(eventType, this._pools)
  }

  /**
   * @return {Boolean}
   */
  hasHandlers() {
    return this._handlers.size > 0
  }

  /**
   * @param {String} poolName
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   */
  removeHandlers(poolName, eventType, eventHandlers) {
    const pool = this._pools.get(poolName)

    if (pool) {
      const newPool = pool.removeHandlers(eventType, eventHandlers)

      if (newPool.hasHandlers(eventType)) {
        this._unlisten(eventType)
        this._pools.set(poolName, newPool)
      } else {
        this._unlisten(eventType)
        this._pools.delete(poolName)
      }

      this._listen(eventType)
    }
  }
}
