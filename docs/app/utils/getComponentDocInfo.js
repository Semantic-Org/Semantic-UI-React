import _ from 'lodash';
import docgenInfo from '../docgenInfo.json';

/**
 * This util extracts and formats a doc object from docgenInfo.json for a single `component`.
 * @param {string} component Stardust component name.
 * @returns {{}} Documentation object.
 */
export default component => {
  let doc = {};
  doc.name = component;
  doc.path = _.filter(_.keys(docgenInfo), path => _.includes(path, `/${component}.js`))[0];

  let pathParts = doc.path.split('/');
  doc.parent = pathParts[2];                     // src/elements/Grid/Column.js => Grid
  doc.type = pathParts[1].replace('s', '');      // src/elements/Grid/Column.js => element

  let definition = docgenInfo[doc.path];
  doc.docBlock = definition.docBlock;
  doc.props = definition.props;

  return doc;
};
