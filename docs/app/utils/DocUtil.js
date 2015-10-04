import _ from 'lodash';
import docgenInfo from '../docgenInfo.json';

let basename = (path) => {
  return path.substr(path.lastIndexOf('/') + 1).replace(/\.js$/, '');
};

class DocUtil {
  constructor() {
    this.filepaths = _.keys(docgenInfo);
    this.componentNames = _.map(this.filepaths, basename);
  }
}

export default new DocUtil();
