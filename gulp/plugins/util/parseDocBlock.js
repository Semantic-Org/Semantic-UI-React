import doctrine from 'doctrine'

export default (docBlock) => {
  const { description = '', tags = [], ...rest } = doctrine.parse(docBlock || '', { unwrap: true })

  return {
    ...rest,
    tags,
    description: description.split('\n'),
  }
}
