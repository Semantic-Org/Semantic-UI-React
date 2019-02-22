import getNodeRefFromProps from 'src/addons/MountNode/lib/getNodeRefFromProps'
import isBrowser from 'src/lib/isBrowser'

describe('getNodeRefFromProps', () => {
  describe('browser', () => {
    it('returns a ref to node when it defined', () => {
      const node = document.createElement('div')
      const nodeRef = getNodeRefFromProps({ node })

      nodeRef.should.have.property('current', node)
    })

    it('returns node when it defined as React.Ref object', () => {
      const inputRef = { current: document.createElement('div') }
      const outputRef = getNodeRefFromProps({ node: inputRef })

      outputRef.should.equal(inputRef)
    })

    it('returns document.body by default', () => {
      getNodeRefFromProps({}).should.have.property('current', document.body)
    })
  })

  describe('browser', () => {
    before(() => {
      isBrowser.override = false
    })

    after(() => {
      isBrowser.override = null
    })

    it('always returns null', () => {
      expect(getNodeRefFromProps({ node: 'foo' })).to.be.a('undefined')
      expect(getNodeRefFromProps({})).to.be.a('undefined')
    })
  })
})
