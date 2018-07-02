import NodeRegistry from 'src/addons/MountNode/lib/NodeRegistry'
import { sandbox } from 'test/utils'

describe('NodeRegistry', () => {
  it('is a class', () => {
    expect(typeof NodeRegistry).toBe('function')
  })

  describe('add', () => {
    it('adds different components to same node', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')

      registry.emit('foo', handler)
      expect(handler).have.been.calledOnce()
      expect(handler).have.been.calledWithMatch('foo', new Set(['FooComponent', 'BarComponent']))
    })

    it('adds components to different nodes node', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.add('bar', 'BazComponent')
      registry.add('bar', 'QuxComponent')

      registry.emit('foo', handler)
      expect(handler).have.been.calledOnce()
      expect(handler).have.been.calledWithMatch('foo', new Set(['FooComponent', 'BarComponent']))
      handler.resetHistory()

      registry.emit('bar', handler)
      expect(handler).have.been.calledOnce()
      expect(handler).have.been.calledWithMatch('bar', new Set(['BazComponent', 'QuxComponent']))
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
      expect(handler).have.been.calledOnce()
      expect(handler).have.been.calledWithMatch('foo', new Set(['BarComponent']))
    })

    it('deletes node when all components are deleted', () => {
      const handler = sandbox.spy()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.del('foo', 'FooComponent')
      registry.del('foo', 'BarComponent')

      registry.emit('foo', handler)
      expect(handler).have.been.calledOnce()
      expect(handler).have.been.calledWithMatch('foo', undefined)
    })
  })
})
