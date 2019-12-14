import fs from 'fs'
import _ from 'lodash'
import path from 'path'

const layoutsDir = path.resolve(__dirname, '../../src/layouts')

const getLayoutPaths = () =>
  new Promise((resolve) => {
    fs.readdir(layoutsDir, (err, files) => {
      resolve(
        files.map((file) => ({
          routeName: _.kebabCase(file.replace('Layout.js', '')),
          componentFilename: file,
        })),
      )
    })
  })

export default getLayoutPaths
