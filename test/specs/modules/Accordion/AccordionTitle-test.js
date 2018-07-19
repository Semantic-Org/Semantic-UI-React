import React from 'react'

import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'

describe('AccordionTitle', () => {
  common.isConformant(AccordionTitle)
  common.rendersChildren(AccordionTitle)

  common.implementsCreateMethod(AccordionTitle)

  common.propKeyOnlyToClassName(AccordionTitle, 'active')

  describe('onClick', () => {
    it('is called with (e, { name, index }) when clicked', () => {
      const onClick = jest.fn()
      const event = { target: null }
      const props = { content: 'title', index: 0 }

      shallow(<AccordionTitle onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })
  })
})
