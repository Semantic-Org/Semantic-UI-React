import _ from 'lodash';
import React, {Component} from 'react';
import {Button, Segment} from 'index';

import docgenInfo from './../docgenInfo';
import ComponentDescription from './ComponentDescription';
import ComponentExamples from './ComponentExamples';
import ComponentProps from './ComponentProps';
import Highlight from 'react-highlight/index';

/**
 * A list of Components' documentation.
 */
class ComponentList extends Component {
  state = {
    showDocgenJSON: false
  };

  toggleShowDocgenJSON = () => {
    this.setState({
      showDocgenJSON: !this.state.showDocgenJSON
    });
  };

  render() {
    let components = _.map(docgenInfo, (definition, name) => {
      var filename = name.substr(name.lastIndexOf('/') + 1).replace(/\.js$/, '');

      var docgenJSON = (
        <Highlight className='language-json'>
          {JSON.stringify(definition, null, 2)}
        </Highlight>
      );

      return (
        <div key={name} className='ui segment'>
          <h2 className='ui header'>
            {filename}
            <small className='sub header' style={{float: 'right'}}>{name}</small>
          </h2>

          <h3>Description:</h3>
          <ComponentDescription description={definition.docBlock.description} />
          <h3>Props:</h3>
          <ComponentProps props={definition.props} />
          <h3>Examples:</h3>
          <ComponentExamples componentName={filename} />

          <Segment className='basic vertical'>
            <Button className='right floated basic mini' onClick={this.toggleShowDocgenJSON}>
              Docgen
            </Button>
          </Segment>

          {this.state.showDocgenJSON && docgenJSON}
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
