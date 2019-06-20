import flow from 'lodash/flow'
import toArray from 'lodash/toArray'
import map from 'lodash/map'
import flatMap from 'lodash/flatMap'
import filter from 'lodash/filter'
import uniq from 'lodash/uniq'
import split from 'lodash/split'
import identity from 'lodash/identity'

const computeClassNames = flow(
  toArray,
  map('props.className'),
  flatMap(split(/\s+/)),
  filter(identity),
  uniq,
)

export default computeClassNames
