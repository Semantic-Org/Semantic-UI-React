import _ from 'lodash'
import { numberToWord } from 'src/lib'

const words = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
]

describe('numberToWord', () => {
  it('returns words for numbers 1-16', () => {
    _.times(16, (n) => numberToWord(n + 1).should.equal(words[n]))
  })

  it('returns word if input is word', () => {
    words.forEach((word) => numberToWord(word).should.equal(word))
  })

  it('returns an empty string for boolean inputs', () => {
    numberToWord(true).should.equal('')
    numberToWord(false).should.equal('')
  })

  it('returns an empty string for null', () => {
    numberToWord(null).should.equal('')
  })
})
