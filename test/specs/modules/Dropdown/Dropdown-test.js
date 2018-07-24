import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { consoleUtil, domEvent } from 'test/utils'
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

// ----------------------------------------
// Options
// ----------------------------------------
const getOptions = (count = 5) =>
  _.times(count, (i) => {
    const text = [i, ..._.times(3, faker.hacker.noun)].join(' ')
    const value = _.snakeCase(text)
    return { text, value }
  })

// -------------------------------
// Common Assertions
// -------------------------------
const dropdownMenuIsClosed = () => {
  expect(wrapper).not.have.className('visible')

  const menu = wrapper.find('DropdownMenu')
  try {
    // when shallow rendered
    expect(menu).not.have.prop('open', true)
  } catch (err) {
    // when mounted
    expect(menu).not.have.className('visible')
  }
}

const dropdownMenuIsOpen = () => {
  expect(wrapper).have.className('active')
  expect(wrapper).have.className('visible')

  const menu = wrapper.find('DropdownMenu')
  try {
    // when shallow rendered
    expect(menu).have.prop('open', true)
  } catch (err) {
    // when mounted
    expect(menu).have.className('visible')
  }
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
  common.hasSubcomponents(Dropdown, [
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    DropdownMenu,
    DropdownSearchInput,
  ])

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
    'left',
    'right',
    'top',
    'top left',
    'top right',
    'bottom',
    'bottom left',
    'bottom right',
  ])

  describe('defaultSearchQuery', () => {
    it('changes default value of searchQuery', () => {
      expect(shallow(<Dropdown defaultSearchQuery='foo' />).state('searchQuery')).toBe('foo')
    })
  })

  it('closes on blur', () => {
    wrapperMount(<Dropdown options={options} />).simulate('click')

    dropdownMenuIsOpen()
    wrapper.simulate('blur')
    dropdownMenuIsClosed()
  })

  it('does not close on blur with closeOnBlur set to false', () => {
    wrapperMount(<Dropdown options={options} closeOnBlur={false} />).simulate('click')

    dropdownMenuIsOpen()
    wrapper.simulate('blur')
    dropdownMenuIsOpen()
  })

  it('blurs the Dropdown node on close', () => {
    wrapperMount(<Dropdown options={options} selection defaultOpen />)

    const instance = wrapper.instance()
    const blur = jest.spyOn(instance.ref, 'blur')

    dropdownMenuIsOpen()
    wrapper.simulate('click')
    dropdownMenuIsClosed()

    expect(blur).toHaveBeenCalledTimes(1)
  })

  it('blurs the Dropdown node on close by clicking outside component', () => {
    wrapperMount(<Dropdown options={options} selection defaultOpen />)

    const instance = wrapper.instance()
    const blur = jest.spyOn(instance.ref, 'blur')

    dropdownMenuIsOpen()
    document.body.click()
    dropdownMenuIsClosed()

    expect(blur).toHaveBeenCalledTimes(1)
  })

  it('does not close on click when search is true and options are empty', () => {
    wrapperMount(<Dropdown options={[]} search selection defaultOpen />)

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
      expect(shallow(<Dropdown options={options} />)).have.prop('tabIndex', 0)
    })

    it('defaults to -1 when disabled', () => {
      expect(shallow(<Dropdown disabled options={options} />)).have.prop('tabIndex', -1)
    })

    it('applies when defined', () => {
      expect(shallow(<Dropdown options={options} tabIndex={1} />)).have.prop('tabIndex', 1)
    })

    describe('tabIndex', () => {
      it('defaults the search input to 0', () => {
        expect(
          shallow(<Dropdown options={options} selection search />).find(DropdownSearchInput),
        ).have.prop('tabIndex', 0)
      })

      it('defaults the disabled search input to -1', () => {
        expect(
          shallow(<Dropdown disabled options={options} selection search />).find(
            DropdownSearchInput,
          ),
        ).have.prop('tabIndex', -1)
      })

      it('allows explicitly setting the search input value', () => {
        expect(
          shallow(<Dropdown options={options} selection search tabIndex={123} />).find(
            DropdownSearchInput,
          ),
        ).have.prop('tabIndex', 123)
      })

      it('allows explicitly setting the search input value when disabled', () => {
        expect(
          shallow(<Dropdown disabled options={options} selection search tabIndex={123} />).find(
            DropdownSearchInput,
          ),
        ).have.prop('tabIndex', 123)
      })

      it('is not present on the root when is search', () => {
        expect(shallow(<Dropdown options={options} selection search />)).not.have.prop('tabIndex')
      })

      it('is not present on the root when is search and defined', () => {
        expect(shallow(<Dropdown options={options} selection search tabIndex={1} />)).not.have.prop(
          'tabIndex',
        )
      })
    })
  })

  describe('aria', () => {
    it('should label normal dropdown as a listbox', () => {
      wrapperMount(<Dropdown />)
      expect(wrapper.find('div').at(0)).have.prop('role', 'listbox')
    })
    it('should label search dropdown as a combobox', () => {
      wrapperMount(<Dropdown search />)
      expect(wrapper.find('div').at(0)).have.prop('role', 'combobox')
    })
    it('should label search dropdownMenu as a listbox', () => {
      wrapperMount(<Dropdown search />)
      expect(wrapper.find('DropdownMenu')).have.prop('role', 'listbox')
    })
    it('should label search multiple dropdownMenu as aria-multiselectable', () => {
      wrapperMount(<Dropdown search multiple />)
      expect(wrapper.find('DropdownMenu')).have.prop('aria-multiselectable', true)
    })
    it('should not label normal dropdownMenu with a role', () => {
      wrapperMount(<Dropdown />)
      expect(wrapper.find('DropdownMenu')).not.have.prop('role')
    })
    it('should label disabled dropdown as aria-disabled', () => {
      wrapperMount(<Dropdown disabled />)
      expect(wrapper.find('div').at(0)).have.prop('aria-disabled', true)
    })
    it('should label normal dropdown without aria-disabled', () => {
      wrapperMount(<Dropdown />)
      expect(wrapper.find('div').at(0)).not.have.prop('aria-disabled')
    })
    it('should label multiple dropdown as aria-multiselectable', () => {
      wrapperMount(<Dropdown multiple />)
      expect(wrapper.find('div').at(0)).have.prop('aria-multiselectable', true)
    })
    it('should not label multiple search dropdown as aria-multiselectable', () => {
      wrapperMount(<Dropdown search multiple />)
      expect(wrapper.find('div').at(0)).not.have.prop('aria-multiselectable')
    })
    it('should label normal dropdown without aria-multiselectable', () => {
      wrapperMount(<Dropdown />)
      expect(wrapper.find('div').at(0)).not.have.prop('aria-multiselectable')
    })
    it('should label loading dropdown as aria-busy', () => {
      wrapperMount(<Dropdown loading />)
      expect(wrapper.find('div').at(0)).have.prop('aria-busy', true)
    })
    it('should label normal dropdown without aria-busy', () => {
      wrapperMount(<Dropdown />)
      expect(wrapper.find('div').at(0)).not.have.prop('aria-busy')
    })
    it('should label search dropdown input aria-autocomplete=list', () => {
      wrapperMount(<Dropdown search />)
      expect(wrapper.find('input')).have.prop('aria-autocomplete', 'list')
    })
    it('should label search dropdown input type=text', () => {
      wrapperMount(<Dropdown search />)
      expect(wrapper.find('input')).have.prop('type', 'text')
    })
  })

  describe('handleBlur', () => {
    it('passes the event to the onBlur prop', () => {
      const onBlur = jest.fn()
      const event = { foo: 'bar' }

      wrapperShallow(<Dropdown onBlur={onBlur} />).simulate('blur', event)

      expect(onBlur).toHaveBeenCalledTimes(1)
      expect(onBlur).toHaveBeenCalledWith(event)
    })

    it('calls makeSelectedItemActive', () => {
      wrapperShallow(<Dropdown selectOnBlur />)

      const instance = wrapper.instance()
      const makeSelectedItemActive = jest.spyOn(instance, 'makeSelectedItemActive')

      wrapper.simulate('blur')

      expect(makeSelectedItemActive).toHaveBeenCalledTimes(1)
    })

    it('sets focus state to false', () => {
      wrapperShallow(<Dropdown selectOnBlur />)

      wrapper.simulate('blur')
      expect(wrapper).have.state('focus', false)
    })

    it('sets searchQuery state to empty', () => {
      wrapperShallow(<Dropdown />)

      wrapper.setState({ searchQuery: 'foo' })
      wrapper.simulate('blur')
      expect(wrapper).have.state('searchQuery', '')
    })

    it('does not call onBlur when the mouse is down', () => {
      const spy = jest.fn()

      wrapperShallow(<Dropdown onBlur={spy} selectOnBlur />)

      wrapper.simulate('mousedown')
      wrapper.simulate('blur')

      expect(spy).not.toHaveBeenCalled()
    })

    it('does not call makeSelectedItemActive when the mouse is down', () => {
      const spy = jest.fn()

      wrapperShallow(<Dropdown onBlur={spy} selectOnBlur />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'makeSelectedItemActive')

      wrapper.simulate('mousedown')
      wrapper.simulate('blur')

      expect(instance.makeSelectedItemActive).not.toHaveBeenCalled()
    })

    it('does not set focus state when the mouse is down', () => {
      wrapperShallow(<Dropdown />)

      wrapper.setState({ focus: 'foo' })
      wrapper.simulate('mousedown')
      wrapper.simulate('blur')
      expect(wrapper).have.state('focus', 'foo')
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

      expect(instance.handleClose).toHaveBeenCalledTimes(1)
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
      expect(
        wrapper
          .find('DropdownItem')
          .first()
          .simulate('click'),
      ).have.prop('active', true)

      expect(wrapper).have.state('value', options[0].value)

      dropdownMenuIsClosed()

      // doesn't open on space
      domEvent.keyDown(document, { key: ' ' })
      wrapper.update()

      dropdownMenuIsClosed()
    })
  })

  describe('closeOnChange', () => {
    it('will close when defined and dropdown is multiple', () => {
      wrapperMount(<Dropdown selection multiple search closeOnChange options={options} />).simulate(
        'click',
      )

      dropdownMenuIsOpen()

      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click', nativeEvent)

      dropdownMenuIsClosed()
    })

    it('will remain open when undefined and dropdown is multiple', () => {
      wrapperMount(<Dropdown selection multiple search options={options} />).simulate('click')

      dropdownMenuIsOpen()

      wrapper
        .find('DropdownItem')
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

      expect(instance.setSelectedIndex).toHaveBeenCalledTimes(1)
    })

    it('will not call setSelectedIndex if options have not changed', () => {
      wrapperMount(<Dropdown options={options} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'setSelectedIndex')

      wrapper.setProps({ options })

      expect(instance.setSelectedIndex).not.toHaveBeenCalled()
    })
  })

  describe('isMouseDown', () => {
    it('tracks when the mouse is down', () => {
      wrapperShallow(<Dropdown />).simulate('mousedown')

      expect(wrapper.instance().isMouseDown).toBe(true)

      domEvent.mouseUp(document)

      expect(wrapper.instance().isMouseDown).toBe(false)
    })
  })

  describe('icon', () => {
    it('defaults to a dropdown icon', () => {
      expect(Dropdown.defaultProps.icon).toBe('dropdown')
      expect(wrapperMount(<Dropdown />)).contain.descendants('.dropdown.icon')
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
      const onClick = jest.fn()
      const props = { name: 'user', onClick }

      wrapperMount(<Dropdown icon={props} options={options} />)
        .find('i.icon')
        .simulate('click', event)

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith(event, props)
    })
  })

  describe('searchQuery', () => {
    it('defaults to empty string', () => {
      expect(shallow(<Dropdown />)).have.state('searchQuery', '')
    })

    it('passes value to state', () => {
      expect(shallow(<Dropdown searchQuery='foo' />)).have.state('searchQuery', 'foo')
    })
  })

  describe('selected item', () => {
    it('defaults to the first item', () => {
      expect(
        wrapperShallow(<Dropdown options={options} selection />)
          .find('DropdownItem')
          .first(),
      ).have.prop('selected', true)
    })
    it('defaults to the first non-disabled item', () => {
      options[0].disabled = true
      wrapperShallow(<Dropdown options={options} selection />)

      // selection moved to second item
      expect(wrapper.find('DropdownItem').first()).have.prop('selected', false)

      expect(wrapper.find('DropdownItem').at(1)).have.prop('selected', true)
    })
    it('defaults to selected item when options are initially empty', () => {
      const randomIndex = 1 + _.random(options.length - 2)
      const value = options[randomIndex].value

      wrapperShallow(<Dropdown options={[]} selection value={value} />)

      wrapper.setProps({ options, value })

      expect(wrapper.find('DropdownItem').at(randomIndex)).have.prop('selected', true)
    })
    it('is null when all options disabled', () => {
      const disabledOptions = options.map(o => ({ ...o, disabled: true }))

      expect(wrapperMount(<Dropdown options={disabledOptions} selection />)).not.have.descendants(
        '.selected',
      )
    })
    it('is set when clicking an item', () => {
      // random item, skip the first as it's selected by default
      const randomIndex = 1 + _.random(options.length - 2)
      wrapperMount(<Dropdown options={options} selection />)

      wrapper
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')
      expect(wrapper.find('DropdownItem').at(randomIndex)).have.prop('selected', true)
    })
    it('is ignored when clicking a disabled item', () => {
      // random item, skip the first as it's selected by default
      const randomIndex = 1 + _.random(options.length - 2)

      options[randomIndex].disabled = true

      expect(
        wrapperMount(<Dropdown options={options} selection />)
          .simulate('click', nativeEvent)
          .find('DropdownItem')
          .at(randomIndex)
          .simulate('click', nativeEvent),
      ).not.have.prop('selected', true)

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
      expect(wrapper.find('DropdownItem').first()).have.prop('selected', false)
      expect(wrapper.find('DropdownItem').at(1)).have.prop('selected', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Dropdown options={options} selection />)

      // open
      expect(
        wrapper
          .simulate('click')
          .find('DropdownItem')
          .first(),
      ).have.prop('selected', true)

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      // selection moved to last item
      expect(wrapper.find('DropdownItem').first()).have.prop('selected', false)
      expect(wrapper.find('DropdownItem').at(options.length - 1)).have.prop('selected', true)
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

      expect(wrapper.find('.selected')).contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      expect(wrapper.find('.selected')).contain.text('a2')
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

      expect(wrapper.find('.selected')).contain.text(textToFind)
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

      expect(wrapper.find('.selected')).contain.text(textToFind)
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

      expect(wrapper.find('.message')).contain.text(noResultsText)
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

      expect(wrapper)
        .have.exactly(1)
        .descendants('.message')

      // search for 'a' (simulated backspace)
      // no results is removed
      // first item is selected
      // down arrow moves selection
      wrapper.find('input.search').simulate('change', { target: { value: 'a' } })

      expect(wrapper).not.have.descendants('.message')

      expect(wrapper)
        .have.exactly(1)
        .descendants('.selected')
        .which.contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(wrapper)
        .have.exactly(1)
        .descendants('.selected')
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

      expect(wrapper.find('.selected')).contain.text('a1')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      expect(wrapper.find('.selected')).contain.text('a2')
    })
    it('does not enter an infinite loop when all items are disabled', () => {
      const opts = [
        { text: '1', value: '1', disabled: true },
        { text: '2', value: '2', disabled: true },
      ]
      wrapperMount(<Dropdown options={opts} search selection />).simulate('click')

      const instance = wrapper.instance()
      sandbox.spy(instance, 'moveSelectionBy')

      // move selection down
      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(instance.moveSelectionBy).toHaveBeenCalledTimes(1)
    })
    it('scrolls the selected item into view', () => {
      // get enough options to make the menu scrollable
      const opts = getOptions(20)

      wrapperMount(<Dropdown options={opts} selection />).simulate('click')

      dropdownMenuIsOpen()
      const menu = document.querySelector('.ui.dropdown .menu.visible')

      // Limit the menu's height and set an overflow so it's scrollable
      menu.style.height = '100px'
      menu.style.overflow = 'auto'

      //
      // Scrolls to bottom
      //

      // make sure first item is selected
      expect(wrapper.find('.selected')).contain.text(opts[0].text)

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // make sure last item is selected
      expect(wrapper.find('.selected')).contain.text(_.tail(opts).text)

      // menu should be completely scrolled to the bottom
      const isMenuScrolledToBottom = menu.scrollTop + menu.clientHeight === menu.scrollHeight
      expect(isMenuScrolledToBottom).toBe(true)

      //
      // Scrolls back to top
      //

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // make sure first item is selected
      expect(wrapper.find('.selected')).contain.text(opts[0].text)

      // Note: For some reason the first item's offsetTop is not 0 so we need
      // to find the item's offsetTop and ensure it's at the top.
      const selectedItem = document.querySelector('.ui.dropdown .menu.visible .item.selected')
      const isMenuScrolledToTop = menu.scrollTop === selectedItem.offsetTop
      expect(isMenuScrolledToTop).toBe(true)
    })
    it('becomes active on enter when open', () => {
      wrapperMount(<Dropdown options={options} selection />)
      wrapper.simulate('click')

      // initial item props
      expect(wrapper.find('DropdownItem').at(1)).have.props({ selected: false, active: false })

      // select and make active
      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })
      wrapper.update()

      expect(wrapper.find('DropdownItem').at(1)).have.props({ selected: true, active: true })
    })
    it('closes the menu', () => {
      wrapperMount(<Dropdown options={options} selection />).simulate('click')

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

      expect(wrapper).have.state('searchQuery', 'foo')
    })
  })

  describe('value', () => {
    it('sets the corresponding item to active', () => {
      const value = _.sample(options).value

      expect(
        wrapperShallow(<Dropdown options={options} selection value={value} />)
          .find('DropdownItem')
          .find({ value, active: true }),
      ).be.present()
    })

    it('sets the corresponding item text', () => {
      const { text, value } = _.sample(options)

      expect(
        wrapperShallow(<Dropdown value={value} options={options} selection />)
          .find('DropdownItem')
          .find({ value, text }),
      ).be.present()
    })

    it('updates active item when changed', () => {
      const value = _.sample(options).value
      let next
      while (!next || next === value) next = _.sample(options).value

      wrapperMount(<Dropdown value={value} options={options} selection />)

      // initial active item
      expect(wrapper.find('DropdownItem').find({ value })).have.prop('active', true)

      // change value
      wrapper.setProps({ value: next })

      // next active item
      expect(wrapper.find('DropdownItem').find({ value: next })).have.prop('active', true)
    })

    it('updates text when value changed', () => {
      const initialItem = _.sample(options)
      const nextItem = _.sample(_.without(options, initialItem))

      expect(
        wrapperMount(<Dropdown options={options} selection value={initialItem.value} />).find(
          'div.text',
        ),
      ).contain.text(initialItem.text)

      expect(wrapper.setProps({ value: nextItem.value }).find('div.text')).contain.text(
        nextItem.text,
      )
    })

    it('updates value on down arrow', () => {
      wrapperMount(<Dropdown options={options} selection />)

      wrapper.simulate('click')
      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(wrapper).have.state('value', options[1].value)
    })

    it('updates value on up arrow', () => {
      wrapperMount(<Dropdown options={options} selection />)

      wrapper.simulate('click')
      domEvent.keyDown(document, { key: 'ArrowUp' })

      expect(wrapper).have.state('value', options[4].value)
    })
  })

  describe('text', () => {
    it('sets the display text', () => {
      const text = faker.hacker.phrase()

      expect(
        wrapperMount(<Dropdown options={options} selection text={text} />).find('div.text'),
      ).contain.text(text)
    })
    it('prevents updates on item click if defined', () => {
      const text = faker.hacker.phrase()

      wrapperMount(<Dropdown options={options} selection text={text} />)
        .simulate('click')
        .find('DropdownItem')
        .at(_.random(options.length - 1))
        .simulate('click')

      expect(wrapper.find('div.text')).contain.text(text)
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
      expect(wrapper.find('div.text')).contain.text(item.text())
    })
    it('is updated on item enter if multiple search results present', () => {
      const searchOptions = [{ value: 0, text: 'foo' }, { value: 1, text: 'foe' }]
      wrapperMount(<Dropdown options={searchOptions} search selection />)

      // open and simulate search
      wrapper.simulate('click').setState({ searchQuery: 'fo' })

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      domEvent.keyDown(document, { key: 'Enter' })

      // text updated
      expect(wrapper.find('div.text')).contain.text('foe')
    })
    it('displays if value is 0', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: 0, text }]} selection />)

      // open
      wrapper.simulate('click')

      // click item
      const item = wrapper.find('DropdownItem').simulate('click')

      // text updated
      expect(wrapper.find('div.text')).contain.text(item.text())
    })
    it("does not display if value is ''", () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: '', text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      expect(wrapper.find('div.text')).contain.text('')
    })
    it('does not display if value is null', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ value: null, text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      expect(wrapper.find('div.text')).contain.text('')
    })
    it('does not display if value is undefined', () => {
      const text = faker.hacker.noun()

      wrapperMount(<Dropdown options={[{ key: text, value: undefined, text }]} selection />)
        .simulate('click')
        .find('DropdownItem')
        .simulate('click')

      expect(wrapper.find('div.text')).contain.text('')
    })
  })

  describe('trigger', () => {
    it('displays the trigger', () => {
      const text = 'Hey there'
      const trigger = <div className='trigger'>{text}</div>

      expect(
        wrapperMount(<Dropdown options={options} trigger={trigger} />).find('.trigger'),
      ).contain.text(text)
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
      const item = wrapper.find('DropdownItem').at(_.random(options.length - 1))

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // select item
      item.simulate('click')
      dropdownMenuIsClosed()
    })

    it('blurs after menu item click (mousedown)', () => {
      wrapperMount(<Dropdown options={options} selection />)
      const item = wrapper.find('DropdownItem').at(_.random(options.length - 1))

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
      domEvent.click(document.body)
      dropdownMenuIsClosed()
    })

    it('closes on esc key', () => {
      wrapperMount(<Dropdown options={options} selection />)

      // open
      wrapper.find('Dropdown').simulate('click')
      dropdownMenuIsOpen()

      // esc
      domEvent.keyDown(document, { key: 'Escape' })
      dropdownMenuIsClosed()
    })
  })

  describe('onOpen', () => {
    it('called when dropdown would open', () => {
      const onOpen = jest.fn()
      wrapperMount(<Dropdown options={options} selection onOpen={onOpen} />)

      wrapper.simulate('click')
      expect(onOpen).toHaveBeenCalledTimes(1)
    })

    it('not called when dropdown would not open', () => {
      const onOpen = jest.fn()
      wrapperMount(<Dropdown options={options} selection onOpen={onOpen} />)

      domEvent.keyDown(document, { key: 'ArrowDown' })
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is called once when the icon is clicked with a search prop', () => {
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/2600
      const onOpen = jest.fn()
      wrapperMount(<Dropdown options={options} selection search onOpen={onOpen} />)
        .find('i.icon')
        .simulate('click')

      expect(onOpen).toHaveBeenCalledTimes(1)
    })
  })

  describe('onClose', () => {
    it('called when dropdown would close', () => {
      const onClose = jest.fn()
      wrapperMount(<Dropdown defaultOpen onClose={onClose} options={options} selection />)

      wrapper.simulate('click')
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('called once even when blurred', () => {
      // Heads up!
      // Special test for: https://github.com/Semantic-Org/Semantic-UI-React/issues/2953
      const onClose = jest.fn()
      wrapperMount(<Dropdown defaultOpen onClose={onClose} options={options} selection />)

      wrapper.simulate('click')
      wrapper.simulate('blur')
      expect(onClose).toHaveBeenCalledTimes(1)
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
      wrapperMount(<Dropdown options={options} selection open />).setProps({ open: false })
      dropdownMenuIsClosed()
    })
    it('opens the menu when toggled from false to true', () => {
      wrapperMount(<Dropdown options={options} selection open={false} />).setProps({ open: true })
      dropdownMenuIsOpen()
    })
    it('calls scrollSelectedItemIntoView when changed from false to true', () => {
      wrapperMount(<Dropdown options={options} selection open={false} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'scrollSelectedItemIntoView')

      expect(instance.scrollSelectedItemIntoView).not.toHaveBeenCalled()

      wrapper.setProps({ open: true })

      expect(instance.scrollSelectedItemIntoView).toHaveBeenCalledTimes(1)
    })
  })

  describe('multiple', () => {
    it('does not close the menu on item selection with enter', () => {
      wrapperMount(<Dropdown options={options} selection multiple />).simulate('click')

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
      expect(
        wrapperShallow(<Dropdown options={options} selection value={value} multiple />),
      ).not.have.descendants('DropdownItem')
    })
    it('displays a label for active items', () => {
      // select a random item, expect a label with the item's text
      const activeItem = _.sample(options)
      expect(
        wrapperShallow(
          <Dropdown options={options} selection value={[activeItem.value]} multiple />,
        ),
      ).have.descendants('Label')

      expect(wrapper.find('Label')).have.prop('content', activeItem.text)
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

      expect(wrapper)
        .have.exactly(options.length)
        .descendants('DropdownItem')
      expect(wrapper.find('DropdownItem').last()).have.prop('selected', true)

      domEvent.keyDown(document, { key: 'Enter' })
      wrapper.update()

      // one item should be gone, and the _new_ last item should be selected
      expect(wrapper)
        .have.exactly(options.length - 1)
        .descendants('DropdownItem')
      expect(wrapper.find('DropdownItem').last()).have.prop('selected', true)
    })
    it('has labels with delete icons', () => {
      // add a value so we have a label
      const value = [_.head(options).value]
      expect(
        wrapperMount(<Dropdown options={options} selection value={value} multiple />),
      ).have.descendants('.label')

      expect(wrapper.find('.label')).have.descendants('.delete.icon')
    })
    it('enables custom rendering', () => {
      const value = [_.head(options).value]
      const renderLabel = () => ({ content: 'My custom text!', as: 'div' })

      expect(
        wrapperMount(
          <Dropdown options={options} selection value={value} multiple renderLabel={renderLabel} />,
        ),
      ).have.descendants('.label')

      const label = wrapper.find('.label')

      expect(label).have.text('My custom text!')
      expect(label).have.tagName('div')
    })

    describe('selecting items', () => {
      let spy
      beforeEach(() => {
        spy = jest.fn()
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

        expect(wrapper.find('Label').at(randomIndex)).have.prop('active', true)
      })

      it('calls onLabelClick', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)
        const randomValue = value[randomIndex]

        wrapperMount(
          <Dropdown options={options} selection multiple value={value} onLabelClick={spy} />,
        )
          .simulate('click', nativeEvent)
          .find('Label')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        expect(spy).toHaveBeenCalledWith({}, { value: randomValue })
      })

      it('refocuses search on select', () => {
        const randomIndex = _.random(options.length - 1)

        wrapperMount(<Dropdown options={options} search selection multiple />)
          .simulate('click', nativeEvent)
          .find('DropdownItem')
          .at(randomIndex)
          .simulate('click', nativeEvent)

        expect(wrapper.instance().searchRef).eq(document.activeElement)
      })
    })
    describe('removing items', () => {
      it('calls onChange without the clicked value', () => {
        const value = _.map(options, 'value')
        const randomIndex = _.random(options.length - 1)
        const randomValue = value[randomIndex]
        const expected = _.without(value, randomValue)
        const spy = jest.fn()
        wrapperMount(<Dropdown options={options} selection value={value} multiple onChange={spy} />)

        wrapper
          .find('.delete.icon')
          .at(randomIndex)
          .simulate('click')

        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith({}, { value: expected })
      })
    })
  })

  describe('removing items on backspace', () => {
    let onChange
    beforeEach(() => {
      onChange = jest.fn()
    })

    it('does nothing without selected items', () => {
      wrapperMount(<Dropdown options={options} selection multiple search onChange={onChange} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      expect(onChange).not.toHaveBeenCalled()
    })
    it('removes the last item when there is no search query', () => {
      const value = _.map(options, 'value')
      const expected = _.dropRight(value)
      wrapperMount(
        <Dropdown options={options} selection value={value} multiple search onChange={onChange} />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({}, { value: expected })
    })
    it('removes the last item when there is no search query when uncontrolled', () => {
      const value = _.map(options, 'value')
      const expected = _.dropRight(value)
      wrapperMount(
        <Dropdown
          options={options}
          selection
          defaultValue={value}
          multiple
          search
          onChange={onChange}
        />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({}, { value: expected })

      expect(wrapper.state('value')).toEqual(expected)
    })
    it('does not remove the last item when there is a search query', () => {
      // search for random item
      const searchQuery = _.sample(options).text
      const value = _.map(options, 'value')
      wrapperMount(
        <Dropdown options={options} selection value={value} multiple search onChange={onChange} />,
      )

      // open and simulate search
      wrapper.simulate('click').setState({ searchQuery })

      domEvent.keyDown(document, { key: 'Backspace' })

      expect(onChange).not.toHaveBeenCalled()
    })
    it('does not remove items for multiple dropdowns without search', () => {
      const value = _.map(options, 'value')
      wrapperMount(<Dropdown options={options} selection value={value} multiple onChange={onChange} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'Backspace' })

      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe('onChange', () => {
    let onChange
    beforeEach(() => {
      onChange = jest.fn()
    })

    it('is called with event and value on item click', () => {
      const randomIndex = _.random(options.length - 1)
      const randomValue = options[randomIndex].value
      wrapperMount(<Dropdown options={options} selection onChange={onChange} />)
        .simulate('click')
        .find('DropdownItem')
        .at(randomIndex)
        .simulate('click')

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({}, { value: randomValue })
    })
    it('is called with event and value when pressing enter on a selected item', () => {
      const firstValue = options[0].value
      wrapperMount(<Dropdown options={options} selection onChange={onChange} />).simulate('click')

      domEvent.keyDown(document, { key: 'Enter' })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({}, { value: firstValue })
    })
    it('is called with event and value when blurring', () => {
      const firstValue = options[0].value
      wrapperMount(<Dropdown options={options} selection onChange={onChange} />)
        .simulate('focus') // open, highlights first item
        .simulate('blur') // blur should activate selected item

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith({}, { value: firstValue })
    })
    it('is not called on blur when closed', () => {
      wrapperMount(<Dropdown options={options} selection open={false} onChange={onChange} />)
        .simulate('focus')
        .simulate('blur')

      expect(onChange).not.toHaveBeenCalled()
    })
    it('is not called on blur when selectOnBlur is false', () => {
      wrapperMount(<Dropdown options={options} selection onChange={onChange} selectOnBlur={false} />)
        .simulate('focus')
        .simulate('click')

      wrapper.simulate('blur')

      expect(onChange).not.toHaveBeenCalled()
    })
    it('is not called on blur with multiple select', () => {
      wrapperMount(<Dropdown options={options} selection onChange={onChange} multiple />)
        .simulate('focus')
        .simulate('click')

      wrapper.simulate('blur')

      expect(onChange).not.toHaveBeenCalled()
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).value
      const next = _.sample(_.without(options, value)).value

      wrapperMount(<Dropdown options={options} selection value={value} onChange={onChange} />).setProps({
        value: next,
      })

      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe('onClick', () => {
    it('is called with (event, props)', () => {
      const onClick = jest.fn()
      wrapperMount(<Dropdown onClick={onClick} options={options} />)
      wrapper.simulate('click', { stopPropagation: _.noop })

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick).toHaveBeenCalledWith({}, { options })
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
      const onFocus = jest.fn()
      wrapperMount(<Dropdown onFocus={onFocus} options={options} />)
      wrapper.simulate('focus')

      expect(onFocus).toHaveBeenCalledTimes(1)
      expect(onFocus).toHaveBeenCalledWith({}, { options })
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
      const spy = jest.fn()
      wrapperMount(<Dropdown options={options} search selection onSearchChange={spy} />)
        .find('input.search')
        .simulate('change', { target: { value: 'a' }, stopPropagation: _.noop })

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        { target: { value: 'a' } },
        {
          search: true,
          searchQuery: 'a',
        },
      )
    })

    it("don't open the menu on change if query's length is less than minCharacters", () => {
      wrapperMount(<Dropdown minCharacters={3} options={options} selection search />)

      dropdownMenuIsClosed()

      // simulate search with query's length is less than minCharacters
      wrapper.find('input.search').simulate('change', { target: { value: 'a' } })

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
        .everyWhere(item => expect(item).have.prop('onClick'))
    })
    it('calls handleItemClick when an item is clicked', () => {
      wrapperMount(<Dropdown options={options} selection />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'handleItemClick')

      // open
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      expect(instance.handleItemClick).not.toHaveBeenCalled()

      // click random item
      wrapper
        .find('DropdownItem')
        .at(_.random(0, options.length - 1))
        .simulate('click')

      expect(instance.handleItemClick).toHaveBeenCalledTimes(1)
    })
    it('renders new options when options change', () => {
      const customOptions = [
        { text: 'abra', value: 'abra' },
        { text: 'cadabra', value: 'cadabra' },
        { text: 'bang', value: 'bang' },
      ]
      wrapperMount(<Dropdown options={customOptions} />).find('input.search')

      expect(wrapper.find('DropdownItem')).toHaveLength(3)

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      expect(wrapper.find('DropdownItem')).toHaveLength(4)

      const newItem = wrapper.find('DropdownItem').last()

      expect(newItem).have.prop('text', 'bar')
      expect(newItem).have.prop('value', 'bar')
    })

    it('passes options as props', () => {
      const customOptions = [
        { text: 'abra', value: 'abra', 'data-foo': 'someValue' },
        { text: 'cadabra', value: 'cadabra', 'data-foo': 'someValue' },
        { text: 'bang', value: 'bang', 'data-foo': 'someValue' },
      ]
      wrapperShallow(<Dropdown options={customOptions} selection />)
        .find('DropdownItem')
        .everyWhere(item => expect(item).have.prop('data-foo', 'someValue'))
    })

    it('handles keys correctly', () => {
      const customOptions = [
        { key: 0, text: 'foo', value: 'foo' },
        { key: null, text: 'bar', value: 'bar' },
        { key: undefined, text: 'baz', value: 'baz' },
      ]
      wrapperShallow(<Dropdown options={customOptions} selection />)
      const items = wrapper.find('DropdownItem')

      expect(items.at(0).key()).toBe('0')
      expect(items.at(1).key()).toBe('bar')
      expect(items.at(2).key()).toBe('baz')
    })
  })

  describe('search', () => {
    it('does not add a search input when not defined', () => {
      expect(wrapperShallow(<Dropdown options={options} selection />)).not.have.descendants(
        'input.search',
      )
    })

    it('adds a search input when present', () => {
      expect(wrapperShallow(<Dropdown options={options} selection search />))
        .have.exactly(1)
        .descendants(DropdownSearchInput)
    })

    it('sets focus to the search input on open', () => {
      wrapperMount(<Dropdown options={options} selection search />).simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      expect(searchIsFocused).toBe(true)
    })

    it('sets focus to the search input on click on the placeholder', () => {
      wrapperMount(
        <Dropdown minCharacters={3} options={options} placeholder='foo' selection search />,
      )
        .find('.default.text')
        .simulate('click')

      const activeElement = document.activeElement
      const searchIsFocused = activeElement === document.querySelector('input.search')
      expect(searchIsFocused).toBe(true)
    })

    it('clears the search query when an item is selected', () => {
      // search for random item
      const searchQuery = _.sample(options).text

      wrapperMount(<Dropdown options={options} selection search />)

      // open and simulate search
      wrapper.simulate('click').setState({ searchQuery })

      // click first item (we searched for exact text)
      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')

      // bye bye search query
      expect(wrapper).have.state('searchQuery', '')
    })

    it('opens the menu on change if there is a query and not already open', () => {
      wrapperMount(<Dropdown options={options} selection search />)

      dropdownMenuIsClosed()

      // simulate search
      wrapper.find('input.search').simulate('change', { target: { value: faker.hacker.noun() } })

      dropdownMenuIsOpen()
    })

    it('does not call onChange on query change', () => {
      const onChangeSpy = jest.fn()
      wrapperMount(<Dropdown options={options} selection search onChange={onChangeSpy} />)

      // simulate search
      wrapper.find('input.search').simulate('change', { target: { value: faker.hacker.noun() } })

      expect(onChangeSpy).not.toHaveBeenCalled()
    })

    it('filters the items based on display text', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />).find(
        'input.search',
      )

      // search for value yields 0 results
      search.simulate('change', { target: { value: _.sample(options).value } })

      expect(wrapper.find('DropdownItem')).toHaveLength(0)

      // search for text yields 1 result
      search.simulate('change', { target: { value: _.sample(options).text } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)
    })

    it('filters the items based on custom search function', () => {
      const searchFunction = sandbox.stub().returns(options.slice(0, 2))
      const search = wrapperMount(
        <Dropdown options={options} selection search={searchFunction} />,
      ).find('input.search')
      const searchQuery = '__nonExistingSearchQuery__'

      // search for value yields 2 results as per our custom search function
      search.simulate('change', { target: { value: searchQuery } })

      expect(searchFunction).toHaveBeenCalledTimes(1)
      expect(searchFunction).toHaveBeenCalledWith(options, searchQuery)

      expect(wrapper.find('DropdownItem')).toHaveLength(2)
    })

    it('sets the selected item to the first search result', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />).find(
        'input.search',
      )

      // the first item is selected by default
      // avoid it to prevent false positives

      wrapper.setState({ selectedIndex: _.random(1, options.length - 2) })

      search.simulate('change', { target: { value: faker.hacker.noun() } })

      expect(wrapper).have.state('selectedIndex', 0)
    })

    it('still allows moving selection after blur/focus', () => {
      // open, first item is selected
      wrapperMount(<Dropdown options={options} selection search />)

      wrapper.simulate('click')
      dropdownMenuIsOpen()

      expect(wrapper.find('DropdownItem').at(0)).have.prop('selected', true)

      // blur, focus, open, move item selection down
      wrapper.simulate('blur')
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      expect(wrapper.find('DropdownItem').at(0)).have.prop('selected', false)
      expect(wrapper.find('DropdownItem').at(1)).have.prop('selected', true)

      // blur, focus, open, move item selection up
      wrapper.simulate('blur')
      wrapper.simulate('focus')
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      expect(wrapper.find('DropdownItem').at(0)).have.prop('selected', true)
      expect(wrapper.find('DropdownItem').at(1)).not.have.prop('selected', true)
    })

    it('does not close the menu when options are empty', () => {
      wrapperMount(<Dropdown options={options} search selection />)
      wrapper.simulate('click')

      wrapper.find('input.search').simulate('change', { target: { value: 'foo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      dropdownMenuIsOpen()
    })
  })

  describe('no results message', () => {
    it('is shown when a search yields no results', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />).find(
        'input.search',
      )

      expect(wrapper.find('.message')).not.be.present()

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      expect(wrapper.find('.message')).be.present()
    })

    it('is not shown on multiple dropdowns with no remaining items', () => {
      // make all the items active so there are no remaining options
      const value = _.map(options, 'value')
      wrapperMount(<Dropdown options={options} selection value={value} multiple />)

      // open the menu
      wrapper.simulate('click')
      dropdownMenuIsOpen()

      // confirm there are no items
      expect(wrapper).not.have.descendants('DropdownItem')

      // expect no message
      expect(wrapper.find('.message')).not.be.present()
    })

    it('uses default noResultsMessage', () => {
      const search = wrapperMount(<Dropdown options={options} selection search />).find(
        'input.search',
      )

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      expect(wrapper.find('.message')).have.text('No results found.')
    })

    it('uses custom noResultsMessage', () => {
      const search = wrapperMount(
        <Dropdown options={options} selection search noResultsMessage='Something custom' />,
      ).find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      expect(wrapper.find('.message')).have.text('Something custom')
    })

    it('uses no noResultsMessage', () => {
      const search = wrapperMount(
        <Dropdown options={options} selection search noResultsMessage='' />,
      ).find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      expect(wrapper.find('.message')).have.text('')
    })
    it('is not shown when set to `null`', () => {
      const search = wrapperMount(
        <Dropdown options={options} selection search noResultsMessage={null} />,
      ).find('input.search')

      // search for something we know will not exist
      search.simulate('change', { target: { value: '_________________' } })

      expect(wrapper).not.have.descendants('.message')
    })
  })

  describe('placeholder', () => {
    it('is present when defined', () => {
      expect(
        wrapperShallow(<Dropdown options={options} selection placeholder='hi' />),
      ).have.descendants('.default.text')
    })
    it('is not present when not defined', () => {
      expect(wrapperShallow(<Dropdown options={options} selection />)).not.have.descendants(
        '.default.text',
      )
    })
    it('is not present when there is a value', () => {
      expect(
        wrapperShallow(<Dropdown options={options} selection value='hi' placeholder='hi' />),
      ).not.have.descendants('.default.text')
    })
    it('is present on a multiple dropdown with an empty value array', () => {
      expect(
        wrapperShallow(<Dropdown options={options} selection multiple placeholder='hi' />),
      ).have.descendants('.default.text')
    })
    it('has a filtered className when there is a search query', () => {
      expect(
        wrapperShallow(<Dropdown options={options} selection search placeholder='hi' />).setState({
          searchQuery: 'a',
        }),
      ).have.descendants('.default.text.filtered')
    })
  })

  describe('render', () => {
    it('calls renderText', () => {
      wrapperShallow(<Dropdown options={options} selection />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'renderText')

      expect(instance.renderText).not.toHaveBeenCalled()

      instance.render()

      expect(instance.renderText).have.been.called()
    })
  })

  describe('lazyLoad', () => {
    it('does not render options when closed', () => {
      expect(wrapperShallow(<Dropdown options={options} lazyLoad />)).not.have.descendants(
        'DropdownItem',
      )
    })

    it('renders options when open', () => {
      expect(wrapperShallow(<Dropdown options={options} lazyLoad open />)).have.descendants(
        'DropdownItem',
      )
    })
  })

  describe('Dropdown.Menu child', () => {
    it('renders child passed', () => {
      expect(
        wrapperShallow(
          <Dropdown text='required prop'>
            <Dropdown.Menu data-find-me />
          </Dropdown>,
        ),
      ).contain.descendants('DropdownMenu')

      expect(wrapper.find('DropdownMenu')).have.prop('data-find-me', true)
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
      expect(
        wrapperShallow(
          <Dropdown text='required prop'>
            <Dropdown.Menu data-foo-bar />
          </Dropdown>,
        ),
      ).contain.descendants('DropdownMenu')

      expect(wrapper.find('DropdownMenu')).have.prop('data-foo-bar', true)
    })

    it("merges the user's menu className", () => {
      expect(
        wrapperShallow(
          <Dropdown text='required prop'>
            <Dropdown.Menu className='foo-bar' />
          </Dropdown>,
        ),
      ).contain.descendants('DropdownMenu')

      const menu = wrapper.find('DropdownMenu').shallow()

      expect(menu).have.className('menu')
      expect(menu).have.className('foo-bar')
    })
  })

  describe('allowAdditions', () => {
    const customOptions = [
      { text: 'abra', value: 'abra' },
      { text: 'cadabra', value: 'cadabra' },
      { text: 'bang', value: 'bang' },
    ]

    it('adds an option for arbitrary search value', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      ).find('input.search')

      expect(wrapper.find('DropdownItem')).toHaveLength(3)

      search.simulate('change', { target: { value: 'boo' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)

      expect(wrapper.find('DropdownItem')).have.prop('value', 'boo')
    })

    it('adds an option for prefix search value', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      ).find('input.search')

      expect(wrapper.find('DropdownItem')).toHaveLength(3)

      search.simulate('change', { target: { value: 'a' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(4)

      expect(wrapper.find('DropdownItem').first()).have.prop('value', 'a')
    })

    it('uses default additionLabel', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)

      expect(wrapper.find('DropdownItem').last()).have.prop('className', 'addition')

      const text = wrapper.find('DropdownItem').prop('text')

      expect(text[0]).toBe('Add ')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses custom additionLabel string', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionLabel='New: ' />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)

      expect(wrapper.find('DropdownItem').last()).have.prop('className', 'addition')

      const text = wrapper.find('DropdownItem').prop('text')

      expect(text[0]).toBe('New: ')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses custom additionLabel element', () => {
      const search = wrapperMount(
        <Dropdown
          options={customOptions}
          selection
          search
          allowAdditions
          additionLabel={<i>New: </i>}
        />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)

      expect(wrapper.find('DropdownItem').last()).have.prop('className', 'addition')

      const text = wrapper.find('DropdownItem').prop('text')

      shallow(text[0]).equals(<i key='label'>New: </i>)
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('uses no additionLabel', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions additionLabel='' />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(1)

      expect(wrapper.find('DropdownItem').last()).have.prop('className', 'addition')

      const text = wrapper.find('DropdownItem').prop('text')

      expect(text[0]).toBe('')
      shallow(text[1]).equals(<b key='addition-query'>boo</b>)
    })

    it('keeps custom value option (bottom) when options change', () => {
      const search = wrapperMount(
        <Dropdown
          options={customOptions}
          selection
          search
          allowAdditions
          additionPosition='bottom'
        />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'a' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(4)

      expect(wrapper.find('DropdownItem').last()).have.prop('value', 'a')

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      expect(wrapper.find('DropdownItem')).toHaveLength(5)

      expect(wrapper.find('DropdownItem').last()).have.prop('value', 'a')
    })

    it('keeps custom value option (top) when options change', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'a' } })

      expect(wrapper.find('DropdownItem')).toHaveLength(4)

      expect(wrapper.find('DropdownItem').first()).have.prop('value', 'a')

      wrapper.setProps({ options: [...customOptions, { text: 'bar', value: 'bar' }] })

      expect(wrapper.find('DropdownItem')).toHaveLength(5)

      expect(wrapper.find('DropdownItem').first()).have.prop('value', 'a')
    })

    it('calls onAddItem prop when clicking new value', () => {
      const onAddItem = jest.fn()
      const onChange = jest.fn()
      const search = wrapperMount(
        <Dropdown
          allowAdditions
          onAddItem={onAddItem}
          onChange={onChange}
          options={customOptions}
          search
          selection
        />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })

      wrapper
        .find('DropdownItem')
        .first()
        .simulate('click')

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onAddItem).toHaveBeenCalledTimes(1)
      expect(onAddItem).toHaveBeenCalledWith({}, { value: 'boo' })
      expect(onAddItem).have.been.calledImmediatelyAfter(onChange)
    })

    it('calls onAddItem prop when pressing enter on new value', () => {
      const onAddItem = jest.fn()
      const onChange = jest.fn()
      const search = wrapperMount(
        <Dropdown
          allowAdditions
          onAddItem={onAddItem}
          onChange={onChange}
          options={customOptions}
          search
          selection
        />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onAddItem).toHaveBeenCalledTimes(1)
      expect(onAddItem).toHaveBeenCalledWith({}, { value: 'boo' })
      expect(onAddItem).have.been.calledImmediatelyAfter(onChange)
    })

    it('clears value of the searchQuery when selection is only option', () => {
      const search = wrapperMount(
        <Dropdown options={customOptions} selection search allowAdditions />,
      ).find('input.search')

      search.simulate('change', { target: { value: 'boo' } })
      domEvent.keyDown(document, { key: 'Enter' })

      expect(wrapper).have.state('searchQuery', '')
    })
  })

  describe('header', () => {
    it('renders a header when present', () => {
      const text = faker.hacker.phrase()

      expect(
        wrapperMount(<Dropdown options={options} header={text} />).find('.menu .header'),
      ).contain.text(text)
    })
    it('does not render a header when not present', () => {
      expect(wrapperMount(<Dropdown options={options} />)).not.have.descendants('.menu .header')
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

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(errorMessage)
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

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(errorMessage)
    })
  })

  describe('selectOnNavigation', () => {
    it('is on by default', () => {
      const spy = jest.fn()

      wrapperMount(<Dropdown options={options} defaultValue={options[0].value} onChange={spy} />)

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(spy).have.been.called()
      expect(wrapper).have.state('value', options[1].value)
    })

    it('does not change value when set to false', () => {
      const onChange = jest.fn()
      const value = options[0].value

      wrapperMount(
        <Dropdown
          options={options}
          defaultValue={value}
          selectOnNavigation={false}
          onChange={onChange}
        />,
      )

      // open
      wrapper.simulate('click')

      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(onChange).not.toHaveBeenCalled()
      expect(wrapper).have.state('value', value)
    })
  })

  describe('wrapSelection', () => {
    it("does not move up on arrow up when first item is selected when open and 'wrapSelection' is false", () => {
      wrapperMount(<Dropdown options={options} selection wrapSelection={false} />)

      // open
      expect(
        wrapper
          .simulate('click')
          .find('DropdownItem')
          .first(),
      ).have.prop('selected', true)

      // arrow up
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      // selection should not move to last item
      // should keep on first instead
      expect(wrapper.find('DropdownItem').first()).have.prop('selected', true)
      expect(wrapper.find('DropdownItem').at(options.length - 1)).have.prop('selected', false)
    })
    it("does not move down on arrow down when last item is selected when open and 'wrapSelection' is false", () => {
      wrapperMount(<Dropdown options={options} selection wrapSelection={false} />)

      // make last item selected
      wrapper.setState({ selectedIndex: options.length - 1 })
      // open
      expect(
        wrapper
          .simulate('click')
          .find('DropdownItem')
          .at(options.length - 1),
      ).have.prop('selected', true)

      // arrow down
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      // selection should not move to first item
      // should keep on last instead
      expect(wrapper.find('DropdownItem').first()).have.prop('selected', false)
      expect(wrapper.find('DropdownItem').at(options.length - 1)).have.prop('selected', true)
    })
  })

  describe('upward', () => {
    it('is false when there is enough space below', () => {
      wrapperMount(<Dropdown options={options} />)

      expect(wrapper.simulate('click')).not.have.className('upward')
    })

    it('is true when there is not enough space below', () => {
      wrapperMount(
        <Dropdown
          options={options}
          style={{ marginTop: document.documentElement.clientHeight - 50 }}
        />,
      )

      expect(wrapper.simulate('click')).have.className('upward')
    })
  })
})
