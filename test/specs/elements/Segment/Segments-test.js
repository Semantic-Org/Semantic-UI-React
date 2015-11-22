import React from 'react';
import {Segment, Segments} from 'stardust';

describe('Segments', () => {
  it('should render children', () => {
    const [segmentOne, segmentTwo] = render(
      <Segments>
        <Segment>Top</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    ).scryClass('sd-segment');

    segmentOne
      .textContent
      .should.equal('Top');
    segmentTwo
      .textContent
      .should.equal('Bottom');
  });

  it('renders expected number of children', () => {
    const [component] = render(
      <Segments>
        <Segment>Top</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    ).scryClass('sd-segments');

    expect(
      component.querySelectorAll('.sd-segment').length
    ).to.equal(2);
  });
});
