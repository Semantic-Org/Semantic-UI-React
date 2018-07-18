import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import { htmlInputAttrs } from 'src/lib'
import Search from 'src/modules/Search'
import SearchCategory from 'src/modules/Search/SearchCategory'
import SearchResult from 'src/modules/Search/SearchResult'
import SearchResults from 'src/modules/Search/SearchResults'
import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'

let attachTo
let options
let wrapper

// ----------------------------------------
// Wrapper
// ----------------------------------------
// we need to unmount the search after every test to ensure all event listeners are cleaned up
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
  _.times(count, i => ({
    title: [i, ..._.times(3, faker.hacker.noun)].join(' '),
    description: [i, ..._.times(3, faker.hacker.noun)].join(' '),
    image: '/images/wireframe/image.png',
    price: [i, faker.finance.amount(0, 100, 2, '$')].join(' '),
  }))

// -------------------------------
// Common Assertions
// -------------------------------
const searchResultsIsClosed = () => {
  const menu = wrapper.find('SearchResults')
  expect(wrapper).not.have.className('visible')
  expect(menu).not.have.className('visible')
}

const searchResultsIsOpen = () => {
  const menu = wrapper.find('SearchResults')
  expect(wrapper).have.className('active')
  expect(wrapper).have.className('visible')
  expect(menu).have.className('visible')
}

// ----------------------------------------
// Helpers
// ----------------------------------------
const openSearchResults = () => {
  wrapper.simulate('focus')
}

const nativeEvent = { nativeEvent: { stopImmediatePropagation: _.noop } }

