import React from 'react';
import {Item} from 'stardust';

describe('Item', () => {
  it('has children', () => {
    let renderedItem = render(
      <Item description='discription'>
        <p>Item description text</p>
      </Item>
    ).first();
    renderedItem.props.children.type.should.equal('p');
  });
});
