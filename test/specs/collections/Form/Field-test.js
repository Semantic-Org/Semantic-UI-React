import _ from 'lodash'
import React from 'react'

import Form from 'src/collections/Form/Form'
import * as common from 'test/specs/commonTests'
import { numberToWord } from 'src/lib'

describe('Field', () => {
  common.isConformant(Form.Field)
  common.rendersChildren(Form.Field)

  it('has a label', () => {
    shallow(<Form.Field label='First Name' />)
      .find('label')
      .should.contain.text('First Name')
  })

  it('can specify a width', () => {
    _.each(_.range(1, 17), n => {
      shallow(<Form.Field width={n} />)
        .should.have.className(`${numberToWord(n)} wide`)
    })
  })
})
