export default class EventSet {
  /**
   * @param {Function[]} eventHandlers
   */
  constructor(eventHandlers) {
    /** @private {Set<Function>} handlers */
    this.handlers = new Set(eventHandlers)
  }

  /**
   * @param {Function[]} eventHandlers
   * @return {EventSet}
   */
  addHandlers(eventHandlers) {
    const handlerSet = new Set(this.handlers)

    eventHandlers.forEach((eventHandler) => {
      // Heads up!
      // We should delete a handler from the set, otherwise it will be not the last element in the
      // set.
      handlerSet.delete(eventHandler)
      handlerSet.add(eventHandler)
    })

    return new EventSet(handlerSet)
  }

  /**
   * @param {Event} event
   * @param {Boolean} dispatchAll
   */
  dispatchEvent(event, dispatchAll) {
    if (dispatchAll) {
      this.handlers.forEach((handler) => {
        handler(event)
      })
      return
    }

    const recentHandler = [...this.handlers].pop()

    recentHandler(event)
  }

  /**
   * @return {Boolean}
   */
  hasHandlers() {
    return this.handlers.size > 0
  }

  /**
   * @param {Function[]} eventHandlers
   * @return {EventSet}
   */
  removeHandlers(eventHandlers) {
    const handlerSet = new Set(this.handlers)

    eventHandlers.forEach((eventHandler) => {
      handlerSet.delete(eventHandler)
    })

    return new EventSet(handlerSet)
  }
}
