import { task, src, dest, series } from 'gulp'
import { argv } from 'yargs'
import config from '../../../config'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'

const { paths } = config
const TEMPLATE_PLACEHOLDER = 'TEMPLATE_COMPONENT__'

let componentName: string

function writeWarning(message) {
  console.log(`WARNING: ${message}`)
}

function ensureExportStatementPresentInLibIndexFile(componentName: string) {
  const libIndexFilePath = paths.src('index.ts')

  const libIndexFileContent = fs.readFileSync(libIndexFilePath).toString()
  const componentExportStatement = `export { default as ${componentName} } from './components/${componentName}'`

  if (libIndexFileContent.includes(componentExportStatement)) {
    writeWarning(
      `Component '${componentName}' is already exported, nothing is added to lib's index file.`,
    )
    return
  }

  fs.appendFileSync(libIndexFilePath, `${componentExportStatement}\n`)
}

task('generate:component:name', cb => {
  const COMPONENT_NAME_REGEX = /^[A-Z]([A-Za-z\d])+$/
  const { name } = argv

  if (name && COMPONENT_NAME_REGEX.test(name)) {
    componentName = name
    return cb()
  }

  if (name) {
    writeWarning(
      'Invalid Component name is provided. Component name should start with a capital letter and may only include letters or numbers.',
    )
  }

  const QUESTIONS = [
    {
      name: 'componentName',
      type: 'input',
      message: 'Component name:',
      validate(input) {
        if (COMPONENT_NAME_REGEX.test(input)) return true

        return 'Component name should start with a capital letter and may only include letters or numbers.'
      },
    },
  ]

  return inquirer.prompt(QUESTIONS).then(answers => {
    componentName = answers.componentName
  })
})

task('generate:component:src', cb => {
  if (fs.existsSync(paths.src('components', componentName))) {
    writeWarning(`Directory of '${componentName}' already exists, nothing is created in src.`)
    return cb()
  }

  return src(path.resolve(__dirname, `./templates/src-components/${TEMPLATE_PLACEHOLDER}/**/*`))
    .pipe(replace(TEMPLATE_PLACEHOLDER, componentName))
    .pipe(
      rename(path => {
        path.basename = path.basename.replace(TEMPLATE_PLACEHOLDER, componentName)
      }),
    )
    .pipe(dest(paths.src('components', componentName)))
})

task('generate:component:export', cb => {
  ensureExportStatementPresentInLibIndexFile(componentName)
  cb()
})

task('generate:component:docs', cb => {
  if (fs.existsSync(paths.docsSrc('examples', 'components', componentName))) {
    writeWarning(`Directory of '${componentName}' already exists, nothing is created in docs.`)
    return cb()
  }

  return src(
    path.resolve(__dirname, `./templates/docs-examples-components/${TEMPLATE_PLACEHOLDER}/**/*`),
  )
    .pipe(replace(TEMPLATE_PLACEHOLDER, componentName))
    .pipe(
      rename(path => {
        path.basename = path.basename.replace(TEMPLATE_PLACEHOLDER, componentName)
      }),
    )
    .pipe(dest(paths.docsSrc('examples', 'components', componentName)))
})

task(
  'generate:component',
  series(
    'generate:component:name',
    'generate:component:src',
    'generate:component:export',
    'generate:component:docs',
  ),
)
