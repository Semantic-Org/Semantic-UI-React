import _ from 'lodash';
import React from 'react';
import {Simulate} from 'react-addons-test-utils';
import {Menu, MenuItem} from 'stardust';

describe('Menu', () => {
  it('should render children', () => {
    const renderedMenu = render(
      <Menu>
        <span className='sd-test-span'>Hello</span>
      </Menu>
    ).findClass('sd-menu');
    renderedMenu.props.children.should.be.ok;
    let childComponentClass;
    React.Children.forEach(renderedMenu.props.children, (child, i) => {
      if (i === 0) {
        childComponentClass = child.props.className;
      }
    });
    childComponentClass.should.equal('sd-test-span');
  });
});

describe('MenuItem', () => {
  it('should have name property', () => {
    const renderedMenuItem = render(<MenuItem name='This is an item' />).findClass('sd-menu-item');
    _.includes(renderedMenuItem.props.children, 'This is an item').should.be.true;
  });
  it('should not have a label by default', () => {
    const renderedMenuLabel = render(<MenuItem name='item' />).scryClass('sd-menu-label');
    _.isEmpty(renderedMenuLabel).should.be.true;
  });
  it('should not have active class by default', () => {
    const renderedMenuItem = render(<MenuItem name='item' />).scryClass('active');
    _.isEmpty(renderedMenuItem).should.be.true;
  });
  it('should render a label if prop given', () => {
    const renderedMenuLabel = render(<MenuItem name='item' label='37' />).findClass('sd-menu-label');
    renderedMenuLabel.should.be.ok;
    renderedMenuLabel.props.children.should.equal('37');
  });
  it('should have active class if first child', () => {
    const renderedMenuItems = render(
      <Menu>
        <MenuItem name='item1' />
        <MenuItem name='item2' />
      </Menu>
    ).scryClass('sd-menu-item');
    _.first(renderedMenuItems).props.className.should.contain('active');
    _.last(renderedMenuItems).props.className.should.not.contain('active');
  });

  it('should have active class after click', () => {
    const renderedMenuItems = render(
      <Menu>
        <MenuItem name='item1' className='firstItem' />
        <MenuItem name='item2' className='secondItem'/>
      </Menu>
    );
    const firstItem = renderedMenuItems.findClass('firstItem');
    const secondItem = renderedMenuItems.findClass('secondItem');
    const secondNode = secondItem.getDOMNode();
    Simulate.click(secondNode);
    firstItem.props.className.should.not.contain('active');
    secondItem.props.className.should.contain('active');
  });
});
