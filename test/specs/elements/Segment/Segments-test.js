import React from 'react';
import {Segments} from 'stardust';

describe('Segment', () => {
  it('renders its children', () => {
    render(<Segments>Some text</Segments>)
      .assertText('Some text');
  });
});
