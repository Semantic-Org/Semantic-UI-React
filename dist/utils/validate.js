var _ = require('lodash');

var validate = {
  /**
   * Validate an item against a list of options.
   * @param {string} callee - The thing being validated.  Usually a class name.
   * @param {string} item - The item to be validated.
   * @param {*[]} options - The accepted options.
   */
  componentProp: function(callee, item, options) {
    if (!_.includes(options, item)) {
      throw new Error(
        callee + ' "' + item + '" is not a valid property value.' + ' Use: ' + options.join() + '.'
      )
    }
  }
};

module.exports = validate;
