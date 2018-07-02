import EventTarget from 'src/lib/eventStack/EventTarget'
import { domEvent, sandbox } from 'test/utils'

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
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('default', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
    })

    it('handles multiple pools', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('another', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).have.been.calledOnce()
      expect(handler2).have.been.calledOnce()
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
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      target.addHandlers('default', 'click', [handler1, handler2])
      domEvent.click(document)

      target.removeHandlers('default', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).have.been.calledTwice()
      expect(handler2).have.been.calledOnce()
    })

    it('removes handlers with multiple pools', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      target.addHandlers('default', 'click', [handler1])
      target.addHandlers('another', 'click', [handler2])
      domEvent.click(document)

      target.removeHandlers('another', 'click', [handler2])
      domEvent.click(document)

      expect(handler1).have.been.calledTwice()
      expect(handler2).have.been.calledOnce()
    })
  })
})
