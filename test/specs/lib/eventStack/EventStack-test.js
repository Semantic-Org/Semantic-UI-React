import EventStack from 'src/lib/eventStack/EventStack'
import isBrowser from 'src/lib/isBrowser'
import { domEvent, sandbox } from 'test/utils'

let eventStack

describe('EventStack', () => {
  beforeEach(() => {
    eventStack = new EventStack()
  })

  describe('isBrowser', () => {
    beforeAll(() => {
      isBrowser.override = false
    })

    afterAll(() => {
      isBrowser.override = null
    })

    it('does not subscribes', () => {
      const handler = sandbox.spy()

      eventStack.sub('click', handler)
      domEvent.click(document)

      expect(handler).have.not.been.called()
    })

    it('does not unsubscribes', () => {
      const handler = sandbox.spy()

      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).have.not.been.called()
    })
  })

  describe('sub', () => {
    it('subscribes for single target', () => {
      const handler = sandbox.spy()

      eventStack.sub('click', handler)
      domEvent.click(document)

      expect(handler).have.been.calledOnce()
    })

    it('subscribes for custom target', () => {
      const handler = sandbox.spy()
      const target = document.createElement('div')

      eventStack.sub('click', handler, { target })
      domEvent.click(target)

      expect(handler).have.been.calledOnce()
    })

    it('subscribes for multiple targets', () => {
      const documentHandler = sandbox.spy()
      const windowHandler = sandbox.spy()

      eventStack.sub('click', documentHandler)
      eventStack.sub('scroll', windowHandler, { target: window })
      domEvent.click(document)
      domEvent.scroll(window)

      expect(documentHandler).have.been.calledOnce()
      expect(windowHandler).have.been.calledOnce()
    })
  })

  describe('unsub', () => {
    it('unsubscribes from unexisting target', () => {
      eventStack.unsub('click', () => {}, { target: document.body })
      domEvent.click(document)
    })

    it('unsubscribes and destroys eventTarget if it is empty', () => {
      const handler = sandbox.spy()

      eventStack.sub('click', handler)
      domEvent.click(document)

      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).have.been.calledOnce()
    })

    it('unsubscribes but leaves eventTarget if it contains handlers', () => {
      const clickHandler = sandbox.spy()
      const keyHandler = sandbox.spy()

      eventStack.sub('click', clickHandler)
      eventStack.sub('keyDown', keyHandler)
      domEvent.click(document)

      eventStack.unsub('click', clickHandler)
      domEvent.click(document)

      expect(clickHandler).have.been.calledOnce()
      expect(keyHandler).have.not.been.called()
    })

    it('unsubscribes from same event multiple times', () => {
      const handler = sandbox.spy()

      eventStack.sub('click', handler)
      domEvent.click(document)

      eventStack.unsub('click', handler)
      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).have.been.calledOnce()
    })
  })
})
