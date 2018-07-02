import EventSet from 'src/lib/eventStack/EventSet'

describe('EventSet', () => {
  let set

  beforeEach(() => {
    set = new EventSet([])
  })

  describe('addHandlers', () => {
    it('adds a single handler', () => {
      const handler = jest.fn()

      set = set.addHandlers([handler])
      set.dispatchEvent(null, true)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('adds multiple handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('adds only unique handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler1, handler2, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('always returns a new object', () => {
      const another = set.addHandlers([])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(set)
    })
  })

  describe('dispatchEvent', () => {
    it('dispatches an event to all handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('dispatches an event to only recent event', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler2, handler1])
      set.dispatchEvent(null, false)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).not.toHaveBeenCalled()
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
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler2])
      set.dispatchEvent(null, true)

      expect(handler1).toHaveBeenCalledTimes(2)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('removes multiple handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('always returns a new object', () => {
      const another = set.removeHandlers([])

      expect(typeof another).toBe('object')
      expect(another).not.toBe(set)
    })
  })
})
