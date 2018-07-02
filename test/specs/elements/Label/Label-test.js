import _ from 'lodash'
import React from 'react'

import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'
import LabelGroup from 'src/elements/Label/LabelGroup'
import * as common from 'test/specs/commonTests'
import { SUI } from 'src/lib'
import { sandbox } from 'test/utils'

describe('Label', () => {
  common.isConformant(Label)
  common.hasSubcomponents(Label, [LabelDetail, LabelGroup])
  common.hasUIClassName(Label)
  common.rendersChildren(Label)

  common.implementsCreateMethod(Label)
  common.implementsIconProp(Label)
  common.implementsImageProp(Label)
  common.implementsShorthandProp(Label, {
    propKey: 'detail',
    ShorthandComponent: LabelDetail,
    mapValueToProps: val => ({ content: val }),
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
  common.propKeyOnlyToClassName(Label, 'tag')

  common.propKeyOrValueAndKeyToClassName(Label, 'corner', ['left', 'right'])
  common.propKeyOrValueAndKeyToClassName(Label, 'ribbon', ['right'])

  common.propValueOnlyToClassName(Label, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Label, 'size', SUI.SIZES)

  it('is a div by default', () => {
    expect(shallow(<Label />)).have.tagName('div')
  })

  describe('removeIcon', () => {
    it('has no icon without onRemove', () => {
      expect(shallow(<Label />)).not.have.descendants('Icon')
    })

    it('has delete icon by default', () => {
      expect(shallow(<Label onRemove={_.noop} />).find('Icon')).have.prop('name', 'delete')
    })

    it('uses passed removeIcon string', () => {
      expect(shallow(<Label onRemove={_.noop} removeIcon='foo' />).find('Icon')).have.prop(
        'name',
        'foo',
      )
    })

    it('uses passed removeIcon props', () => {
      expect(
        shallow(<Label onRemove={_.noop} removeIcon={{ 'data-foo': true }} />).find('Icon'),
      ).have.prop('data-foo', true)
    })

    it('handles events on Label and Icon', () => {
      const event = { target: null }
      const iconSpy = sandbox.spy()
      const labelSpy = sandbox.spy()

      const iconProps = { 'data-foo': true, onClick: iconSpy }
      const labelProps = { onRemove: labelSpy, removeIcon: iconProps }

      mount(<Label {...labelProps} />)
        .find('Icon')
        .simulate('click', event)

      expect(iconSpy).have.been.calledOnce()
      expect(labelSpy).have.been.calledOnce()
      expect(labelSpy).have.been.calledWithMatch(event, labelProps)
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      expect(shallow(<Label image />)).have.className('image')
    })
    it('does not add an Image when true', () => {
      expect(shallow(<Label image />)).not.have.descendants('Image')
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Label />).simulate('click')
      expect(click).not.toThrowError()
    })

    it('is called with (e) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }

      shallow(<Label onClick={spy} />).simulate('click', event)

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(event)
    })
  })

  describe('pointing', () => {
    it('adds an poiting class when true', () => {
      expect(shallow(<Label pointing />)).have.className('pointing')
    })

    it('does not add any poiting option class when true', () => {
      const options = ['above', 'below', 'left', 'right']
      const wrapper = shallow(<Label pointing />)

      options.map(className => expect(wrapper).not.have.className(className))
    })

    it('adds `above` as suffix', () => {
      expect(shallow(<Label pointing='above' />)).have.className('pointing above')
    })

    it('adds `below` as suffix', () => {
      expect(shallow(<Label pointing='below' />)).have.className('pointing below')
    })

    it('adds `left` as prefix', () => {
      expect(shallow(<Label pointing='left' />)).have.className('left pointing')
    })

    it('adds `right` as prefix', () => {
      expect(shallow(<Label pointing='right' />)).have.className('right pointing')
    })
  })
})
