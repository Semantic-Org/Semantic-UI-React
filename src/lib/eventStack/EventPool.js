import EventSet from './EventSet'

export default class EventPool {
  /**
   * @param {String} poolName
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   */
  constructor(poolName, eventType, eventHandlers) {
    this._handlerSets = new Map()
    this._handlerSets.set(eventType, new EventSet(eventHandlers))

    this._poolName = poolName
  }

  /**
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   * @return {EventPool}
   */
  addHandlers(eventType, eventHandlers) {
    const handlerSets = new Map(this._handlerSets)
    const pool = new EventPool(this._poolName)

    if (handlerSets.has(eventType)) {
      const handlerSet = handlerSets.get(eventType)
      handlerSets.set(eventType, handlerSet.addHandlers(eventHandlers))

      pool._handlerSets = handlerSets
      return pool
    }

    handlerSets.set(eventType, new EventSet(eventHandlers))
    pool._handlerSets = handlerSets
    return pool
  }

  /**
   * @param {String} eventType
   * @param {Event} event
   */
  dispatchEvent(eventType, event) {
    const handlerSet = this._handlerSets.get(eventType)

    if (handlerSet) handlerSet.dispatchEvent(event, this._poolName === 'default')
  }

  /**
   * @param {String} eventType
   */
  hasHandlers(eventType) {
    const handlerSet = this._handlerSets.get(eventType)

    if (handlerSet) return handlerSet.hasHandlers()
    return false
  }

  /**
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   */
  removeHandlers(eventType, eventHandlers) {
    const handlerSets = new Map(this._handlerSets)
    const pool = new EventPool(this._poolName)

    if (this._handlerSets.has(eventType) === false) {
      pool._handlerSets = handlerSets

      return pool
    }

    const handlerSet = this._handlerSets.get(eventType)
    const newSet = handlerSet.removeHandlers(eventHandlers)

    if (newSet.hasHandlers()) {
      handlerSets.set(eventType, newSet)
    } else {
      handlerSets.delete(eventType)
    }

    pool._handlerSets = handlerSets
    return pool
  }
}
