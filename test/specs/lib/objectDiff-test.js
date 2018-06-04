import _ from 'lodash'

import { objectDiff } from 'src/lib'

describe('objectDiff', () => {
  let a
  let b
  beforeEach(() => {
    [a, b] = _.times(2, () => ({
      undef: undefined,
      nil: null,
      bool: true,
      num: 1,
      str: 'foo',
      obj: { key: 'val', nested: { key: 'val' } },
      func: _.noop,
    }))
  })

  const assertDiff = diff => expect(objectDiff(a, b)).toEqual(diff)

  test('picks up undefined values', () => {
    b.nil = undefined
    assertDiff({ nil: undefined })
  })
  test('picks up null values', () => {
    b.undef = null
    assertDiff({ undef: null })
  })
  test('picks up boolean values', () => {
    b.undef = true
    assertDiff({ undef: true })

    b.undef = false
    assertDiff({ undef: false })
  })
  test('picks up number values', () => {
    b.undef = 0
    assertDiff({ undef: 0 })

    b.undef = 1
    assertDiff({ undef: 1 })
  })
  test('picks up string values', () => {
    b.undef = 'string'
    assertDiff({ undef: 'string' })
  })
  test('picks up object values', () => {
    b.obj.key = 'new value'
    assertDiff({ obj: b.obj })
  })
  test('picks up nested object values', () => {
    b.obj.nested.key = 'new nested value'
    assertDiff({ obj: b.obj })
  })
  test('shows deleted keys', () => {
    delete b.undef
    assertDiff({ undef: '[DELETED]' })
  })
})
