import _ from 'lodash'

import { eventPool } from 'src/lib'
import { domEvent, sandbox } from 'test/utils'

describe('eventPool', () => {
  afterEach(() => {
    eventPool.pools = {}
    _.forEach(_.keys(eventPool.handlers), name => eventPool.unlisten(name))
  })

  describe('pub', () => {
    it('adds a single', () => {
      const first = sandbox.spy()

      eventPool.sub('click', first)
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
    })

    it('adds multiple', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', first)
      eventPool.sub('click', second)
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('adds multiple with array', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', [first, second])
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('handles multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', first)
      eventPool.sub('click', second, 'another')
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('fires only last handler in non-default pool', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', first, 'another')
      eventPool.sub('click', second, 'another')
      domEvent.click(document.body)

      first.should.not.have.been.called()
      second.should.have.been.calledOnce()
    })
  })

  describe('unsub', () => {
    it('handles unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', [first, second])
      domEvent.click(document.body)

      eventPool.unsub('click', second)
      domEvent.click(document.body)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })

    it('handles multiple unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', [first, second])
      domEvent.click(document.body)

      eventPool.unsub('click', [first, second])
      domEvent.click(document.body)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('handles unsubscribe with multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventPool.sub('click', first)
      eventPool.sub('click', second, 'another')
      domEvent.click(document.body)

      eventPool.unsub('click', second, 'another')
      domEvent.click(document.body)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })
  })
})
