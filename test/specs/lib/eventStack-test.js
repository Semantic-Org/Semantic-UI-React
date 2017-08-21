import _ from 'lodash'

import { eventStack } from 'src/lib'
import { domEvent, sandbox } from 'test/utils'

describe('eventStack', () => {
  afterEach(() => {
    eventStack._pools = {}
    _.forEach(_.keys(eventStack._handlers), name => eventStack._unlisten(name))
  })

  describe('pub', () => {
    it('adds a single', () => {
      const first = sandbox.spy()

      eventStack.sub('click', first)
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
    })

    it('adds multiple', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', first)
      eventStack.sub('click', second)
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('adds multiple with array', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', [first, second])
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('adds only unique', () => {
      const first = sandbox.spy()

      eventStack.sub('click', [first, first])
      eventStack.sub('click', [first, first])

      domEvent.click(document.body)
      first.should.have.been.calledOnce()
    })

    it('handles multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', first)
      eventStack.sub('click', second, 'another')
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('fires only last handler in non-default pool', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', first, 'another')
      eventStack.sub('click', second, 'another')
      domEvent.click(document.body)

      first.should.not.have.been.called()
      second.should.have.been.calledOnce()
    })
  })

  describe('unsub', () => {
    it('handles unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', [first, second])
      domEvent.click(document.body)

      eventStack.unsub('click', second)
      domEvent.click(document.body)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })

    it('handles multiple unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', [first, second])
      domEvent.click(document.body)

      eventStack.unsub('click', [first, second])
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('handles unsubscribe with multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventStack.sub('click', first)
      eventStack.sub('click', second, 'another')
      domEvent.click(document.body)

      eventStack.unsub('click', second, 'another')
      domEvent.click(document.body)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })
  })
})
