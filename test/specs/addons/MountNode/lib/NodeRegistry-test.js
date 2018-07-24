import NodeRegistry from 'src/addons/MountNode/lib/NodeRegistry'

describe('NodeRegistry', () => {
  it('is a class', () => {
    expect(typeof NodeRegistry).toBe('function')
  })

  describe('add', () => {
    it('adds different components to same node', () => {
      const handler = jest.fn()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')

      registry.emit('foo', handler)
      expect(handler).toHaveBeenCalledTimes(1)
      expect(handler).toHaveBeenCalledWith('foo', new Set(['FooComponent', 'BarComponent']))
    })

    it('adds components to different nodes node', () => {
      const handler = jest.fn()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.add('bar', 'BazComponent')
      registry.add('bar', 'QuxComponent')

      registry.emit('foo', handler)
      expect(handler).toHaveBeenCalledTimes(1)
      expect(handler).toHaveBeenCalledWith('foo', new Set(['FooComponent', 'BarComponent']))
      jest.resetAllMocks()

      registry.emit('bar', handler)
      expect(handler).toHaveBeenCalledTimes(1)
      expect(handler).toHaveBeenCalledWith('bar', new Set(['BazComponent', 'QuxComponent']))
    })
  })

  describe('del', () => {
    it('deletes only specified component', () => {
      const handler = jest.fn()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.del('foo', 'FooComponent')

      registry.emit('foo', handler)
      expect(handler).toHaveBeenCalledTimes(1)
      expect(handler).toHaveBeenCalledWith('foo', new Set(['BarComponent']))
    })

    it('deletes node when all components are deleted', () => {
      const handler = jest.fn()
      const registry = new NodeRegistry()

      registry.add('foo', 'FooComponent')
      registry.add('foo', 'BarComponent')
      registry.del('foo', 'FooComponent')
      registry.del('foo', 'BarComponent')

      registry.emit('foo', handler)
      expect(handler).toHaveBeenCalledTimes(1)
      expect(handler).toHaveBeenCalledWith('foo', undefined)
    })
  })
})
