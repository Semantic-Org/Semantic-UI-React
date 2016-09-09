import React from 'react'

import Button from 'src/elements/Button/Button'
import ButtonGroup from 'src/elements/Button/ButtonGroup'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Button', () => {
  common.isConformant(Button)
  common.hasUIClassName(Button)
  common.rendersChildren(Button)
  common.hasSubComponents(Button, [ButtonGroup])

  common.propKeyOnlyToClassName(Button, 'active')
  common.propKeyOnlyToClassName(Button, 'animated')
  common.propKeyOrValueToClassName(Button, 'attached')
  common.propKeyOnlyToClassName(Button, 'basic')
  common.propKeyOnlyToClassName(Button, 'circular')
  common.propValueOnlyToClassName(Button, 'color')
  common.propKeyOnlyToClassName(Button, 'compact')
  common.propKeyOnlyToClassName(Button, 'disabled')
  common.propKeyAndValueToClassName(Button, 'floated')
  common.propKeyOnlyToClassName(Button, 'fluid')
  common.implementsIconProp(Button)
  common.propKeyOnlyToClassName(Button, 'inverted')
  common.propKeyOrValueToClassName(Button, 'labeled')
  common.propKeyOnlyToClassName(Button, 'loading')
  common.propKeyOnlyToClassName(Button, 'primary')
  common.propKeyOnlyToClassName(Button, 'negative')
  common.propKeyOnlyToClassName(Button, 'positive')
  common.propKeyOnlyToClassName(Button, 'secondary')
  common.propValueOnlyToClassName(Button, 'size')

  it('inherits type', () => {
    shallow(<Button type='submit' />)
      .find('button')
      .should.have.prop('type', 'submit')
  })
  it('calls onClick when clicked', () => {
    const handleClick = sandbox.spy()
    shallow(<Button type='submit' onClick={handleClick} />)
      .simulate('click')

    handleClick.should.have.been.calledOnce()
  })

  describe('tagName', () => {
    it('is button by default', () => {
      shallow(<Button />)
        .first()
        .should.have.tagName('button')
    })
    it('is a div when attached prop added', () => {
      shallow(<Button attached='top' />)
        .should.have.tagName('div')
    })
    it('adds tabIndex=0 when tag type is div', () => {
      shallow(<Button attached='top' />)
        .should.have.prop('tabIndex', 0)
    })
    it('is button when type=submit', () => {
      shallow(<Button type='submit' attached='top' />)
        .should.have.tagName('button')
    })
  })
})
