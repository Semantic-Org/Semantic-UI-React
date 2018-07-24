import doesNodeContainClick from 'src/lib/doesNodeContainClick'

const makeEvent = event => ({ clientX: 0, clientY: 0, ...event })

const makeRect = rect => ({ top: 0, bottom: 1, left: 0, right: 1, ...rect })

const makeNode = (rect, node) => ({
  contains: jest.fn(),
  offsetWidth: 1,
  offsetHeight: 1,
  getClientRects: jest.fn(() => ({ length: 1, 0: makeRect(rect) })),
  ...node,
})

describe('doesNodeContainClick', () => {
  describe('nil arguments', () => {
    it('returns false if the node is nil', () => {
      expect(doesNodeContainClick(null, makeEvent())).toBe(false)
      expect(doesNodeContainClick(undefined, makeEvent())).toBe(false)
    })

    it('returns false if the event is nil', () => {
      expect(doesNodeContainClick(makeNode(), null)).toBe(false)
      expect(doesNodeContainClick(makeNode(), undefined)).toBe(false)
    })
  })

  describe('e.target', () => {
    it('returns node.contains(e.target) if exists', () => {
      const node = makeNode()
      const target = document.createElement('div')
      document.body.appendChild(target)
      const event = makeEvent({ target })

      expect(node.contains).not.toHaveBeenCalled()

      doesNodeContainClick(node, event)

      expect(node.contains).toHaveBeenCalledTimes(1)
      expect(node.contains).toHaveBeenCalledWith(event.target)
      document.body.removeChild(target)
    })

    it("does not call node.contains(e.target) if doesn't exist", () => {
      const node = makeNode()
      const target = null
      const event = makeEvent({ target })

      expect(node.contains).not.toHaveBeenCalled()

      doesNodeContainClick(node, event)

      expect(node.contains).not.toHaveBeenCalled()
    })
  })

  describe('nil event properties', () => {
    it('returns false if the e.clientX is nil', () => {
      expect(doesNodeContainClick(makeNode(), { clientX: null })).toBe(false)
      expect(doesNodeContainClick(makeNode(), { clientX: undefined })).toBe(false)
    })

    it('returns false if the e.clientY is nil', () => {
      expect(doesNodeContainClick(makeNode(), { clientY: null })).toBe(false)
      expect(doesNodeContainClick(makeNode(), { clientY: undefined })).toBe(false)
    })

    it('does not call node.getClientRects if e.clientX is nil', () => {
      const node = makeNode()
      doesNodeContainClick(node, { clientX: null })
      doesNodeContainClick(node, { clientX: undefined })

      expect(node.getClientRects).not.toHaveBeenCalled()
    })

    it('does not call node.getClientRects if e.clientY is nil', () => {
      const node = makeNode()
      doesNodeContainClick(node, { clientY: null })
      doesNodeContainClick(node, { clientY: undefined })

      expect(node.getClientRects).not.toHaveBeenCalled()
    })
  })

  describe('invisible node', () => {
    it('returns false if there is no node.offsetWidth', () => {
      const e = makeEvent()

      expect(doesNodeContainClick(makeNode(null, { offsetWidth: 0 }), e)).toBe(false)
      expect(doesNodeContainClick(makeNode(null, { offsetWidth: null }), e)).toBe(false)
      expect(doesNodeContainClick(makeNode(null, { offsetWidth: undefined }), e)).toBe(false)
    })
    it('returns false if there is no node.offsetHeight', () => {
      const e = makeEvent()

      expect(doesNodeContainClick(makeNode(null, { offsetHeight: 0 }), e)).toBe(false)
      expect(doesNodeContainClick(makeNode(null, { offsetHeight: null }), e)).toBe(false)
      expect(doesNodeContainClick(makeNode(null, { offsetHeight: undefined }), e)).toBe(false)
    })
    it('returns false if there is node.getClientRects is empty', () => {
      const e = makeEvent()

      expect(doesNodeContainClick(makeNode(null, { getClientRects: () => [] }), e)).toBe(false)
      expect(
        doesNodeContainClick(makeNode(null, { getClientRects: () => ({ length: 0 }) }), e),
      ).toBe(false)
      expect(
        doesNodeContainClick(makeNode(null, { getClientRects: () => ({ length: null }) }), e),
      ).toBe(false)
      expect(
        doesNodeContainClick(makeNode(null, { getClientRects: () => ({ length: undefined }) }), e),
      ).toBe(false)
    })
  })

  describe('nil node rect properties', () => {
    it('returns false if the node top is nil', () => {
      const nullNode = makeNode({ top: null })
      const undefNode = makeNode({ top: undefined })

      expect(doesNodeContainClick(nullNode, makeEvent())).toBe(false)
      expect(doesNodeContainClick(undefNode, makeEvent())).toBe(false)
    })

    it('returns false if the node bottom is nil', () => {
      const nullNode = makeNode({ bottom: null })
      const undefNode = makeNode({ bottom: undefined })

      expect(doesNodeContainClick(nullNode, makeEvent())).toBe(false)
      expect(doesNodeContainClick(undefNode, makeEvent())).toBe(false)
    })

    it('returns false if the node left is nil', () => {
      const nullNode = makeNode({ left: null })
      const undefNode = makeNode({ left: undefined })

      expect(doesNodeContainClick(nullNode, makeEvent())).toBe(false)
      expect(doesNodeContainClick(undefNode, makeEvent())).toBe(false)
    })

    it('returns false if the node right is nil', () => {
      const nullNode = makeNode({ right: null })
      const undefNode = makeNode({ right: undefined })

      expect(doesNodeContainClick(nullNode, makeEvent())).toBe(false)
      expect(doesNodeContainClick(undefNode, makeEvent())).toBe(false)
    })
  })

  describe('click outside node rect', () => {
    it('returns false if clientY < node top', () => {
      expect(doesNodeContainClick(makeNode({ top: 1 }), makeEvent({ clientY: 0 }))).toBe(false)
    })
    it('returns false if clientY > node bottom', () => {
      expect(doesNodeContainClick(makeNode({ bottom: 0 }), makeEvent({ clientY: 1 }))).toBe(false)
    })
    it('returns false if clientX < node left', () => {
      expect(doesNodeContainClick(makeNode({ left: 1 }), makeEvent({ clientX: 0 }))).toBe(false)
    })
    it('returns false if clientX > node right', () => {
      expect(doesNodeContainClick(makeNode({ right: 0 }), makeEvent({ clientX: 1 }))).toBe(false)
    })
  })

  describe('click inside of node rect', () => {
    it('returns true if clientY > node top && clientY < node bottom', () => {
      expect(doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 2 }))).toBe(
        true,
      )
    })
    it('returns true if clientX > node left && clientX < node right', () => {
      expect(doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 2 }))).toBe(
        true,
      )
    })
  })

  describe('click on node rect boundary', () => {
    it('returns true if clientY === node top', () => {
      expect(doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 1 }))).toBe(
        true,
      )
    })
    it('returns true if clientY === node bottom', () => {
      expect(doesNodeContainClick(makeNode({ top: 1, bottom: 3 }), makeEvent({ clientY: 3 }))).toBe(
        true,
      )
    })
    it('returns true if clientX === node left', () => {
      expect(doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 1 }))).toBe(
        true,
      )
    })
    it('returns true if clientX === node right', () => {
      expect(doesNodeContainClick(makeNode({ left: 1, right: 3 }), makeEvent({ clientX: 3 }))).toBe(
        true,
      )
    })
  })

  describe('decimal event and node rect values', () => {
    it('returns true when click is inside node rect', () => {
      const node = makeNode({ top: 0.1, bottom: 0.9, left: 0.1, right: 0.9 })
      const event = makeEvent({ clientX: 0.5, clientY: 0.5 })

      expect(doesNodeContainClick(node, event)).toBe(true)
    })

    it('returns false when click is outside node rect', () => {
      const node = makeNode({ top: 0.1, bottom: 0.9, left: 0.1, right: 0.9 })
      const event = makeEvent({ clientX: 1.1, clientY: 1.1 })

      expect(doesNodeContainClick(node, event)).toBe(false)
    })
  })
})
