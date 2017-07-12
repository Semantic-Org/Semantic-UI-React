import _ from 'lodash'

import { keyboardKey } from 'src/lib'

const _wrongReturn = (method, arg, ret) =>
  `keyboardKey.${method}(${arg}) should return key name "${ret}"\n`

const wrongCode = (...args) => _wrongReturn('getCode', ...args)
const wrongName = (...args) => _wrongReturn('getName', ...args)

const missingPair = (key, val) => (
  `keyboardKey is missing property "${key}" with value ${val}\n`
)

describe('keyboardKey', () => {
  it('has a key/value for every value/key in codes', () => {
    _.each(keyboardKey.codes, (name, code) => {
      if (Array.isArray(name)) {
        String(keyboardKey[name[0]]).should.equal(code, missingPair(name[0], code))
        String(keyboardKey[name[1]]).should.equal(code, missingPair(name[1], code))
      } else {
        String(keyboardKey[name]).should.equal(code, missingPair(name, code))
      }
    })
  })

  describe('getCode', () => {
    it('is a function', () => {
      expect(keyboardKey.getCode).to.be.a('function')
    })
    it('returns the code for a given key name', () => {
      keyboardKey.getCode('Enter').should.equal(13, wrongCode('Enter', 13))
    })
    it('handles all key names in codes', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const _code = Number(code)

        if (Array.isArray(name)) {
          expect(keyboardKey.getCode(name[0])).to.equal(_code, wrongCode(name[0], code))
          expect(keyboardKey.getCode(name[1])).to.equal(_code, wrongCode(name[1], code))
        } else {
          expect(keyboardKey.getCode(name)).to.equal(_code, wrongCode(name, code))
        }
      })
    })
    it('handles event like objects with `key` prop', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const _code = Number(code)

        if (Array.isArray(name)) {
          const key0 = { key: name[0] }
          const key1 = { key: name[1] }
          keyboardKey.getCode(key0).should.equal(_code, wrongCode(key0, code))
          keyboardKey.getCode(key1).should.equal(_code, wrongCode(key1, code))
        } else {
          const key = { key: name }
          expect(keyboardKey.getCode(key)).to.equal(_code, wrongCode(key, code))
        }
      })
    })
  })

  describe('getName', () => {
    it('is a function', () => {
      expect(keyboardKey.getName).to.be.a('function')
    })
    it('returns the code for a given key name', () => {
      keyboardKey.getName(13).should.equal('Enter', wrongName(13, 'Enter'))
    })
    it('handles all codes', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const keyName = keyboardKey.getName(code)
        if (Array.isArray(name)) {
          expect(keyName).to.equal(name[0], wrongName(code, name[0]))
        } else {
          expect(keyName).to.equal(name, wrongName(code, name))
        }
      })
    })
    it('handles event like object: { keyCode: code, shiftKey: false }`', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const keyName = keyboardKey.getName({ keyCode: code, shiftKey: false })

        if (Array.isArray(name)) {
          expect(keyName).to.equal(name[0], wrongName(code, name[0]))
        } else {
          expect(keyName).to.equal(name, wrongName(code, name))
        }
      })
    })
    it('handles event like object: { keyCode: code, shiftKey: true }`', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const keyName = keyboardKey.getName({ keyCode: code, shiftKey: true })

        if (Array.isArray(name)) {
          expect(keyName).to.equal(name[1], wrongName(code, name[1]))
        } else {
          expect(keyName).to.equal(name, wrongName(code, name))
        }
      })
    })
    it('handles event like object: { which: code, shiftKey: false }', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const keyName = keyboardKey.getName({ which: code, shiftKey: false })

        if (Array.isArray(name)) {
          expect(keyName).to.equal(name[0], wrongName(code, name[0]))
        } else {
          expect(keyName).to.equal(name, wrongName(code, name))
        }
      })
    })
    it('handles event like object: { which: code, shiftKey: true }', () => {
      _.each(keyboardKey.codes, (name, code) => {
        const keyName = keyboardKey.getName({ which: code, shiftKey: true })

        if (Array.isArray(name)) {
          expect(keyName).to.equal(name[1], wrongName(code, name[1]))
        } else {
          expect(keyName).to.equal(name, wrongName(code, name))
        }
      })
    })
  })
})
