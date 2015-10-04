const req = require.context('docs/app/Examples/', true, /\.js$/);

/**
 * Parse example files for a give `component`.
 * @param {string} component The name of the component to fetch example files for.
 * @returns {[]} An array of object with the file `code` as text and exported `component` as a React Component.
 */
export default component => {
  let modulePaths = _.map(_.filter(req.keys(), path => _.contains(path, `/${component}/`)));

  return _.map(modulePaths, (path) => {
    // remove first dot slash from paths which look like "./Checkbox/BasicExample.js"
    let subpath = path.replace('./', '');
    return {
      code: require(`!raw!docs/app/Examples/${subpath}`),
      component: req(path),
    };
  });
};
