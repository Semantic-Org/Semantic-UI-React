import EventTarget from 'src/lib/eventStack/EventTarget'
import { domEvent } from 'test/utils'

describe('EventTarget', () => {
  let target

  beforeEach(() => {
    target = new EventTarget(document)
  })

  afterEach(() => {
    target = null
  })

  describe('addHandlers', () => {
    it('adds handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('default', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('handles multiple pools', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('another', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).toHaveBeenCalledTimes(1)
      expect(handler2).toHaveBeenCalledTimes(1)
    })
  })

  describe('hasHandlers', () => {
    it('is "false" when has not handlers', () => {
      expect(target.hasHandlers()).toBe(false)
    })

    it('is "true" when has handlers', () => {
      target.addHandlers('default', 'click', [() => {}])
      expect(target.hasHandlers()).toBe(true)
    })
  })

  describe('removeHandlers', () => {
    it('removes handlers', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      target.addHandlers('default', 'click', [handler1, handler2])
      domEvent.click(document)

      target.removeHandlers('default', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).toHaveBeenCalledTimes(2)
      expect(handler2).toHaveBeenCalledTimes(1)
    })

    it('removes handlers with multiple pools', () => {
      const handler1 = jest.fn()
      const handler2 = jest.fn()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('another', 'click', [handler2])
      domEvent.click(document)

      target.removeHandlers('another', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).toHaveBeenCalledTimes(2)
      expect(handler2).toHaveBeenCalledTimes(1)
    })
  })
})
