import React from 'react'

import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('AccordionTitle', () => {
  common.isConformant(AccordionTitle)
  common.forwardsRef(AccordionTitle)
  common.rendersChildren(AccordionTitle)

  common.implementsCreateMethod(AccordionTitle)
  common.implementsIconProp(AccordionTitle, {
    alwaysPresent: true,
    autoGenerateKey: false,
  })

  common.propKeyOnlyToClassName(AccordionTitle, 'active')

  describe('onClick', () => {
    it('is called with (e, { name, index }) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { content: 'title', index: 0 }

      mount(<AccordionTitle onClick={onClick} {...props} />).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, props)
    })
  })
})