describe('Search', () => {
  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
    options = getOptions()
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.isConformant(Search)
  common.hasSubcomponents(Search, [SearchCategory, SearchResult, SearchResults])
  common.hasUIClassName(Search)

  common.propKeyOnlyToClassName(Search, 'category')
  common.propKeyOnlyToClassName(Search, 'fluid')
  common.propKeyOnlyToClassName(Search, 'loading')

  it('closes on blur', () => {
    wrapperMount(<Search results={options} minCharacters={0} />)

    openSearchResults()

    searchResultsIsOpen()
    wrapper.simulate('blur')
    searchResultsIsClosed()
  })

  it('opens on focus', () => {
    wrapperMount(<Search results={options} minCharacters={0} />)

    searchResultsIsClosed()
    wrapper.simulate('focus')
    searchResultsIsOpen()
  })

  describe('isMouseDown', () => {
    it('tracks when the mouse is down', () => {
      wrapperShallow(<Search />).simulate('mousedown')

      expect(wrapper.instance().isMouseDown).toBe(true)

      domEvent.mouseUp(document)

      expect(wrapper.instance().isMouseDown).toBe(false)
    })
  })

  describe('icon', () => {
    it('defaults to a search icon', () => {
      expect(Search.defaultProps.icon).toBe('search')
      expect(wrapperMount(<Search />)).contain.descendants('.search.icon')
    })
  })

  describe('active item', () => {
    it('defaults to no result active', () => {
      expect(wrapperMount(<Search results={options} minCharacters={0} />)).not.contain.descendants(
        '.result.active',
      )
    })
    it('defaults to the first item with selectFirstResult', () => {
      expect(
        wrapperShallow(<Search results={options} minCharacters={0} selectFirstResult />)
          .find('SearchResult')
          .first(),
      ).have.prop('active', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Search results={options} minCharacters={0} selectFirstResult />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow to second
      domEvent.keyDown(document, { key: 'ArrowDown' })
      wrapper.update()

      // selection moved to second item
      expect(wrapper.find('SearchResult').first()).have.prop('active', false)

      expect(wrapper.find('SearchResult').at(1)).have.prop('active', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow up
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      // selection moved to last item
      expect(wrapper.find('SearchResult').first()).have.prop('active', false)

      expect(wrapper.find('SearchResult').at(options.length - 1)).have.prop('active', true)
    })
    it('scrolls the selected item into view', () => {
      // get enough options to make the menu scrollable
      const opts = getOptions(20)

      wrapperMount(<Search results={opts} minCharacters={0} selectFirstResult />)

      openSearchResults()
      searchResultsIsOpen()
      const menu = document.querySelector('.ui.search .results.visible')

      // Limit the menu's height and set an overflow so it's scrollable
      menu.style.height = '100px'
      menu.style.overflow = 'auto'

      //
      // Scrolls to bottom
      //

      // make sure first item is selected
      expect(wrapper.find('.result.active')).contain.text(opts[0].title)

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // make sure last item is selected
      expect(wrapper.find('.result.active')).contain.text(_.tail(opts).title)

      // menu should be completely scrolled to the bottom
      const isMenuScrolledToBottom = menu.scrollTop + menu.clientHeight === menu.scrollHeight
      expect(isMenuScrolledToBottom).toBe(true)

      //
      // Scrolls back to top
      //

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // make sure first item is selected
      expect(wrapper.find('.result.active')).contain.text(opts[0].title)

      // Note: For some reason the first item's offsetTop is not 0 so we need
      // to find the item's offsetTop and ensure it's at the top.
      const selectedItem = document.querySelector('.ui.search .results.visible .result.active')
      const isMenuScrolledToTop = menu.scrollTop === selectedItem.offsetTop
      expect(isMenuScrolledToTop).toBe(true)
    })
    it('closes the menu', () => {
      wrapperMount(<Search results={options} minCharacters={0} selectFirstResult />)

      openSearchResults()
      searchResultsIsOpen()

      // choose an item closes
      domEvent.keyDown(document, { key: 'Enter' })
      searchResultsIsClosed()
    })
    it('uses custom renderer', () => {
      const resultSpy = sandbox.spy(() => <div className='custom-result' />)
      wrapperMount(<Search results={options} minCharacters={0} resultRenderer={resultSpy} />)

      expect(resultSpy).have.been.called.exactly(options.length)

      expect(wrapper).contain.descendants('.result .custom-result')
    })
  })

  describe('category', () => {
    const categoryLength = 3
    const categoryResultsLength = 5
    const categoryOptions = _.range(0, categoryLength).reduce((memo, index) => {
      const category = `${faker.hacker.noun()}-${index}`

      // eslint-disable-next-line no-param-reassign
      memo[category] = {
        name: category,
        results: getOptions(categoryResultsLength),
      }

      return memo
    }, {})

    it('defaults to the first item with selectFirstResult', () => {
      wrapperShallow(
        <Search results={categoryOptions} category minCharacters={0} selectFirstResult />,
      )

      expect(wrapper.find('SearchCategory').first()).have.prop('active', true)

      expect(wrapper.find('SearchResult').first()).have.prop('active', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(
        <Search results={categoryOptions} category minCharacters={0} selectFirstResult />,
      )

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow to new category
      _.times(categoryResultsLength, () => domEvent.keyDown(document, { key: 'ArrowDown' }))
      wrapper.update()

      // selection moved to second item
      expect(wrapper.find('SearchCategory').first()).have.prop('active', false)

      expect(wrapper.find('SearchResult').first()).have.prop('active', false)

      expect(wrapper.find('SearchCategory').at(1)).have.prop('active', true)

      expect(wrapper.find('SearchResult').at(categoryResultsLength)).have.prop('active', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Search results={categoryOptions} category minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow up
      domEvent.keyDown(document, { key: 'ArrowUp' })
      wrapper.update()

      // selection moved to last item
      expect(wrapper.find('SearchCategory').first()).have.prop('active', false)

      expect(wrapper.find('SearchResult').first()).have.prop('active', false)

      expect(wrapper.find('SearchCategory').at(categoryLength - 1)).have.prop('active', true)

      expect(wrapper.find('SearchResult').at(categoryLength * categoryResultsLength - 1)).have.prop(
        'active',
        true,
      )
    })
    it('uses custom renderer', () => {
      const categorySpy = sandbox.spy(() => <div className='custom-category' />)
      const resultSpy = sandbox.spy(() => <div className='custom-result' />)
      wrapperMount(
        <Search
          results={categoryOptions}
          category
          minCharacters={0}
          categoryRenderer={categorySpy}
          resultRenderer={resultSpy}
        />,
      )

      expect(categorySpy).have.been.called.exactly(categoryLength + 1)
      expect(resultSpy).have.been.called.exactly(categoryLength * categoryResultsLength)

      expect(wrapper).contain.descendants('.category .name .custom-category')
      expect(wrapper).contain.descendants('.result .custom-result')
    })
    it('uses default noResultsMessage', () => {
      wrapperMount(<Search results={[]} category minCharacters={0} />)

      expect(wrapper.find('.message.empty')).have.text('No results found.')
    })
    it('closes the menu', () => {
      wrapperMount(
        <Search results={categoryOptions} category minCharacters={0} selectFirstResult />,
      )

      openSearchResults()
      searchResultsIsOpen()

      // choose an item closes
      domEvent.keyDown(document, { key: 'Enter' })
      searchResultsIsClosed()
    })
  })

  describe('value', () => {
    it('updates text when value changed', () => {
      const initialValue = faker.hacker.noun()
      const nextValue = faker.hacker.noun()

      expect(
        wrapperMount(<Search results={options} minCharacters={0} value={initialValue} />).find(
          '.prompt',
        ),
      ).have.value(initialValue)

      expect(wrapper.setProps({ value: nextValue }).find('.prompt')).have.value(nextValue)
    })
  })

  describe('results menu', () => {
    it('opens after min characters', () => {
      const title = options[0].title
      wrapperMount(<Search results={options} minCharacters={2} />).simulate('focus')

      searchResultsIsClosed()

      wrapper.find('input.prompt').simulate('change', { target: { value: title.slice(0, 1) } })
      searchResultsIsClosed()

      wrapper.find('input.prompt').simulate('change', { target: { value: title.slice(0, 2) } })
      searchResultsIsOpen()
    })

    it('opens (and remains open) when clicking the input', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      const prompt = wrapper.find('input.prompt')

      prompt.simulate('click', nativeEvent)
      searchResultsIsOpen()

      // Stays open after multiple clicks on the input
      prompt.simulate('click', nativeEvent)
      searchResultsIsOpen()
    })

    it('closes on menu item click', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)
      const item = wrapper.find('SearchResult').at(_.random(options.length - 1))

      // open
      openSearchResults()
      searchResultsIsOpen()

      // select item
      item.simulate('click', nativeEvent)
      searchResultsIsClosed()
    })

    it('blurs after menu item click (mousedown)', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)
      const item = wrapper.find('SearchResult').at(_.random(options.length - 1))

      // open
      openSearchResults()
      searchResultsIsOpen()

      // select item
      item.simulate('mousedown')
      searchResultsIsOpen()
      item.simulate('click', nativeEvent)
      searchResultsIsClosed()
    })

    it('closes on click outside', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // click outside
      domEvent.click(document.body)
      searchResultsIsClosed()
    })

    it('closes on esc key', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // esc
      domEvent.keyDown(document, { key: 'Escape' })
      searchResultsIsClosed()
    })
  })

  describe('open', () => {
    it('defaultOpen opens the menu when true', () => {
      wrapperShallow(<Search results={options} minCharacters={0} defaultOpen />)
      searchResultsIsOpen()
    })
    it('defaultOpen stays open on focus', () => {
      wrapperShallow(<Search results={options} minCharacters={0} defaultOpen />)
      wrapper.simulate('focus')
      searchResultsIsOpen()
    })
    it('defaultOpen closes the menu when false', () => {
      wrapperShallow(<Search results={options} minCharacters={0} defaultOpen={false} />)
      searchResultsIsClosed()
    })
    it('opens the menu when true', () => {
      wrapperShallow(<Search results={options} minCharacters={0} open />)
      searchResultsIsOpen()
    })
    it('closes the menu when false', () => {
      wrapperShallow(<Search results={options} minCharacters={0} open={false} />)
      searchResultsIsClosed()
    })
    it('closes the menu when toggled from true to false', () => {
      wrapperMount(<Search results={options} minCharacters={0} open />).setProps({ open: false })
      searchResultsIsClosed()
    })
    it('opens the menu when toggled from false to true', () => {
      wrapperMount(<Search results={options} minCharacters={0} open={false} />).setProps({
        open: true,
      })
      searchResultsIsOpen()
    })
  })

  describe('onBlur', () => {
    it('is called with (event, data) on search input blur', () => {
      const onBlur = jest.fn()
      wrapperMount(<Search results={options} onBlur={onBlur} />).simulate('blur', nativeEvent)

      expect(onBlur).have.been.calledOnce()
      expect(onBlur).have.been.calledWithMatch(nativeEvent, { onBlur, results: options })
    })
  })

  describe('onFocus', () => {
    it('is called with (event, data) on search input focus', () => {
      const onFocus = jest.fn()
      wrapperMount(<Search results={options} onFocus={onFocus} />).simulate('focus', nativeEvent)

      expect(onFocus).have.been.calledOnce()
      expect(onFocus).have.been.calledWithMatch(nativeEvent, { onFocus, results: options })
    })
  })

  describe('onResultSelect', () => {
    let spy
    beforeEach(() => {
      spy = jest.fn()
    })

    it('is called with event and value on item click', () => {
      const randomIndex = _.random(options.length - 1)
      const randomResult = options[randomIndex]
      wrapperMount(<Search results={options} minCharacters={0} onResultSelect={spy} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      wrapper
        .find('SearchResult')
        .at(randomIndex)
        .simulate('click', nativeEvent)

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(
        {},
        {
          minCharacters: 0,
          result: randomResult,
          results: options,
        },
      )
    })
    it('is called with event and value when pressing enter on a selected item', () => {
      const firstResult = options[0]
      wrapperMount(
        <Search results={options} minCharacters={0} onResultSelect={spy} selectFirstResult />,
      )

      // open
      openSearchResults()
      searchResultsIsOpen()

      domEvent.keyDown(document, { key: 'Enter' })

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch({}, { result: firstResult })
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).title
      const next = _.sample(_.without(options, value)).title

      wrapperMount(
        <Search results={options} minCharacters={0} value={value} onResultSelect={spy} />,
      ).setProps({ value: next })

      expect(spy).not.have.been.called()
    })
    it('does not call onResultSelect on query change', () => {
      const onResultSelectSpy = jest.fn()
      wrapperMount(
        <Search results={options} minCharacters={0} onResultSelect={onResultSelectSpy} />,
      )

      // simulate search
      wrapper.find('input.prompt').simulate('change', { target: { value: faker.hacker.noun() } })

      expect(onResultSelectSpy).not.have.been.called()
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, value) on search input change', () => {
      const spy = jest.fn()
      wrapperMount(<Search results={options} minCharacters={0} onSearchChange={spy} />)
        .find('input.prompt')
        .simulate('change', { target: { value: 'a' }, stopPropagation: _.noop })

      expect(spy).have.been.calledOnce()
      expect(spy).have.been.calledWithMatch(
        { target: { value: 'a' } },
        {
          minCharacters: 0,
          results: options,
          value: 'a',
        },
      )
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, data) when the active selection index is changed', () => {
      const onSelectionChange = jest.fn()

      wrapperMount(
        <Search
          minCharacters={0}
          onSelectionChange={onSelectionChange}
          results={options}
          selectFirstResult
        />,
      )
      openSearchResults()
      domEvent.keyDown(document, { key: 'ArrowDown' })

      expect(onSelectionChange).have.been.calledOnce()
      expect(onSelectionChange).have.been.calledWithMatch(
        {},
        {
          minCharacters: 0,
          result: options[1],
          results: options,
        },
      )
    })
  })

  describe('results prop', () => {
    it('adds the onClick handler to all items', () => {
      wrapperShallow(<Search results={options} minCharacters={0} />)
        .find('SearchResult')
        .everyWhere(item => expect(item).have.prop('onClick'))
    })
    it('calls handleItemClick when an item is clicked', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'handleItemClick')

      // open
      openSearchResults()
      searchResultsIsOpen()

      expect(instance.handleItemClick).not.have.been.called()

      // click random item
      wrapper
        .find('SearchResult')
        .at(_.random(0, options.length - 1))
        .simulate('click', nativeEvent)

      expect(instance.handleItemClick).have.been.calledOnce()
    })
    it('renders new options when options change', () => {
      const customOptions = [
        { title: 'abra', description: 'abra' },
        { title: 'cadabra', description: 'cadabra' },
        { title: 'bang', description: 'bang' },
      ]
      wrapperMount(<Search results={customOptions} />).find('input.prompt')

      expect(wrapper.find('SearchResult')).toHaveLength(3)

      wrapper.setProps({ results: [...customOptions, { title: 'bar', description: 'bar' }] })

      expect(wrapper.find('SearchResult')).toHaveLength(4)

      const newItem = wrapper.find('SearchResult').last()

      expect(newItem).have.prop('title', 'bar')
      expect(newItem).have.prop('description', 'bar')
    })

    it('passes options as props', () => {
      const customOptions = [
        { title: 'abra', description: 'abra', 'data-foo': 'someValue' },
        { title: 'cadabra', description: 'cadabra', 'data-foo': 'someValue' },
        { title: 'bang', description: 'bang', 'data-foo': 'someValue' },
      ]
      wrapperShallow(<Search results={customOptions} />)
        .find('SearchResult')
        .everyWhere(item => expect(item).have.prop('data-foo', 'someValue'))
    })
    it('ignores search value', () => {
      wrapperMount(<Search results={options} minCharacters={0} selectFirstResult />)

      openSearchResults()
      searchResultsIsOpen()

      // search for something we know will not exist
      wrapper.find('input.prompt').simulate('change', { target: { value: '_________________' } })

      expect(wrapper.find('SearchResult')).toHaveLength(options.length)
    })
  })

  describe('no results message', () => {
    it('is shown when there are no results', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      expect(wrapper.find('.message.empty')).not.be.present()

      wrapper.setProps({ results: [] })

      expect(wrapper.find('.message.empty')).be.present()
    })
    it('uses default noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} />)

      expect(wrapper.find('.message.empty .header')).have.text('No results found.')
    })
    it('uses custom string for noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage='Something custom' />)

      expect(wrapper.find('.message.empty .header')).have.text('Something custom')
    })
    it('uses custom component for noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage={<span>Test</span>} />)

      expect(wrapper.find('.message.empty .header')).contain.descendants('span')
    })
    it('uses custom noResultsDescription if present', () => {
      wrapperMount(
        <Search results={[]} minCharacters={0} noResultsDescription='Something custom' />,
      )

      expect(wrapper.find('.message.empty .header')).have.text('No results found.')

      expect(wrapper.find('.message.empty .description')).have.text('Something custom')
    })
    it('uses no noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage='' />)

      expect(wrapper.find('.message.empty .header')).have.text('')
    })
    it('shows no message with showNoResults=false', () => {
      wrapperMount(<Search results={[]} minCharacters={0} showNoResults={false} />)

      expect(wrapper.find('.message.empty')).not.be.present()
    })
  })

  describe('input props', () => {
    // Search handles some of html props
    const props = _.without(htmlInputAttrs, 'defaultValue', 'type')
    const booleanProps = ['disabled']

    props.forEach((propName) => {
      it(`passes "${propName}" to the <input>`, () => {
        const propValue = _.includes(booleanProps, propName) ? true : 'off'

        expect(wrapperMount(<Search {...{ [propName]: propValue }} />).find('input')).have.prop(
          propName,
          propValue,
        )
      })
    })
  })
})
