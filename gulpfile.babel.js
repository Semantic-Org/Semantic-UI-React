import { task, series, parallel } from 'gulp'
import path from 'path'

// add node_modules/.bin to the path so we can invoke .bin CLIs in tasks
process.env.PATH = `${process.env.PATH}:${path.resolve('./node_modules/.bin')}`

// load tasks in order of dependency usage
require('./gulp/tasks/dll')
require('./gulp/tasks/dist')
require('./gulp/tasks/docs')

// global tasks
task('build', series('dll', parallel('build:dist', 'build:docs')))
