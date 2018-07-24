import handleClassNamesChange from 'src/addons/MountNode/lib/handleClassNamesChange'

const FooComponent = { props: { className: 'foo' } }
const BarComponent = { props: { className: 'bar' } }

const nodes = new Set()
const createNodeMock = (add, remove) => {
  const node = {
    classList: { add, remove },
    reset: () => jest.resetAllMocks(),
  }
  nodes.add(node)

  return node
}

describe('handleClassNamesChange', () => {
  afterEach(() => {
    nodes.forEach(node => handleClassNamesChange(node, new Set()))
  })

  it('adds new classes to node', () => {
    const add = jest.fn()
    const remove = jest.fn()
    const components = new Set([FooComponent, BarComponent])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, components)
    expect(add).toHaveBeenCalledTimes(2)
    expect(add).toHaveBeenCalledWith('foo')
    expect(add).toHaveBeenCalledWith('bar')
    expect(remove).not.toHaveBeenCalled()
  })

  it('removes nonexistent classes', () => {
    const add = jest.fn()
    const remove = jest.fn()
    const components = new Set([FooComponent, BarComponent])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, components)
    expect(add).toHaveBeenCalledTimes(2)
    expect(add).toHaveBeenCalledWith('foo')
    expect(add).toHaveBeenCalledWith('bar')
    expect(remove).not.toHaveBeenCalled()
    node.reset()

    components.delete(BarComponent)
    handleClassNamesChange(node, components)
    expect(add).not.toHaveBeenCalled()
    expect(remove).toHaveBeenCalledTimes(1)
    expect(remove).toHaveBeenCalledWith('bar')
  })

  it('handles different nodes', () => {
    const fooAdd = jest.fn()
    const fooRemove = jest.fn()
    const fooComponents = new Set([FooComponent])
    const fooNode = createNodeMock(fooAdd, fooRemove)

    const barAdd = jest.fn()
    const barRemove = jest.fn()
    const barComponents = new Set([BarComponent])
    const barNode = createNodeMock(barAdd, barRemove)

    handleClassNamesChange(fooNode, fooComponents)
    expect(barAdd).not.toHaveBeenCalled()
    expect(barRemove).not.toHaveBeenCalled()
    fooNode.reset()

    handleClassNamesChange(barNode, barComponents)
    expect(fooAdd).not.toHaveBeenCalled()
    expect(fooRemove).not.toHaveBeenCalled()
  })
})
