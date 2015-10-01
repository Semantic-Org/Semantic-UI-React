var path = require('path');

var PROJECT_ROOT = path.resolve(__dirname);

module.exports = {
  root: PROJECT_ROOT + '/',
  src: PROJECT_ROOT + '/src',
  gulp: PROJECT_ROOT + '/gulp',
  test: PROJECT_ROOT + '/test',
  bower_components: PROJECT_ROOT + '/bower_components',
  node_modules: PROJECT_ROOT + '/node_modules',
};
