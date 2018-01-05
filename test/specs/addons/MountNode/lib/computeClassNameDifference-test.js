import _ from 'lodash'
import computeClassNamesDifference from 'src/addons/MountNode/lib/computeClassNamesDifference'

const fixtures = [
  {
    prevClasses: [],
    currentClasses: [],
    forAdd: [],
    forRemoval: [],
  },
  {
    prevClasses: ['foo', 'bar'],
    currentClasses: ['bar', 'baz'],
    forAdd: ['baz'],
    forRemoval: ['foo'],
  },
]

describe('computeClassNamesDifference', () => {
  it('computes className difference', () => {
    _.forEach(fixtures, (fixture) => {
      const { prevClasses, currentClasses, forAdd, forRemoval } = fixture

      computeClassNamesDifference(prevClasses, currentClasses)
        .should.have.deep.members([forAdd, forRemoval])
    })
  })
})
