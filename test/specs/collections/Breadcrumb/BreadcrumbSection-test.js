import React from 'react'

import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)

  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  describe('as', () => {
    it('is "div" by default', () => {
      expect(shallow(<BreadcrumbSection />).type()).toBe('div')
    })
  })

  describe('link', () => {
    it('is "a" when has prop link', () => {
      expect(shallow(<BreadcrumbSection link />).type()).toBe('a')
    })
  })

  describe('href', () => {
    it('is not present by default', () => {
      expect(shallow(<BreadcrumbSection />).prop('href')).toBeUndefined()
    })

    it('should have attr `href` when has prop', () => {
      const section = shallow(<BreadcrumbSection href='http://google.com' />)

      expect(section.type()).toBe('a')
      expect(section.prop('href')).toBe('http://google.com')
    })
  })

  describe('onClick', () => {
    it('is called with (e, props) when clicked', () => {
      const onClick = jest.fn()
      const event = { target: null }
      const props = { active: true, content: 'home' }

      shallow(<BreadcrumbSection onClick={onClick} {...props} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })
  })
})
