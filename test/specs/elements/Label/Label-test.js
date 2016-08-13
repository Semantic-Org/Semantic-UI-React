import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Label from 'src/elements/Label/Label'
import Image from 'src/elements/Image/Image'

describe('Label Component', () => {
  common.isConformant(Label)
  common.hasUIClassName(Label)
  common.rendersChildren(Label)

  common.propKeyOnlyToClassName(Label, 'basic')
  common.propKeyOnlyToClassName(Label, 'circular')
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

  describe('(empty) circular', () => {
    it('is added to className when there are no children', () => {
      shallow(<Label circular />)
        .should.have.className('empty circular')
    })

    it('is not added to className when there are children', () => {
      shallow(<Label circular>Child</Label>)
        .should.not.have.className('empty circular')
    })
  })

  describe('detail', () => {
    it('renders detail as a div', () => {
      shallow(<Label detail={faker.hacker.noun()} />)
        .find('.detail')
        .should.have.tagName('div')
    })

    it('has no detail when not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('.detail')
    })

    it('adds a detail last child', () => {
      shallow(<Label detail={faker.hacker.noun()}><br /></Label>)
        .children()
        .last()
        .should.match('.detail')
    })

    it('adds the value as the detail text', () => {
      const detail = faker.hacker.noun()
      shallow(<Label detail={detail} />)
        .find('.detail')
        .should.contain.text(detail)
    })
  })

  describe('detailLink', () => {
    it('has no detail when not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('.detail')
    })

    it('renders detail as an a tag', () => {
      shallow(<Label detail={faker.hacker.noun()} detailLink />)
        .find('.detail')
        .should.have.tagName('a')
    })
  })

  describe('icon', () => {
    it('adds a i as first child', () => {
      shallow(<Label icon={faker.hacker.noun()}><br /></Label>)
        .childAt(0)
        .should.match('i')
    })
  })

  describe('image', () => {
    it('has no img when prop is not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('img')
    })

    it('adds image className when defined', () => {
      const src = faker.internet.avatar()
      shallow(<Label image={src} />)
        .should.have.className('image')
    })

    it('adds image className when there is an img child', () => {
      shallow(<Label><img /></Label>)
        .should.have.className('image')
    })

    it('adds image className when there is an Image child', () => {
      shallow(<Label><Image /></Label>)
        .should.have.className('image')
    })

    it('adds an img as first child', () => {
      shallow(<Label image={faker.internet.avatar()}><br /></Label>)
        .find('Image')
        .should.have.tagName('img')
    })

    it('adds the value to the Image className', () => {
      const src = faker.internet.avatar()
      shallow(<Label image={src} />)
        .find('Image')
        .should.have.prop('src', src)
    })
  })

  describe('link', () => {
    it('does not render label as an "a" when not defined', () => {
      shallow(<Label />)
        .should.not.have.tagName('a')
    })

    it('renders label as an "a"', () => {
      shallow(<Label link />)
        .should.have.tagName('a')
    })
  })

  describe('onClick', () => {
    it('does not render as an "a" when not defined', () => {
      shallow(<Label />)
        .should.not.have.tagName('a')
    })
    it('renders label as an "a"', () => {
      shallow(<Label onClick={() => {
      }} />)
        .should.have.tagName('a')
    })
    it('is called when label is clicked', () => {
      const props = {
        onClick: sandbox.spy(),
      }

      // mount to get click event to propagate on click
      mount(<Label {...props} />)
        .simulate('click')

      props.onClick.should.have.been.calledOnce()
    })
  })

  describe('onRemove', () => {
    it('has no delete icon when not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('.delete')
    })

    it('adds a delete icon as last child', () => {
      shallow(<Label onRemove={() => {
      }}><br /></Label>)
        .children()
        .last()
        .should.match('.delete')
    })

    it('is called when delete icon is clicked', () => {
      const props = {
        onRemove: sandbox.spy(),
      }

      // mount to get click event to propagate on click
      mount(<Label {...props} />)
        .find('.delete')
        .simulate('click')

      props.onRemove.should.have.been.calledOnce()
    })
  })

  describe('onDetailClick', () => {
    it('renders detail as an a tag', () => {
      shallow(<Label detail={faker.hacker.noun()} onDetailClick={() => {
      }} />)
        .should.have.descendants('a.detail')
    })

    it('is called when detail is clicked', () => {
      const props = {
        detail: faker.hacker.noun(),
        onDetailClick: sandbox.spy(),
      }

      // mount to get click event to propagate on click
      mount(<Label {...props} />)
        .find('.detail')
        .simulate('click')

      props.onDetailClick.should.have.been.calledOnce()
    })
  })

  describe('removable', () => {
    it('has no delete icon when not defined', () => {
      shallow(<Label />)
        .should.not.have.descendants('.delete')
    })

    it('adds a delete icon as last child', () => {
      shallow(<Label removable><br /></Label>)
        .children()
        .last()
        .should.match('.delete')
    })
  })

  describe('text', () => {
    it('has no text by default', () => {
      shallow(<Label />)
        .text()
        .should.be.empty()
    })

    it('adds the value as children', () => {
      const text = faker.hacker.phrase()
      shallow(<Label text={text} />)
        .children()
        .should.contain.text(text)
    })
  })
})
