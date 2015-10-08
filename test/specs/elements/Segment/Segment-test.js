import React from 'react';
import {Segment} from 'stardust';

describe('Segment', () => {
  it('is an sd-segment', () => {
    let segmentElement = <Segment heading='This is a segment' />;
    let renderedSegmentClasses = render(segmentElement).findClass('sd-segment').props.className;
    renderedSegmentClasses.should.contain('sd-segment');
    let nodeClass = render(segmentElement).findClass('sd-segment').getDOMNode().getAttribute('class');
    nodeClass.should.contain('sd-segment');
  });
  it('does not have a heading', () => {
    let renderedSegment = render(<Segment />);
    expect(renderedSegment.first().props.heading).to.not.exist;
    renderedSegment.scryClass('sd-segment-heading').should.be.empty;
  });
  it('has a heading', () => {
    let segmentHeading = render(<Segment heading='This is a segment' />).findClass('sd-segment-heading');
    segmentHeading.props.children.should.equal('This is a segment');
  });
  it('renders its children', () => {
    let renderedSegmentChildTag = render(<Segment heading='This is a segment'><p>Some text</p></Segment>).findTag('p');
    renderedSegmentChildTag.props.children.should.equal('Some text');
  });
});
