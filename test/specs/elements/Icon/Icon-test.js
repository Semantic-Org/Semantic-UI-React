import _ from 'lodash'
import React from 'react'

import Icon from 'src/elements/Icon/Icon'
import IconGroup from 'src/elements/Icon/IconGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Icon', () => {
  common.isConformant(Icon)
  common.hasSubcomponents(Icon, [IconGroup])

  common.implementsCreateMethod(Icon)

  common.propKeyAndValueToClassName(Icon, 'flipped', ['horizontally', 'vertically'])
  common.propKeyAndValueToClassName(Icon, 'rotated', ['clockwise', 'counterclockwise'])

  common.propKeyOnlyToClassName(Icon, 'bordered')
  common.propKeyOnlyToClassName(Icon, 'circular')
  common.propKeyOnlyToClassName(Icon, 'corner')
  common.propKeyOnlyToClassName(Icon, 'disabled')
  common.propKeyOnlyToClassName(Icon, 'fitted')
  common.propKeyOnlyToClassName(Icon, 'inverted')
  common.propKeyOnlyToClassName(Icon, 'link')
  common.propKeyOnlyToClassName(Icon, 'loading')

  common.propValueOnlyToClassName(Icon, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Icon, 'name', ['money'])
  common.propValueOnlyToClassName(Icon, 'size', _.without(SUI.SIZES, 'medium'))

  it('renders as an <i> by default', () => {
    shallow(<Icon />).should.have.tagName('i')
  })

  describe('aria-label', () => {
    it('should not applied by default', () => {
      shallow(<Icon />).should.have.not.prop('aria-label')
    })

    it('should pass value and omit aria-hidden when is set', () => {
      const wrapper = shallow(<Icon aria-label='icon' />)

      wrapper.should.not.have.prop('aria-hidden')
      wrapper.should.have.prop('aria-label', 'icon')
    })
  })

  describe('aria-hidden', () => {
    it('should add aria-hidden by default', () => {
      shallow(<Icon />).should.have.prop('aria-hidden', 'true')
    })

    it('should pass aria-hidden', () => {
      shallow(<Icon aria-hidden='true' />).should.have.prop('aria-hidden', 'true')
      shallow(<Icon aria-hidden='false' />).should.have.prop('aria-hidden', 'false')
    })

    it('should passed aria-hidden with aria-label', () => {
      shallow(<Icon aria-hidden='false' aria-label='icon' />).should.have.prop(
        'aria-hidden',
        'false',
      )
    })
  })
})
