import React, {Component} from 'react';
import SegmentTypesExamples from './Types/SegmentTypesExamples';
import SegmentGroupsExamples from './Groups/SegmentGroupsExamples';
// import SegmentStatesExamples from './Types/SegmentStatesExamples';
// import SegmentVariationsExamples from './Variations/SegmentVariationsExamples';

export default class SegmentExamples extends Component {
  render() {
    return (
      <div>
        <SegmentTypesExamples />
        <SegmentGroupsExamples />

      </div>
    );
  }
}
