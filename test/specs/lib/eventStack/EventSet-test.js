import EventSet from 'src/lib/eventStack/EventSet'
import { sandbox } from 'test/utils'

describe('EventSet', () => {
  let set

  beforeEach(() => {
    set = new EventSet([])
  })

  describe('addHandlers', () => {
    it('adds a single handler', () => {
      const handler = sandbox.spy()

      set = set.addHandlers([handler])
      set.dispatchEvent(null, true)

      handler.should.have.been.calledOnce()
    })

    it('adds multiple handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      handler1.should.have.been.calledOnce()
      handler2.should.have.been.calledOnce()
    })

    it('adds only unique handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler1, handler2, handler2])
      set.dispatchEvent(null, true)

      handler1.should.have.been.calledOnce()
      handler2.should.have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const another = set.addHandlers([])

      another.should.be.an('object')
      another.should.be.not.equal(set)
    })
  })

  describe('dispatchEvent', () => {
    it('dispatches an event to all handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      handler1.should.have.been.calledOnce()
      handler2.should.have.been.calledOnce()
    })

    it('dispatches an event to only recent event', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2, handler1])
      set.dispatchEvent(null, false)

      handler1.should.have.been.calledOnce()
      handler2.should.have.not.been.called()
    })
  })

  describe('hasHandlers', () => {
    it('returns "false" when is empty', () => {
      set.hasHandlers().should.be.false()
    })

    it('returns "false" when is empty', () => {
      set
        .addHandlers([() => {}])
        .hasHandlers()
        .should.be.true()
    })
  })

  describe('removeHandlers', () => {
    it('remove a single handler', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler2])
      set.dispatchEvent(null, true)

      handler1.should.have.been.calledTwice()
      handler2.should.have.been.calledOnce()
    })

    it('removes multiple handlers', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      set = set.addHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      set = set.removeHandlers([handler1, handler2])
      set.dispatchEvent(null, true)

      handler1.should.have.been.calledOnce()
      handler2.should.have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const another = set.removeHandlers([])

      another.should.be.an('object')
      another.should.be.not.equal(set)
    })
  })
})
