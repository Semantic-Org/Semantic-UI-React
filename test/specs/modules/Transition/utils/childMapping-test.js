import React from 'react'
import { getChildMapping, mergeChildMappings } from 'src/modules/Transition/utils/childMapping'

describe('childMapping', () => {
  describe('childMapping', () => {
    it('should support getChildMapping', () => {
      const component = (
        <div>
          <div key='one' />
          <div key='two' />
        </div>
      )

      getChildMapping(component.props.children).should.have.deep.keys(['.$one', '.$two'])
    })

    it('skips invalid elements', () => {
      const component = (
        <div>
          string
          <div key='one' />
          <div key='two' />
        </div>
      )

      getChildMapping(component.props.children).should.have.deep.keys(['.$one', '.$two'])
    })
  })

  describe('mergeChildMappings', () => {
    it('should support mergeChildMappings for adding keys', () => {
      const prev = { one: true, two: true }
      const next = { one: true, two: true, three: true }

      mergeChildMappings(prev, next).should.deep.equal({
        one: true,
        two: true,
        three: true,
      })
    })

    it('should support mergeChildMappings for removing keys', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true }

      mergeChildMappings(prev, next).should.deep.equal({
        one: true,
        two: true,
        three: true,
      })
    })

    it('should support mergeChildMappings for adding and removing', () => {
      const prev = { one: true, two: true, three: true }
      const next = { one: true, two: true, four: true }

      mergeChildMappings(prev, next).should.deep.equal({
        one: true,
        two: true,
        three: true,
        four: true,
      })
    })

    it('should reconcile overlapping insertions and deletions', () => {
      const prev = { one: true, two: true, four: true, five: true }
      const next = { one: true, two: true, three: true, five: true }

      mergeChildMappings(prev, next).should.deep.equal({
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

      mergeChildMappings(prev, next).should.deep.equal({
        one: true,
        two: true,
      })
    })

    it('should support mergeChildMappings with undefined prev input', () => {
      const prev = undefined
      const next = { three: true, four: true }

      mergeChildMappings(prev, next).should.deep.equal({
        three: true,
        four: true,
      })
    })

    it('should prefer next value of key over prev', () => {
      const prev = { one: true }
      const next = { one: false }

      mergeChildMappings(prev, next).should.deep.equal({ one: false })
    })
  })
})
