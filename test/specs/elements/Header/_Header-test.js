import React from 'react'
import faker from 'faker'

import _Header from 'src/elements/Header/_Header'
import * as common from 'test/specs/commonTests'

import Icon from 'src/elements/Icon/Icon'
import Image from 'src/elements/Image/Image'

describe.only('_Header', () => {
  common.hasUIClassName(_Header)
  common.rendersChildren(_Header)

  common.propKeyOnlyToClassName(_Header, 'dividing')
  common.propKeyOnlyToClassName(_Header, 'block')
  common.propKeyOnlyToClassName(_Header, 'inverted')
  common.propKeyOnlyToClassName(_Header, 'disabled')

  common.propKeyAndValueToClassName(_Header, 'floated')
  common.propKeyOrValueToClassName(_Header, 'attached')

  common.propValueOnlyToClassName(_Header, 'color')

  common.implementsAlignedProp(_Header)

  // ------------------------------------
  // Add Icon/Image test to commonTests ?
  // ------------------------------------

  describe('icon', () => {
    const icon = faker.hacker.noun()
    it('has no i when not defined', () => {
      shallow(<_Header />)
        .should.not.have.descendants('i')
    })

    it('adds an icon when icon prop is Icon instance', () => {
      shallow(<_Header icon={<Icon className={icon} />} />)
        .childAt(0)
        .should.match('i')
    })

    it('adds an icon when icon prop is icon class string', () => {
      shallow(<_Header icon={icon} />)
        .childAt(0)
        .should.match('i')
    })

    it('adds the value to the Icon className', () => {
      shallow(<_Header icon={icon} />)
        .find('Icon')
        .should.have.className(icon)
    })
  })

  describe('image', () => {
    const image = faker.internet.avatar()
    it('has no img when not defined', () => {
      shallow(<_Header />)
        .should.not.have.descendants('img')
    })

    it('adds an image when icon prop is Image instance', () => {
      shallow(<_Header image={<Image src={image} />} />)
        .childAt(0)
        .should.match('img')
    })

    it('adds an image when image prop is image path', () => {
      shallow(<_Header image={image} />)
        .childAt(0)
        .should.match('img')
    })

    it('adds the value to the Image src prop', () => {
      shallow(<_Header image={image} />)
        .childAt(0)
        .should.have.attr('src').equal(image)
    })
  })
})
