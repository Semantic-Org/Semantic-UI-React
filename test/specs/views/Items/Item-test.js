import React from 'react';
import {Item} from 'stardust';
import faker from 'faker';

describe('Item', () => {
  it('has children', () => {
    let child = faker.hacker.phrase();
    render(<Item description='foo'>{child}</Item>).findText(child);
  });
});
