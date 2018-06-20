import React from 'react'
import { Image } from 'semantic-ui-react'

const Logo: any = props => <Image {...props} src="/logo.png" />

Logo.propTypes = Image.propTypes

export default Logo
