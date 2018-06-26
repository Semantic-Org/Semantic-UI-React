const btoa = (jsx) => {
  if (typeof window !== 'undefined') return window.btoa(jsx)
  return new Buffer(jsx).toString('base64')
}

export default btoa
