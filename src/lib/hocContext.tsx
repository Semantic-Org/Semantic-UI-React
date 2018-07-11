import React from 'react'
import { FelaTheme } from 'react-fela'
import getClasses from './getClasses'

// renderComponent: (getThemeClasses) => Component
const hocContext = withTheme => <FelaTheme render={withTheme} />

export default hocContext
