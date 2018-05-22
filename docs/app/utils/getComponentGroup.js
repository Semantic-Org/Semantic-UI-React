import componentInfoContext from './componentInfoContext'

/**
 * Returns a component's info.json file and subcomponent info.json files grouped by displayName.
 * @param componentName
 * @returns {{}}
 */
const getComponentGroup = (componentName) => {
  const info = componentInfoContext.fromComponentName(componentName)

  const group = {
    [info.displayName]: info,
  }

  // add subcomponents
  info.subcomponents.forEach((subcomponent) => {
    const subInfo = componentInfoContext.fromComponentName(subcomponent)

    group[subInfo.displayName] = subInfo
  })

  return group
}

export default getComponentGroup
