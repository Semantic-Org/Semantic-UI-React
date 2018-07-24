import React from 'react'

import Select from 'src/addons/Select/Select'
import FormSelect from 'src/collections/Form/FormSelect'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  options: [],
}

describe('FormSelect', () => {
  common.isConformant(FormSelect, { requiredProps })
  common.labelImplementsHtmlForProp(FormSelect, { requiredProps })

  describe('as', () => {
    it('is "FormField" with a Select control', () => {
      expect(
        shallow(<FormSelect {...requiredProps} />)
          .find('FormField')
          .prop('control'),
      ).toBe(Select)
    })
  })
})
