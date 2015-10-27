import React from 'react';
import {Grid} from 'stardust';

describe('Grid', () => {
  it('renders its children', () => {
    render(<Grid><br /></Grid>).findClass('sd-grid').props.children.type.should.equal('br');
  });
});
