import React from 'react'
import createReferenceProxy from 'src/modules/Popup/lib/createReferenceProxy'

describe('createReferenceProxy', () => {
  it('handles nodes', () => {
    const node = document.createElement('div')
    const proxy = createReferenceProxy(node)

    expect(proxy.getBoundingClientRect()).to.include({ height: 0, width: 0 })
  })

  it('handles ref objects', () => {
    const ref = React.createRef()
    const proxy = createReferenceProxy(ref)

    ref.current = document.createElement('div')
    expect(proxy.getBoundingClientRect()).to.include({ height: 0, width: 0 })
  })
})
