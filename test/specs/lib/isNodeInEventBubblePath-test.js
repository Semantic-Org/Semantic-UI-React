import isNodeInEventBubblePath from 'src/lib/isNodeInEventBubblePath'

describe('isNodeInEventBubblePath', () => {
  let div1
  let div2
  let div3
  const clickEvent = new Event('click', {
    bubbles: true,
  })

  before(() => {
    div1 = document.createElement('div')
    div2 = document.createElement('div')
    div3 = document.createElement('div')
    div2.appendChild(div3)
    div1.appendChild(div2)
    document.body.appendChild(div1)
  })

  after(() => {
    document.body.removeChild(div1)
    div3 = null
    div2 = null
    div1 = null
  })

  it('should return true if node is exist in the event bubble path', () => {
    const handler = (e) => {
      isNodeInEventBubblePath(div2, e).should.be.true()
      isNodeInEventBubblePath(div1, e).should.be.true()
      isNodeInEventBubblePath(document.body, e).should.be.true()
    }

    div3.addEventListener('click', handler)

    div3.dispatchEvent(clickEvent)
    div3.removeEventListener('click', handler)
  })

  it('should return false if node is not exist in the event bubble path', () => {
    const handler = (e) => {
      isNodeInEventBubblePath(div3, e).should.be.false()
      isNodeInEventBubblePath(div2, e).should.be.false()
      isNodeInEventBubblePath(div1, e).should.be.true()
      isNodeInEventBubblePath(document.body, e).should.be.true()
    }
    div1.addEventListener('click', handler)

    div1.dispatchEvent(clickEvent)
    div1.removeEventListener('click', handler)
  })

  it('should use event.composedPath when event.path is undefined', () => {
    const handler = (e) => {
      Object.defineProperty(e, 'path', {
        get: () => undefined,
      })
      isNodeInEventBubblePath(div3, e).should.be.false()
      isNodeInEventBubblePath(div2, e).should.be.false()
      isNodeInEventBubblePath(div1, e).should.be.true()
      isNodeInEventBubblePath(document.body, e).should.be.true()
    }

    div1.addEventListener('click', handler)
    div1.dispatchEvent(clickEvent)
    div1.removeEventListener('click', handler)
  })
})
