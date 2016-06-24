import React from 'react'
import faker from 'faker'
import Header from 'src/elements/Header/Header'
import Icon from 'src/elements/Icon/Icon'
import Image from 'src/elements/Image/Image'
import H1 from 'src/elements/Header/HeaderH1'
import H2 from 'src/elements/Header/HeaderH2'
import H3 from 'src/elements/Header/HeaderH3'
import H4 from 'src/elements/Header/HeaderH4'
import H5 from 'src/elements/Header/HeaderH5'
import H6 from 'src/elements/Header/HeaderH6'
import Subheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('Header', () => {
  common.isConformant(Header)
  common.hasSubComponents(Header, [
    H1, H2, H3, H4, H5, H6, Subheader,
  ])

  describe('with icon', () => {
    const icon = <Icon className='settings' />
    const wrapper = mount(<Header className='icon' icon={icon} />)
    it('adds an Icon', () => {
      wrapper.should.have.descendants('Icon')
    })
  })

  describe('with image', () => {
    const image = <Image src={faker.image.city(120, 120)} />
    const wrapper = mount(<Header image={image} />)
    it('adds an image', () => {
      wrapper.should.have.descendants('Image')
    })
  })
})
