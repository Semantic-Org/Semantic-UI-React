import React from 'react';
import {Segment} from 'stardust';

describe('Segment', () => {
  it('does not have a heading', () => {
    render(<Segment />)
      .scryClass('sd-segment-heading')
      .should.have.length(0);
  });
  it('has a heading', () => {
    render(<Segment heading='This is a segment' />)
      .findClass('sd-segment-heading')
      .textContent
      .should.equal('This is a segment');
  });
  it('renders its children', () => {
    render(<Segment>Some text</Segment>)
      .assertText('Some text');
  });
});
