import React from 'react'
import { Image } from 'semantic-ui-react'

import logo from 'docs/src/logo.png'

const Logo = props => <Image {...props} src={logo} />

Logo.propTypes = Image.propTypes

export default Logo
