import _ from 'lodash'

import { objectDiff } from 'src/lib'

describe('objectDiff', () => {
  let a
  let b
  beforeEach(() => {
    ;[a, b] = _.times(2, () => ({
      undef: undefined,
      nil: null,
      bool: true,
      num: 1,
      str: 'foo',
      obj: { key: 'val', nested: { key: 'val' } },
      func: _.noop,
    }))
  })

  const assertDiff = (diff) => objectDiff(a, b).should.deep.equal(diff)

  it('picks up undefined values', () => {
    b.nil = undefined
    assertDiff({ nil: undefined })
  })
  it('picks up null values', () => {
    b.undef = null
    assertDiff({ undef: null })
  })
  it('picks up boolean values', () => {
    b.undef = true
    assertDiff({ undef: true })

    b.undef = false
    assertDiff({ undef: false })
  })
  it('picks up number values', () => {
    b.undef = 0
    assertDiff({ undef: 0 })

    b.undef = 1
    assertDiff({ undef: 1 })
  })
  it('picks up string values', () => {
    b.undef = 'string'
    assertDiff({ undef: 'string' })
  })
  it('picks up object values', () => {
    b.obj.key = 'new value'
    assertDiff({ obj: b.obj })
  })
  it('picks up nested object values', () => {
    b.obj.nested.key = 'new nested value'
    assertDiff({ obj: b.obj })
  })
  it('shows deleted keys', () => {
    delete b.undef
    assertDiff({ undef: '[DELETED]' })
  })
})
