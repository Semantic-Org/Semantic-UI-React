import { eventStack } from 'src/lib'
import { domEvent } from 'test/utils'

describe('eventStack', () => {
  afterEach(() => {
    eventStack._targets = new Map()
  })

  describe('sub', () => {
    test('subscribes for single target', () => {
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    test('subscribes for custom target', () => {
      const handler = jest.fn()
      const target = document.createElement('div')

      eventStack.sub('click', handler, { target })
      domEvent.click(target)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    test('subscribes for multiple targets', () => {
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
    test('unsubscribes and destroys eventTarget if it is empty', () => {
      const handler = jest.fn()

      eventStack.sub('click', handler)
      domEvent.click(document)

      eventStack.unsub('click', handler)
      domEvent.click(document)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    test('unsubscribes but leaves eventTarget if it contains handlers', () => {
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

    test('unsubscribes from same event multiple times', () => {
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
