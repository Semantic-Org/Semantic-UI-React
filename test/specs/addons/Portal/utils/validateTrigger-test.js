import React from 'react'

import validateTrigger from 'src/addons/Portal/utils/validateTrigger'

describe('validateTrigger', () => {
  it('throws on multiple elements passed', () => {
    expect(() => validateTrigger([<button key='trigger1' />, <button key='trigger2' />])).to.throw()
  })

  it('throws on React.Fragment passed', () => {
    expect(() => validateTrigger(React.createElement(React.Fragment))).to.throw()
  })
})
