import React from 'react'

import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)

  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  it('renders as a div by default', () => {
    expect(shallow(<BreadcrumbSection />)).have.tagName('div')
  })

  describe('link', () => {
    it('is should be `a` when has prop link', () => {
      expect(shallow(<BreadcrumbSection link />)).have.tagName('a')
    })
  })

  describe('href', () => {
    it('is not present by default', () => {
      expect(shallow(<BreadcrumbSection />)).not.have.attr('href')
    })

    it('should have attr `href` when has prop', () => {
      const section = shallow(<BreadcrumbSection href='http://google.com' />)

      expect(section).have.tagName('a')
      expect(section)
        .have.attr('href')
        .toBe('http://google.com')
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }
      const props = { active: true, content: 'home' }

      shallow(<BreadcrumbSection onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, props)
    })
  })
})
