import doctrine from 'doctrine'

export default (dockblock) => {
  const { description = '', tags = [], ...rest } = doctrine.parse(dockblock || '', { unwrap: true })

  return {
    ...rest,
    tags,
    description: description.split('\n'),
  }
}
