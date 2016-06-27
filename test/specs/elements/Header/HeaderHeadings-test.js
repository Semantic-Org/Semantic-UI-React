import H1 from 'src/elements/Header/HeaderH1'
import H2 from 'src/elements/Header/HeaderH2'
import H3 from 'src/elements/Header/HeaderH3'
import H4 from 'src/elements/Header/HeaderH4'
import H5 from 'src/elements/Header/HeaderH5'
import H6 from 'src/elements/Header/HeaderH6'
import * as common from 'test/specs/commonTests'

const headers = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}

describe('HeaderHeadings', () => {
  Object.keys(headers).forEach((key) => {
    describe(`Header.${key.toUpperCase()}`, () => {
      const Component = headers[key]
      common.isConformant(Component)
    })
  })
})
