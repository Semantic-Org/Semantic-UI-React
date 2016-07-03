import faker from 'faker'
import React from 'react'

import Accordion from 'src/modules/Accordion/Accordion'
import AccordionContent from 'src/modules/Accordion/AccordionContent'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'
import * as common from 'test/specs/commonTests'

describe('Accordion', () => {
  common.isConformant(Accordion)
  common.hasUIClassName(Accordion)
  common.hasSubComponents(Accordion, [AccordionContent, AccordionTitle])
  common.propKeyOnlyToClassName(Accordion, 'fluid')
  common.propKeyOnlyToClassName(Accordion, 'inverted')
  common.propKeyOnlyToClassName(Accordion, 'styled')

  describe('panels', () => {
    it('does not render children', () => {
      shallow(
        <Accordion panels={[]}>
          <div id='do-not-find-me' />
        </Accordion>
      )
        .should.not.have.descendants('#do-not-find-me')
    })

    it('adds text and content sibling children', () => {
      const panels = [{
        text: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }]
      const wrapper = mount(<Accordion panels={panels} />)

      wrapper
        .childAt(0)
        .should.have.className('title')
        .and.contain.text(panels[0].title)

      wrapper
        .childAt(1)
        .should.have.className('content')
        .and.contain.text(panels[0].content)
    })

    it('allows setting the active prop', () => {
      const panels = [{
        active: true,
        text: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }, {
        active: false,
        text: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
      }]
      const wrapper = shallow(<Accordion panels={panels} />)

      // first panel (active)

      wrapper
        .find('AccordionTitle')
        .at(0)
        .should.have.prop('active', true)

      wrapper
        .find('AccordionContent')
        .at(0)
        .should.have.prop('active', true)

      // second panel (not active)

      wrapper
        .find('AccordionTitle')
        .at(1)
        .should.have.prop('active', false)

      wrapper
        .find('AccordionContent')
        .at(1)
        .should.have.prop('active', false)
    })
  })
})
