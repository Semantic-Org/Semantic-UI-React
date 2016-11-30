import faker from 'faker'
import React from 'react'

import Embed from 'src/modules/Embed/Embed'
import * as common from 'test/specs/commonTests'

const assertIframeSrc = (props, srcPart) => {
  const {
    id = faker.random.word(),
    source = 'youtube',
    ...rest,
  } = props

  shallow(<Embed active id={id} source={source} {...rest} />)
    .find('iframe')
    .should.have.attr('src')
    .contain(srcPart)
}

describe('Embed', () => {
  common.isConformant(Embed)
  common.hasUIClassName(Embed)
  common.rendersChildren(Embed, {
    requiredProps: { active: true },
  })

  common.propKeyOnlyToClassName(Embed, 'active')
  common.propValueOnlyToClassName(Embed, 'aspectRatio')

  common.implementsIconProp(Embed)

  describe('active', () => {
    it('defaults to false', () => {
      shallow(<Embed />)
        .should.have.not.state('active')
    })

    it('passes to state', () => {
      shallow(<Embed active />)
        .should.have.state('active', true)
    })

    it('renders nothing when false', () => {
      const children = faker.hacker.phrase()

      shallow(<Embed>{children}</Embed>)
        .should.not.contain(<div className='embed'>{children}</div>)
    })
  })

  describe('autoplay', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ autoplay: true }, '&amp;autoplay=true')
      assertIframeSrc({ autoplay: false }, '&amp;autoplay=false')
    })
  })

  describe('brandedUI', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ brandedUI: true }, '&amp;modestbranding=true')
      assertIframeSrc({ brandedUI: false }, '&amp;modestbranding=false')
    })
  })

  describe('color', () => {
    it('generates url part for source', () => {
      const color = faker.internet.color()
      assertIframeSrc({ color }, `&amp;color=${encodeURIComponent(color)}`)
    })
  })

  describe('defaultActive', () => {
    it('sets the initial active state', () => {
      const value = faker.random.boolean()

      shallow(<Embed defaultActive={value} />)
        .should.have.state('active', value)
    })
  })

  describe('hd', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ hd: true }, '&amp;hq=true')
      assertIframeSrc({ hd: false }, '&amp;hq=false')
    })
  })

  describe('placeholder', () => {
    it('omitted by default', () => {
      shallow(<Embed />)
        .find('img.placeholder')
        .should.have.length(0)
    })

    it('renders img when defined', () => {
      const url = faker.image.imageUrl()

      shallow(<Embed placeholder={url} />)
        .should.contain(<img className='placeholder' src={url} />)
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Embed />).simulate('click')
      expect(click).to.not.throw()
    })

    it('updates state', () => {
      const wrapper = mount(<Embed />)

      wrapper.simulate('click')
      wrapper.should.have.state('active', true)
    })

    it('omits state update if active', () => {
      const wrapper = mount(<Embed active />)

      wrapper.simulate('click')
      wrapper.should.have.state('active', true)
    })
  })

  describe('source', () => {
    it('generates url for YouTube', () => {
      const id = faker.random.word()

      assertIframeSrc({ id }, `//www.youtube.com/embed/${id}`)
    })

    it('generates url for Vimeo', () => {
      const id = faker.random.word()

      assertIframeSrc(
        { source: 'vimeo', id },
        `//player.vimeo.com/video/${id}`
      )
    })
  })

  describe('url', () => {
    it('passes url to iframe', () => {
      const url = faker.internet.url()

      shallow(<Embed active url={url} />)
        .find('iframe')
        .should.have.attr('src', url)
    })
  })
})
