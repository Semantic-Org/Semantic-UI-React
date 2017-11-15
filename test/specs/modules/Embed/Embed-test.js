import React from 'react'

import Embed from 'src/modules/Embed/Embed'
import * as common from 'test/specs/commonTests'

const assertIframeSrc = (props, srcPart) => {
  const {
    id = 'default-test-id',
    source = 'youtube',
    ...rest
  } = props

  shallow(<Embed active id={id} source={source} {...rest} />)
    .find('iframe')
    .should.have.attr('src')
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
  common.implementsIconProp(Embed)

  common.propKeyOnlyToClassName(Embed, 'active')

  common.propValueOnlyToClassName(Embed, 'aspectRatio', ['4:3', '16:9', '21:9'])

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
      const children = 'child text'

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
      shallow(<Embed defaultActive />)
        .should.have.state('active', true)

      shallow(<Embed defaultActive={false} />)
        .should.have.state('active', false)
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
      const url = 'foo.png'

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
        shallow(<Embed active id='foo' source={source} />)
          .find('iframe')
          .should.have.attr('title')
          .which.equals(`Embedded content from ${source}.`)
      })
    })
  })

  describe('url', () => {
    it('passes url to iframe', () => {
      const url = 'https://google.com'

      shallow(<Embed active url={url} />)
        .find('iframe')
        .should.have.attr('src', url)
    })
  })
})
