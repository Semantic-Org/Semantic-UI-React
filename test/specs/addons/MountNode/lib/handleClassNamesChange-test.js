import handleClassNamesChange from 'src/addons/MountNode/lib/handleClassNamesChange'
import { sandbox } from 'test/utils'

const FooComponent = { props: { className: 'foo' } }
const BarComponent = { props: { className: 'bar' } }

const nodes = new Set()
const createNodeMock = (add, remove) => {
  const node = {
    classList: { add, remove },
    reset: () => {
      add.resetHistory()
      remove.resetHistory()
    },
  }
  nodes.add(node)

  return node
}

describe('handleClassNamesChange', () => {
  afterEach(() => {
    nodes.forEach(node => handleClassNamesChange(node, new Set()))
  })

  it('adds new classes to node', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()
    const components = new Set([FooComponent, BarComponent])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, components)
    expect(add).have.been.calledTwice()
    expect(add).have.been.calledWith('foo')
    expect(add).have.been.calledWith('bar')
    expect(remove).have.not.been.called()
  })

  it('removes nonexistent classes', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()
    const components = new Set([FooComponent, BarComponent])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, components)
    expect(add).have.been.calledTwice()
    expect(add).have.been.calledWith('foo')
    expect(add).have.been.calledWith('bar')
    expect(remove).have.not.been.called()
    node.reset()

    components.delete(BarComponent)
    handleClassNamesChange(node, components)
    expect(add).have.not.been.called()
    expect(remove).have.been.calledOnce()
    expect(remove).have.been.calledWith('bar')
  })

  it('handles different nodes', () => {
    const fooAdd = sandbox.spy()
    const fooRemove = sandbox.spy()
    const fooComponents = new Set([FooComponent])
    const fooNode = createNodeMock(fooAdd, fooRemove)

    const barAdd = sandbox.spy()
    const barRemove = sandbox.spy()
    const barComponents = new Set([BarComponent])
    const barNode = createNodeMock(barAdd, barRemove)

    handleClassNamesChange(fooNode, fooComponents)
    expect(barAdd).have.not.been.called()
    expect(barRemove).have.not.been.called()
    fooNode.reset()

    handleClassNamesChange(barNode, barComponents)
    expect(fooAdd).have.not.been.called()
    expect(fooRemove).have.not.been.called()
  })
})
