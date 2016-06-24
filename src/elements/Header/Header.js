import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'
import HeaderH1 from './HeaderH1'
import HeaderH2 from './HeaderH2'
import HeaderH3 from './HeaderH3'
import HeaderH4 from './HeaderH4'
import HeaderH5 from './HeaderH5'
import HeaderH6 from './HeaderH6'
import HeaderSubheader from './HeaderSubheader'

function Header(props) {
  return (
    <_Header {...props} />
  )
}

Header._meta = {
  library: META.library.semanticUI,
  name: 'Header',
  type: META.type.element,
}

Header.H1 = HeaderH1
Header.H2 = HeaderH2
Header.H3 = HeaderH3
Header.H4 = HeaderH4
Header.H5 = HeaderH5
Header.H6 = HeaderH6
Header.Subheader = HeaderSubheader

export default Header
