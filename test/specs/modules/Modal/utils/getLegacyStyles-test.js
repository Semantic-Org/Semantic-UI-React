import { getLegacyStyles } from 'src/modules/Modal/utils'

const rectMock = {
  height: 200,
  width: 100,
}

describe('getLegacyStyles', () => {
  it('computes proper result', () => {
    ;[
      { centered: true, fitted: false, result: { marginTop: 0, marginLeft: -50 } },
      { centered: false, fitted: true, result: { marginTop: 0, marginLeft: -50 } },
      { centered: true, fitted: true, result: { marginTop: -100, marginLeft: -50 } },
    ].forEach(({ centered, fitted, result }) => {
      getLegacyStyles(centered, fitted, rectMock).should.be.deep.equal(result)
    })
  })
})
