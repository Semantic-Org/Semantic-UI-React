import difference from 'lodash/difference'

const computeClassNamesDifference = (prevClassNames, currentClassNames) => [
  difference(currentClassNames, prevClassNames),
  difference(prevClassNames, currentClassNames),
]

export default computeClassNamesDifference
