import React from 'react'
import { Simulate } from 'react-addons-test-utils'
import { Confirm } from 'stardust'

describe('Confirm', () => {
  it('default prop abortLabel should be "Cancel"', () => {
    render(<Confirm />).first().props.abortLabel.should.equal('Cancel')
  })
  it('default prop confirmLabel should be "Yes"', () => {
    Confirm.defaultProps.confirmLabel.should.equal('Yes')
  })
  it('default prop ref should be "modal"', () => {
    Confirm.defaultProps.ref.should.equal('modal')
  })
  it('should return true on confirm', () => {
    const confirm = render(<Confirm />)
    const button = confirm.findClass('sd-confirm-button')
    confirm
      .first()
      .show()
      .then(isConfirmed => isConfirmed.should.equal(true))
    Simulate.click(button)
  })
  it('should return false on abort', () => {
    const confirm = render(<Confirm />)
    const button = confirm.findClass('sd-abort-button')
    confirm
      .first()
      .show()
      .then(isConfirmed => isConfirmed.should.equal(false))
    Simulate.click(button)
  })
})
