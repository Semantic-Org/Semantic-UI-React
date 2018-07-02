import EventSet from 'src/lib/eventStack/EventSet'
import { sandbox } from 'test/utils'

describe('EventSet', () => {
  let set

  beforeEach(() => {
    set = new EventSet([])
  })

  describe('addHandlers', () => {
    it('adds a single handler', () => {
      const handler = sandbox.spy()

      set = set.addHandlers([handler])
      set.dispatchEvent(null, true)

      expect(handler).have.been.calledOnce()
    })

    it('adds multiple handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
    })

    it('adds only unique handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler1, handler2, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const another = set.addHandlers([])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(set)
    })
  })

  describe('dispatchEvent', () => {
    it('dispatches an event to all handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
    })

    it('dispatches an event to only recent event', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2, handler1])
      set.dispatchEvent(null, false)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.not.been.called()
    })
  })

  describe('hasHandlers', () => {
    it('returns "false" when is empty', () => {
      expect(set.hasHandlers()).toBe(false)
    })

    it('returns "false" when is empty', () => {
      expect(set.addHandlers([() => {}]).hasHandlers()).toBe(true)
    })
  })

  describe('removeHandlers', () => {
    it('remove a single handler', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler2])
      set.dispatchEvent(null, true)

      expect(handler1).have.been.calledTwice()
      expect(handler2).have.been.calledOnce()
    })

    it('removes multiple handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const another = set.removeHandlers([])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(set)
    })
  })
})
