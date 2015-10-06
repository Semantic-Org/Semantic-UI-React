import _ from 'lodash';
import docgenInfo from '../docgenInfo.json';

export default class ComponentDoc {
  constructor(component) {
    this.name = component;
    this.path = _.filter(_.keys(docgenInfo), path => _.includes(path, `/${component}.js`))[0];

    let pathParts = this.path.split('/');
    this.parent = pathParts[2];                     // src/elements/Grid/Column.js => Grid
    this.type = pathParts[1].replace('s', '');      // src/elements/Grid/Column.js => element

    let definition = docgenInfo[this.path];
    this.docBlock = definition.docBlock;
    this.props = definition.props;
  }
}
