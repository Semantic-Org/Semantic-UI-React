import EventTarget from 'src/lib/eventStack/EventTarget'
import { domEvent, sandbox } from 'test/utils'

describe('EventTarget', () => {
  let eventTarget

  beforeEach(() => {
    eventTarget = new EventTarget(document)
  })

  afterEach(() => {
    eventTarget = null
  })

  describe('empty', () => {
    it('is true by default', () => {
      eventTarget.empty()
        .should.equal(true)
    })

    it('is false when has handlers', () => {
      eventTarget.sub('click', () => {})
      eventTarget.empty()
        .should.equal(false)
    })

    it('is true when handlers are removed', () => {
      const handler = () => {}

      eventTarget.sub('click', handler)
      eventTarget.unsub('click', handler)
      eventTarget.empty()
        .should.equal(true)
    })
  })

  describe('sub', () => {
    it('adds a single', () => {
      const first = sandbox.spy()

      eventTarget.sub('click', first)
      domEvent.click(document)

      first.should.have.been.calledOnce()
    })

    it('adds multiple', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second)
      domEvent.click(document)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('adds multiple with array', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('adds only unique', () => {
      const first = sandbox.spy()

      eventTarget.sub('click', [first, first])
      eventTarget.sub('click', [first, first])

      domEvent.click(document)
      first.should.have.been.calledOnce()
    })

    it('handles multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('fires only last handler in non-default pool', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', first, 'another')
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      first.should.not.have.been.called()
      second.should.have.been.calledOnce()
    })
  })

  describe('unsub', () => {
    it('handles unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      eventTarget.unsub('click', second)
      domEvent.click(document)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })

    it('handles multiple unsubscribe', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', [first, second])
      domEvent.click(document)

      eventTarget.unsub('click', [first, second])
      domEvent.click(document)

      first.should.have.been.calledOnce()
      second.should.have.been.calledOnce()
    })

    it('handles unsubscribe with multiple pools', () => {
      const first = sandbox.spy()
      const second = sandbox.spy()

      eventTarget.sub('click', first)
      eventTarget.sub('click', second, 'another')
      domEvent.click(document)

      eventTarget.unsub('click', second, 'another')
      domEvent.click(document)

      first.should.have.been.calledTwice()
      second.should.have.been.calledOnce()
    })
  })
})
