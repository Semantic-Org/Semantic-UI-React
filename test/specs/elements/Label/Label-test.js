import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'
import LabelGroup from 'src/elements/Label/LabelGroup'

describe('Label', () => {
  common.isConformant(Label)
  common.hasSubComponents(Label, [LabelDetail, LabelGroup])
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

  common.propKeyAndValueToClassName(Label, 'attached')

  common.propKeyOnlyToClassName(Label, 'active')
  common.propKeyOnlyToClassName(Label, 'basic')
  common.propKeyOnlyToClassName(Label, 'circular')
  common.propKeyOnlyToClassName(Label, 'empty')
  common.propKeyOnlyToClassName(Label, 'floating')
  common.propKeyOnlyToClassName(Label, 'horizontal')
  common.propKeyOnlyToClassName(Label, 'tag')

  common.propKeyOrValueAndKeyToClassName(Label, 'corner', ['left', 'right'])
  common.propKeyOrValueAndKeyToClassName(Label, 'ribbon', ['right'])

  common.propValueOnlyToClassName(Label, 'color')
  common.propValueOnlyToClassName(Label, 'size')

  it('is a div by default', () => {
    shallow(<Label />)
      .should.have.tagName('div')
  })

  describe('removeIcon', () => {
    it('has no icon without onRemove', () => {
      shallow(<Label />)
        .should.not.have.descendants('Icon')
    })

    it('has delete icon by default', () => {
      shallow(<Label onRemove={_.noop} />)
        .find('Icon')
        .should.have.prop('name', 'delete')
    })

    it('uses passed removeIcon string', () => {
      shallow(<Label onRemove={_.noop} removeIcon='foo' />)
        .find('Icon')
        .should.have.prop('name', 'foo')
    })

    it('uses passed removeIcon props', () => {
      shallow(<Label onRemove={_.noop} removeIcon={{ 'data-foo': true }} />)
        .find('Icon')
        .should.have.prop('data-foo', true)
    })
  })

  describe('content', () => {
    it('has no content by default', () => {
      shallow(<Label />)
        .text()
        .should.be.empty()
    })

    it('adds the value as children', () => {
      const text = faker.hacker.phrase()

      shallow(<Label content={text} />)
        .should.contain.text(text)
    })
  })

  describe('image', () => {
    it('adds an image class when true', () => {
      shallow(<Label image />)
        .should.have.className('image')
    })
    it('does not add an Image when true', () => {
      shallow(<Label image />)
        .should.not.have.descendants('Image')
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Label />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (e) when clicked', () => {
      const spy = sandbox.spy()
      const event = { target: null }

      shallow(<Label onClick={spy} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event)
    })
  })

  describe('pointing', () => {
    it('adds an poiting class when true', () => {
      shallow(<Label pointing />)
        .should.have.className('pointing')
    })

    it('does not add any poiting option class when true', () => {
      const options = Label._meta.props.pointing
      const wrapper = shallow(<Label pointing />)

      options.map(className => wrapper.should.not.have.className(className))
    })

    it('adds `above` as suffix', () => {
      shallow(<Label pointing='above' />)
        .should.have.className('pointing above')
    })

    it('adds `below` as suffix', () => {
      shallow(<Label pointing='below' />)
        .should.have.className('pointing below')
    })

    it('adds `left` as prefix', () => {
      shallow(<Label pointing='left' />)
        .should.have.className('left pointing')
    })

    it('adds `right` as prefix', () => {
      shallow(<Label pointing='right' />)
        .should.have.className('right pointing')
    })
  })
})
