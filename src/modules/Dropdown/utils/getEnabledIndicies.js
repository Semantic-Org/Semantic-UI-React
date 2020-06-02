import _ from 'lodash'

export default function getEnabledIndices(options) {
  return _.reduce(
    options,
    (memo, item, index) => {
      if (!item.disabled) memo.push(index)
      return memo
    },
    [],
  )
}
