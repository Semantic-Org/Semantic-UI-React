import _ from 'lodash';
import React, {Component} from 'react';
import ComponentDoc from '../utils/ComponentDoc';
import ComponentDescription from './ComponentDescription';
import ComponentExamples from './ComponentExamples';
import ComponentProps from './ComponentProps';
import stardust, {Segment} from 'stardust';

/**
 * A list of Components' documentation.
 */
export default class ComponentList extends Component {
  render() {
    let components = _(stardust)
      .keys()
      .sort()
      .map(name => {
        let doc = new ComponentDoc(name);
        return (
          <Segment key={doc.name} id={doc.name}>
            <ComponentDescription
              path={doc.path}
              name={doc.name}
              parent={doc.parent}
              type={doc.type}
              description={doc.docBlock.description}
            />
            <ComponentProps props={doc.props} />
            <ComponentExamples name={doc.name} />
          </Segment>
        );
      })
      .value();

    return (
      <div>
        {components}
      </div>
    );
  }
}
