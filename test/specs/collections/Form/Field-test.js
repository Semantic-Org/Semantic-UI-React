import _ from 'lodash'
import React from 'react'
import { Field } from 'stardust'
import numberToWord from '../../../../src/utils/numberToWord'

describe('Field', () => {
  it('has a label', () => {
    render(<Field label='First Name' />)
      .findTag('label')
      .textContent.should.equal('First Name')
  })

  it('renders children', () => {
    render(<Field>yo child</Field>).assertText('yo child')
  })

  it('can specify a width', () => {
    _.each(_.range(1, 17), n => {
      render(<Field width={n} />).findClass(`${numberToWord(n)} wide`)
    })
  })
})
