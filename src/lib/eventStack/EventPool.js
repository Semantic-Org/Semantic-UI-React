import EventSet from './EventSet'
import { cloneMap } from './utils'

export default class EventPool {
  /**
   * @param {String} poolName
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   * @return {EventPool}
   */
  static createByType = (poolName, eventType, eventHandlers) => {
    const handlerSets = new Map()
    handlerSets.set(eventType, new EventSet(eventHandlers))

    return new EventPool(poolName, handlerSets)
  }

  /**
   * @param {String} poolName
   * @param {Map<String,EventSet>} handlerSets
   */
  constructor(poolName, handlerSets) {
    /** @private */
    this.handlerSets = handlerSets
    /** @private */
    this.poolName = poolName
  }

  /**
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   * @return {EventPool}
   */
  addHandlers(eventType, eventHandlers) {
    const handlerSets = cloneMap(this.handlerSets)

    if (handlerSets.has(eventType)) {
      handlerSets.set(eventType, handlerSets.get(eventType).addHandlers(eventHandlers))
    } else {
      handlerSets.set(eventType, new EventSet(eventHandlers))
    }

    return new EventPool(this.poolName, handlerSets)
  }

  /**
   * @param {String} eventType
   * @param {Event} event
   */
  dispatchEvent(eventType, event) {
    const handlerSet = this.handlerSets.get(eventType)
    const shouldDispatchAll = this.poolName === 'default'

    if (handlerSet) {
      handlerSet.dispatchEvent(event, shouldDispatchAll)
    }
  }

  /**
   * @return {Boolean}
   */
  hasHandlers() {
    return this.handlerSets.size > 0
  }

  /**
   * @param {String} eventType
   * @param {Function[]} eventHandlers
   * @return {EventPool}
   */
  removeHandlers(eventType, eventHandlers) {
    const handlerSets = cloneMap(this.handlerSets)

    if (!handlerSets.has(eventType)) {
      return new EventPool(this.poolName, handlerSets)
    }

    const handlerSet = handlerSets.get(eventType).removeHandlers(eventHandlers)

    if (handlerSet.hasHandlers()) {
      handlerSets.set(eventType, handlerSet)
    } else {
      handlerSets.delete(eventType)
    }

    return new EventPool(this.poolName, handlerSets)
  }
}
