var path = require('path');

var PROJECT_ROOT = path.resolve(__dirname);

module.exports = {
  root: PROJECT_ROOT + '/',
  docsRoot: PROJECT_ROOT + '/docs',
  docsApp: PROJECT_ROOT + '/docs/app',
  docsBuild: PROJECT_ROOT + '/docs/build',
  gulp: PROJECT_ROOT + '/gulp',
  src: PROJECT_ROOT + '/src',
  srcAddons: PROJECT_ROOT + '/src/addons',
  srcElements: PROJECT_ROOT + '/src/elements',
  srcCollections: PROJECT_ROOT + '/src/collections',
  srcModules: PROJECT_ROOT + '/src/modules',
  srcViews: PROJECT_ROOT + '/src/views',
  srcUtils: PROJECT_ROOT + '/src/utils',
  test: PROJECT_ROOT + '/test',
  testMocks: PROJECT_ROOT + '/test/mocks',
  node_modules: PROJECT_ROOT + '/node_modules',
};
