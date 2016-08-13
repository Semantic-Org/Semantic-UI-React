import _ from 'lodash'
import React from 'react'

import FormFields from 'src/collections/Form/FormFields'
import FormField from 'src/collections/Form/FormField'
import * as common from 'test/specs/commonTests'
import { numberToWord } from 'src/lib'

describe('Fields', () => {
  common.isConformant(FormFields)
  common.rendersChildren(FormFields)

  describe('evenlyDivided', () => {
    it('adds the word class for the number of child fields', () => {
      const children = _.times(_.random(1, 16), (i) => <FormField key={i} />)
      const className = `${numberToWord(children.length)} fields`

      shallow(<FormFields evenlyDivided>{children}</FormFields>)
        .should.have.className(className)
    })
  })
})
