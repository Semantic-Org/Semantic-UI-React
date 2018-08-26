import sinon from 'sinon'

/**
 * Sinon Sandbox
 * http://sinonjs.org/docs/#sinon-sandbox
 *
 * A sandbox to house spy(), stub(), mock(), etc. that is automatically reset after each test.
 */
const sandbox = sinon.createSandbox()

afterEach(() => {
  sandbox.restore()
})

export default sandbox
