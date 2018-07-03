import componentInfoContext from './componentInfoContext'

/**
 * Returns a component's info.json file and subcomponent info.json files grouped by displayName.
 * @param displayName
 * @returns {{}}
 */
const getComponentGroup = displayName => {
  const info = componentInfoContext.byDisplayName[displayName]

  const group = {
    [info.displayName]: info,
  }

  if (!info.subcomponents) return group

  // add subcomponents
  info.subcomponents.forEach(subcomponent => {
    const subInfo = componentInfoContext.byDisplayName[subcomponent]

    group[subInfo.displayName] = subInfo
  })

  return group
}

export default getComponentGroup
