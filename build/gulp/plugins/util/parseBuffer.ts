import { parse } from 'babylon'

const parseBuffer = buffer =>
  parse(buffer.toString(), {
    plugins: ['classProperties', 'jsx'],
    sourceType: 'module',
  })

export default parseBuffer
