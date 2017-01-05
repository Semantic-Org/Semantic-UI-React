import React from 'react'

import { Image } from 'src'

const Logo = (props) => <Image {...props} src={__BASE__ + 'logo.png'} />

Logo.propTypes = Image.propTypes

export default Logo
