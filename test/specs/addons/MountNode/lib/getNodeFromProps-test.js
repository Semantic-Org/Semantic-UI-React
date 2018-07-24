import getNodeFromProps from 'src/addons/MountNode/lib/getNodeFromProps'
import isBrowser from 'src/lib/isBrowser'

describe('getNodeFromProps', () => {
  describe('browser', () => {
    it('returns node when it defined', () => {
      expect(getNodeFromProps({ node: 'foo' })).toBe('foo')
    })

    it('returns document.body by default', () => {
      expect(getNodeFromProps({})).toBe(document.body)
    })
  })

  describe('browser', () => {
    beforeAll(() => {
      isBrowser.override = false
    })

    afterAll(() => {
      isBrowser.override = null
    })

    it('always returns null', () => {
      expect(getNodeFromProps({ node: 'foo' })).toBeUndefined()
      expect(getNodeFromProps({})).toBeUndefined()
    })
  })
})
