/**
 * Returns a the info.json files for another component's @see tags.
 *
 * @param displayName
 * @returns {{}[]}
 */
const getInfoForSeeTags = displayName => [displayName]
// return []
// const info = componentInfoContext.byDisplayName[displayName]
//
// return info.docblock.tags
//   .filter(tag => tag.title === 'see')
//   .map(tag => componentInfoContext.byDisplayName[tag.description])
// }

export default getInfoForSeeTags
