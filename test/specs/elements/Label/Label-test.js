import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Label from 'src/elements/Label/Label'
import LabelDetail from 'src/elements/Label/LabelDetail'

describe('Label Component', () => {
  common.isConformant(Label)
  common.hasUIClassName(Label)
  common.hasSubComponents(Label, [LabelDetail])
  common.rendersChildren(Label)

  common.propKeyOnlyToClassName(Label, 'above')
  common.propKeyOnlyToClassName(Label, 'basic')
  common.propKeyOnlyToClassName(Label, 'below')
  common.propKeyOnlyToClassName(Label, 'circular')
  common.propKeyOnlyToClassName(Label, 'empty')
  common.propKeyOnlyToClassName(Label, 'floating')
  common.propKeyOnlyToClassName(Label, 'horizontal')
  common.propKeyOnlyToClassName(Label, 'tag')

  common.propValueOnlyToClassName(Label, 'color')
  common.propValueOnlyToClassName(Label, 'size')

  common.propKeyAndValueToClassName(Label, 'attached')

  common.propKeyOrValueToClassName(Label, 'corner')
  common.propKeyOrValueToClassName(Label, 'pointing')
  common.propKeyOrValueToClassName(Label, 'ribbon')

  common.implementsIconProp(Label)

  it('is a div by default', () => {
    shallow(<Label />)
      .should.have.tagName('div')
  })

  describe('detail', () => {
    it('has no LabelDetail when not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('LabelDetail')
    })

    it('adds the LabelDetail sub-component', () => {
      const text = faker.hacker.phrase()

      shallow(<Label detail={text} />)
        .should.contain(<LabelDetail content={text} />)
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
    it('adds an Image when given a name', () => {
      shallow(<Label image={faker.image.imageUrl()} />)
        .should.have.descendants('Image')
    })
    it('does not add an image class given a name', () => {
      shallow(<Label image={faker.image.imageUrl()} />)
        .should.not.have.className('image')
    })
  })

  describe('onClick', () => {
    it('can be omitted', () => {
      const click = () => mount(<Label />).simulate('click')

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
})
