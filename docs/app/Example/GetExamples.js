<<<<<<< HEAD
const req = require.context('docs/app/Examples/', true, /\.js$/);
=======
const req = require.context('docs/app/examples/', true, /\.js$/);
>>>>>>> render example code and components

/**
 * Parse example files for a give `component`.
 * @param {string} component The name of the component to fetch example files for.
 * @returns {[]} An array of object with the file `code` as text and exported `component` as a React Component.
 */
export default component => {
  let modulePaths = _.map(_.filter(req.keys(), path => _.contains(path, `/${component}/`)));

  return _.map(modulePaths, (path) => {
<<<<<<< HEAD
    // remove first dot slash from paths which look like "./Checkbox/BasicExample.js"
    let subpath = path.replace('./', '');
    return {
      code: require(`!raw!docs/app/Examples/${subpath}`),
=======
    console.log(path);
    // remove first dot slash from paths which look like "./Checkbox/BasicExample.js"
    let subpath = path.replace('./', '');
    return {
      code: require(`!raw!docs/app/examples/${subpath}`),
>>>>>>> render example code and components
      component: req(path),
    };
  });
};
