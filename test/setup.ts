/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
})

// ----------------------------------------
// Console
// ----------------------------------------
// Fail on all activity.
// It is important we overload console here, before consoleUtil.ts is loaded and caches it.
jest.spyOn(console, 'log')
jest.spyOn(console, 'info')
jest.spyOn(console, 'warn')
jest.spyOn(console, 'error')

afterAll(() => {
  expect(console.log).not.toHaveBeenCalled()
  expect(console.info).not.toHaveBeenCalled()
  expect(console.warn).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
})
