import handleClassNamesChange from 'src/addons/MountNode/lib/handleClassNamesChange'
import { sandbox } from 'test/utils'

const FooComponent = { props: { className: 'foo' } }
const BarComponent = { props: { className: 'bar' } }

const nodes = new Set()
const createNodeRefMock = (add, remove) => {
  const nodeRef = {
    current: {
      classList: { add, remove },
    },
    reset: () => {
      add.resetHistory()
      remove.resetHistory()
    },
  }
  nodes.add(nodeRef)

  return nodeRef
}

describe('handleClassNamesChange', () => {
  afterEach(() => {
    nodes.forEach((node) => handleClassNamesChange(node, new Set()))
  })

  it('adds new classes to node', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()
    const components = new Set([FooComponent, BarComponent])
    const nodeRef = createNodeRefMock(add, remove)

    handleClassNamesChange(nodeRef, components)
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()
  })

  it('removes nonexistent classes', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()
    const components = new Set([FooComponent, BarComponent])
    const nodeRef = createNodeRefMock(add, remove)

    handleClassNamesChange(nodeRef, components)
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()
    nodeRef.reset()

    components.delete(BarComponent)
    handleClassNamesChange(nodeRef, components)
    add.should.have.not.been.called()
    remove.should.have.been.calledOnce()
    remove.should.have.been.calledWith('bar')
  })

  it('handles different nodes', () => {
    const fooAdd = sandbox.spy()
    const fooRemove = sandbox.spy()
    const fooComponents = new Set([FooComponent])
    const fooNodeRef = createNodeRefMock(fooAdd, fooRemove)

    const barAdd = sandbox.spy()
    const barRemove = sandbox.spy()
    const barComponents = new Set([BarComponent])
    const barNodeRef = createNodeRefMock(barAdd, barRemove)

    handleClassNamesChange(fooNodeRef, fooComponents)
    barAdd.should.have.not.been.called()
    barRemove.should.have.not.been.called()
    fooNodeRef.reset()

    handleClassNamesChange(barNodeRef, barComponents)
    fooAdd.should.have.not.been.called()
    fooRemove.should.have.not.been.called()
  })
})
