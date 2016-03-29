import faker from 'faker'
import React from 'react'
import { Simulate } from 'react-addons-test-utils'
import { Menu } from 'stardust'

let string
describe('Menu', () => {
  beforeEach(() => {
    string = faker.hacker.phrase()
  })

  it('should render children', () => {
    // TODO: Menu does not render child text without a containing element
    deprecatedRender(<Menu><i>{string}</i></Menu>)
      .assertText(string)
  })

  describe('Menu.Item', () => {
    it('uses the name prop as text', () => {
      deprecatedRender(<Menu.Item name='This is an item' />)
        .assertText('This is an item')
    })
    it('should not have a label by default', () => {
      deprecatedRender(<Menu.Item name='item' />)
        .scryClass('sd-menu-label')
        .should.have.length(0)
    })
    it('should not have active class by default', () => {
      deprecatedRender(<Menu.Item name='item' />)
        .scryClass('active')
        .should.have.length(0)
    })
    it('should render a label if prop given', () => {
      deprecatedRender(<Menu.Item name='item' label='37' />)
        .findClass('sd-menu-label')
        .textContent
        .should.equal('37')
    })
    it('should have active class if first child', () => {
      const [firstItem, secondItem] = deprecatedRender(
        <Menu>
          <Menu.Item name='item1' />
          <Menu.Item name='item2' />
        </Menu>
      ).scryClass('sd-menu-item')

      firstItem
        .getAttribute('class')
        .should.contain('active')
      secondItem
        .getAttribute('class')
        .should.not.contain('active')
    })

    it('should have active class after click', () => {
      const [firstItem, secondItem] = deprecatedRender(
        <Menu>
          <Menu.Item name='item1' />
          <Menu.Item name='item2' />
        </Menu>
      ).scryClass('sd-menu-item')

      Simulate.click(secondItem)

      firstItem
        .getAttribute('class')
        .should.not.contain('active')
      secondItem
        .getAttribute('class')
        .should.contain('active')
    })
  })
})
