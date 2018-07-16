import EventPool from 'src/lib/eventStack/EventPool'

describe('EventPool', () => {
  describe('addHandlers', () => {
    it('adds handlers', () => {
      const handler = jest.fn()
      let pool = new EventPool('default', new Map())

      pool = pool.addHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('adds handlers for multiple event types', () => {
      const clickHandler = jest.fn()
      const mouseDown = jest.fn()

      let pool = new EventPool('default', new Map())
      pool = pool.addHandlers('click', [clickHandler])
      pool = pool.addHandlers('mousedown', [mouseDown])

      pool.dispatchEvent('click', null)
      pool.dispatchEvent('mousedown', null)

      expect(clickHandler).toHaveBeenCalledTimes(1)
      expect(mouseDown).toHaveBeenCalledTimes(1)
    })

    it('always returns a new object', () => {
      const pool = EventPool.createByType('default', 'click', [])
      const anotherPool = pool.addHandlers('click', [])

      expect(typeof anotherPool).toBe('object')
      expect(anotherPool).not.toBe(pool)
    })

    it('handler sets are immutable', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      const pool = EventPool.createByType('default', 'click', [handler1])
      const another = pool.addHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      expect(handler1).toHaveBeenCalledTimes(2)
      expect(handler2).toHaveBeenCalledTimes(1)
    })
  })

  describe('hasHandlers', () => {
    it('returns "true" if has handlers', () => {
      const pool = EventPool.createByType('default', 'click', [() => {}])

      expect(pool.hasHandlers()).toBe(true)
    })

    it('returns "false" if has not handlers', () => {
      const pool = new EventPool('default', new Map())

      expect(pool.hasHandlers()).toBe(false)
    })
  })

  describe('removeHandlers', () => {
    it('removes handlers', () => {
      const handler = jest.fn()
      let pool = EventPool.createByType('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('removes handlers for non-existent eventType', () => {
      const handler = jest.fn()
      let pool = EventPool.createByType('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('mousedown', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).toHaveBeenCalledTimes(2)
    })

    it('always returns a new object', () => {
      const pool = EventPool.createByType('default', 'click', [])
      const another = pool.removeHandlers('click', [])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(pool)
    })

    it('handlers are immutable', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      const pool = EventPool.createByType('default', 'click', [handler1, handler2])
      const another = pool.removeHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      expect(handler1).toHaveBeenCalledTimes(2)
      expect(handler2).toHaveBeenCalledTimes(1)
    })
  })
})
