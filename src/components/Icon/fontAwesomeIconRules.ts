const fontAwesomeIcons = new Map([
  ['chess rock', 'f447'],
  ['unordered list', 'f0ca'],
  ['ordered list', 'f0cb'],
  ['book', 'f02d'],
  ['circle', 'f111'],
  ['closed captioning', 'f02a'],
  ['compress', 'f066'],
  ['expand', 'f065'],
  ['play', 'f04b'],
  ['stop', 'f04d'],
  ['coffee', 'f0f4'],
  ['area chart', 'f1fe'],
  ['user', 'f007'],
  ['users', 'f0c0'],
  ['spinner', 'f110'],
  ['certificate', 'f0a3'],
  ['asterisk', 'f069'],
  ['help', 'f128'],
  ['home', 'f015'],
  ['cloud', 'f0c2'],
  ['close', 'f00d'],
  ['compass outline', 'f14e'],
  ['calendar alternate outline', 'f073'],
  ['thin circle', 'f111'],
])

export default name => {
  if (!fontAwesomeIcons.has(name)) {
    throw new Error(`Could not find ${name} in FontAwesome`)
  }
  return fontAwesomeIcons.get(name)
}

/**
 * We should probably declare a @fontface rule here
 */
