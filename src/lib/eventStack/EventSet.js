/**
 * The current implementation was chosen by performance and compatibility reasons, feel free to play
 * with benchmarks and submit PR with faster alternative. Each method contains links to benchmarks.
 */
export default class EventSet {
  /**
   * @see https://jsperf.com/suir-eventset-constructor
   *
   * @param {Function[]} eventHandlers
   */
  constructor(eventHandlers) {
    /** @private {Function[]}  handlers */
    this.handlers = eventHandlers.slice(0)
  }

  /**
   * @see https://jsperf.com/suir-eventset-addhandlers
   *
   * @param {Function[]} additionalHandlers
   * @return {EventSet}
   */
  addHandlers(additionalHandlers) {
    const newHandlers = this.handlers.slice(0)
    const length = additionalHandlers.length

    // Heads up!
    // Previously we use Set there, it granted uniqueness of handlers, now dispatchEvent() is
    // responsible for this.
    for (let i = 0; i < length; i += 1) {
      newHandlers.push(additionalHandlers[i])
    }

    return new EventSet(newHandlers)
  }

  /**
   * @see https://jsperf.com/suir-eventset-dispatchsingle
   * @see https://jsperf.com/suir-eventset-dispatchmultiple
   *
   * @param {Event} event
   * @param {Boolean} dispatchAll
   */
  dispatchEvent(event, dispatchAll) {
    if (!dispatchAll) {
      // Heads up!
      // We don't use .pop() there because it will mutate the array.
      const recentHandler = this.handlers[this.handlers.length - 1]
      recentHandler(event)

      return
    }

    let calledCount = 0
    const calledHandlers = new Set()
    const length = this.handlers.length

    for (let i = 0; i < length; i += 1) {
      const handler = this.handlers[i]

      calledHandlers.add(handler)

      // Heads up!
      // There we ensure that a handler was added to the set, this solution is quite faster then the
      // double iteration.
      if (calledHandlers.size > calledCount) {
        calledCount += 1
        handler(event)
      }
    }
  }

  /**
   * @return {Boolean}
   */
  hasHandlers() {
    return this.handlers.length > 0
  }

  /**
   * @param {Function[]} removalHandlers
   * @return {EventSet}
   */
  removeHandlers(removalHandlers) {
    const newHandlers = []
    const length = this.handlers.length

    for (let i = 0; i < length; i += 1) {
      const handler = this.handlers[i]

      if (removalHandlers.indexOf(handler) === -1) {
        newHandlers.push(handler)
      }
    }

    return new EventSet(newHandlers)
  }
}
