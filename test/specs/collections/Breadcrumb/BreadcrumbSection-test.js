import React from 'react'

import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)

  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  it('renders as a div by default', () => {
    shallow(<BreadcrumbSection />)
      .should.have.tagName('div')
  })

  describe('link', () => {
    it('is should be `a` when has prop link', () => {
      shallow(<BreadcrumbSection link />)
        .should.have.tagName('a')
    })
  })

  describe('href', () => {
    it('is not present by default', () => {
      shallow(<BreadcrumbSection />)
        .should.not.have.attr('href')
    })

    it('should have attr `href` when has prop', () => {
      const section = shallow(<BreadcrumbSection href='http://google.com' />)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('http://google.com')
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { active: true, content: 'home' }

      shallow(<BreadcrumbSection onClick={onClick} {...props} />)
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, props)
    })
  })
})
