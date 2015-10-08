import numberToWord from 'src/utils/numberToWord.js';
import _ from 'lodash';

let words = [
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
];

describe('numberToWord', () => {
  it('returns words for numbers 1-16', () => {
    _.times(16, n => numberToWord(n + 1).should.equal(words[n]));
  });
});
