import renderer from './felaRenderer'

/**
 * @param rules
 * @param props
 * @param variables
 * @param theme
 * @returns {{}}
 */
const getClasses = (props, rules, variables = () => {}, theme = {}) => {
  const { renderRule } = renderer
  const ruleProps = {
    props,
    theme,
    variables: variables(theme.siteVariables),
  }

  return Object.keys(rules).reduce((acc, ruleName) => {
    acc[ruleName] = renderRule(rules[ruleName], ruleProps)

    return acc
  }, {})
}

export default getClasses
