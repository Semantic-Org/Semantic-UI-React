/**
 * A utility for determining the current running environment during node processes.
 * @readonly
 * @type {object}
 */
const ENV = {
  setTest() {
    process.env.NODE_ENV = 'test'
  },
  setStaging() {
    process.env.NODE_ENV = 'staging'
  },
  setProduction() {
    process.env.NODE_ENV = 'production'
  },
  setDevelopment() {
    process.env.NODE_ENV = 'development'
  },

  isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  isTest() {
    return process.env.NODE_ENV === 'test'
  },
  isStaging() {
    return process.env.NODE_ENV === 'staging'
  },
  isDevelopment() {
    return process.env.NODE_ENV === 'development' || !ENV.isProduction() && !ENV.isTest() && !ENV.isStaging()
  },
}

export default ENV
