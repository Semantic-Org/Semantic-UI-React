import React from 'react'

import handleRef from 'src/lib/handleRef'
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
