import EventTarget from 'src/lib/eventStack/EventTarget'
import { domEvent } from 'test/utils'

describe('EventTarget', () => {
  let eventTarget

  beforeEach(() => {
    eventTarget = new EventTarget(document)
  })

  afterEach(() => {
    eventTarget = null
  })

  describe('empty', () => {
    test('is true by default', () => {
      expect(eventTarget.empty()).toBe(true)
    })

    test('is false when has handlers', () => {
      eventTarget.sub('click', () => {})
      expect(eventTarget.empty()).toBe(false)
    })

    test('is true when handlers are removed', () => {
      const handler = () => {}

      eventTarget.sub('click', handler)
      eventTarget.unsub('click', handler)
      expect(eventTarget.empty()).toBe(true)
    })
  })

  describe('sub', () => {
    test('adds a single', () => {
      const first = jest.fn()

      eventTarget.sub('click', first)
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(1)
    })

    test('adds multiple', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second)
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(1)
      expect(second).toHaveBeenCalledTimes(1)
    })

    test('adds multiple with array', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(1)
      expect(second).toHaveBeenCalledTimes(1)
    })

    test('adds only unique', () => {
      const first = jest.fn()

      eventTarget.sub('click', [first, first])
      eventTarget.sub('click', [first, first])

      domEvent.click(document)
      expect(first).toHaveBeenCalledTimes(1)
    })

    test('handles multiple pools', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      expect(first).toHaveBeenCalled()
      expect(second).toHaveBeenCalled()
    })

    test('fires only last handler in non-default pool', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', first, 'another')
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      expect(first).not.toHaveBeenCalled()
      expect(second).toHaveBeenCalled()
    })
  })

  describe('unsub', () => {
    test('handles unsubscribe', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      eventTarget.unsub('click', second)
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(2)
      expect(second).toHaveBeenCalledTimes(1)
    })

    test('handles multiple unsubscribe', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      eventTarget.unsub('click', [first, second])
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(1)
      expect(second).toHaveBeenCalledTimes(1)
    })

    test('handles unsubscribe with multiple pools', () => {
      const first = jest.fn()
      const second = jest.fn()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      eventTarget.unsub('click', second, 'another')
      domEvent.click(document)

      expect(first).toHaveBeenCalledTimes(2)
      expect(second).toHaveBeenCalledTimes(1)
    })
  })
})
