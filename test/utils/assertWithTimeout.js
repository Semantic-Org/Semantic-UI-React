/**
 * Repeatedly attempt to make an assertion over a period of time.
 * If the assertion never passes, it will eventually throw.
 * Good for tests with unknown or unreliable execution times.
 *
 * @param {function} assertion - A callback that makes test assertions.
 * @param {function} done - The done callback.
 */
const assertWithTimeout = (assertion, done) => {
  const timeout = 1000
  const start = Date.now()
  const didTimeout = () => Date.now() - start >= timeout

  const assert = () => {
    try {
      assertion()
      done()
    } catch (err) {
      if (didTimeout()) done(err)
      else setTimeout(assert, 10)
    }
  }

  assert()
}

export default assertWithTimeout
