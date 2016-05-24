import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as domEvent from 'test/utils/domEvent'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

let attachTo
let options
let defaultProps
let wrapper

// ----------------------------------------
// Wrapper
// ----------------------------------------
// we need to unmount the dropdown after every test to ensure all event listeners are cleaned up
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (node, opts) => {
  attachTo = document.createElement('div')
  document.body.appendChild(attachTo)

  wrapper = mount(node, { ...opts, attachTo })
  return wrapper
}
const wrapperShallow = (...args) => (wrapper = shallow(...args))
const wrapperRender = (...args) => (wrapper = render(...args))

// ----------------------------------------
// Options
// ----------------------------------------
const getOptions = (count = 5) => _.times(count, n => {
  const text = _.times(3, faker.hacker.noun).join(' ')
  const value = _.snakeCase(text)
  return { text, value }
})

// -------------------------------
// Common Assertions
// -------------------------------
const dropdownMenuIsClosed = () => {
  const menu = wrapper.find('DropdownMenu')
  wrapper.should.not.have.className('visible')
  menu.should.not.have.className('visible')
}

const dropdownMenuIsOpen = () => {
  const menu = wrapper.find('DropdownMenu')
  wrapper.should.have.className('active')
  wrapper.should.have.className('visible')
  menu.should.have.className('visible')
}

