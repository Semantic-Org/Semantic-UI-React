import EventPool from 'src/lib/eventStack/EventPool'
import { sandbox } from 'test/utils'

describe('EventPool', () => {
  describe('addHandlers', () => {
    it('adds handlers', () => {
      const handler = sandbox.spy()
      let pool = new EventPool('default', new Map())

      pool = pool.addHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).have.been.calledOnce()
    })

    it('adds handlers for multiple event types', () => {
      const clickHandler = sandbox.spy()
      const mouseDown = sandbox.spy()

      let pool = new EventPool('default', new Map())
      pool = pool.addHandlers('click', [clickHandler])
      pool = pool.addHandlers('mousedown', [mouseDown])

      pool.dispatchEvent('click', null)
      pool.dispatchEvent('mousedown', null)

      expect(clickHandler).have.been.calledOnce()
      expect(mouseDown).have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const pool = EventPool.createByType('default', 'click', [])
      const anotherPool = pool.addHandlers('click', [])

      expect(typeof anotherPool).toBe('object')
      expect(anotherPool).not.toBe(pool)
    })

    it('handler sets are immutable', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      const pool = EventPool.createByType('default', 'click', [handler1])
      const another = pool.addHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      expect(handler1).have.been.calledTwice()
      expect(handler2).have.been.calledOnce()
    })
  })

  describe('hasHandlers', () => {
    const pool = EventPool.createByType('default', 'click', [() => {}])

    it('returns "true" if has handlers', () => {
      expect(pool.hasHandlers('click')).toBe(true)
    })

    it('returns "false" if has not handlers', () => {
      expect(pool.hasHandlers('mousedown')).toBe(false)
    })
  })

  describe('removeHandlers', () => {
    it('removes handlers', () => {
      const handler = sandbox.spy()
      let pool = EventPool.createByType('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).have.been.calledOnce()
    })

    it('removes handlers for non-existent eventType', () => {
      const handler = sandbox.spy()
      let pool = EventPool.createByType('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('mousedown', [handler])
      pool.dispatchEvent('click', null)

      expect(handler).have.been.calledTwice()
    })

    it('always returns a new object', () => {
      const pool = EventPool.createByType('default', 'click', [])
      const another = pool.removeHandlers('click', [])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(pool)
    })

    it('handlers are immutable', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      const pool = EventPool.createByType('default', 'click', [handler1, handler2])
      const another = pool.removeHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      expect(handler1).have.been.calledTwice()
      expect(handler2).have.been.calledOnce()
    })
  })
})
