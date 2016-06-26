import Header from 'src/elements/Header/Header'
import H1 from 'src/elements/Header/HeaderH1'
import H2 from 'src/elements/Header/HeaderH2'
import H3 from 'src/elements/Header/HeaderH3'
import H4 from 'src/elements/Header/HeaderH4'
import H5 from 'src/elements/Header/HeaderH5'
import H6 from 'src/elements/Header/HeaderH6'
import Subheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('Header', () => {
  common.isConformant(Header)
  common.hasSubComponents(Header, [
    H1, H2, H3, H4, H5, H6, Subheader,
  ])
})