describe('Dropdown Component', () => {
  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
    options = getOptions()
    defaultProps = { options }
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.isConformant(Dropdown, defaultProps)
  common.hasUIClassName(Dropdown, defaultProps)
  common.isTabbable(Dropdown, defaultProps)
  common.propKeyOnlyToClassName(Dropdown, 'multiple', defaultProps)
  common.propKeyOnlyToClassName(Dropdown, 'search', defaultProps)
  common.propKeyOnlyToClassName(Dropdown, 'selection', defaultProps)

  it('does not add a hidden input by default', () => {
    wrapperMount(<Dropdown {...defaultProps} />)
      .find('input[type="hidden"]')
      .should.not.be.present()
  })

  // TODO: see Dropdown.handleBlur() todo
  // it('closes on blur', () => {
  //   wrapperMount(<Dropdown {...requiredProps} />)
  //     .simulate('click')
  //
  //   dropdownMenuIsOpen()
  //
  //   wrapper
  //     .simulate('blur')
  //
  //   dropdownMenuIsClosed()
  // })

  // TODO: see Dropdown.handleFocus() todo
  // it('opens on focus', () => {
  //   wrapperMount(<Dropdown {...requiredProps} />)
  //
  //   dropdownMenuIsClosed()
  //
  //   wrapper
  //     .simulate('focus')
  //
  //   dropdownMenuIsOpen()
  // })

  describe('selected item', () => {
    it('defaults to the first item', () => {
      wrapperShallow(<Dropdown {...defaultProps} />)
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', true)
    })
    it('is set when clicking an item', () => {
      // random item, skip the first as its selected by default
      const randomIndex = 1 + _.random(options.length - 2)

      wrapperMount(<Dropdown {...defaultProps} />)
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')
        .should.have.prop('selected', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // selection moved to second item
      wrapper
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', false)

      wrapper
        .find('DropdownItem')
        .at(1)
        .should.have.prop('selected', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      // open
      wrapper
        .simulate('click')
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', true)

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // selection moved to last item
      wrapper
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', false)

      wrapper
        .find('DropdownItem')
        .at(options.length - 1)
        .should.have.prop('selected', true)
    })
    it('skips over items filtered by search', () => {
      const opts = [
        { text: 'a1', value: 'a1' },
        { text: 'skip this one', value: 'skip this one' },
        { text: 'a2', value: 'a2' },
      ]
      // search for 'a'
      wrapperMount(<Dropdown options={opts} search />)
        .simulate('click')
        // TODO: simulate on change to input
        .setState({ searchQuery: 'a' })

      wrapper
        .find('.selected')
        .should.contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      wrapper
        .find('.selected')
        .should.contain.text('a2')
    })
    it('scrolls the selected item into view', () => {
      // get enough options to make the menu scrollable
      const opts = getOptions(20)

      wrapperMount(<Dropdown options={opts} />)
        .simulate('click')

      dropdownMenuIsOpen()
      const menu = document.querySelector('.ui.dropdown .menu.visible')

      //
      // Scrolls to bottom
      //

      // make sure first item is selected
      wrapper
        .find('.selected')
        .should.contain.text(opts[0].text)

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // make sure last item is selected
      wrapper
        .find('.selected')
        .should.contain.text(_.tail(opts).text)

      // menu should be completely scrolled to the bottom
      const isMenuScrolledToBottom = menu.scrollTop + menu.clientHeight === menu.scrollHeight
      isMenuScrolledToBottom.should.be.true(
        'When the last item in the list was selected, DropdownMenu did not scroll to bottom.'
      )

      //
      // Scrolls back to top
      //

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // make sure first item is selected
      wrapper
        .find('.selected')
        .should.contain.text(opts[0].text)

      // menu should be completely scrolled to the bottom
      const isMenuScrolledToTop = menu.scrollTop === 0
      isMenuScrolledToTop.should.be.true(
        'When the first item in the list was selected, DropdownMenu did not scroll to top.'
      )
    })
    it('becomes active on enter when open', () => {
      const item = wrapperMount(<Dropdown {...defaultProps} />)
        .simulate('click')
        .find('DropdownItem')
        .at(1)

      // initial item props
      item.should.have.prop('selected', false)
      item.should.have.prop('active', false)

      // select and make active
      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })

      item.should.have.prop('active', true)
    })
    it('closes the menu', () => {
      wrapperMount(<Dropdown {...defaultProps} />)
        .simulate('click')

      dropdownMenuIsOpen()

      // choose an item closes
      domEvent.keyDown(document, { key: 'Enter' })
      dropdownMenuIsClosed()
    })
  })

  describe('value', () => {
    it('sets the corresponding item to active', () => {
      const { value } = _.sample(options)

      wrapperShallow(<Dropdown {...defaultProps} value={value} />)
        .children()
        .find({ value })
        .should.have.prop('active', true)
    })

    it('sets the corresponding item text', () => {
      const { text, value } = _.sample(options)

      wrapperShallow(<Dropdown value={value} {...defaultProps} />)
        .children()
        .find({ value })
        .should.have.prop('text', text)
    })

    it('updates active item when changed', () => {
      const value = _.sample(options).value
      let next
      while (!next || next === value) next = _.sample(options).value

      wrapperShallow(<Dropdown value={value} {...defaultProps} />)

      // initial active item
      wrapper
        .children()
        .find({ value })
        .should.have.prop('active', true)

      // change value
      wrapper
        .setProps({ value: next })

      // next active item
      wrapper
        .children()
        .find({ value: next })
        .should.have.prop('active', true)
    })

    it('updates text when value changed', () => {
      const sample = _.sample(options)
      let next
      while (!next || next === sample) next = _.sample(options)

      wrapperMount(<Dropdown {...defaultProps} value={sample.value} />)
        .find('.text')
        .should.contain.text(sample.text)

      wrapper
        .setProps({ value: next.value })
        .find('.text')
        .should.contain.text(next.text)
    })
  })

  describe('text', () => {
    it('sets the display text', () => {
      const text = faker.hacker.phrase()

      wrapperRender(<Dropdown {...defaultProps} text={text} />)
        .find('.text')
        .should.contain.text(text)
    })
    it('prevents updates on item click if defined', () => {
      const text = faker.hacker.phrase()

      wrapperMount(<Dropdown {...defaultProps} text={text} />)
        .simulate('click')
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      wrapper
        .find('.text')
        .should.contain.text(text)
    })
    it('is updated on item click if not already defined', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      // open
      wrapper.simulate('click')

      // click item
      const item = wrapper
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      // text updated
      wrapper
        .find('.text')
        .should.contain.text(item.text())
    })
  })

  describe('menu', () => {
    // DO NOT simulate events on 'document', use the 'domEvent` util
    // simulate() only uses React's internal event system
    // it does not touch the actual DOM at all so it can't use any of the DOM event handlers.
    // We listen for keydown on the raw DOM, not in a React component.
    // https://github.com/facebook/react/issues/5043

    it('opens on dropdown click', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })

    it('opens on arrow down when focused', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsOpen()
    })

    it('opens on arrow up when focused', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowUp' })
      dropdownMenuIsOpen()
    })

    it('opens on space when focused and closed', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: ' ' })
      dropdownMenuIsOpen()
    })

    it('does not call open on space if already open', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'open')

      dropdownMenuIsClosed()
      instance.open.should.not.have.been.called()

      // first time
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: ' ' })

      dropdownMenuIsOpen()
      instance.open.should.have.been.calledOnce()

      // second time
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: ' ' })

      dropdownMenuIsOpen()
      instance.open.should.have.been.calledOnce()
    })

    it('does not open on arrow down when not focused', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsClosed()
    })

    it('does not open on space when not focused', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: ' ' })
      dropdownMenuIsClosed()
    })

    it('closes on menu item click', () => {
      wrapperMount(<Dropdown {...defaultProps} />)
      const item = wrapper
        .find('DropdownItem')
        .at(_.random(options.length - 1))

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // select item
      item.simulate('click')
      dropdownMenuIsClosed()
    })

    it('closes on click outside', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // click outside
      domEvent.click(document)
      dropdownMenuIsClosed()
    })

    it('closes on esc key', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      // open
      wrapper
        .find('Dropdown')
        .simulate('click')
      dropdownMenuIsOpen()

      // esc
      domEvent.keyDown(document, { key: 'Escape' })
      dropdownMenuIsClosed()
    })
  })

  describe('multiple', () => {
    it('does not close the menu on item selection with enter', () => {
      wrapperMount(<Dropdown {...defaultProps} multiple />)
        .simulate('click')

      dropdownMenuIsOpen()

      // choose an item keeps menu open
      domEvent.keyDown(document, { key: 'Enter' })

      dropdownMenuIsOpen()
    })
    it('does not close the menu on clicking on an item', () => {
      wrapperMount(<Dropdown {...defaultProps} multiple />)
        .simulate('click')
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      dropdownMenuIsOpen()
    })
  })

  describe('onChange', () => {
    let spy
    beforeEach(() => (spy = sandbox.spy()))

    it('is a prop on the hidden input', () => {
      wrapperShallow(<Dropdown {...defaultProps} selection onChange={spy} />)
        .find('input[type="hidden"]')
        .should.have.prop('onChange')
    })
    it('is called on item click', () => {
      wrapperMount(<Dropdown {...defaultProps} onChange={spy} />)
        .simulate('click')
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      spy.should.have.been.called()
    })
    it('is called when pressing enter on a selected item', () => {
      wrapperMount(<Dropdown {...defaultProps} onChange={spy} />)
        .simulate('click')

      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })

      spy.should.have.been.called()
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).value
      let next
      while (!next || next === value) next = _.sample(options).value

      wrapperMount(<Dropdown {...defaultProps} value={value} onChange={spy} />)
        .setProps({ value: next })

      spy.should.not.have.been.called()
    })
  })

  describe('options', () => {
    it('adds the onClick handler to all items', () => {
      wrapperShallow(<Dropdown {...defaultProps} />)
        .children('DropdownItem')
        .everyWhere(item => item.should.have.prop('onClick'))
    })
    it('calls handleItemClick when an item is clicked', () => {
      wrapperMount(<Dropdown {...defaultProps} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'handleItemClick')

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      instance.handleItemClick.should.not.have.been.called()

      // click random item
      wrapper
        .find('DropdownItem')
        .at(_.random(0, options.length - 1))
        .simulate('click')

      instance.handleItemClick.should.have.been.calledOnce()
    })
  })

  describe('selection', () => {
    it('adds a hidden input', () => {
      wrapperRender(<Dropdown {...defaultProps} selection />)
        .find('input[type="hidden"]')
        .should.be.present()
    })
  })

  describe('search', () => {
    it('does not add a search input when not defined', () => {
      wrapperShallow(<Dropdown {...defaultProps} />)
        .should.not.have.descendants('input.search')
    })

    it('adds a search input when present', () => {
      wrapperRender(<Dropdown {...defaultProps} search />)
        .should.have.descendants('input.search')
    })

    it('sets focus to the search input on open', () => {
      wrapperMount(<Dropdown {...defaultProps} search />)
        .simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      searchIsFocused.should.be.true(
        `Expected "input.search" to be the active element but found ${activeElement} instead.`
      )
    })

    it('removes Dropdown tabIndex', () => {
      wrapperShallow(<Dropdown {...defaultProps} search />)
        .should.not.have.prop('tabIndex')
    })

    it('has a search input with a tabIndex of 0', () => {
      wrapperShallow(<Dropdown {...defaultProps} search />)
        .find('input.search')
        .should.have.prop('tabIndex', '0')
    })

    it('clears the search query when an item is selected', () => {
      // search for random item
      const searchQuery = _.sample(options).text

      wrapperMount(<Dropdown {...defaultProps} search />)

      // open and simulate search
      wrapper
        .simulate('click')
        .setState({ searchQuery })

      // click first item (we searched for exact text)
      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')

      // bye bye search query
      wrapper.should.have.state('searchQuery', '')
    })

    it('opens the menu on change if there is a query and not already open', () => {
      wrapperMount(<Dropdown {...defaultProps} search />)

      dropdownMenuIsClosed()

      // simulate search
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: faker.hacker.noun() } })

      dropdownMenuIsOpen()
    })

    it('does not call onChange on query change', () => {
      const onChangeSpy = sandbox.spy()
      wrapperMount(<Dropdown {...defaultProps} search onChange={onChangeSpy} />)

      // simulate search
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: faker.hacker.noun() } })

      onChangeSpy.should.not.have.been.called()
    })

    it('filters the items based on display text', () => {
      const search = wrapperMount(<Dropdown {...defaultProps} search />)
        .find('input.search')

      // search for value yields 0 results
      search.simulate('change', { target: { value: _.sample(options).value } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(0, "Searching for an item's value did not yield 0 results.")

      // search for text yields 1 result
      search.simulate('change', { target: { value: _.sample(options).text } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1, "Searching for an item's text did not yield any results.")
    })

    it('sets the selected item to the first search result', () => {
      const search = wrapperMount(<Dropdown {...defaultProps} search />)
        .find('input.search')

      // the first item is selected by default
      // avoid it to prevent false positives

      wrapper.setState({ selectedIndex: _.random(1, options.length - 2) })

      search.simulate('change', { target: { value: faker.hacker.noun() } })

      wrapper.should.have.state('selectedIndex', 0)
    })

    it('shows a message when there are no results', () => {
      const search = wrapperMount(<Dropdown {...defaultProps} search />)
        .find('input.search')

      wrapper
        .find('.message')
        .should.not.be.present()

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      wrapper
        .find('.message')
        .should.be.present()
    })

    it('still allows moving selection after blur/focus', () => {
      // open, first item is selected
      const search = wrapperMount(<Dropdown {...defaultProps} search />)
        .find('input.search')
        .simulate('focus')

      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsOpen()

      const items = wrapper
        .find('DropdownItem')

      items
        .first()
        .should.have.prop('selected', true)

      // blur, focus, move item selection down
      search
        .simulate('blur')
        .simulate('focus')

      domEvent.keyDown(document, { key: 'ArrowDown' })

      items
        .first()
        .should.have.prop('selected', false)

      items
        .at(1)
        .should.have.prop('selected', true)

      // blur, focus, move item selection up
      search
        .simulate('blur')
        .simulate('focus')

      domEvent.keyDown(document, { key: 'ArrowUp' })

      items
        .first()
        .should.have.prop('selected', true)

      items
        .at(1)
        .should.not.have.prop('selected', true)
    })
  })

  describe('render', () => {
    it('calls renderText', () => {
      wrapperShallow(<Dropdown {...defaultProps} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'renderText')

      instance.renderText
        .should.not.have.been.called()

      instance.render()

      instance.renderText
        .should.have.been.called()
    })

    it('calls renderPlaceholder', () => {
      wrapperShallow(<Dropdown {...defaultProps} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'renderPlaceholder')

      instance.renderPlaceholder
        .should.not.have.been.called()

      instance.render()

      instance.renderPlaceholder
        .should.have.been.called()
    })
  })
})
