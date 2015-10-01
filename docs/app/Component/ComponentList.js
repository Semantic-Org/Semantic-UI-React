import _ from 'lodash';
import React, {Component} from 'react';

import docgenInfo from './../docgenInfo';
import ComponentDescription from './ComponentDescription';
import ComponentExamples from './ComponentExamples';
import ComponentProps from './ComponentProps';

/**
 * A list of Components' documentation.
 */
class ComponentList extends Component {
  render() {
    let components = _.map(docgenInfo, (val, key) => {
      var filename = key.substr(key.lastIndexOf('/') + 1).replace(/\.js$/, '');
      var examples = _.map(_.filter(val.docBlock.tags, {title: 'example'}), 'description');

      return (
        <div key={key} className='ui segment'>
          <h2 className='ui header'>
            {filename}
            <small className='sub header' style={{float: 'right'}}>{key}</small>
          </h2>

          <h3>Description:</h3>
          <ComponentDescription description={val.docBlock.description} />
          <h3>Examples:</h3>
          <ComponentExamples examples={examples} />
          <h3>Props:</h3>
          <ComponentProps props={val.props} />

          <div className='ui divider' />
          <pre>{JSON.stringify(val, null, 2)}</pre>
        </div>
      );
    });

    return (
      <div>
        {components}
      </div>
    );
  }
}

export default ComponentList;
