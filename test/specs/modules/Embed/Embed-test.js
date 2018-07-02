import React from 'react'

import Embed from 'src/modules/Embed/Embed'
import * as common from 'test/specs/commonTests'

const assertIframeSrc = (props, srcPart) => {
  const { id = 'default-test-id', source = 'youtube', ...rest } = props

  expect(shallow(<Embed active id={id} source={source} {...rest} />).find('iframe'))
    .have.attr('src')
    .which.contains(srcPart)
}

describe('Embed', () => {
  common.isConformant(Embed)
  common.hasUIClassName(Embed)
  common.rendersChildren(Embed, {
    requiredProps: { active: true },
  })

  common.implementsHTMLIFrameProp(Embed, {
    alwaysPresent: true,
    assertExactMatch: false,
    requiredProps: {
      active: true,
      id: 'default-test-id',
      source: 'youtube',
    },
    shorthandDefaultProps: {
      allowFullScreen: false,
      frameBorder: 0,
      height: '100%',
      scrolling: 'no',
      title: 'Embedded content from youtube.',
      width: '100%',
    },
  })
  common.implementsIconProp(Embed, { alwaysPresent: true })

  common.propKeyOnlyToClassName(Embed, 'active')

  common.propValueOnlyToClassName(Embed, 'aspectRatio', ['4:3', '16:9', '21:9'])

  describe('active', () => {
    it('defaults to false', () => {
      expect(shallow(<Embed />)).have.not.state('active')
    })

    it('passes to state', () => {
      expect(shallow(<Embed active />)).have.state('active', true)
    })

    it('renders nothing when false', () => {
      const children = 'child text'

      expect(shallow(<Embed>{children}</Embed>)).not.toContain(
        <div className='embed'>{children}</div>,
      )
    })
  })

  describe('autoplay', () => {
    it('generates url part for source', () => {
      assertIframeSrc({ autoplay: true }, '&amp;autoplay=true')
      assertIframeSrc({ autoplay: false }, '&amp;autoplay=false')
    })
  })

  describe('brandedUI', () => {
    it('generates "modestbranding" url parameter', () => {
      assertIframeSrc({ brandedUI: true }, '&amp;modestbranding=true')
      assertIframeSrc({ brandedUI: false }, '&amp;modestbranding=false')
    })

    it('generates "rel" url parameter', () => {
      assertIframeSrc({ brandedUI: true }, '&amp;rel=0')
      assertIframeSrc({ brandedUI: false }, '&amp;rel=1')
    })
  })

  describe('color', () => {
    it('generates url part for source', () => {
      const color = 'red'
      assertIframeSrc({ color }, `&amp;color=${encodeURIComponent(color)}`)
    })
  })

  describe('defaultActive', () => {
    it('sets the initial active state', () => {
      expect(shallow(<Embed defaultActive />)).have.state('active', true)

      expect(shallow(<Embed defaultActive={false} />)).have.state('active', false)
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
      expect(shallow(<Embed />).find('img.placeholder')).toHaveLength(0)
    })

    it('renders img when defined', () => {
      const url = '/images/wireframe/image.png'

      expect(shallow(<Embed placeholder={url} />)).toContain(
        <img className='placeholder' src={url} />,
      )
    })
  })

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<Embed />).simulate('click')
      expect(click).not.toThrowError()
    })

    it('updates state', () => {
      const wrapper = mount(<Embed />)

      wrapper.simulate('click')
      expect(wrapper).have.state('active', true)
    })

    it('omits state update if active', () => {
      const wrapper = mount(<Embed active />)

      wrapper.simulate('click')
      expect(wrapper).have.state('active', true)
    })
  })

  describe('source', () => {
    it('generates url for YouTube', () => {
      const id = 'foo'

      assertIframeSrc({ id }, `//www.youtube.com/embed/${id}`)
    })

    it('generates url for Vimeo', () => {
      const id = 'foo'

      assertIframeSrc({ source: 'vimeo', id }, `//player.vimeo.com/video/${id}`)
    })

    it('sets the iframe title', () => {
      const sources = ['youtube', 'vimeo']

      sources.forEach((source) => {
        expect(shallow(<Embed active id='foo' source={source} />).find('iframe'))
          .have.attr('title')
          .which.equals(`Embedded content from ${source}.`)
      })
    })
  })

  describe('url', () => {
    it('passes url to iframe', () => {
      const url = 'https://google.com'

      expect(shallow(<Embed active url={url} />).find('iframe')).have.attr('src', url)
    })
  })
})
