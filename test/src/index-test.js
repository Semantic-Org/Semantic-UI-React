import _ from 'lodash';
import path from 'path';
import stardust from 'index';

let componentPaths = require.context('src/components/', true, /[^Style\.js$]\.js$/i);
let componentNames = _.map(componentPaths.keys(), key => {
  return path.basename(key).replace('.js', '');
});

describe('index.js', () => {
  it('has a property for every component', () => {
    _.each(componentNames, component => {
      expect(component in stardust);
      expect(stardust[component]).to.be.a('function');
    });
  });

  it('only has properties which correspond to components', () => {
    _.each(stardust, component => expect(component in componentNames));
  });
});
