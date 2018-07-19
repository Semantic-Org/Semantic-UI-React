import React from 'react'

import Tab from 'src/modules/Tab/Tab'
import TabPane from 'src/modules/Tab/TabPane'
import * as common from 'test/specs/commonTests'

describe('Tab', () => {
  common.isConformant(Tab)
  common.hasSubcomponents(Tab, [TabPane])

  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  describe('menu', () => {
    it('passes the props to the Menu', () => {
      expect(
        shallow(<Tab menu={{ 'data-foo': 'bar' }} />)
          .find('Menu')
          .prop('data-foo'),
      ).toBe('bar')
    })

    it('has an item for every menuItem in panes', () => {
      const items = shallow(<Tab panes={panes} />)
        .find('Menu')
        .shallow()
        .find('MenuItem')

      expect(items).toHaveLength(3)
      expect(
        items
          .at(0)
          .shallow()
          .text(),
      ).toBe('Tab 1')
      expect(
        items
          .at(1)
          .shallow()
          .text(),
      ).toBe('Tab 2')
      expect(
        items
          .at(2)
          .shallow()
          .text(),
      ).toBe('Tab 3')
    })

    it('renders above the pane by default', () => {
      const wrapper = shallow(<Tab panes={panes} />)

      expect(wrapper.childAt(0).is('Menu')).toBe(true)
      expect(
        wrapper
          .childAt(1)
          .shallow()
          .is('Segment'),
      ).toBe(true)
    })

    it("renders below the pane when attached='bottom'", () => {
      const wrapper = shallow(<Tab menu={{ attached: 'bottom' }} panes={panes} />)

      expect(
        wrapper
          .childAt(0)
          .shallow()
          .is('Segment'),
      ).toBe(true)
      expect(wrapper.childAt(1).is('Menu')).toBe(true)
    })

    it("infers tabular's value from tab's menuPosition if tabular is set to true", () => {
      const menu = { fluid: true, vertical: true, tabular: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
      expect(wrapper.find('Menu').prop('tabular')).toBe('right')
    })

    it("does not infer tabular's value from tab's menuPosition if tabular is explicitly set", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
      expect(wrapper.find('Menu').prop('tabular')).toBe('right')
    })

    it('renders right when tabular is set to right', () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .is('Segment'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
    })
  })

  describe('menuPosition', () => {
    it('renders left of the pane when set left', () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .shallow()
          .is('Segment'),
      ).toBe(true)
    })

    it("renders left of the pane when set 'left', even if tabular is right", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .shallow()
          .is('Segment'),
      ).toBe(true)
    })

    it("renders right of the pane when set 'right'", () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      expect(wrapper.childAt(0).is('Grid')).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .is('Segment'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .is('GridColumn'),
      ).toBe(true)
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .is('Menu'),
      ).toBe(true)
    })
  })

  describe('activeIndex', () => {
    it('is passed to the Menu', () => {
      expect(
        mount(<Tab panes={panes} activeIndex={123} />)
          .find('Menu')
          .prop('activeIndex'),
      ).toBe(123)
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Tab panes={panes} />)
      expect(wrapper.find('TabPane[active]').text()).toBe('Tab 1 Content')

      wrapper
        .find('MenuItem')
        .at(1)
        .simulate('click')
      expect(wrapper.find('TabPane[active]').text()).toBe('Tab 2 Content')
    })

    it('can be set via props', () => {
      const wrapper = mount(<Tab panes={panes} activeIndex={1} />)

      expect(wrapper.find('TabPane[active]').text()).toBe('Tab 2 Content')

      expect(
        wrapper
          .setProps({ activeIndex: 2 })
          .find('TabPane[active]')
          .text(),
      ).toBe('Tab 3 Content')
    })

    it('determines which pane render method is called', () => {
      const activeIndex = 1
      const props = { activeIndex, panes }
      jest.spyOn(panes[activeIndex], 'render')

      shallow(<Tab {...props} />)

      expect(panes[activeIndex].render).toHaveBeenCalledTimes(1)
      expect(panes[activeIndex].render).toHaveBeenCalledWith(expect.objectContaining(props))
    })
  })

  describe('onTabChange', () => {
    it('is called with (e, { ...props, activeIndex }) a menu item is clicked', () => {
      const activeIndex = 1
      const onTabChange = jest.fn()
      const event = { fake: 'event' }
      const props = { onTabChange, panes }

      mount(<Tab {...props} />)
        .find('MenuItem')
        .at(activeIndex)
        .simulate('click', event)

      // Since React will have generated a key the returned tab won't match
      // exactly so match on the props instead.
      expect(onTabChange).toHaveBeenCalledTimes(1)
      expect(onTabChange).lastCalledWith(
        expect.objectContaining({
          fake: 'event',
        }),
        expect.objectContaining({ activeIndex: 1, onTabChange, panes }),
      )
    })
    it('is called with the new proposed activeIndex, not the current', () => {
      const onTableChange = jest.fn()

      const items = mount(<Tab activeIndex={-1} onTabChange={onTableChange} panes={panes} />).find(
        'MenuItem',
      )

      expect(onTableChange).not.toHaveBeenCalled()

      items.at(0).simulate('click')
      expect(onTableChange).toHaveBeenCalledTimes(1)
      expect(onTableChange).lastCalledWith(
        expect.any(Object),
        expect.objectContaining({ activeIndex: 0 }),
      )

      items.at(1).simulate('click')
      expect(onTableChange).toHaveBeenCalledTimes(2)
      expect(onTableChange).lastCalledWith(
        expect.any(Object),
        expect.objectContaining({ activeIndex: 1 }),
      )

      items.at(2).simulate('click')
      expect(onTableChange).toHaveBeenCalledTimes(3)
      expect(onTableChange).lastCalledWith(
        expect.any(Object),
        expect.objectContaining({ activeIndex: 2 }),
      )
    })
  })

  describe('renderActiveOnly', () => {
    it('renders all tabs when false', () => {
      const textPanes = [{ pane: 'Tab 1' }, { pane: 'Tab 2' }, { pane: 'Tab 3' }]
      const items = mount(<Tab panes={textPanes} renderActiveOnly={false} />).find('TabPane')

      expect(items).toHaveLength(3)
      expect(items.at(0).text()).toBe('Tab 1')
      expect(items.at(1).text()).toBe('Tab 2')
      expect(items.at(2).text()).toBe('Tab 3')
    })
  })
})
