/**
 * A utility for determining the current running environment during node processes.
 * @readonly
 * @type {object}
 */
const ENV = {
  setTest: function() {
    process.env['NODE_ENV'] = 'test';
  },
  setStaging: function() {
    process.env['NODE_ENV'] = 'staging';
  },
  setProduction: function() {
    process.env['NODE_ENV'] = 'production';
  },
  setDevelopment: function() {
    process.env['NODE_ENV'] = 'development';
  },

  isProduction: function() {
    return process.env.NODE_ENV === 'production';
  },
  isTest: function() {
    return process.env.NODE_ENV === 'test';
  },
  isStaging: function() {
    return process.env.NODE_ENV === 'staging';
  },
  isDevelopment: function() {
    return process.env.NODE_ENV === 'development' || !ENV.isProduction() && !ENV.isTest() && !ENV.isStaging();
  },
};

module.exports = ENV;
