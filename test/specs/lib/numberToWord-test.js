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
  test('returns words for numbers 1-16', () => {
    _.times(16, n => expect(numberToWord(n + 1)).toBe(words[n]))
  })

  test('returns word if input is word', () => {
    words.forEach(word => expect(numberToWord(word)).toBe(word))
  })

  test('returns an empty string for boolean inputs', () => {
    expect(numberToWord(true)).toBe('')
    expect(numberToWord(false)).toBe('')
  })

  test('returns an empty string for null', () => {
    expect(numberToWord(null)).toBe('')
  })
})
