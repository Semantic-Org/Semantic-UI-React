import { NodeRegistry } from 'src/lib/hooks/useClassNamesOnNode'
import { sandbox } from 'test/utils'

describe('NodeRegistry', () => {
  it('is a class', () => {
    expect(NodeRegistry).to.be.a('function')
  })

  describe('add', () => {
    it('adds different components to same node', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')

      registry.emit('foo', handler)
      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('foo', new Set(['FooComponent', 'BarComponent']))
    })

    it('adds components to different nodes node', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.add('bar', 'BazComponent')
      registry.add('bar', 'QuxComponent')

      registry.emit('foo', handler)
      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('foo', new Set(['FooComponent', 'BarComponent']))
      handler.resetHistory()

      registry.emit('bar', handler)
      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('bar', new Set(['BazComponent', 'QuxComponent']))
    })
  })

  describe('del', () => {
    it('deletes only specified component', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.del('foo', 'FooComponent')

      registry.emit('foo', handler)
      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('foo', new Set(['BarComponent']))
    })

    it('deletes node when all components are deleted', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.del('foo', 'FooComponent')
      registry.del('foo', 'BarComponent')

      registry.emit('foo', handler)
      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('foo', undefined)
    })

    it('passes when unexisting nodeRef is passed', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.del('foo', 'FooComponent')
      registry.emit('foo', handler)

      handler.should.have.been.calledOnce()
      handler.should.have.been.calledWithMatch('foo', undefined)
    })
  })
})
