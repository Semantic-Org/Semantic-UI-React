import React from 'react'
import { Image } from 'semantic-ui-react'

const Logo = props => <Image {...props} src='/static/images/logo.png' />

Logo.propTypes = Image.propTypes

export default Logo
