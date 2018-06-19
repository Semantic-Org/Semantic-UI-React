import PropTypes from 'prop-types'

import { THEME_CHANNEL } from 'fela-bindings/lib/themeChannel'

export const asThemeConsumer = (ComponentType) => {
  // eslint-disable-next-line no-param-reassign
  ComponentType.contextTypes = {
    [THEME_CHANNEL]: PropTypes.object,
  }

  return ComponentType
}

export const getTheme = (componentInstance) => {
  const { [THEME_CHANNEL]: theme } = componentInstance.context

  return theme
}
