import EventStack from 'src/lib/eventStack/EventStack'
import isBrowser from 'src/lib/isBrowser'
import { domEvent } from 'test/utils'

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
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      expect(handler).not.toHaveBeenCalled()
    })

    it('does not unsubscribes', () => {
      const handler = jest.fn()

      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).not.toHaveBeenCalled()
    })
  })

  describe('sub', () => {
    it('subscribes for single target', () => {
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('subscribes for custom target', () => {
      const handler = jest.fn()
      const target = document.createElement('div')

      eventStack.sub('click', handler, { target })
      domEvent.click(target)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('subscribes for multiple targets', () => {
      const documentHandler = jest.fn()
      const windowHandler = jest.fn()

      eventStack.sub('click', documentHandler)
      eventStack.sub('scroll', windowHandler, { target: window })
      domEvent.click(document)
      domEvent.scroll(window)

      expect(documentHandler).toHaveBeenCalledTimes(1)
      expect(windowHandler).toHaveBeenCalledTimes(1)
    })
  })

  describe('unsub', () => {
    it('unsubscribes from unexisting target', () => {
      eventStack.unsub('click', () => {}, { target: document.body })
      domEvent.click(document)
    })

    it('unsubscribes and destroys eventTarget if it is empty', () => {
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it('unsubscribes but leaves eventTarget if it contains handlers', () => {
      const clickHandler = jest.fn()
      const keyHandler = jest.fn()

      eventStack.sub('click', clickHandler)
      eventStack.sub('keyDown', keyHandler)
      domEvent.click(document)

      eventStack.unsub('click', clickHandler)
      domEvent.click(document)

      expect(clickHandler).toHaveBeenCalledTimes(1)
      expect(keyHandler).not.toHaveBeenCalled()
    })

    it('unsubscribes from same event multiple times', () => {
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      eventStack.unsub('click', handler)
      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).toHaveBeenCalledTimes(1)
    })
  })
})
