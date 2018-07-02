import React from 'react'
import { getChildMapping, mergeChildMappings } from 'src/lib'

describe('childMapping', () => {
  describe('childMapping', () => {
    it('should support getChildMapping', () => {
      const component = (
        <div>
          <div key='one' />
          <div key='two' />
        </div>
      )

      expect(getChildMapping(component.props.children)).toEqual(
        expect.arrayContaining(['.$one', '.$two']),
      )
    })

    it('skips invalid elements', () => {
      const component = (
        <div>
          string
          <div key='one' />
          <div key='two' />
        </div>
      )

      expect(getChildMapping(component.props.children)).toEqual(
        expect.arrayContaining(['.$one', '.$two']),
      )
    })
  })

  describe('mergeChildMappings', () => {
    it('should support mergeChildMappings for adding keys', () => {
      const prev = { one: true, two: true }
      const next = { one: true, two: true, three: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
      })
    })

    it('should support mergeChildMappings for removing keys', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
      })
    })

    it('should support mergeChildMappings for adding and removing', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true, four: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
        three: true,
        four: true,
      })
    })

    it('should reconcile overlapping insertions and deletions', () => {
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

    it('should support mergeChildMappings with undefined next input', () => {
      const prev = { one: true, two: true }
      const next = undefined

      expect(mergeChildMappings(prev, next)).toEqual({
        one: true,
        two: true,
      })
    })

    it('should support mergeChildMappings with undefined prev input', () => {
      const prev = undefined
      const next = { three: true, four: true }

      expect(mergeChildMappings(prev, next)).toEqual({
        three: true,
        four: true,
      })
    })

    it('should prefer next value of key over prev', () => {
      const prev = { one: true }
      const next = { one: false }

      expect(mergeChildMappings(prev, next)).toEqual({ one: false })
    })
  })
})
