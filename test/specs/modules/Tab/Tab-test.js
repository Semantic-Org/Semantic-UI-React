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
      expect(shallow(<Tab menu={{ 'data-foo': 'bar' }} />).find('Menu').prop('data-foo')).toBe('bar')
    })

    it('has an item for every menuItem in panes', () => {
      const items = shallow(<Tab panes={panes} />)
        .find('Menu')
        .shallow()
        .find('MenuItem')

      expect(items).toHaveLength(3)
      expect(items.at(0).shallow()).contain.text('Tab 1')
      expect(items.at(1).shallow()).contain.text('Tab 2')
      expect(items.at(2).shallow()).contain.text('Tab 3')
    })

    it('renders above the pane by default', () => {
      const wrapper = shallow(<Tab panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Menu')
      expect(wrapper.childAt(1).shallow()).toMatch('Segment')
    })

    it("renders below the pane when attached='bottom'", () => {
      const wrapper = shallow(<Tab menu={{ attached: 'bottom' }} panes={panes} />)

      expect(wrapper.childAt(0).shallow()).toMatch('Segment')
      expect(wrapper.childAt(1)).toMatch('Menu')
    })

    it("infers tabular's value from tab's menuPosition if tabular is set to true", () => {
      const menu = { fluid: true, vertical: true, tabular: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
      expect(wrapper.find('Menu').prop('tabular')).toBe('right')
    })

    it("does not infer tabular's value from tab's menuPosition if tabular is explicitly set", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
      expect(wrapper.find('Menu').prop('tabular')).toBe('right')
    })

    it('renders right when tabular is set to right', () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow(),
      ).toMatch('Segment')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
    })
  })

  describe('menuPosition', () => {
    it('renders left of the pane when set left', () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .shallow(),
      ).toMatch('Segment')
    })

    it("renders left of the pane when set 'left', even if tabular is right", () => {
      const menu = { fluid: true, vertical: true, tabular: 'right' }
      const wrapper = shallow(<Tab menu={menu} menuPosition='left' panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0)
          .shallow(),
      ).toMatch('Segment')
    })

    it("renders right of the pane when set 'right'", () => {
      const menu = { fluid: true, vertical: true }
      const wrapper = shallow(<Tab menu={menu} menuPosition='right' panes={panes} />)

      expect(wrapper.childAt(0)).toMatch('Grid')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow()
          .childAt(0)
          .shallow(),
      ).toMatch('Segment')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1),
      ).toMatch('GridColumn')
      expect(
        wrapper
          .childAt(0)
          .shallow()
          .childAt(1)
          .shallow()
          .childAt(0),
      ).toMatch('Menu')
    })
  })

  describe('activeIndex', () => {
    it('is passed to the Menu', () => {
      expect(mount(<Tab panes={panes} activeIndex={123} />).find('Menu').prop('activeIndex')).toBe(123)
    })

    it('is set when clicking an item', () => {
      const wrapper = mount(<Tab panes={panes} />)
      expect(wrapper.find('TabPane[active]')).contain.text('Tab 1 Content')

      wrapper
        .find('MenuItem')
        .at(1)
        .simulate('click')
      expect(wrapper.find('TabPane[active]')).contain.text('Tab 2 Content')
    })

    it('can be set via props', () => {
      const wrapper = mount(<Tab panes={panes} activeIndex={1} />)

      expect(wrapper.find('TabPane[active]')).contain.text('Tab 2 Content')

      expect(wrapper.setProps({ activeIndex: 2 }).find('TabPane[active]')).contain.text(
        'Tab 3 Content',
      )
    })

    it('determines which pane render method is called', () => {
      const activeIndex = 1
      const props = { activeIndex, panes }
      jest.fn(panes[activeIndex], 'render')

      shallow(<Tab {...props} />)

      expect(panes[activeIndex].render).toHaveBeenCalledTimes(1)
      expect(panes[activeIndex].render).toHaveBeenCalledWith(props)
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
      expect(onTabChange.firstCall.args[0]).toHaveProperty('fake', 'event')
      expect(onTabChange.firstCall.args[1]).toHaveProperty('activeIndex', 1)
      expect(onTabChange.firstCall.args[1]).toHaveProperty('onTabChange', onTabChange)
      expect(onTabChange.firstCall.args[1]).toHaveProperty('panes', panes)
    })
    it('is called with the new proposed activeIndex, not the current', () => {
      const spy = jest.fn()

      const items = mount(<Tab activeIndex={-1} onTabChange={spy} panes={panes} />).find('MenuItem')

      expect(spy).have.callCount(0)

      items.at(0).simulate('click')
      expect(spy).have.callCount(1)
      expect(spy.lastCall.args[1]).toHaveProperty('activeIndex', 0)

      items.at(1).simulate('click')
      expect(spy).have.callCount(2)
      expect(spy.lastCall.args[1]).toHaveProperty('activeIndex', 1)

      items.at(2).simulate('click')
      expect(spy).have.callCount(3)
      expect(spy.lastCall.args[1]).toHaveProperty('activeIndex', 2)
    })
  })

  describe('renderActiveOnly', () => {
    it('renders all tabs when false', () => {
      const textPanes = [{ pane: 'Tab 1' }, { pane: 'Tab 2' }, { pane: 'Tab 3' }]
      const items = mount(<Tab panes={textPanes} renderActiveOnly={false} />).find('TabPane')

      expect(items).toHaveLength(3)
      expect(items.at(0)).contain.text('Tab 1')
      expect(items.at(1)).contain.text('Tab 2')
      expect(items.at(2)).contain.text('Tab 3')
    })
  })
})
