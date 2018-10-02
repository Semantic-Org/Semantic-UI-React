import React from 'react'

import AccordionContent from 'src/modules/Accordion/AccordionContent'
import * as common from 'test/specs/commonTests'

describe('AccordionContent', () => {
  // must be active to render children and content with the defaultProp renderActiveOnly = true
  const requiredProps = { active: true }

  common.isConformant(AccordionContent, { requiredProps })

  common.rendersChildren(AccordionContent, { requiredProps })

  common.implementsCreateMethod(AccordionContent)

  common.propKeyOnlyToClassName(AccordionContent, 'active')

  it('Renders an empty .content if not active', () => {
    const wrapper = shallow(<AccordionContent active={false} content={'test text'} />)

    expect(wrapper.hasClass('content'))
    wrapper
      .find('.content')
      .children()
      .should.have.length(0)
  })

  it('Does not render content if not active', () => {
    const wrapper = shallow(<AccordionContent active={false} content={'test text'} />)

    wrapper.children().should.have.length(0)
  })

  it('Renders content if not active and renderActiveOnly is false', () => {
    const wrapper = shallow(
      <AccordionContent active={false} renderActiveOnly={false} content={'test text'} />,
    )

    wrapper.children().should.have.length(1)
    wrapper.childAt(0).should.contain.text('test text')
  })

  it('Does not render children if not active', () => {
    const wrapper = shallow(<AccordionContent active={false}>test text</AccordionContent>)

    wrapper.children().should.have.length(0)
  })

  it('Renders children if not active and renderActiveOnly is false', () => {
    const wrapper = shallow(
      <AccordionContent active={false} renderActiveOnly={false}>
        test text
      </AccordionContent>,
    )

    wrapper.children().should.have.length(1)
    wrapper.childAt(0).should.contain.text('test text')
  })
})
