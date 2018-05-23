import componentInfoContext from './componentInfoContext'

/**
 * Returns a the info.json files for another component's @see tags.
 *
 * @param componentName
 * @returns {{}[]}
 */
const getInfoForSeeTags = (componentName) => {
  const info = componentInfoContext.fromComponentName(componentName)

  return info.dockblock.tags
    .filter(tag => tag.title === 'see')
    .map(tag => componentInfoContext.fromComponentName(tag.description))
}

export default getInfoForSeeTags
