import fs from 'fs'
import _ from 'lodash'
import path from 'path'

const layoutsDir = path.resolve(__dirname, '../../src/pages')

const getPagesPaths = () => {
  const allFiles = fs.readdirSync(layoutsDir)
  const mdxFiles = _.filter(allFiles, (file) => _.endsWith(file, '.mdx'))

  return _.map(mdxFiles, (file) => ({
    pageName: file,
    routeName: _.kebabCase(path.basename(file, '.mdx')),
  }))
}

export default getPagesPaths
