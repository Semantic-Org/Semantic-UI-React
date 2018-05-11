import handleClassNamesChange from 'src/addons/MountNode/lib/handleClassNamesChange'
import { sandbox } from 'test/utils'

const FooComponent = { props: { className: 'foo' } }
const BarComponent = { props: { className: 'bar' } }

const nodes = new Set()
const createNodeMock = (add, remove) => {
  const node = {
    classList: { add, remove },
    reset: () => {
      add.reset()
      remove.reset()
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
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()
  })

  it('removes nonexistent classes', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()
    const components = new Set([FooComponent, BarComponent])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, components)
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()
    node.reset()

    components.delete(BarComponent)
    handleClassNamesChange(node, components)
    add.should.have.not.been.called()
    remove.should.have.been.calledOnce()
    remove.should.have.been.calledWith('bar')
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
    barAdd.should.have.not.been.called()
    barRemove.should.have.not.been.called()
    fooNode.reset()

    handleClassNamesChange(barNode, barComponents)
    fooAdd.should.have.not.been.called()
    fooRemove.should.have.not.been.called()
  })
})
