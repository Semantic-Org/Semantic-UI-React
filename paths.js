var path = require('path');

var PROJECT_ROOT = path.resolve(__dirname);

module.exports = {
  root: PROJECT_ROOT + '/',
  docsRoot: PROJECT_ROOT + '/docs',
  docsApp: PROJECT_ROOT + '/docs/app',
  docsBuild: PROJECT_ROOT + '/docs/build',
  gulp: PROJECT_ROOT + '/gulp',
  components: PROJECT_ROOT + '/components',
  test: PROJECT_ROOT + '/test',
  testMocks: PROJECT_ROOT + '/test/mocks',
  node_modules: PROJECT_ROOT + '/node_modules',
};
