import doctrine from 'doctrine'

export default (docblock) => {
  const { description = '', tags = [], ...rest } = doctrine.parse(docblock || '', { unwrap: true })

  return {
    ...rest,
    tags,
    description: description.split('\n'),
  }
}
