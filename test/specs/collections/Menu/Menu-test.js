import faker from 'faker'
import React from 'react'
import { Simulate } from 'react-addons-test-utils'
import { Menu, MenuItem } from 'stardust'

let string
describe('Menu', () => {
  beforeEach(() => {
    string = faker.hacker.phrase()
  })

  it('should render children', () => {
    // TODO: Menu does not render child text without a containing element
    render(<Menu><i>{string}</i></Menu>)
      .assertText(string)
  })

  describe('MenuItem', () => {
    it('uses the name prop as text', () => {
      render(<MenuItem name='This is an item' />)
        .assertText('This is an item')
    })
    it('should not have a label by default', () => {
      render(<MenuItem name='item' />)
        .scryClass('sd-menu-label')
        .should.have.length(0)
    })
    it('should not have active class by default', () => {
      render(<MenuItem name='item' />)
        .scryClass('active')
        .should.have.length(0)
    })
    it('should render a label if prop given', () => {
      render(<MenuItem name='item' label='37' />)
        .findClass('sd-menu-label')
        .textContent
        .should.equal('37')
    })
    it('should have active class if first child', () => {
      const [firstItem, secondItem] = render(
        <Menu>
          <MenuItem name='item1' />
          <MenuItem name='item2' />
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
      const [firstItem, secondItem] = render(
        <Menu>
          <MenuItem name='item1' />
          <MenuItem name='item2' />
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
