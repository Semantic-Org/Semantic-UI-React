/**
 * Assert whether or not the document.body has the specified HTML classes.
 *
 * @param {string|string[]} classes An array of strings string of HTML classes
 * @param {boolean} [hasClasses=true] Indicating whether to assert "has" or "does not have" classes
 */
const assertBodyClasses = (classes, hasClasses = true) => {
  const classesArr = [].concat(classes).join(' ').split(' ')

  classesArr.forEach((className) => {
    const didFind = document.body.classList.contains(className)

    const message = [
      `document.body should ${hasClasses ? 'have' : 'not have'} class "${className}",`,
      `but it ${didFind ? 'has' : 'does not have'} class="${document.body.classList}"`,
    ].join(' ')

    didFind.should.equal(hasClasses, message)
  })
}

export default assertBodyClasses
