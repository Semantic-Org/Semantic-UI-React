import _ from 'lodash'

class EventPool {
  handlers = {}
  pools = {}

  // ------------------------------------
  // Utils
  // ------------------------------------

  emit = name => event => {
    _.forEach(this.pools, (pool, poolName) => {
      const { [name]: handlers } = pool

      if (!handlers) return
      if (poolName === 'default') {
        _.forEach(handlers, handler => handler(event))
        return
      }
      _.last(handlers)(event)
    })
  }

  normalize = handlers => _.isArray(handlers) ? handlers : [handlers]

  // ------------------------------------
  // Listeners handling
  // ------------------------------------

  listen = name => {
    if (_.has(this.handlers, name)) return
    const handler = this.emit(name)

    document.addEventListener(name, handler)
    this.handlers[name] = handler
  }

  unlisten = name => {
    if (_.some(this.pools, name)) return
    const { [name]: handler } = this.handlers

    document.removeEventListener(name, handler)
    delete this.handlers[name]
  }

  // ------------------------------------
  // Pub/sub
  // ------------------------------------

  sub = (name, handlers, pool = 'default') => {
    const events = [
      ..._.get(this.pools, `${pool}.${name}`, []),
      ...this.normalize(handlers),
    ]

    this.listen(name)
    _.set(this.pools, `${pool}.${name}`, events)
  }

  unsub = (name, handlers, pool = 'default') => {
    const events = _.without(
      _.get(this.pools, `${pool}.${name}`, []),
      ...this.normalize(handlers)
    )

    if (events.length > 0) {
      _.set(this.pools, `${pool}.${name}`, events)
      return
    }

    delete this.pools[pool][name]
    this.unlisten(name)
  }
}

const instance = new EventPool()

export default instance
