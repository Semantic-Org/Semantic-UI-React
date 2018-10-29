import fs from 'fs'
import path from 'path'

const filename = path.resolve(__dirname, '../../src/exampleSources.json')

const getExampleSources = () => JSON.parse(fs.readFileSync(filename))

export default getExampleSources
