import EventPool from 'src/lib/eventStack/EventPool'
import { sandbox } from 'test/utils'

describe('EventPool', () => {
  describe('constructor', () => {
    it('adds handlers with constuctor', () => {
      const first = sandbox.spy()
      const pool = new EventPool('default', 'click', [first])

      pool.dispatchEvent('click', null)
      first.should.have.been.calledOnce()
    })
  })

  describe('addHandlers', () => {
    it('adds handlers', () => {
      const handler = sandbox.spy()
      let pool = new EventPool('default', 'click', [])

      pool = pool.addHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      handler.should.have.been.calledOnce()
    })

    it('adds handlers for multiple event types', () => {
      const clickHandler = sandbox.spy()
      const mouseDown = sandbox.spy()

      let pool = new EventPool('default', 'click', [clickHandler])
      pool = pool.addHandlers('mousedown', [mouseDown])

      pool.dispatchEvent('click', null)
      pool.dispatchEvent('mousedown', null)

      clickHandler.should.have.been.calledOnce()
      mouseDown.should.have.been.calledOnce()
    })

    it('always returns a new object', () => {
      const pool = new EventPool('default', 'click', [])
      const anotherPool = pool.addHandlers('click', [])

      anotherPool.should.be.an('object')
      anotherPool.should.be.not.equal(pool)
    })

    it('handler sets are immutable', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      const pool = new EventPool('default', 'click', [handler1])
      const another = pool.addHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      handler1.should.have.been.calledTwice()
      handler2.should.have.been.calledOnce()
    })
  })

  describe('hasHandlers', () => {
    const pool = new EventPool('default', 'click', [() => {}])

    it('returns "true" if has handlers', () => {
      pool.hasHandlers('click').should.have.be.true()
    })

    it('returns "false" if has not handlers', () => {
      pool.hasHandlers('mousedown').should.have.be.false()
    })
  })

  describe('removeHandlers', () => {
    it('removes handlers', () => {
      const handler = sandbox.spy()
      let pool = new EventPool('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('click', [handler])
      pool.dispatchEvent('click', null)

      handler.should.have.been.calledOnce()
    })

    it('removes handlers for non-existent eventType', () => {
      const handler = sandbox.spy()
      let pool = new EventPool('default', 'click', [handler])

      pool.dispatchEvent('click', null)
      pool = pool.removeHandlers('mousedown', [handler])
      pool.dispatchEvent('click', null)

      handler.should.have.been.calledTwice()
    })

    it('always returns a new object', () => {
      const pool = new EventPool('default', 'click', [])
      const another = pool.removeHandlers('click', [])

      another.should.be.an('object')
      another.should.be.not.equal(pool)
    })

    it('handlers are immutable', () => {
      const handler1 = sandbox.spy()
      const handler2 = sandbox.spy()

      const pool = new EventPool('default', 'click', [handler1, handler2])
      const another = pool.removeHandlers('click', [handler2])

      pool.dispatchEvent('click', null)
      another.dispatchEvent('click', null)

      handler1.should.have.been.calledTwice()
      handler2.should.have.been.calledOnce()
    })
  })
})
