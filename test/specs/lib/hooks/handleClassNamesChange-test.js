import { handleClassNamesChange } from 'src/lib/hooks/useClassNamesOnNode'
import { sandbox } from 'test/utils'

const fooRef = { current: 'foo' }
const barRef = { current: 'bar' }

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
    nodes.forEach((node) => handleClassNamesChange(node, new Set()))
  })

  it('adds new classes to node', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()

    const refs = new Set([fooRef, barRef])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, refs)
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()
  })

  it('removes nonexistent classes', () => {
    const add = sandbox.spy()
    const remove = sandbox.spy()

    const refs = new Set([fooRef, barRef])
    const node = createNodeMock(add, remove)

    handleClassNamesChange(node, refs)
    add.should.have.been.calledTwice()
    add.should.have.been.calledWith('foo')
    add.should.have.been.calledWith('bar')
    remove.should.have.not.been.called()

    node.reset()
    refs.delete(barRef)

    handleClassNamesChange(node, refs)
    add.should.have.not.been.called()
    remove.should.have.been.calledOnce()
    remove.should.have.been.calledWith('bar')
  })

  it('handles different nodes', () => {
    const fooAdd = sandbox.spy()
    const fooRemove = sandbox.spy()
    const fooNode = createNodeMock(fooAdd, fooRemove)
    const fooRefs = new Set([fooRef])

    const barAdd = sandbox.spy()
    const barRemove = sandbox.spy()
    const barNode = createNodeMock(barAdd, barRemove)
    const barRefs = new Set([barRef])

    handleClassNamesChange(fooNode, fooRefs)
    barAdd.should.have.not.been.called()
    barRemove.should.have.not.been.called()
    fooNode.reset()

    handleClassNamesChange(barNode, barRefs)
    fooAdd.should.have.not.been.called()
    fooRemove.should.have.not.been.called()
  })
})
