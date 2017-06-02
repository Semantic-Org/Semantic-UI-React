import _ from 'lodash'

class EventPool {
  events = []
  queues = {}

  // ------------------------------------
  // Utils
  // ------------------------------------

  emit = name => event => {
    _.forEach(this.queues, (queue, name) => {
      const { [name]: handlers } = queue
      if(handlers) _.forEach(handlers, handler => handler(event))
    })
  }

  normalize = handlers => _.isArray(handlers) ? handlers : [handlers]

  // ------------------------------------
  // Listeners handling
  // ------------------------------------

  listen = name => {
    if(_.includes(this.queues, name)) return
    document.addEventListener(name, this.emit(name))
  }

  unlisten = name => {
    if(_.some(this.queues, name)) return
    document.removeEventListener(name, this.emit(name))
  }

  // ------------------------------------
  // Pub/sub
  // ------------------------------------

  sub = (name, handlers, queue = 'default') => {
    const events = [
      ..._.get(this.queues, `${queue}.${name}`),
      ...this.normalize(handlers)
    ]

    this.listen(name)
    _.set(this.queues, `${queue}.${name}`, events)
  }

  unsub = (name, handlers, queue = 'default') => {
    const events = _.without(_.get(this.queues, `${queue}.${name}`), this.normalize(handlers))

    if(events.length > 0) {
      _.set(this.queues, `${queue}.${name}`, events)
      return
    }

    delete this.queues[queue][name]
    this.unlisten(name)
  }
}

const instance = new EventPool()

export default instance