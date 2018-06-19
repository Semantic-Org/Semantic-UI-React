import requireInfo from './requireInfo'

/**
 * Returns a component's info.json file and subcomponent info.json files grouped by displayName.
 * @param displayName
 * @returns {{}}
 */
const getComponentGroup = (displayName) => {
  const info = requireInfo(displayName)
  const group = {
    [info.displayName]: info,
  }

  if (!info.subcomponents) return group

  // add subcomponents
  info.subcomponents.forEach((subcomponent) => {
    const subInfo = requireInfo(subcomponent)

    group[subInfo.displayName] = requireInfo(subcomponent)
  })

  return group
}

export default getComponentGroup
