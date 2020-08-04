const imagesRegex = /'\/images\//gm

const enhanceExampleCode = (code) => {
  // To have absolute paths on CodeSandbox for images
  return code.replace(imagesRegex, "'https://react.semantic-ui.com/images/")
}

export default enhanceExampleCode
