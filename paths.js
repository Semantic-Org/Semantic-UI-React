import path from 'path';
const PROJECT_ROOT = path.resolve(__dirname);

const PATHS = {
  root: PROJECT_ROOT + '/',
  docsRoot: PROJECT_ROOT + '/docs',
  docsApp: PROJECT_ROOT + '/docs/app',
  docsBuild: PROJECT_ROOT + '/docs/build',
  gulp: PROJECT_ROOT + '/gulp',
  src: PROJECT_ROOT + '/src',
  srcAddons: PROJECT_ROOT + '/src/addons',
  srcBehaviors: PROJECT_ROOT + '/src/behaviors',
  srcElements: PROJECT_ROOT + '/src/elements',
  srcCollections: PROJECT_ROOT + '/src/collections',
  srcModules: PROJECT_ROOT + '/src/modules',
  srcViews: PROJECT_ROOT + '/src/views',
  srcLib: PROJECT_ROOT + '/src/lib',
  srcUtils: PROJECT_ROOT + '/src/utils',
  test: PROJECT_ROOT + '/test',
  testMocks: PROJECT_ROOT + '/test/mocks',
  node_modules: PROJECT_ROOT + '/node_modules',
};

export default PATHS;
