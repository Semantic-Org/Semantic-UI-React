import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { consoleUtil, domEvent, sandbox } from 'test/utils'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import DropdownDivider from 'src/modules/Dropdown/DropdownDivider'
import DropdownHeader from 'src/modules/Dropdown/DropdownHeader'
import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import DropdownMenu from 'src/modules/Dropdown/DropdownMenu'
import DropdownSearchInput from 'src/modules/Dropdown/DropdownSearchInput'

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
const getOptions = (count = 5) => _.times(count, (i) => {
  const text = `${i}-${faker.hacker.noun}`
  const value = `${i}-${_.snakeCase(text)}`
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

const nativeEvent = { nativeEvent: { stopImmediatePropagation: _.noop } }

describe('Dropdown', () => {
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
  common.hasSubComponents(Dropdown, [DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownSearchInput])

  common.implementsIconProp(Dropdown, {
    assertExactMatch: false,
  })
  common.implementsShorthandProp(Dropdown, {
    propKey: 'header',
    ShorthandComponent: DropdownHeader,
    mapValueToProps: val => ({ content: val }),
  })

  common.propKeyOnlyToClassName(Dropdown, 'disabled')
  common.propKeyOnlyToClassName(Dropdown, 'error')
  common.propKeyOnlyToClassName(Dropdown, 'loading')
  common.propKeyOnlyToClassName(Dropdown, 'basic')
  common.propKeyOnlyToClassName(Dropdown, 'button')
  common.propKeyOnlyToClassName(Dropdown, 'compact')
  common.propKeyOnlyToClassName(Dropdown, 'fluid')
  common.propKeyOnlyToClassName(Dropdown, 'floating')
  common.propKeyOnlyToClassName(Dropdown, 'inline')
  // TODO: See Dropdown cx notes
  // common.propKeyOnlyToClassName(Dropdown, 'icon')
  common.propKeyOnlyToClassName(Dropdown, 'labeled')
  common.propKeyOnlyToClassName(Dropdown, 'item')
  common.propKeyOnlyToClassName(Dropdown, 'multiple')
  common.propKeyOnlyToClassName(Dropdown, 'search')
  common.propKeyOnlyToClassName(Dropdown, 'selection')
  common.propKeyOnlyToClassName(Dropdown, 'simple')
  common.propKeyOnlyToClassName(Dropdown, 'scrolling')
  common.propKeyOnlyToClassName(Dropdown, 'upward')

  common.propKeyOrValueAndKeyToClassName(Dropdown, 'pointing', [
    'left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right',
  ])

  describe('defaultSearchQuery', () => {
    it('changes default value of searchQuery', () => {
      shallow(<Dropdown defaultSearchQuery='foo' />)
        .should.have.state('searchQuery', 'foo')
    })
  })

  it('closes on blur', () => {
    wrapperMount(<Dropdown options={options} />)
      .simulate('click')

    dropdownMenuIsOpen()
    wrapper.simulate('blur')
    dropdownMenuIsClosed()
  })

  it('does not close on blur with closeOnBlur set to false', () => {
    wrapperMount(<Dropdown options={options} closeOnBlur={false} />)
      .simulate('click')

    dropdownMenuIsOpen()
    wrapper.simulate('blur')
    dropdownMenuIsOpen()
  })

  it('blurs the Dropdown node on close', () => {
    wrapperMount(<Dropdown options={options} selection defaultOpen />)

    const instance = wrapper.instance()
    sandbox.spy(instance.ref, 'blur')

    dropdownMenuIsOpen()
    wrapper.simulate('click')
    dropdownMenuIsClosed()

    instance.ref.blur
      .should.have.been.calledOnce()
  })

  it('does not close on click when search is true and options are empty', () => {
    wrapperMount(<Dropdown options={{}} search selection defaultOpen />)

    const instance = wrapper.instance()
    sandbox.spy(instance.ref, 'blur')

    dropdownMenuIsOpen()
    wrapper.simulate('click')
    dropdownMenuIsOpen()
  })

  it('opens on focus', () => {
    wrapperMount(<Dropdown options={options} />)

    dropdownMenuIsClosed()
    wrapper.simulate('focus')
    dropdownMenuIsOpen()
  })

  describe('disabled', () => {
    it('does not open on click', () => {
      wrapperMount(<Dropdown options={options} disabled />)

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsClosed()
    })

    it('does not open on click with pointer events enabled', () => {
      wrapperMount(<Dropdown options={options} disabled style={{ pointerEvents: 'all' }} />)

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsClosed()
    })

    it('does not open on focus', () => {
      wrapperMount(<Dropdown options={options} disabled />)

      dropdownMenuIsClosed()
      wrapper.simulate('focus')
      dropdownMenuIsClosed()
    })
  })

  describe('tabIndex', () => {
    it('defaults to 0', () => {
      shallow(<Dropdown options={options} />)
        .should.have.prop('tabIndex', 0)
    })

    it('defaults to -1 when disabled', () => {
      shallow(<Dropdown disabled options={options} />)
        .should.have.prop('tabIndex', -1)
    })

    it('applies when defined', () => {
      shallow(<Dropdown options={options} tabIndex={1} />)
        .should.have.prop('tabIndex', 1)
    })

    describe('tabIndex', () => {
      it('defaults the search input to 0', () => {
        shallow(<Dropdown options={options} selection search />)
          .find(DropdownSearchInput)
          .should.have.prop('tabIndex', 0)
      })

      it('defaults the disabled search input to -1', () => {
        shallow(<Dropdown disabled options={options} selection search />)
          .find(DropdownSearchInput)
          .should.have.prop('tabIndex', -1)
      })

      it('allows explicitly setting the search input value', () => {
        shallow(<Dropdown options={options} selection search tabIndex={123} />)
          .find(DropdownSearchInput)
          .should.have.prop('tabIndex', 123)
      })

      it('allows explicitly setting the search input value when disabled', () => {
        shallow(<Dropdown disabled options={options} selection search tabIndex={123} />)
          .find(DropdownSearchInput)
          .should.have.prop('tabIndex', 123)
      })

      it('is not present on the root when is search', () => {
        shallow(<Dropdown options={options} selection search />)
          .should.not.have.prop('tabIndex')
      })

      it('is not present on the root when is search and defined', () => {
        shallow(<Dropdown options={options} selection search tabIndex={1} />)
          .should.not.have.prop('tabIndex')
      })
    })
  })

  describe('aria', () => {
    it('should label normal dropdown as a listbox', () => {
      wrapperMount(<Dropdown />)
      wrapper.find('div').at(0).should.have.prop('role', 'listbox')
    })
    it('should label search dropdown as a combobox', () => {
      wrapperMount(<Dropdown search />)
      wrapper.find('div').at(0).should.have.prop('role', 'combobox')
    })
    it('should label search dropdownMenu as a listbox', () => {
      wrapperMount(<Dropdown search />)
      wrapper.find('DropdownMenu').should.have.prop('role', 'listbox')
    })
    it('should label search multiple dropdownMenu as aria-multiselectable', () => {
      wrapperMount(<Dropdown search multiple />)
      wrapper.find('DropdownMenu').should.have.prop('aria-multiselectable', true)
    })
    it('should not label normal dropdownMenu with a role', () => {
      wrapperMount(<Dropdown />)
      wrapper.find('DropdownMenu').should.not.have.prop('role')
    })
    it('should label disabled dropdown as aria-disabled', () => {
      wrapperMount(<Dropdown disabled />)
      wrapper.find('div').at(0).should.have.prop('aria-disabled', true)
    })
    it('should label normal dropdown without aria-disabled', () => {
      wrapperMount(<Dropdown />)
      wrapper.find('div').at(0).should.not.have.prop('aria-disabled')
    })
    it('should label multiple dropdown as aria-multiselectable', () => {
      wrapperMount(<Dropdown multiple />)
      wrapper.find('div').at(0).should.have.prop('aria-multiselectable', true)
    })
    it('should not label multiple search dropdown as aria-multiselectable', () => {
      wrapperMount(<Dropdown search multiple />)
      wrapper.find('div').at(0).should.not.have.prop('aria-multiselectable')
    })
    it('should label normal dropdown without aria-multiselectable', () => {
      wrapperMount(<Dropdown />)
      wrapper.find('div').at(0).should.not.have.prop('aria-multiselectable')
    })
    it('should label loading dropdown as aria-busy', () => {
      wrapperMount(<Dropdown loading />)
      wrapper.find('div').at(0).should.have.prop('aria-busy', true)
    })
    it('should label normal dropdown without aria-busy', () => {
      wrapperMount(<Dropdown />)
      wrapper.find('div').at(0).should.not.have.prop('aria-busy')
    })
    it('should label search dropdown input aria-autocomplete=list', () => {
      wrapperMount(<Dropdown search />)
      wrapper.find('input').should.have.prop('aria-autocomplete', 'list')
    })
    it('should label search dropdown input type=text', () => {
      wrapperMount(<Dropdown search />)
      wrapper.find('input').should.have.prop('type', 'text')
    })
  })

  describe('handleBlur', () => {
    it('passes the event to the onBlur prop', () => {
      const spy = sandbox.spy()
      const event = { foo: 'bar' }

      wrapperShallow(<Dropdown onBlur={spy} />)
        .simulate('blur', event)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(event)
    })

    it('calls makeSelectedItemActive', () => {
      wrapperShallow(<Dropdown selectOnBlur />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'makeSelectedItemActive')

      wrapper.simulate('blur')

      instance.makeSelectedItemActive
        .should.have.been.calledOnce()
    })

    it('sets focus state to false', () => {
      wrapperShallow(<Dropdown selectOnBlur />)

      wrapper.simulate('blur')
      wrapper.should.have.state('focus', false)
    })

    it('sets searchQuery state to empty', () => {
      wrapperShallow(<Dropdown />)

      wrapper.setState({ searchQuery: 'foo' })
      wrapper.simulate('blur')
      wrapper.should.have.state('searchQuery', '')
    })

    it('does not call onBlur when the mouse is down', () => {
      const spy = sandbox.spy()

      wrapperShallow(<Dropdown onBlur={spy} selectOnBlur />)

      wrapper.simulate('mousedown')
      wrapper.simulate('blur')

      spy.should.not.have.been.called()
    })

    it('does not call makeSelectedItemActive when the mouse is down', () => {
      const spy = sandbox.spy()

      wrapperShallow(<Dropdown onBlur={spy} selectOnBlur />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'makeSelectedItemActive')

      wrapper.simulate('mousedown')
      wrapper.simulate('blur')

      instance.makeSelectedItemActive
        .should.not.have.been.called()
    })

    it('does not set focus state when the mouse is down', () => {
      wrapperShallow(<Dropdown />)

      wrapper.setState({ focus: 'foo' })
      wrapper.simulate('mousedown')
      wrapper.simulate('blur')
      wrapper.should.have.state('focus', 'foo')
    })
  })

  describe('handleClose', () => {
    it('is called when open changes to false', () => {
      wrapperMount(<Dropdown options={options} selection />)
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      const instance = wrapper.instance()
      sandbox.spy(instance, 'handleClose')

      wrapper.simulate('click')
      dropdownMenuIsClosed()

      instance
        .handleClose
        .should.have.been.calledOnce()
    })

    it('prevents Space from opening a search Dropdown after selecting an item', () => {
      // Prevent a bug where pressing space in another control opens the Dropdown
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      wrapperMount(<Dropdown options={options} search selection />)

      // open, click an item, assert it is active and in the value
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')
      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')
        .should.have.prop('active', true)
      wrapper.should.have.state('value', options[0].value)

      dropdownMenuIsClosed()

      // doesn't open on space
      domEvent.keyDown(document, { key: ' ' })
      wrapper.update()

      dropdownMenuIsClosed()
    })
  })

  describe('closeOnChange', () => {
    it('will close when defined and dropdown is multiple', () => {
      wrapperMount(<Dropdown selection multiple search closeOnChange options={options} />)
        .simulate('click')

      dropdownMenuIsOpen()

      wrapper.find('DropdownItem')
        .first()
        .simulate('click', nativeEvent)

      dropdownMenuIsClosed()
    })

    it('will remain open when undefined and dropdown is multiple', () => {
      wrapperMount(<Dropdown selection multiple search options={options} />)
        .simulate('click')

      dropdownMenuIsOpen()

      wrapper.find('DropdownItem')
        .first()
        .simulate('click', nativeEvent)

      dropdownMenuIsOpen()
    })
  })

  describe('setSelectedIndex', () => {
    it('will call setSelectedIndex if options change', () => {
      wrapperMount(<Dropdown options={options} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'setSelectedIndex')

      wrapper.setProps({ options: [] })

      instance.setSelectedIndex.should.have.been.calledOnce()
    })

    it('will not call setSelectedIndex if options have not changed', () => {
      wrapperMount(<Dropdown options={options} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'setSelectedIndex')

      wrapper.setProps({ options })

      instance.setSelectedIndex.should.not.have.been.calledOnce()
    })
  })

  describe('isMouseDown', () => {
    it('tracks when the mouse is down', () => {
      wrapperShallow(<Dropdown />)
        .simulate('mousedown')

      wrapper.instance()
        .isMouseDown
        .should.equal(true)

      domEvent.mouseUp(document)

      wrapper.instance()
        .isMouseDown
        .should.equal(false)
    })
  })

  describe('icon', () => {
    it('defaults to a dropdown icon', () => {
      Dropdown.defaultProps.icon.should.equal('dropdown')
      wrapperRender(<Dropdown />)
        .should.contain.descendants('.dropdown.icon')
    })

    it('always opens a dropdown on click', () => {
      wrapperMount(<Dropdown options={options} selection search />)
        .find('i.icon')
        .simulate('click')

      dropdownMenuIsOpen()
    })

    it('always opens a dropdown on click', () => {
      wrapperMount(<Dropdown options={options} selection search />)
        .find('i.icon')
        .simulate('click')

      dropdownMenuIsOpen()
    })

    it('passes onClick handler', () => {
      const event = { target: null }
      const onClick = sandbox.spy()
      const props = { name: 'user', onClick }

      wrapperMount(<Dropdown icon={props} options={options} />)
        .find('i.icon')
        .simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, props)
    })
  })

  describe('searchQuery', () => {
    it('defaults to empty string', () => {
      shallow(<Dropdown />)
        .should.have.state('searchQuery', '')
    })

    it('passes value to state', () => {
      shallow(<Dropdown searchQuery='foo' />)
        .should.have.state('searchQuery', 'foo')
    })
  })

  describe('selected item', () => {
    it('defaults to the first item', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .find('DropdownItem')
        .first()
        .should.have.prop('selected', true)
    })
    it('defaults to the first non-disabled item', () => {
      options[0].disabled = true
      wrapperShallow(<Dropdown options={options} selection />)

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
    it('defaults to selected item when options are initially empty', () => {
      const randomIndex = 1 + _.random(options.length - 2)
      const value = options[randomIndex].value

      wrapperShallow(<Dropdown options={[]} selection value={value} />)

      wrapper
        .setProps({ options, value })

      wrapper
        .find('DropdownItem')
        .at(randomIndex)
        .should.have.prop('selected', true)
    })
    it('is null when all options disabled', () => {
      const disabledOptions = options.map(o => ({ ...o, disabled: true }))

      wrapperRender(<Dropdown options={disabledOptions} selection />)
        .should.not.have.descendants('.selected')
    })
    it('is set when clicking an item', () => {
      // random item, skip the first as it's selected by default
      const randomIndex = 1 + _.random(options.length - 2)
      wrapperMount(<Dropdown options={options} selection />)

      wrapper
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')
      wrapper
        .find('DropdownItem')
        .at(randomIndex)
        .should.have.prop('selected', true)
    })
    it('is ignored when clicking a disabled item', () => {
      // random item, skip the first as it's selected by default
      const randomIndex = 1 + _.random(options.length - 2)

      options[randomIndex].disabled = true

      wrapperMount(<Dropdown options={options} selection />)
        .simulate('click', nativeEvent)
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click', nativeEvent)
        .should.not.have.prop('selected', true)

      dropdownMenuIsOpen()
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Dropdown options={options} selection />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

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
      wrapper.update()

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
      wrapper.update()

      wrapper
        .find('.selected')
        .should.contain.text('a2')
    })
    it('filters diacritics on options when using deburr prop', () => {
      const inputText = 'floresti'
      const textToFind = 'FLOREŞTI'

      const opts = [
        { text: textToFind, value: '1' },
        { text: `ŞANŢU ${textToFind}`, value: '2' },
        { text: `${textToFind} Alba`, value: '3' },
      ]

      // search for 'floresti'
      wrapperMount(<Dropdown options={opts} search deburr selection />)
        .simulate('click')
        .find('input.search')
        .simulate('change', { target: { value: inputText } })

      wrapper
        .find('.selected')
        .should.contain.text(textToFind)
    })
    it('filters diacritics on input when using deburr prop', () => {
      const inputText = 'FLORÉŞTI'
      const textToFind = 'FLORESTI'

      const opts = [
        { text: textToFind, value: '1' },
        { text: `SANTU ${textToFind}`, value: '2' },
        { text: `${textToFind} Alba`, value: '3' },
      ]

      // search for 'floresti'
      wrapperMount(<Dropdown options={opts} search deburr selection />)
        .simulate('click')
        .find('input.search')
        .simulate('change', { target: { value: inputText } })

      wrapper
        .find('.selected')
        .should.contain.text(textToFind)
    })
    it('should not filter diacritics when deburr is not set', () => {
      const inputText = 'FLORÉŞTI'
      const textToFind = 'FLORESTI'

      // Add this in case the default 'no results text' changes.
      const noResultsText = 'NoResultsFound'

      const opts = [
        { text: textToFind, value: '1' },
        { text: `SANTU ${textToFind}`, value: '2' },
        { text: `${textToFind} Alba`, value: '3' },
      ]

      // search for 'floresti'
      wrapperMount(<Dropdown options={opts} search selection noResultsMessage={noResultsText} />)
        .simulate('click')
        .find('input.search')
        .simulate('change', { target: { value: inputText } })

      wrapper
        .find('.message')
        .should.contain.text(noResultsText)
    })
    it('still works after encountering "no results"', () => {
      const opts = [
        { text: 'a1', value: 'a1' },
        { text: 'a2', value: 'a2' },
        { text: 'a3', value: 'a3' },
      ]
      wrapperMount(<Dropdown options={opts} search selection />)

      // search for 'a4'
      // no results appears
      wrapper
        .simulate('click')
        .find('input.search')
        .simulate('change', { target: { value: 'a4' } })

      wrapper.should.have.exactly(1).descendants('.message')

      // search for 'a' (simulated backspace)
      // no results is removed
      // first item is selected
      // down arrow moves selection
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: 'a' } })

      wrapper.should.not.have.descendants('.message')

      wrapper
        .should.have.exactly(1).descendants('.selected')
        .which.contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      wrapper
        .should.have.exactly(1).descendants('.selected')
        .which.contain.text('a2')
    })
    it('skips over disabled items', () => {
      const opts = [
        { text: 'a1', value: 'a1' },
        { text: 'skip this one', value: 'skip this one', disabled: true },
        { text: 'a2', value: 'a2' },
      ]

      wrapperMount(<Dropdown options={opts} search selection />)
      wrapper.simulate('click')

      wrapper
        .find('.selected')
        .should.contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      wrapper
        .find('.selected')
        .should.contain.text('a2')
    })
    it('does not enter an infinite loop when all items are disabled', () => {
      const opts = [
        { text: '1', value: '1', disabled: true },
        { text: '2', value: '2', disabled: true },
      ]
      wrapperMount(<Dropdown options={opts} search selection />)
        .simulate('click')

      const instance = wrapper.instance()
      sandbox.spy(instance, 'moveSelectionBy')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      instance
        .moveSelectionBy
        .should.have.been.calledOnce()
    })
    it('scrolls the selected item into view', () => {
      // get enough options to make the menu scrollable
      const opts = getOptions(20)

      wrapperMount(<Dropdown options={opts} selection />)
        .simulate('click')

      dropdownMenuIsOpen()
      const menu = document.querySelector('.ui.dropdown .menu.visible')

      // Limit the menu's height and set an overflow so it's scrollable
      menu.style.height = '100px'
      menu.style.overflow = 'auto'

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
        'When the last item in the list was selected, DropdownMenu did not scroll to bottom.',
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

      // Note: For some reason the first item's offsetTop is not 0 so we need
      // to find the item's offsetTop and ensure it's at the top.
      const selectedItem = document.querySelector('.ui.dropdown .menu.visible .item.selected')
      const isMenuScrolledToTop = menu.scrollTop === selectedItem.offsetTop
      isMenuScrolledToTop.should.be.true(
        'When the first item in the list was selected, DropdownMenu did not scroll to top.',
      )
    })
    it('becomes active on enter when open', () => {
      wrapperMount(<Dropdown options={options} selection />)
      wrapper.simulate('click')

      // initial item props
      wrapper
        .find('DropdownItem')
        .at(1)
        .should.have.prop('selected', false)
      wrapper
        .find('DropdownItem')
        .at(1)
        .should.have.prop('active', false)

      // select and make active
      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })
      wrapper.update()

      wrapper
        .find('DropdownItem')
        .at(1)
        .should.have.prop('active', true)
    })
    it('closes the menu', () => {
      wrapperMount(<Dropdown options={options} selection />)
        .simulate('click')

      dropdownMenuIsOpen()

      // choose an item closes
      domEvent.keyDown(document, { key: 'Enter' })
      dropdownMenuIsClosed()
    })
    it('keeps value of the searchQuery when selection is changed', () => {
      wrapperMount(<Dropdown options={options} selection search />)

      wrapper.setState({ searchQuery: 'foo' })
      wrapper.simulate('click')
      domEvent.keyDown(document, { key: 'ArrowDown' })

      wrapper.should.have.state('searchQuery', 'foo')
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

      wrapperMount(<Dropdown value={value} options={options} selection />)

      // initial active item
      wrapper
        .find('DropdownItem')
        .find({ value })
        .should.have.prop('active', true)

      // change value
      wrapper.setProps({ value: next })

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
        .find('div.text')
        .should.contain.text(initialItem.text)

      wrapper
        .setProps({ value: nextItem.value })
        .find('div.text')
        .should.contain.text(nextItem.text)
    })

    it('updates value on down arrow', () => {
      wrapperMount(<Dropdown options={options} selection />)

      wrapper.simulate('click')
      domEvent.keyDown(document, { key: 'ArrowDown' })

      wrapper.should.have.state('value', options[1].value)
    })

    it('updates value on up arrow', () => {
      wrapperMount(<Dropdown options={options} selection />)

      wrapper.simulate('click')
      domEvent.keyDown(document, { key: 'ArrowUp' })

      wrapper.should.have.state('value', options[4].value)
    })
  })

  describe('text', () => {
    it('sets the display text', () => {
      const text = faker.hacker.phrase()

      wrapperRender(<Dropdown options={options} selection text={text} />)
        .find('div.text')
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
        .find('div.text')
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
        .find('div.text')
        .should.contain.text(item.text())
    })
    it('is updated on item enter if multiple search results present', () => {
      const searchOptions = [
        { value: 0, text: 'foo' },
        { value: 1, text: 'foe' },
      ]
      wrapperMount(<Dropdown options={searchOptions} search selection />)

      // open and simulate search
      wrapper
        .simulate('click')
        .setState({ searchQuery: 'fo' })

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })

      // text updated
      wrapper
        .find('div.text')
        .should.contain.text('foe')
    })
    it('displays if value is 0', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: 0, text }]} selection />)

      // open
      wrapper.simulate('click')

      // click item
      const item = wrapper
        .find('DropdownItem')
        .simulate('click')

      // text updated
      wrapper
        .find('div.text')
        .should.contain.text(item.text())
    })
    it("does not display if value is ''", () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: '', text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      wrapper
        .find('div.text')
        .should.contain.text('')
    })
    it('does not display if value is null', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: null, text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      wrapper
        .find('div.text')
        .should.contain.text('')
    })
    it('does not display if value is undefined', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: undefined, text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      wrapper
        .find('div.text')
        .should.contain.text('')
    })
  })

  describe('trigger', () => {
    it('displays the trigger', () => {
      const text = 'Hey there'
      const trigger = <div className='trigger'>{text}</div>

      wrapperRender(<Dropdown options={options} trigger={trigger} />)
        .find('.trigger')
        .should.contain.text(text)
    })
    it('ignores the text prop', () => {
      const text = faker.hacker.phrase()
      const trigger = <div className='trigger'>{text}</div>

      wrapperRender(<Dropdown options={options} trigger={trigger} text={text} />)
        .should.not.have.descendants('div.text')
    })
  })

  describe('menu', () => {
    it('opens on dropdown click', () => {
      wrapperMount(<Dropdown options={options} selection />)

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })

    it('opens on arrow down when focused', () => {
      wrapperMount(<Dropdown options={options} selection />)
      // Note: This mousedown is necessary to get the Dropdown focused
      // without it being open.
        .simulate('mousedown')
        .simulate('focus')

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: 'ArrowDown' })
      dropdownMenuIsOpen()
    })

    it('opens on space when focused', () => {
      wrapperMount(<Dropdown options={options} selection />)
      // Note: This mousedown is necessary to get the Dropdown focused
      // without it being open.
        .simulate('mousedown')
        .simulate('focus')

      dropdownMenuIsClosed()
      domEvent.keyDown(document, { key: ' ' })
      dropdownMenuIsOpen()
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

    it('closes on dropdown click', () => {
      wrapperMount(<Dropdown options={options} selection defaultOpen />)

      dropdownMenuIsOpen()
      wrapper.simulate('click')
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

    it('blurs after menu item click (mousedown)', () => {
      wrapperMount(<Dropdown options={options} selection />)
      const item = wrapper
        .find('DropdownItem')
        .at(_.random(options.length - 1))

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // select item
      item.simulate('mousedown')
      dropdownMenuIsOpen()
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

  describe('onOpen', () => {
    it('called when dropdown would open', () => {
      const onOpen = sandbox.spy()
      wrapperMount(<Dropdown options={options} selection onOpen={onOpen} />)

      wrapper.simulate('click')
      onOpen.should.have.been.calledOnce()
    })

    it('not called when dropdown would not open', () => {
      const onOpen = sandbox.spy()
      wrapperMount(<Dropdown options={options} selection onOpen={onOpen} />)

      domEvent.keyDown(document, { key: 'ArrowDown' })
      onOpen.should.not.have.been.calledOnce()
    })
  })

  describe('onClose', () => {
    it('called when dropdown would close', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Dropdown options={options} selection defaultOpen onClose={onClose} />)

      wrapper.simulate('click')
      onClose.should.have.been.calledOnce()
    })
  })

  describe('open', () => {
    it('defaultOpen opens the menu when true', () => {
      wrapperShallow(<Dropdown options={options} selection defaultOpen />)
      dropdownMenuIsOpen()
    })
    it('defaultOpen opens the menu on search dropdowns', () => {
      wrapperShallow(<Dropdown search options={options} selection defaultOpen />)
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
      wrapperMount(<Dropdown options={options} selection open />)
        .setProps({ open: false })
      dropdownMenuIsClosed()
    })
    it('opens the menu when toggled from false to true', () => {
      wrapperMount(<Dropdown options={options} selection open={false} />)
        .setProps({ open: true })
      dropdownMenuIsOpen()
    })
    it('calls scrollSelectedItemIntoView when changed from false to true', () => {
      wrapperMount(<Dropdown options={options} selection open={false} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'scrollSelectedItemIntoView')

      instance.scrollSelectedItemIntoView
        .should.not.have.been.called()

      wrapper.setProps({ open: true })

      instance.scrollSelectedItemIntoView
        .should.have.been.calledOnce()
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
        .should.have.prop('content', activeItem.text)
    })
    it('keeps the selection within the range of remaining options', () => {
      // items are removed as they are made active
      // the selection should move if the last item is made active
      wrapperMount(<Dropdown options={options} selection multiple />)

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // activate the last item, removing it from the list
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      wrapper
        .should.have.exactly(options.length).descendants('DropdownItem')
      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('selected', true)

      domEvent.keyDown(document, { key: 'Enter' })
      wrapper.update()

      // one item should be gone, and the _new_ last item should be selected
      wrapper
        .should.have.exactly(options.length - 1).descendants('DropdownItem')
      wrapper
        .find('DropdownItem')
        .last()
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
    it('enables custom rendering', () => {
      const value = [_.head(options).value]
      const renderLabel = () => ({ content: 'My custom text!', as: 'div' })

      wrapperRender(<Dropdown options={options} selection value={value} multiple renderLabel={renderLabel} />)
        .should.have.descendants('.label')

      const label = wrapper.find('.label')

      label.should.have.text('My custom text!')
      label.should.have.tagName('div')
    })

    describe('selecting items', () => {
      let spy
      beforeEach(() => {
        spy = sandbox.spy()
      })

      it('does not close the menu on clicking on a label', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)

        wrapperMount(<Dropdown options={options} selection multiple value={value} />)
          .simulate('click', nativeEvent)
          .find('Label')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        dropdownMenuIsOpen()
      })

      it('sets label to active', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)

        wrapperMount(<Dropdown options={options} selection multiple value={value} />)
          .simulate('click', nativeEvent)
          .find('Label')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        wrapper
          .find('Label')
          .at(randomIndex)
          .should.have.prop('active', true)
      })

      it('calls onLabelClick', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)
        const randomValue = value[randomIndex]

        wrapperMount(<Dropdown options={options} selection multiple value={value} onLabelClick={spy} />)
          .simulate('click', nativeEvent)
          .find('Label')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        spy.should.have.been.calledWithMatch({}, { value: randomValue })
      })

      it('refocuses search on select', () => {
        const randomIndex = _.random(options.length - 1)

        wrapperMount(<Dropdown options={options} search selection multiple />)
          .simulate('click', nativeEvent)
          .find('DropdownItem')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        wrapper.instance()
          .searchRef.should.eq(document.activeElement)
      })
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
        spy.should.have.been.calledWithMatch({}, { value: expected })
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
      spy.should.have.been.calledWithMatch({}, { value: expected })
    })
    it('removes the last item when there is no search query when uncontrolled', () => {
      const value = _.map(options, 'value')
      const expected = _.dropRight(value)
      wrapperMount(
        <Dropdown options={options} selection defaultValue={value} multiple search onChange={spy} />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, { value: expected })

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
      spy.should.have.been.calledWithMatch({}, { value: randomValue })
    })
    it('is called with event and value when pressing enter on a selected item', () => {
      const firstValue = options[0].value
      wrapperMount(<Dropdown options={options} selection onChange={spy} />)
        .simulate('click')

      domEvent.keyDown(document, { key: 'Enter' })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, { value: firstValue })
    })
    it('is called with event and value when blurring', () => {
      const firstValue = options[0].value
      wrapperMount(<Dropdown options={options} selection onChange={spy} />)
        .simulate('focus') // open, highlights first item
        .simulate('blur') // blur should activate selected item

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, { value: firstValue })
    })
    it('is not called on blur when closed', () => {
      wrapperMount(<Dropdown options={options} selection open={false} onChange={spy} />)
        .simulate('focus')
        .simulate('blur')

      spy.should.not.have.been.called()
    })
    it('is not called on blur when selectOnBlur is false', () => {
      wrapperMount(<Dropdown options={options} selection onChange={spy} selectOnBlur={false} />)
        .simulate('focus')
        .simulate('click')

      wrapper.simulate('blur')

      spy.should.not.have.been.called()
    })
    it('is not called on blur with multiple select', () => {
      wrapperMount(<Dropdown options={options} selection onChange={spy} multiple />)
        .simulate('focus')
        .simulate('click')

      wrapper.simulate('blur')

      spy.should.not.have.been.called()
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).value
      const next = _.sample(_.without(options, value)).value

      wrapperMount(<Dropdown options={options} selection value={value} onChange={spy} />)
        .setProps({ value: next })

      spy.should.not.have.been.called()
    })
  })

  describe('onClick', () => {
    it('is called with (event, props)', () => {
      const onClick = sandbox.spy()
      wrapperMount(<Dropdown onClick={onClick} options={options} />)
      wrapper.simulate('click', { stopPropagation: _.noop })

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch({}, { options })
    })

    it("toggles the dropdown when it's not searchable", () => {
      wrapperMount(<Dropdown options={options} />)

      wrapper.simulate('click')
      dropdownMenuIsOpen()

      wrapper.simulate('click')
      dropdownMenuIsClosed()
    })

    it("opens the dropdown when it's searchable, but don't close", () => {
      wrapperMount(<Dropdown options={options} search />)

      wrapper.simulate('click')
      dropdownMenuIsOpen()

      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })

    it("don't open the dropdown when it's searchable and minCharacters is more that default value", () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} search />)

      wrapper.simulate('click')
      dropdownMenuIsClosed()
    })
  })

  describe('onFocus', () => {
    it('is called with (event, props)', () => {
      const onFocus = sandbox.spy()
      wrapperMount(<Dropdown onFocus={onFocus} options={options} />)
      wrapper.simulate('focus')

      onFocus.should.have.been.calledOnce()
      onFocus.should.have.been.calledWithMatch({}, { options })
    })

    it("opens the dropdown when it's not searchable", () => {
      wrapperMount(<Dropdown options={options} />)

      wrapper.simulate('focus')
      dropdownMenuIsOpen()
    })

    it("opens the dropdown when it's searchable", () => {
      wrapperMount(<Dropdown options={options} search />)

      wrapper.simulate('focus')
      dropdownMenuIsOpen()
    })

    it("don't open the dropdown when it's searchable and minCharacters is more that default value", () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} search />)

      wrapper.simulate('focus')
      dropdownMenuIsClosed()
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, value) on search input change', () => {
      const spy = sandbox.spy()
      wrapperMount(<Dropdown options={options} search selection onSearchChange={spy} />)
        .find('input.search')
        .simulate('change', { target: { value: 'a' }, stopPropagation: _.noop })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({ target: { value: 'a' } }, {
        search: true,
        searchQuery: 'a',
      })
    })

    it("don't open the menu on change if query's length is less than minCharacters", () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} selection search />)

      dropdownMenuIsClosed()

      // simulate search with query's length is less than minCharacters
      wrapper
        .find('input.search')
        .simulate('change', { target: { value: 'a' } })

      dropdownMenuIsClosed()
    })

    it("closes the opened menu on change if query's length is less than minCharacters", () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} selection search />)
      const input = wrapper.find('input.search')

      input.simulate('change', { target: { value: 'abc' } })
      dropdownMenuIsOpen()

      input.simulate('change', { target: { value: 'a' } })
      dropdownMenuIsClosed()
    })
  })

  describe('options', () => {
    it('adds the onClick handler to all items', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .find('DropdownItem')
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
    it('renders new options when options change', () => {
      const customOptions = [
        { text: 'abra', value: 'abra' },
        { text: 'cadabra', value: 'cadabra' },
        { text: 'bang', value: 'bang' },
      ]
      wrapperMount(
        <Dropdown options={customOptions} />,
      )
        .find('input.search')

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(3)

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(4)

      const newItem = wrapper
        .find('DropdownItem')
        .last()

      newItem.should.have.prop('text', 'bar')
      newItem.should.have.prop('value', 'bar')
    })

    it('passes options as props', () => {
      const customOptions = [
        { text: 'abra', value: 'abra', 'data-foo': 'someValue' },
        { text: 'cadabra', value: 'cadabra', 'data-foo': 'someValue' },
        { text: 'bang', value: 'bang', 'data-foo': 'someValue' },
      ]
      wrapperShallow(<Dropdown options={customOptions} selection />)
        .find('DropdownItem')
        .everyWhere(item => item.should.have.prop('data-foo', 'someValue'))
    })

    it('handles keys correctly', () => {
      const customOptions = [
        { key: 0, text: 'foo', value: 'foo' },
        { key: null, text: 'bar', value: 'bar' },
        { key: undefined, text: 'baz', value: 'baz' },
      ]
      wrapperShallow(<Dropdown options={customOptions} selection />)
      const items = wrapper.find('DropdownItem')

      items.at(0).key().should.equal('0')
      items.at(1).key().should.equal('bar')
      items.at(2).key().should.equal('baz')
    })
  })

  describe('search', () => {
    it('does not add a search input when not defined', () => {
      wrapperShallow(<Dropdown options={options} selection />)
        .should.not.have.descendants('input.search')
    })

    it('adds a search input when present', () => {
      wrapperShallow(<Dropdown options={options} selection search />)
        .should.have.exactly(1).descendants(DropdownSearchInput)
    })

    it('sets focus to the search input on open', () => {
      wrapperMount(<Dropdown options={options} selection search />)
        .simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      searchIsFocused.should.be.true(
        `Expected "input.search" to be the active element but found ${activeElement} instead.`,
      )
    })

    it('sets focus to the search input on click on the placeholder', () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} placeholder='foo' selection search />)
        .find('.default.text')
        .simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      searchIsFocused.should.be.true(
        `Expected "input.search" to be the active element but found ${activeElement} instead.`,
      )
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

    it('filters the items based on custom search function', () => {
      const searchFunction = sandbox.stub().returns(options.slice(0, 2))
      const search = wrapperMount(<Dropdown options={options} selection search={searchFunction} />)
        .find('input.search')
      const searchQuery = '__nonExistingSearchQuery__'

      // search for value yields 2 results as per our custom search function
      search.simulate('change', { target: { value: searchQuery } })

      searchFunction.should.have.been.calledOnce()
      searchFunction.should.have.been.calledWithMatch(options, searchQuery)

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(2, 'Searching with custom search function did not yield 2 results.')
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
      wrapperMount(<Dropdown options={options} selection search />)

      wrapper.simulate('click')
      dropdownMenuIsOpen()

      wrapper
        .find('DropdownItem')
        .at(0)
        .should.have.prop('selected', true)

      // blur, focus, open, move item selection down
      wrapper.simulate('blur')
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      wrapper
        .find('DropdownItem')
        .at(0)
        .should.have.prop('selected', false)
      wrapper
        .find('DropdownItem')
        .at(1)
        .should.have.prop('selected', true)

      // blur, focus, open, move item selection up
      wrapper.simulate('blur')
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      wrapper
        .find('DropdownItem')
        .at(0)
        .should.have.prop('selected', true)
      wrapper
        .find('DropdownItem')
        .at(1)
        .should.not.have.prop('selected', true)
    })

    it('does not close the menu when options are empty', () => {
      wrapperMount(<Dropdown options={options} search selection />)
      wrapper.simulate('click')

      wrapper.find('input.search')
        .simulate('change', { target: { value: 'foo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      dropdownMenuIsOpen()
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

    it('uses default noResultsMessage', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />)
        .find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      wrapper
        .find('.message')
        .should.have.text('No results found.')
    })

    it('uses custom noResultsMessage', () => {
      const search = wrapperMount(<Dropdown options={options} selection search noResultsMessage='Something custom' />)
        .find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      wrapper
        .find('.message')
        .should.have.text('Something custom')
    })

    it('uses no noResultsMessage', () => {
      const search = wrapperMount(<Dropdown options={options} selection search noResultsMessage='' />)
        .find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      wrapper
        .find('.message')
        .should.have.text('')
    })
    it('is not shown when set to `null`', () => {
      const search = wrapperMount(<Dropdown options={options} selection search noResultsMessage={null} />)
        .find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      wrapper.should.not.have.descendants('.message')
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
        <Dropdown text='required prop'>
          <Dropdown.Menu data-find-me />
        </Dropdown>,
      )
        .should.contain.descendants('DropdownMenu')

      wrapper
        .find('DropdownMenu')
        .should.have.prop('data-find-me', true)
    })

    it('opens on click', () => {
      wrapperMount(
        <Dropdown text='required prop'>
          <Dropdown.Menu />
        </Dropdown>,
      )

      dropdownMenuIsClosed()
      wrapper.simulate('click')
      dropdownMenuIsOpen()
    })

    it('spreads extra menu props', () => {
      wrapperShallow(
        <Dropdown text='required prop'>
          <Dropdown.Menu data-foo-bar />
        </Dropdown>,
      )
        .should.contain.descendants('DropdownMenu')

      wrapper
        .find('DropdownMenu')
        .should.have.prop('data-foo-bar', true)
    })

    it("merges the user's menu className", () => {
      wrapperShallow(
        <Dropdown text='required prop'>
          <Dropdown.Menu className='foo-bar' />
        </Dropdown>,
      )
        .should.contain.descendants('DropdownMenu')

      const menu = wrapper
        .find('DropdownMenu')
        .shallow()

      menu.should.have.className('menu')
      menu.should.have.className('foo-bar')
    })
  })

  describe('allowAdditions', () => {
    const customOptions = [
      { text: 'abra', value: 'abra' },
      { text: 'cadabra', value: 'cadabra' },
      { text: 'bang', value: 'bang' },
    ]

    it('adds an option for arbitrary search value', () => {
      const search = wrapperMount(<Dropdown options={customOptions} selection search allowAdditions />)
        .find('input.search')

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(3)

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1)

      wrapper
        .find('DropdownItem')
        .should.have.prop('value', 'boo')
    })

    it('adds an option for prefix search value', () => {
      const search = wrapperMount(<Dropdown options={customOptions} selection search allowAdditions />)
        .find('input.search')

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(3)

      search.simulate('change', { target: { value: 'a' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(4)

      wrapper
        .find('DropdownItem')
        .first()
        .should.have.prop('value', 'a')
    })

    it('uses default additionLabel', () => {
      const search = wrapperMount(<Dropdown options={customOptions} selection search allowAdditions />)
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('className', 'addition')

      const text = wrapper
        .find('DropdownItem')
        .prop('text')

      expect(text[0]).to.equal('Add ')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses custom additionLabel string', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionLabel='New: ' />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('className', 'addition')

      const text = wrapper
        .find('DropdownItem')
        .prop('text')

      expect(text[0]).to.equal('New: ')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses custom additionLabel element', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionLabel={<i>New: </i>} />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('className', 'addition')

      const text = wrapper
        .find('DropdownItem')
        .prop('text')

      shallow(text[0]).equals(<i key='label'>New: </i>)
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses no additionLabel', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionLabel='' />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(1)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('className', 'addition')

      const text = wrapper
        .find('DropdownItem')
        .prop('text')

      expect(text[0]).to.equal('')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('keeps custom value option (bottom) when options change', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionPosition='bottom' />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'a' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(4)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('value', 'a')

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(5)

      wrapper
        .find('DropdownItem')
        .last()
        .should.have.prop('value', 'a')
    })

    it('keeps custom value option (top) when options change', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'a' } })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(4)

      wrapper
        .find('DropdownItem')
        .first()
        .should.have.prop('value', 'a')

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      wrapper
        .find('DropdownItem')
        .should.have.lengthOf(5)

      wrapper
        .find('DropdownItem')
        .first()
        .should.have.prop('value', 'a')
    })

    it('calls onAddItem prop when clicking new value', () => {
      const onAddItem = sandbox.spy()
      const onChange = sandbox.spy()
      const search = wrapperMount(
        <Dropdown
          allowAdditions
          onAddItem={onAddItem}
          onChange={onChange}
          options={customOptions}
          search
          selection
        />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')

      onChange.should.have.been.calledOnce()
      onAddItem.should.have.been.calledOnce()
      onAddItem.should.have.been.calledWithMatch({}, { value: 'boo' })
      onAddItem.should.have.been.calledImmediatelyAfter(onChange)
    })

    it('calls onAddItem prop when pressing enter on new value', () => {
      const onAddItem = sandbox.spy()
      const onChange = sandbox.spy()
      const search = wrapperMount(
        <Dropdown
          allowAdditions
          onAddItem={onAddItem}
          onChange={onChange}
          options={customOptions}
          search
          selection
        />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      onChange.should.have.been.calledOnce()
      onAddItem.should.have.been.calledOnce()
      onAddItem.should.have.been.calledWithMatch({}, { value: 'boo' })
      onAddItem.should.have.been.calledImmediatelyAfter(onChange)
    })

    it('clears value of the searchQuery when selection is only option', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      )
        .find('input.search')

      search.simulate('change', { target: { value: 'boo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      wrapper.should.have.state('searchQuery', '')
    })
  })

  describe('header', () => {
    it('renders a header when present', () => {
      const text = faker.hacker.phrase()

      wrapperRender(<Dropdown options={options} header={text} />)
        .find('.menu .header')
        .should.contain.text(text)
    })
    it('does not render a header when not present', () => {
      wrapperRender(<Dropdown options={options} />)
        .should.not.have.descendants('.menu .header')
    })
  })

  describe('value validations', () => {
    it('logs an error if dropdown is not multiple and value is array', () => {
      consoleUtil.disableOnce()
      const spy = sandbox.spy(console, 'error')

      const originalValue = _.pick(options, 'value')[0]
      const nextValue = _.castArray(_.pick(options, 'value')[1])

      wrapperMount(<Dropdown options={options} value={originalValue} selection />)
      wrapper.setProps({ value: nextValue })

      const errorMessage =
        'Dropdown `value` must not be an array when `multiple` is not set.' +
        ' Either set `multiple={true}` or use a string or number value.'

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(errorMessage)
    })

    it('logs an error if dropdown is multiple and value not array', () => {
      consoleUtil.disableOnce()
      const spy = sandbox.spy(console, 'error')

      const originalValue = _.castArray(_.pick(options, 'value')[0])
      const nextValue = _.pick(options, 'value')[1]

      wrapperMount(<Dropdown options={options} value={originalValue} selection multiple />)
      wrapper.setProps({ value: nextValue })

      const errorMessage =
        'Dropdown `value` must be an array when `multiple` is set.' +
        ` Received type: \`${Object.prototype.toString.call(nextValue)}\`.`

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(errorMessage)
    })
  })

  describe('selectOnNavigation', () => {
    it('is on by default', () => {
      const spy = sandbox.spy()

      wrapperMount(
        <Dropdown
          options={options}
          defaultValue={options[0].value}
          onChange={spy}
        />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'ArrowDown' })

      spy.should.have.been.called()
      wrapper.should.have.state('value', options[1].value)
    })

    it('does not change value when set to false', () => {
      const spy = sandbox.spy()
      const value = options[0].value

      wrapperMount(
        <Dropdown
          options={options}
          defaultValue={value}
          selectOnNavigation={false}
          onChange={spy}
        />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'ArrowDown' })

      spy.should.not.have.been.called()
      wrapper.should.have.state('value', value)
    })
  })
})
