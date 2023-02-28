import _ from 'lodash'
import React from 'react'

import Icon from 'src/elements/Icon/Icon'
import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'
import LabelGroup from 'src/elements/Label/LabelGroup'
import * as common from 'test/specs/commonTests'
import { SUI } from 'src/lib'
import { sandbox } from 'test/utils'

describe('Label', () => {
  common.isConformant(Label)
  common.forwardsRef(Label)
  common.forwardsRef(Label, { requiredProps: { children: <span /> } })
  common.hasSubcomponents(Label, [LabelDetail, LabelGroup])
  common.hasUIClassName(Label)
  common.rendersChildren(Label)

  common.implementsCreateMethod(Label)
  common.implementsIconProp(Label, { autoGenerateKey: false })
  common.implementsImageProp(Label, { autoGenerateKey: false })
  common.implementsShorthandProp(Label, {
    autoGenerateKey: false,
    propKey: 'detail',
    ShorthandComponent: LabelDetail,
    mapValueToProps: (val) => ({ content: val }),
  })

  common.propKeyAndValueToClassName(Label, 'attached', [
    'top',
    'bottom',
    'top right',
    'top left',
    'bottom left',
    'bottom right',
  ])

  common.propKeyOnlyToClassName(Label, 'active')
  common.propKeyOnlyToClassName(Label, 'basic')
  common.propKeyOnlyToClassName(Label, 'circular')
  common.propKeyOnlyToClassName(Label, 'empty')
  common.propKeyOnlyToClassName(Label, 'floating')
  common.propKeyOnlyToClassName(Label, 'horizontal')
  common.propKeyOnlyToClassName(Label, 'prompt')
  common.propKeyOnlyToClassName(Label, 'tag')

  common.propKeyOrValueAndKeyToClassName(Label, 'corner', ['left', 'right'])
  common.propKeyOrValueAndKeyToClassName(Label, 'ribbon', ['right'])

  common.propValueOnlyToClassName(Label, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Label, 'size', SUI.SIZES)

  it('is a div by default', () => {
    shallow(<Label />).should.have.tagName('div')
  })

  describe('removeIcon', () => {
    it('has no icon without onRemove', () => {
      shallow(<Label />).should.not.have.descendants('Icon')
    })

    it('has delete icon by default', () => {
      shallow(<Label onRemove={_.noop} />)
        .find(Icon)
        .should.have.prop('name', 'delete')
    })

    it('uses passed removeIcon string', () => {
      shallow(<Label onRemove={_.noop} removeIcon='foo' />)
        .find(Icon)
        .should.have.prop('name', 'foo')
    })

    it('uses passed removeIcon props', () => {
      shallow(<Label onRemove={_.noop} removeIcon={{ 'data-foo': true }} />)
        .find(Icon)
        .should.have.prop('data-foo', true)
    })

    it('handles events on Label and Icon', () => {
      const event = { target: null }
      const iconSpy = sandbox.spy()
      const labelSpy = sandbox.spy()

      const iconProps = { 'data-foo': true, onClick: iconSpy }
      const labelProps = { onRemove: labelSpy, removeIcon: iconProps }

      mount(<Label {...labelProps} />)
        .find(Icon)
        .simulate('click', event)

      iconSpy.should.have.been.calledOnce()
      labelSpy.should.have.been.calledOnce()
      labelSpy.should.have.been.calledWithMatch(event, labelProps)
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      shallow(<Label image />).should.have.className('image')
    })
    it('does not add an Image when true', () => {
      shallow(<Label image />).should.not.have.descendants('Image')
    })
  })

  describe('onClick', () => {
    it('is called with (e) when clicked', () => {
      const onClick = sandbox.spy()
      const event = { target: null }

      mount(<Label onClick={onClick} />).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event)
    })
  })

  describe('pointing', () => {
    it('adds an poiting class when true', () => {
      shallow(<Label pointing />).should.have.className('pointing')
    })

    it('does not add any poiting option class when true', () => {
      const options = ['above', 'below', 'left', 'right']
      const wrapper = shallow(<Label pointing />)

      options.map((className) => wrapper.should.not.have.className(className))
    })

    it('adds `above` as suffix', () => {
      shallow(<Label pointing='above' />).should.have.className('pointing above')
    })

    it('adds `below` as suffix', () => {
      shallow(<Label pointing='below' />).should.have.className('pointing below')
    })

    it('adds `left` as prefix', () => {
      shallow(<Label pointing='left' />).should.have.className('left pointing')
    })

    it('adds `right` as prefix', () => {
      shallow(<Label pointing='right' />).should.have.className('right pointing')
    })
  })
})
