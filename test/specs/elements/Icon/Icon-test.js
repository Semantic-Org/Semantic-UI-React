import React from 'react'
import Icon from 'src/elements/Icon/Icon'
import IconGroup from 'src/elements/Icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe('Icon', () => {
  common.isConformant(Icon)
  common.hasSubComponents(Icon, [IconGroup])
  common.implementsCreateMethod(Icon)

  common.propKeyOnlyToClassName(Icon, 'bordered')
  common.propKeyOnlyToClassName(Icon, 'circular')
  common.propValueOnlyToClassName(Icon, 'color')
  common.propKeyOnlyToClassName(Icon, 'corner')
  common.propKeyOnlyToClassName(Icon, 'disabled')
  common.propKeyOnlyToClassName(Icon, 'fitted')
  common.propKeyAndValueToClassName(Icon, 'flipped')
  common.propKeyOnlyToClassName(Icon, 'inverted')
  common.propValueOnlyToClassName(Icon, 'name')
  common.propKeyOnlyToClassName(Icon, 'link')
  common.propKeyOnlyToClassName(Icon, 'loading')
  common.propKeyAndValueToClassName(Icon, 'rotated')
  common.propValueOnlyToClassName(Icon, 'size')

  common.rendersChildren(Icon)

  it('renders as an <i> by default', () => {
    shallow(<Icon />)
      .should.have.tagName('i')
  })
})
