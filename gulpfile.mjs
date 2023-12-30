import gulp from 'gulp'
import path from 'path'

// add node_modules/.bin to the path so we can invoke .bin CLIs in tasks
process.env.PATH = `${process.env.PATH}:${path.resolve('./node_modules/.bin')}`

// load tasks in order of dependency usage
import './gulp/tasks/dist.mjs'
import './gulp/tasks/docs.mjs'

const { task, parallel } = gulp

// global tasks
task('build', parallel('build:dist', 'build:docs'))
