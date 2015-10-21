import _ from 'lodash';
import path from 'path';
import stardust from 'stardust';

const componentPaths = require.context(
  'src/',
  true,
  /[addons|elements|collections|modules][^Style|index]\.js$/i
);
const componentNames = _.map(componentPaths.keys(), key => {
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
