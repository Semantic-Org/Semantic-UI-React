import { doesNodeContainClick } from 'src/lib'
import { sandbox } from '../../utils'

const makeEvent = (event) => ({ clientX: 0, clientY: 0, ...event })

const makeRect = (rect) => ({ top: 0, bottom: 1, left: 0, right: 1, ...rect })

const makeNode = (rect, node) => ({
  contains: sandbox.spy(),
  offsetWidth: 1,
  offsetHeight: 1,
  getClientRects: sandbox.spy(() => ({ length: 1, 0: makeRect(rect) })),
  ...node,
})

describe('doesNodeContainClick', () => {
  describe('nil arguments', () => {
    it('returns false if the node is nil', () => {
      doesNodeContainClick(null, makeEvent()).should.equal(false)
      doesNodeContainClick(undefined, makeEvent()).should.equal(false)
    })

    it('returns false if the event is nil', () => {
      doesNodeContainClick(makeNode(), null).should.equal(false)
      doesNodeContainClick(makeNode(), undefined).should.equal(false)
    })
  })

  describe('e.target', () => {
    it('returns node.contains(e.target) if exists', () => {
      const node = makeNode()
      const target = document.createElement('div')
      document.body.appendChild(target)
      const event = makeEvent({ target })

      node.contains.should.not.have.been.called()

      doesNodeContainClick(node, event)

      node.contains.should.have.been.calledOnce()
      node.contains.should.have.been.calledWithExactly(event.target)
      document.body.removeChild(target)
    })

    it("does not call node.contains(e.target) if doesn't exist", () => {
      const node = makeNode()
      const target = null
      const event = makeEvent({ target })

      node.contains.should.not.have.been.called()

      doesNodeContainClick(node, event)

      node.contains.should.not.have.been.called()
    })
  })

  describe('nil event properties', () => {
    it('returns false if the e.clientX is nil', () => {
      doesNodeContainClick(makeNode(), { clientX: null }).should.equal(false)
      doesNodeContainClick(makeNode(), { clientX: undefined }).should.equal(false)
    })

    it('returns false if the e.clientY is nil', () => {
      doesNodeContainClick(makeNode(), { clientY: null }).should.equal(false)
      doesNodeContainClick(makeNode(), { clientY: undefined }).should.equal(false)
    })

    it('does not call node.getClientRects if e.clientX is nil', () => {
      const node = makeNode()
      doesNodeContainClick(node, { clientX: null })
      doesNodeContainClick(node, { clientX: undefined })

      node.getClientRects.should.not.have.been.called()
    })

    it('does not call node.getClientRects if e.clientY is nil', () => {
      const node = makeNode()
      doesNodeContainClick(node, { clientY: null })
      doesNodeContainClick(node, { clientY: undefined })

      node.getClientRects.should.not.have.been.called()
    })
  })

  describe('invisible node', () => {
    it('returns false if there is no node.offsetWidth', () => {
      const e = makeEvent()

      doesNodeContainClick(makeNode(null, { offsetWidth: 0 }), e).should.equal(false)
      doesNodeContainClick(makeNode(null, { offsetWidth: null }), e).should.equal(false)
      doesNodeContainClick(makeNode(null, { offsetWidth: undefined }), e).should.equal(false)
    })
    it('returns false if there is no node.offsetHeight', () => {
      const e = makeEvent()

      doesNodeContainClick(makeNode(null, { offsetHeight: 0 }), e).should.equal(false)
      doesNodeContainClick(makeNode(null, { offsetHeight: null }), e).should.equal(false)
      doesNodeContainClick(makeNode(null, { offsetHeight: undefined }), e).should.equal(false)
    })
    it('returns false if there is node.getClientRects is empty', () => {
      const e = makeEvent()

      doesNodeContainClick(makeNode(null, { getClientRects: () => [] }), e).should.equal(false)
      doesNodeContainClick(
        makeNode(null, { getClientRects: () => ({ length: 0 }) }),
        e,
      ).should.equal(false)
      doesNodeContainClick(
        makeNode(null, { getClientRects: () => ({ length: null }) }),
        e,
      ).should.equal(false)
      doesNodeContainClick(
        makeNode(null, { getClientRects: () => ({ length: undefined }) }),
        e,
      ).should.equal(false)
    })
  })

  describe('nil node rect properties', () => {
    it('returns false if the node top is nil', () => {
      const nullNode = makeNode({ top: null })
      const undefNode = makeNode({ top: undefined })

      doesNodeContainClick(nullNode, makeEvent()).should.equal(false)
      doesNodeContainClick(undefNode, makeEvent()).should.equal(false)
    })

    it('returns false if the node bottom is nil', () => {
      const nullNode = makeNode({ bottom: null })
      const undefNode = makeNode({ bottom: undefined })

      doesNodeContainClick(nullNode, makeEvent()).should.equal(false)
      doesNodeContainClick(undefNode, makeEvent()).should.equal(false)
    })

    it('returns false if the node left is nil', () => {
      const nullNode = makeNode({ left: null })
      const undefNode = makeNode({ left: undefined })

      doesNodeContainClick(nullNode, makeEvent()).should.equal(false)
      doesNodeContainClick(undefNode, makeEvent()).should.equal(false)
    })

    it('returns false if the node right is nil', () => {
      const nullNode = makeNode({ right: null })
      const undefNode = makeNode({ right: undefined })

      doesNodeContainClick(nullNode, makeEvent()).should.equal(false)
      doesNodeContainClick(undefNode, makeEvent()).should.equal(false)
    })
  })

  describe('click outside node rect', () => {
    it('returns false if clientY < node top', () => {
      doesNodeContainClick(makeNode({ top: 1 }), makeEvent({ clientY: 0 })).should.equal(false)
    })
    it('returns false if clientY > node bottom', () => {
      doesNodeContainClick(makeNode({ bottom: 0 }), makeEvent({ clientY: 1 })).should.equal(false)
    })
    it('returns false if clientX < node left', () => {
      doesNodeContainClick(makeNode({ left: 1 }), makeEvent({ clientX: 0 })).should.equal(false)
    })
    it('returns false if clientX > node right', () => {
      doesNodeContainClick(makeNode({ right: 0 }), makeEvent({ clientX: 1 })).should.equal(false)
    })
  })

  describe('click inside of node rect', () => {
    it('returns true if clientY > node top && clientY < node bottom', () => {
      doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 2 })).should.equal(
        true,
      )
    })
    it('returns true if clientX > node left && clientX < node right', () => {
      doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 2 })).should.equal(
        true,
      )
    })
  })

  describe('click on node rect boundary', () => {
    it('returns true if clientY === node top', () => {
      doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 1 })).should.equal(
        true,
      )
    })
    it('returns true if clientY === node bottom', () => {
      doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 3 })).should.equal(
        true,
      )
    })
    it('returns true if clientX === node left', () => {
      doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 1 })).should.equal(
        true,
      )
    })
    it('returns true if clientX === node right', () => {
      doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 3 })).should.equal(
        true,
      )
    })
  })

  describe('decimal event and node rect values', () => {
    it('returns true when click is inside node rect', () => {
      const node = makeNode({ top: 0.1, bottom: 0.9, left: 0.1, right: 0.9 })
      const event = makeEvent({ clientX: 0.5, clientY: 0.5 })

      doesNodeContainClick(node, event).should.equal(true)
    })

    it('returns false when click is outside node rect', () => {
      const node = makeNode({ top: 0.1, bottom: 0.9, left: 0.1, right: 0.9 })
      const event = makeEvent({ clientX: 1.1, clientY: 1.1 })

      doesNodeContainClick(node, event).should.equal(false)
    })
  })
})
