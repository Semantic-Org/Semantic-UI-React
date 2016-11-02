import faker from 'faker'
import React from 'react'

import Embed from 'src/modules/Embed/Embed'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const assertIframeSrc = (props, srcPart) => {
  const {
    source = 'youtube',
    sourceId = faker.random.word(),
    ...rest,
  } = props

  shallow(<Embed active source={source} sourceId={sourceId} {...rest} />)
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

  describe('defaultActive', () => {
    it('sets the initial active state', () => {
      const value = faker.random.boolean()

      shallow(<Embed defaultActive={value} />)
        .should.have.state('active', value)
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Embed />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (event, props) on click', () => {
      const spy = sandbox.spy()
      const event = { target: null }
      const props = { active: faker.random.boolean() }

      mount(<Embed onClick={spy} {...props} />)
        .simulate('click', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event, props)
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

  describe('source', () => {
    it('generates url for YouTube', () => {
      const sourceId = faker.random.word()

      assertIframeSrc({ sourceId }, `//www.youtube.com/embed/${sourceId}`)
    })

    it('generates url for Vimeo', () => {
      const sourceId = faker.random.word()

      assertIframeSrc(
        { source: 'vimeo', sourceId },
        `//player.vimeo.com/video/${sourceId}`
      )
    })
  })

  describe('sourceAutoPlay', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ sourceAutoPlay: true }, '&amp;autoplay=true')
      assertIframeSrc({ sourceAutoPlay: false }, '&amp;autoplay=false')
    })
  })

  describe('sourceBrandedUI', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ sourceBrandedUI: true }, '&amp;modestbranding=true')
      assertIframeSrc({ sourceBrandedUI: false }, '&amp;modestbranding=false')
    })
  })

  describe('sourceColor', () => {
    it('generates url part for source', () => {
      const color = faker.internet.color()
      assertIframeSrc({ sourceColor: color }, `&amp;color=${encodeURIComponent(color)}`)
    })
  })

  describe('sourceHd', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ sourceHd: true }, '&amp;hq=true')
      assertIframeSrc({ sourceHd: false }, '&amp;hq=false')
    })
  })

  describe('sourceUrl', () => {
    it('passes url to iframe', () => {
      const url = faker.internet.url()

      shallow(<Embed active sourceUrl={url} />)
        .find('iframe')
        .should.have.attr('src', url)
    })
  })
})
