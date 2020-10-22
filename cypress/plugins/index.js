const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on) => {
  on('task', percyHealthCheck)
}
