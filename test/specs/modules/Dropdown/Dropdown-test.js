import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as domEvent from 'test/utils/domEvent'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

let attachTo
let options
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
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.isConformant(Dropdown)
  common.hasUIClassName(Dropdown)
  common.isTabbable(Dropdown)
  common.propKeyOnlyToClassName(Dropdown, 'multiple')
  common.propKeyOnlyToClassName(Dropdown, 'search')
  common.propKeyOnlyToClassName(Dropdown, 'selection')

  it('does not add a hidden input by default', () => {
    wrapperMount(<Dropdown />)
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
      wrapperShallow(<Dropdown options={options} selection />)
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', true)
    })
    it('is set when clicking an item', () => {
      // random item, skip the first as its selected by default
      const randomIndex = 1 + _.random(options.length - 2)

      wrapperMount(<Dropdown options={options} selection />)
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')
        .should.have.prop('selected', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Dropdown options={options} selection />)

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
      wrapperMount(<Dropdown options={options} selection />)

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
      wrapperMount(<Dropdown options={opts} search selection />)
        .simulate('click')
        .find('input.search')
        .simulate('change', { target: { value: 'a' } })

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

      wrapperMount(<Dropdown options={opts} selection />)
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
      const item = wrapperMount(<Dropdown options={options} selection />)
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
      wrapperMount(<Dropdown options={options} selection />)
        .simulate('click')

      dropdownMenuIsOpen()

      // choose an item closes
      domEvent.keyDown(document, { key: 'Enter' })
      dropdownMenuIsClosed()
    })
  })

  describe('value', () => {
    it('sets the corresponding item to active', () => {
      const value = _.sample(options).value

      wrapperShallow(<Dropdown options={options} selection value={value} />)
        .find('DropdownItem')
        .find({ value, active: true })
        .should.be.present()
    })

    it('sets the corresponding item text', () => {
      const { text, value } = _.sample(options)

      wrapperShallow(<Dropdown value={value} options={options} selection />)
        .find('DropdownItem')
        .find({ value, text })
        .should.be.present()
    })

    it('updates active item when changed', () => {
      const value = _.sample(options).value
      let next
      while (!next || next === value) next = _.sample(options).value

      wrapperShallow(<Dropdown value={value} options={options} selection />)

      // initial active item
      wrapper
        .find('DropdownItem')
        .find({ value })
        .should.have.prop('active', true)

      // change value
      wrapper
        .setProps({ value: next })

      // next active item
      wrapper
        .find('DropdownItem')
        .find({ value: next })
        .should.have.prop('active', true)
    })

    it('updates text when value changed', () => {
      const initialItem = _.sample(options)
      const nextItem = _.sample(_.without(options, initialItem))

      wrapperMount(<Dropdown options={options} selection value={initialItem.value} />)
        .find('.text')
        .should.contain.text(initialItem.text)

      wrapper
        .setProps({ value: nextItem.value })
        .find('.text')
        .should.contain.text(nextItem.text)
    })
  })

  describe('text', () => {
    it('sets the display text', () => {
      const text = faker.hacker.phrase()

      wrapperRender(<Dropdown options={options} selection text={text} />)
        .find('.text')
        .should.contain.text(text)
    })
    it('prevents updates on item click if defined', () => {
      const text = faker.hacker.phrase()

      wrapperMount(<Dropdown options={options} selection text={text} />)
        .simulate('click')
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      wrapper
        .find('.text')
        .should.contain.text(text)
    })
    it('is updated on item click if not already defined', () => {
      wrapperMount(<Dropdown options={options} selection />)

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
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })

    it('opens on arrow down when focused', () => {
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsOpen()
    })

    it('opens on arrow up when focused', () => {
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowUp' })
      dropdownMenuIsOpen()
    })

    it('opens on space when focused and closed', () => {
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: ' ' })
      dropdownMenuIsOpen()
    })

    it('does not call open on space if already open', () => {
      wrapperMount(<Dropdown options={options} selection />)

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
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsClosed()
    })

    it('does not open on space when not focused', () => {
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: ' ' })
      dropdownMenuIsClosed()
    })

    it('closes on menu item click', () => {
      wrapperMount(<Dropdown options={options} selection />)
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
      wrapperMount(<Dropdown options={options} selection />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // click outside
      domEvent.click(document)
      dropdownMenuIsClosed()
    })

    it('closes on esc key', () => {
      wrapperMount(<Dropdown options={options} selection />)

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

  describe('open', () => {
    it('defaultOpen opens the menu when true', () => {
      wrapperShallow(<Dropdown options={options} selection defaultOpen />)
      dropdownMenuIsOpen()
    })
    it('defaultOpen closes the menu when false', () => {
      wrapperShallow(<Dropdown options={options} selection defaultOpen={false} />)
      dropdownMenuIsClosed()
    })
    it('opens the menu when true', () => {
      wrapperShallow(<Dropdown options={options} selection open />)
      dropdownMenuIsOpen()
    })
    it('closes the menu when false', () => {
      wrapperShallow(<Dropdown options={options} selection open={false} />)
      dropdownMenuIsClosed()
    })
    it('closes the menu when toggled from true to false', () => {
      wrapperShallow(<Dropdown options={options} selection open />)
        .setProps({ open: false })
      dropdownMenuIsOpen()
    })
    it('opens the menu when toggled from false to true', () => {
      wrapperShallow(<Dropdown options={options} selection open={false} />)
        .setProps({ open: true })
      dropdownMenuIsClosed()
    })
  })

  describe('multiple', () => {
    it('does not close the menu on item selection with enter', () => {
      wrapperMount(<Dropdown options={options} selection multiple />)
        .simulate('click')

      dropdownMenuIsOpen()

      // choose an item keeps menu open
      domEvent.keyDown(document, { key: 'Enter' })

      dropdownMenuIsOpen()
    })
    it('does not close the menu on clicking on an item', () => {
      const nativeEvent = { nativeEvent: { stopImmediatePropagation: _.noop } }
      wrapperMount(<Dropdown options={options} selection multiple />)
        .simulate('click', nativeEvent)
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click', nativeEvent)

      dropdownMenuIsOpen()
    })
    it('filters active options out of the list', () => {
      // make all the items active, expect to see none in the list
      const value = _.map(options, 'value')
      wrapperShallow(<Dropdown options={options} selection value={value} multiple />)
        .should.not.have.descendants('DropdownItem')
    })
    it('displays a label for active items', () => {
      // select a random item, expect a label with the item's text
      const activeItem = _.sample(options)
      wrapperShallow(<Dropdown options={options} selection value={[activeItem.value]} multiple />)
        .should.have.descendants('Label')

      wrapper
        .find('Label')
        .should.have.prop('text', activeItem.text)
    })
    it('keeps the selection within the range of remaining options', () => {
      // items are removed as they are made active
      // the selection should move if the last item is made active
      wrapperMount(<Dropdown options={options} selection multiple />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // activate the last item
      domEvent.keyDown(document, { key: 'ArrowUp' })

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('selected', true)

      domEvent.keyDown(document, { key: 'Enter' })

      // expect selection to have moved from last, to one from last
      // activating items in multiple selects removes them from the list
      // we use at() to ensure we're targeting the exact indexes we expect
      // (ie the last() item will vary)
      wrapper
        .find('DropdownItem')
        .at(options.length - 1)
        .should.not.have.prop('selected', true)

      wrapper
        .find('DropdownItem')
        .at(options.length - 2)
        .should.have.prop('selected', true)
    })
    it('has labels with delete icons', () => {
      // add a value so we have a label
      const value = [_.head(options).value]
      wrapperRender(<Dropdown options={options} selection value={value} multiple />)
        .should.have.descendants('.label')

      wrapper
        .find('.label')
        .should.have.descendants('.delete.icon')
    })

    describe('removing items', () => {
      it('calls onChange without the clicked value', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)
        const randomValue = value[randomIndex]
        const expected = _.without(value, randomValue)
        const spy = sandbox.spy()
        wrapperMount(<Dropdown options={options} selection value={value} multiple onChange={spy} />)

        wrapper
          .find('.delete.icon')
          .at(randomIndex)
          .simulate('click')

        spy.should.have.been.calledOnce()
        spy.firstCall.args[1].should.deep.equal(expected)
      })
    })
  })

  describe('removing items on backspace', () => {
    let spy
    beforeEach(() => {
      spy = sandbox.spy()
    })

    it('does nothing without selected items', () => {
      wrapperMount(<Dropdown options={options} selection multiple search onChange={spy} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.not.have.been.called()
    })
    it('removes the last item when there is no search query', () => {
      const value = _.map(options, 'value')
      const expected = _.dropRight(value)
      wrapperMount(<Dropdown options={options} selection value={value} multiple search onChange={spy} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.have.been.calledOnce()
      spy.firstCall.args[1].should.deep.equal(expected)
    })
    it('removes the last item when there is no search query when uncontrolled', () => {
      const value = _.map(options, 'value')
      const expected = _.dropRight(value)
      wrapperMount(<Dropdown options={options} selection defaultValue={value} multiple search onChange={spy} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.have.been.calledOnce()
      spy.firstCall.args[1].should.deep.equal(expected)

      wrapper
        .state('value')
        .should.deep.equal(expected)
    })
    it('does not remove the last item when there is a search query', () => {
      // search for random item
      const searchQuery = _.sample(options).text
      const value = _.map(options, 'value')
      wrapperMount(<Dropdown options={options} selection value={value} multiple search onChange={spy} />)

      // open and simulate search
      wrapper
        .simulate('click')
        .setState({ searchQuery })

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.not.have.been.called()
    })
    it('does not remove items for multiple dropdowns without search', () => {
      const value = _.map(options, 'value')
      wrapperMount(<Dropdown options={options} selection value={value} multiple onChange={spy} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.not.have.been.called()
    })
  })

  describe('onChange', () => {
    let spy
    beforeEach(() => {
      spy = sandbox.spy()
    })

    it('is called with event and value on item click', () => {
      const randomIndex = _.random(options.length - 1)
      const randomValue = options[randomIndex].value
      wrapperMount(<Dropdown options={options} selection onChange={spy} />)
        .simulate('click')
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.firstCall.args[1].should.deep.equal(randomValue)
    })
    it('is called with event and value when pressing enter on a selected item', () => {
      const firstValue = options[0].value
      wrapperMount(<Dropdown options={options} selection onChange={spy} />)
        .simulate('click')

      domEvent.keyDown(document, { key: 'Enter' })

      spy.should.have.been.calledOnce()
      spy.firstCall.args[1].should.deep.equal(firstValue)
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).value
      const next = _.sample(_.without(options, value)).value

      wrapperMount(<Dropdown options={options} selection value={value} onChange={spy} />)
        .setProps({ value: next })

      spy.should.not.have.been.called()
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, value) on search input change', () => {
      const spy = sandbox.spy()
      wrapperMount(<Dropdown options={options} search selection onSearchChange={spy} />)
        .find('input.search')
        .simulate('change', { target: { value: 'a' }, stopPropagation: _.noop })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({ target: { value: 'a' } }, 'a')
    })
  })

  describe('options', () => {
    it('adds the onClick handler to all items', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .children('DropdownItem')
        .everyWhere(item => item.should.have.prop('onClick'))
    })
    it('calls handleItemClick when an item is clicked', () => {
      wrapperMount(<Dropdown options={options} selection />)

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
      wrapperRender(<Dropdown options={options} selection />)
        .find('input[type="hidden"]')
        .should.be.present()
    })
  })

  describe('search', () => {
    it('does not add a search input when not defined', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .should.not.have.descendants('input.search')
    })

    it('adds a search input when present', () => {
      wrapperRender(<Dropdown options={options} selection search />)
        .should.have.descendants('input.search')
    })

    it('sets focus to the search input on open', () => {
      wrapperMount(<Dropdown options={options} selection search />)
        .simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      searchIsFocused.should.be.true(
        `Expected "input.search" to be the active element but found ${activeElement} instead.`
      )
    })

    it('removes Dropdown tabIndex', () => {
      wrapperShallow(<Dropdown options={options} selection search />)
        .should.not.have.prop('tabIndex')
    })

    it('has a search input with a tabIndex of 0', () => {
      wrapperShallow(<Dropdown options={options} selection search />)
        .find('input.search')
        .should.have.prop('tabIndex', '0')
    })

    it('clears the search query when an item is selected', () => {
      // search for random item
      const searchQuery = _.sample(options).text

      wrapperMount(<Dropdown options={options} selection search />)

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
      wrapperMount(<Dropdown options={options} selection search />)

      dropdownMenuIsClosed()

      // simulate search
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: faker.hacker.noun() } })

      dropdownMenuIsOpen()
    })

    it('does not call onChange on query change', () => {
      const onChangeSpy = sandbox.spy()
      wrapperMount(<Dropdown options={options} selection search onChange={onChangeSpy} />)

      // simulate search
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: faker.hacker.noun() } })

      onChangeSpy.should.not.have.been.called()
    })

    it('filters the items based on display text', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />)
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
      const search = wrapperMount(<Dropdown options={options} selection search />)
        .find('input.search')

      // the first item is selected by default
      // avoid it to prevent false positives

      wrapper.setState({ selectedIndex: _.random(1, options.length - 2) })

      search.simulate('change', { target: { value: faker.hacker.noun() } })

      wrapper.should.have.state('selectedIndex', 0)
    })

    it('still allows moving selection after blur/focus', () => {
      // open, first item is selected
      const search = wrapperMount(<Dropdown options={options} selection search />)
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

  describe('no results message', () => {
    it('is shown when a search yields no results', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />)
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

    it('is not shown on multiple dropdowns with no remaining items', () => {
      // make all the items active so there are no remaining options
      const value = _.map(options, 'value')
      wrapperMount(<Dropdown options={options} selection value={value} multiple />)

      // open the menu
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // confirm there are no items
      wrapper
        .should.not.have.descendants('DropdownItem')

      // expect no message
      wrapper
        .find('.message')
        .should.not.be.present()
    })
  })

  describe('placeholder', () => {
    it('is present when defined', () => {
      wrapperShallow(<Dropdown options={options} selection placeholder='hi' />)
        .should.have.descendants('.default.text')
    })
    it('is not present when not defined', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .should.not.have.descendants('.default.text')
    })
    it('is not present when there is a value', () => {
      wrapperShallow(<Dropdown options={options} selection value='hi' placeholder='hi' />)
        .should.not.have.descendants('.default.text')
    })
    it('is present on a multiple dropdown with an empty value array', () => {
      wrapperShallow(<Dropdown options={options} selection multiple placeholder='hi' />)
        .should.have.descendants('.default.text')
    })
    it('has a filtered className when there is a search query', () => {
      wrapperShallow(<Dropdown options={options} selection search placeholder='hi' />)
        .setState({ searchQuery: 'a' })
        .should.have.descendants('.default.text.filtered')
    })
  })

  describe('render', () => {
    it('calls renderText', () => {
      wrapperShallow(<Dropdown options={options} selection />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'renderText')

      instance.renderText
        .should.not.have.been.called()

      instance.render()

      instance.renderText
        .should.have.been.called()
    })
  })

  describe('Dropdown.Menu child', () => {
    it('renders child passed', () => {
      wrapperShallow(
        <Dropdown>
          <Dropdown.Menu data-find-me />
        </Dropdown>
      )
        .should.contain.descendants('DropdownMenu')

      wrapper
        .find('DropdownMenu')
        .should.have.prop('data-find-me', true)
    })

    it('opens on click', () => {
      wrapperMount(
        <Dropdown>
          <Dropdown.Menu />
        </Dropdown>
      )

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })
  })
})
