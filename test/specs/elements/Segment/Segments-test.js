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
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    ).scryClass('sd-segments');

    expect(
      component.querySelectorAll('.sd-segment').length
    ).to.equal(3);
  });

  it('only allows children of type Segment', () => {
    expect(global.shallowRender(
      <Segments>Some text</Segments>
    )).to.throw;

    // FIXME: Figure out why this is giving false positives
    expect(global.shallowRender(
      <Segments>Some text</Segments>
    )).to.not.throw;
  });
});
