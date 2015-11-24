import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import {Message} from 'stardust';

export default class SegmentVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Inverted'
          description='A segment can have its colors inverted for contrast.'
          examplePath='elements/Segment/Variations/SegmentInvertedExample'
        />
        <ComponentExample
          title='Attached'
          description='A segment can be attached to other content on a page.'
          examplePath='elements/Segment/Variations/SegmentAttachedExample'
        >
          <Message className='info'>
            Attached segments are designed to be used with other <code>attached</code> variations like
            the <a href='#Header-Variations-HeaderAttachedExample'>attached header</a> or <i>attached messages</i>.
          </Message>
        </ComponentExample>
      </ExampleSection>
    );
  }
}
