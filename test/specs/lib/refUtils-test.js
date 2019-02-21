import React, { createRef } from 'react'

import { handleRef, isRef } from 'src/lib/refUtils'
import { sandbox } from 'test/utils'

describe('handleRef', () => {
  it('throws an error when "ref" is string', () => {
    expect(() => {
      handleRef('ref', document.createElement('div'))
    }).to.throw()
  })

  it('does not do anything when "ref" is null', () => {
    expect(() => {
      handleRef(null, document.createElement('div'))
    }).to.not.throw()
  })

  it('calls with node when "ref" is function', () => {
    const ref = sandbox.spy()
    const node = document.createElement('div')

    handleRef(ref, node)
    ref.should.have.calledWith(node)
  })

  it('assigns to "current" when "ref" is object', () => {
    const ref = React.createRef()
    const node = document.createElement('div')

    handleRef(ref, node)
    ref.should.have.property('current', node)
  })
})

describe('isRef', () => {
  it('returns a correct result for each input', () => {
    const fixtures = [
      { value: true, result: false },
      { value: null, result: false },
      { value: '', result: false },
      { value: {}, result: false },

      { value: createRef(), result: true },
      { value: { current: document.createElement('div') }, result: true },
    ]

    fixtures.forEach((fixture) => {
      expect(isRef(fixture.value)).to.equal(fixture.result)
    })
  })
})
