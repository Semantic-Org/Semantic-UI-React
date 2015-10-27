import React from 'react';
import {Segment} from 'stardust';

describe('Segment', () => {
  it('is an sd-segment', () => {
    const segmentElement = <Segment heading='This is a segment' />;
    const renderedSegmentClasses = render(segmentElement).findClass('sd-segment').props.className;
    renderedSegmentClasses.should.contain('sd-segment');
    const nodeClass = render(segmentElement).findClass('sd-segment').getDOMNode().getAttribute('class');
    nodeClass.should.contain('sd-segment');
  });
  it('does not have a heading', () => {
    const renderedSegment = render(<Segment />);
    expect(renderedSegment.first().props.heading).to.not.exist;
    renderedSegment.scryClass('sd-segment-heading').should.be.empty;
  });
  it('has a heading', () => {
    const segment = render(<Segment heading='This is a segment' />);
    segment.findClass('sd-segment-heading');
    segment.assertText('This is a segment');
  });
  it('renders its children', () => {
    render(<Segment>Some text</Segment>)
      .assertText('Some text');
  });
});
