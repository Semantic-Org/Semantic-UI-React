import React from 'react'

import Accordion from 'src/modules/Accordion/Accordion'
import AccordionAccordion from 'src/modules/Accordion/AccordionAccordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionPanel from 'src/modules/Accordion/AccordionPanel'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'

describe('Accordion', () => {
  common.isConformant(Accordion)
  common.forwardsRef(Accordion)
  common.hasSubcomponents(Accordion, [
    AccordionAccordion,
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
  ])
  common.hasUIClassName(Accordion)

  common.propKeyOnlyToClassName(Accordion, 'fluid')
  common.propKeyOnlyToClassName(Accordion, 'inverted')
  common.propKeyOnlyToClassName(Accordion, 'styled')

  it('renders AccordionAccordion component', () => {
    shallow(<Accordion />).should.have.descendants(AccordionAccordion)
  })
})
