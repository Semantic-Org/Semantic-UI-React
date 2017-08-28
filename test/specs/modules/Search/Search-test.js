import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import { htmlInputAttrs } from 'src/lib'
import Search from 'src/modules/Search'
import SearchCategory from 'src/modules/Search/SearchCategory'
import SearchResult from 'src/modules/Search/SearchResult'
import SearchResults from 'src/modules/Search/SearchResults'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

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
const wrapperRender = (...args) => (wrapper = render(...args))

// ----------------------------------------
// Options
// ----------------------------------------
const getOptions = (count = 5) => _.times(count, () => ({
  title: _.times(3, faker.hacker.noun).join(' '),
  description: _.times(3, faker.hacker.noun).join(' '),
  image: 'foo.png',
  price: faker.finance.amount(0, 100, 2, '$'),
}))

// -------------------------------
// Common Assertions
// -------------------------------
const searchResultsIsClosed = () => {
  const menu = wrapper.find('SearchResults')
  wrapper.should.not.have.className('visible')
  menu.should.not.have.className('visible')
}

const searchResultsIsOpen = () => {
  const menu = wrapper.find('SearchResults')
  wrapper.should.have.className('active')
  wrapper.should.have.className('visible')
  menu.should.have.className('visible')
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
  common.hasSubComponents(Search, [SearchCategory, SearchResult, SearchResults])
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
      wrapperShallow(<Search />)
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
    it('defaults to a search icon', () => {
      Search.defaultProps.icon.should.equal('search')
      wrapperRender(<Search />)
        .should.contain.descendants('.search.icon')
    })
  })

  describe('active item', () => {
    it('defaults to no result active', () => {
      wrapperRender(<Search results={options} minCharacters={0} />)
        .should.not.contain.descendants('.result.active')
    })
    it('defaults to the first item with selectFirstResult', () => {
      wrapperShallow(<Search results={options} minCharacters={0} selectFirstResult />)
        .find('SearchResult')
        .first()
        .should.have.prop('active', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Search results={options} minCharacters={0} selectFirstResult />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow to second
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // selection moved to second item
      wrapper
        .find('SearchResult')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchResult')
        .at(1)
        .should.have.prop('active', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow up
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // selection moved to last item
      wrapper
        .find('SearchResult')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchResult')
        .at(options.length - 1)
        .should.have.prop('active', true)
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
      wrapper
        .find('.result.active')
        .should.contain.text(opts[0].title)

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // make sure last item is selected
      wrapper
        .find('.result.active')
        .should.contain.text(_.tail(opts).title)

      // menu should be completely scrolled to the bottom
      const isMenuScrolledToBottom = menu.scrollTop + menu.clientHeight === menu.scrollHeight
      isMenuScrolledToBottom.should.be.true(
        'When the last item in the list was selected, SearchResults did not scroll to bottom.',
      )

      //
      // Scrolls back to top
      //

      // wrap selection to last item
      domEvent.keyDown(document, { key: 'ArrowDown' })

      // make sure first item is selected
      wrapper
        .find('.result.active')
        .should.contain.text(opts[0].title)

      // Note: For some reason the first item's offsetTop is not 0 so we need
      // to find the item's offsetTop and ensure it's at the top.
      const selectedItem = document.querySelector('.ui.search .results.visible .result.active')
      const isMenuScrolledToTop = menu.scrollTop === selectedItem.offsetTop
      isMenuScrolledToTop.should.be.true(
        'When the first item in the list was selected, SearchResults did not scroll to top.',
      )
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
      wrapperRender(
        <Search results={options} minCharacters={0} resultRenderer={resultSpy} />,
      )

      resultSpy.should.have.been.called.exactly(options.length)

      wrapper.should.contain.descendants('.result .custom-result')
    })
  })

  describe('category', () => {
    const categoryLength = 3
    const categoryResultsLength = 5
    const categoryOptions = _.range(0, categoryLength).reduce((memo, index) => {
      const category = `${faker.hacker.noun()}-${index}`

      memo[category] = { // eslint-disable-line no-param-reassign
        name: category,
        results: getOptions(categoryResultsLength),
      }

      return memo
    }, {})

    it('defaults to the first item with selectFirstResult', () => {
      wrapperShallow(<Search results={categoryOptions} category minCharacters={0} selectFirstResult />)

      wrapper
        .find('SearchCategory')
        .first()
        .should.have.prop('active', true)

      wrapper
        .find('SearchResult')
        .first()
        .should.have.prop('active', true)
    })
    it('moves down on arrow down when open', () => {
      wrapperMount(<Search results={categoryOptions} category minCharacters={0} selectFirstResult />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow to new category
      _.times(categoryResultsLength, () => domEvent.keyDown(document, { key: 'ArrowDown' }))

      // selection moved to second item
      wrapper
        .find('SearchCategory')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchResult')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchCategory')
        .at(1)
        .should.have.prop('active', true)

      wrapper
        .find('SearchResult')
        .at(categoryResultsLength)
        .should.have.prop('active', true)
    })
    it('moves up on arrow up when open', () => {
      wrapperMount(<Search results={categoryOptions} category minCharacters={0} />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      // arrow up
      domEvent.keyDown(document, { key: 'ArrowUp' })

      // selection moved to last item
      wrapper
        .find('SearchCategory')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchResult')
        .first()
        .should.have.prop('active', false)

      wrapper
        .find('SearchCategory')
        .at(categoryLength - 1)
        .should.have.prop('active', true)

      wrapper
        .find('SearchResult')
        .at((categoryLength * categoryResultsLength) - 1)
        .should.have.prop('active', true)
    })
    it('uses custom renderer', () => {
      const categorySpy = sandbox.spy(() => <div className='custom-category' />)
      const resultSpy = sandbox.spy(() => <div className='custom-result' />)
      wrapperRender(
        <Search
          results={categoryOptions}
          category
          minCharacters={0}
          categoryRenderer={categorySpy}
          resultRenderer={resultSpy}
        />,
      )

      categorySpy.should.have.been.called.exactly(categoryLength + 1)
      resultSpy.should.have.been.called.exactly(categoryLength * categoryResultsLength)

      wrapper.should.contain.descendants('.category .name .custom-category')
      wrapper.should.contain.descendants('.result .custom-result')
    })
    it('uses default noResultsMessage', () => {
      wrapperMount(<Search results={[]} category minCharacters={0} />)

      wrapper
        .find('.message.empty')
        .should.have.text('No results found.')
    })
    it('closes the menu', () => {
      wrapperMount(<Search results={categoryOptions} category minCharacters={0} selectFirstResult />)

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

      wrapperMount(<Search results={options} minCharacters={0} value={initialValue} />)
        .find('.prompt')
        .should.have.value(initialValue)

      wrapper
        .setProps({ value: nextValue })
        .find('.prompt')
        .should.have.value(nextValue)
    })
  })

  describe('results menu', () => {
    it('opens after min characters', () => {
      const title = options[0].title
      wrapperMount(<Search results={options} minCharacters={2} />)
        .simulate('focus')

      searchResultsIsClosed()

      wrapper
        .find('input.prompt')
        .simulate('change', { target: { value: title.slice(0, 1) } })
      searchResultsIsClosed()

      wrapper
        .find('input.prompt')
        .simulate('change', { target: { value: title.slice(0, 2) } })
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
      const item = wrapper
        .find('SearchResult')
        .at(_.random(options.length - 1))

      // open
      openSearchResults()
      searchResultsIsOpen()

      // select item
      item.simulate('click', nativeEvent)
      searchResultsIsClosed()
    })

    it('blurs after menu item click (mousedown)', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)
      const item = wrapper
        .find('SearchResult')
        .at(_.random(options.length - 1))

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
      domEvent.click(document)
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
      wrapperMount(<Search results={options} minCharacters={0} open />)
        .setProps({ open: false })
      searchResultsIsClosed()
    })
    it('opens the menu when toggled from false to true', () => {
      wrapperMount(<Search results={options} minCharacters={0} open={false} />)
        .setProps({ open: true })
      searchResultsIsOpen()
    })
  })

  describe('onBlur', () => {
    it('is called with (event, data) on search input blur', () => {
      const onBlur = sandbox.spy()
      wrapperMount(<Search results={options} onBlur={onBlur} />)
        .simulate('blur', nativeEvent)

      onBlur.should.have.been.calledOnce()
      onBlur.should.have.been.calledWithMatch(nativeEvent, { onBlur, results: options })
    })
  })

  describe('onFocus', () => {
    it('is called with (event, data) on search input focus', () => {
      const onFocus = sandbox.spy()
      wrapperMount(<Search results={options} onFocus={onFocus} />)
        .simulate('focus', nativeEvent)

      onFocus.should.have.been.calledOnce()
      onFocus.should.have.been.calledWithMatch(nativeEvent, { onFocus, results: options })
    })
  })

  describe('onResultSelect', () => {
    let spy
    beforeEach(() => {
      spy = sandbox.spy()
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

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {
        minCharacters: 0,
        result: randomResult,
        results: options,
      })
    })
    it('is called with event and value when pressing enter on a selected item', () => {
      const firstResult = options[0]
      wrapperMount(<Search results={options} minCharacters={0} onResultSelect={spy} selectFirstResult />)

      // open
      openSearchResults()
      searchResultsIsOpen()

      domEvent.keyDown(document, { key: 'Enter' })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, { result: firstResult })
    })
    it('is not called when updating the value prop', () => {
      const value = _.sample(options).title
      const next = _.sample(_.without(options, value)).title

      wrapperMount(<Search results={options} minCharacters={0} value={value} onResultSelect={spy} />)
        .setProps({ value: next })

      spy.should.not.have.been.called()
    })
    it('does not call onResultSelect on query change', () => {
      const onResultSelectSpy = sandbox.spy()
      wrapperMount(<Search results={options} minCharacters={0} onResultSelect={onResultSelectSpy} />)

      // simulate search
      wrapper
        .find('input.prompt')
        .simulate('change', { target: { value: faker.hacker.noun() } })

      onResultSelectSpy.should.not.have.been.called()
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, value) on search input change', () => {
      const spy = sandbox.spy()
      wrapperMount(<Search results={options} minCharacters={0} onSearchChange={spy} />)
        .find('input.prompt')
        .simulate('change', { target: { value: 'a' }, stopPropagation: _.noop })

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({ target: { value: 'a' } }, {
        minCharacters: 0,
        results: options,
        value: 'a',
      })
    })
  })

  describe('onSearchChange', () => {
    it('is called with (event, data) when the active selection index is changed', () => {
      const onSelectionChange = sandbox.spy()

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

      onSelectionChange.should.have.been.calledOnce()
      onSelectionChange.should.have.been.calledWithMatch({}, {
        minCharacters: 0,
        result: options[1],
        results: options,
      })
    })
  })

  describe('results prop', () => {
    it('adds the onClick handler to all items', () => {
      wrapperShallow(<Search results={options} minCharacters={0} />)
        .find('SearchResult')
        .everyWhere(item => item.should.have.prop('onClick'))
    })
    it('calls handleItemClick when an item is clicked', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      const instance = wrapper.instance()
      sandbox.spy(instance, 'handleItemClick')

      // open
      openSearchResults()
      searchResultsIsOpen()

      instance.handleItemClick.should.not.have.been.called()

      // click random item
      wrapper
        .find('SearchResult')
        .at(_.random(0, options.length - 1))
        .simulate('click', nativeEvent)

      instance.handleItemClick.should.have.been.calledOnce()
    })
    it('renders new options when options change', () => {
      const customOptions = [
        { title: 'abra', description: 'abra' },
        { title: 'cadabra', description: 'cadabra' },
        { title: 'bang', description: 'bang' },
      ]
      wrapperMount(<Search results={customOptions} />)
        .find('input.prompt')

      wrapper
        .find('SearchResult')
        .should.have.lengthOf(3)

      wrapper.setProps({ results: [...customOptions, { title: 'bar', description: 'bar' }] })

      wrapper
        .find('SearchResult')
        .should.have.lengthOf(4)

      const newItem = wrapper
        .find('SearchResult')
        .last()

      newItem.should.have.prop('title', 'bar')
      newItem.should.have.prop('description', 'bar')
    })

    it('passes options as props', () => {
      const customOptions = [
        { title: 'abra', description: 'abra', 'data-foo': 'someValue' },
        { title: 'cadabra', description: 'cadabra', 'data-foo': 'someValue' },
        { title: 'bang', description: 'bang', 'data-foo': 'someValue' },
      ]
      wrapperShallow(<Search results={customOptions} />)
        .find('SearchResult')
        .everyWhere(item => item.should.have.prop('data-foo', 'someValue'))
    })
    it('ignores search value', () => {
      wrapperMount(<Search results={options} minCharacters={0} selectFirstResult />)

      openSearchResults()
      searchResultsIsOpen()

      // search for something we know will not exist
      wrapper
        .find('input.prompt')
        .simulate('change', { target: { value: '_________________' } })

      wrapper
        .find('SearchResult')
        .should.have.lengthOf(options.length)
    })
  })

  describe('no results message', () => {
    it('is shown when there are no results', () => {
      wrapperMount(<Search results={options} minCharacters={0} />)

      wrapper
        .find('.message.empty')
        .should.not.be.present()

      wrapper.setProps({ results: [] })

      wrapper
        .find('.message.empty')
        .should.be.present()
    })
    it('uses default noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} />)

      wrapper
        .find('.message.empty .header')
        .should.have.text('No results found.')
    })
    it('uses custom string for noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage='Something custom' />)

      wrapper
        .find('.message.empty .header')
        .should.have.text('Something custom')
    })
    it('uses custom component for noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage={<span>Test</span>} />)

      wrapper
        .find('.message.empty .header')
        .should.contain.descendants('span')
    })
    it('uses custom noResultsDescription if present', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsDescription='Something custom' />)

      wrapper
        .find('.message.empty .header')
        .should.have.text('No results found.')

      wrapper
        .find('.message.empty .description')
        .should.have.text('Something custom')
    })
    it('uses no noResultsMessage', () => {
      wrapperMount(<Search results={[]} minCharacters={0} noResultsMessage='' />)

      wrapper
        .find('.message.empty .header')
        .should.have.text('')
    })
    it('shows no message with showNoResults=false', () => {
      wrapperMount(<Search results={[]} minCharacters={0} showNoResults={false} />)

      wrapper
        .find('.message.empty')
        .should.not.be.present()
    })
  })

  describe('input props', () => {
    // Search handles some of html props
    const props = _.without(htmlInputAttrs, 'defaultValue')

    props.forEach((propName) => {
      it(`passes "${propName}" to the <input>`, () => {
        wrapperMount(<Search {...{ [propName]: 'foo' }} />)
          .find('input')
          .should.have.prop(propName)
      })
    })
  })
})
