import _ from 'lodash/fp'
import css from 'css'

const createGroupKey = ({ comment }) => {
  if (comment.includes('Icons which where removed in FontAwesome 5')) return 'DEPRECATED'
  if (comment.includes('Aliases')) return 'ICON_ALIASES'
  return `${_.toUpper(_.replace(' & ', '_', _.trim(comment)))}_ICONS`
}

const createIconName = ({ selectors }) => _.head(selectors)
  .replace(/i\.|icon\.|:before/g, '')
  .replace(/\\35 00px/, '500px')
  .replace(/\./g, ' ')

const isComment = ({ type }) => type === 'comment'

const isStartComment = ({ comment, type }) => type === 'comment'
  && comment === '******************************\n            Icons\n******************************'

const isEndComment = ({ comment, type }) => type === 'comment'
  && comment === '******************************\n         Site Overrides\n******************************'

const parseIcons = _.flow(
  _.get('stylesheet.rules'),
  _.dropWhile(rule => isStartComment(rule) === false),
  _.dropRightWhile(rule => isEndComment(rule) === false),
  _.slice(1, -1),
  _.reduce((icons, rule) => {
    if (isComment(rule)) {
      const groupKey = createGroupKey(rule)

      return {
        ...icons,
        lastKey: groupKey,
        [groupKey]: [],
      }
    }

    icons[icons.lastKey].push(createIconName(rule))
    return icons
  }, {}),
  _.omit('lastKey'),
)

const parseCssIcons = (bufferedContent) => {
  const ast = css.parse(bufferedContent.toString())

  return parseIcons(ast)
}

export default parseCssIcons
