import _ from 'lodash'
import React from 'react'

import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'
import LabelGroup from 'src/elements/Label/LabelGroup'
import * as common from 'test/specs/commonTests'
import { SUI } from 'src/lib'

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
    expect(shallow(<Label />).type()).toBe('div')
  })

  describe('removeIcon', () => {
    it('has no icon without onRemove', () => {
      expect(shallow(<Label />).find('Icon')).toHaveLength(0)
    })

    it('has delete icon by default', () => {
      expect(
        shallow(<Label onRemove={_.noop} />)
          .find('Icon')
          .prop('name'),
      ).toBe('delete')
    })

    it('uses passed removeIcon string', () => {
      expect(
        shallow(<Label onRemove={_.noop} removeIcon='foo' />)
          .find('Icon')
          .prop('name'),
      ).toBe('foo')
    })

    it('uses passed removeIcon props', () => {
      expect(
        shallow(<Label onRemove={_.noop} removeIcon={{ 'data-foo': true }} />)
          .find('Icon')
          .prop('data-foo'),
      ).toBe(true)
    })

    it('handles events on Label and Icon', () => {
      const event = { target: null }
      const onClick = jest.fn()
      const onRemove = jest.fn()

      const iconProps = { 'data-foo': true, onClick }
      const labelProps = { onRemove, removeIcon: iconProps }

      mount(<Label {...labelProps} />)
        .find('Icon')
        .simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onRemove).toHaveBeenCalledTimes(1)
      expect(onRemove).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(labelProps),
      )
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      expect(shallow(<Label image />).hasClass('image')).toBe(true)
    })

    it('does not add an Image when true', () => {
      expect(shallow(<Label image />).find('Image')).toHaveLength(0)
    })
  })

  describe('onClick', () => {
    it('is called with (e) when clicked', () => {
      const onClick = jest.fn()
      const event = { target: null }
      const props = { pointing: true, onClick }

      shallow(<Label {...props} />).simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(
        expect.objectContaining(event),
        expect.objectContaining(props),
      )
    })
  })

  describe('pointing', () => {
    it('adds an poiting class when true', () => {
      expect(shallow(<Label pointing />).hasClass('pointing')).toBe(true)
    })

    it('does not add any poiting option class when true', () => {
      const options = ['above', 'below', 'left', 'right']
      const wrapper = shallow(<Label pointing />)

      options.map(className => expect(wrapper.hasClass(className)).toBe(false))
    })

    it('adds `above` as suffix', () => {
      expect(shallow(<Label pointing='above' />).hasClass('pointing above')).toBe(true)
    })

    it('adds `below` as suffix', () => {
      expect(shallow(<Label pointing='below' />).hasClass('pointing below')).toBe(true)
    })

    it('adds `left` as prefix', () => {
      expect(shallow(<Label pointing='left' />).hasClass('left pointing')).toBe(true)
    })

    it('adds `right` as prefix', () => {
      expect(shallow(<Label pointing='right' />).hasClass('right pointing')).toBe(true)
    })
  })
})
