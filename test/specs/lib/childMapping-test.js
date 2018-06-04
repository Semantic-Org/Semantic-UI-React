import React from 'react'
import { getChildMapping, mergeChildMappings } from 'src/lib'

describe('childMapping', () => {
  describe('childMapping', () => {
    test('should support getChildMapping', () => {
      const component = (
        <div>
          <div key='one' />
          <div key='two' />
        </div>
      )

      expect(getChildMapping(component.props.children)).toHaveProperty(['.$one'])
      expect(getChildMapping(component.props.children)).toHaveProperty(['.$two'])
    })

    test('skips invalid elements', () => {
      const component = (
        <div>
          string
          <div key='one' />
          <div key='two' />
        </div>
      )

      expect(getChildMapping(component.props.children)).toHaveProperty(['.$one'])
      expect(getChildMapping(component.props.children)).toHaveProperty(['.$two'])
    })
  })

  describe('mergeChildMappings', () => {
    test('should support mergeChildMappings for adding keys', () => {
      const prev = { one: true, two: true }
      const next = { one: true, two: true, three: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
      })
    })

    test('should support mergeChildMappings for removing keys', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
      })
    })

    test('should support mergeChildMappings for adding and removing', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true, four: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
        four: true,
      })
    })

    test('should reconcile overlapping insertions and deletions', () => {
      const prev = { one: true, two: true, four: true, five: true }
      const next = { one: true, two: true, three: true, five: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
        four: true,
        five: true,
      })
    })

    test('should support mergeChildMappings with undefined next input', () => {
      const prev = { one: true, two: true }
      const next = undefined

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
      })
    })

    test('should support mergeChildMappings with undefined prev input', () => {
      const prev = undefined
      const next = { three: true, four: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        three: true,
        four: true,
      })
    })

    test('should prefer next value of key over prev', () => {
      const prev = { one: true }
      const next = { one: false }

      expect(mergeChildMappings(prev, next)).toEqual({ one: false })
    })
  })
})
