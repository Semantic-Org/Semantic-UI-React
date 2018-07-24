import { isBrowser } from '../../../src/lib'

const btoa = (jsx) => {
  if (isBrowser()) return window.btoa(jsx)
  return new Buffer(jsx).toString('base64')
}

export default btoa
