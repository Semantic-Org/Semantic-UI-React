const fs = require('fs')
const path = require('path')
const cp = require('child_process')

const _ = require('lodash')
const gutil = require('gulp-util')
const gulp = require('gulp')
const through2 = require('through2')

const wrapLessVariablesFile = content => `module.exports = (theme) => {
  const vars = {}

${content}
  return vars
}
`

const wrapLessDefinitionFile = content => `/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

${content}
`

exports.definitionFile = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)
  const lessContent = fs.readFileSync(absPath, 'utf8').toString()

  const jsContent = lessContent
    .replace(/\/\*![\s\S]+?\*\/\n+/gm, '')   // strip header
    .replace(/^(.*)$/gm, '// $1')           // just comment out every line for manual migration

  return wrapLessDefinitionFile(jsContent)
}

exports.variablesFile = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)
  const lessContent = fs.readFileSync(absPath, 'utf8').toString()

  const jsContent = lessContent
  //
  // PRE FORMATTING
  //
    .replace(/\s+;/gm, ';')                                 // semis to end of line

    //
    // VARIABLE PROPERTIES
    //
    .replace(/@(\d+px)/gm, '@absolute$1')         // fix vars that start with a number
    .replace(/^@/gm, 'vars.')                     // make variable defs members of vars
    .replace(/^(vars\.\w+)\s*:\s+/gm, '$1 = ')    // colon to equal sign

    //
    // VALUES
    //

    // Interpolate
    //
    // Variables used in the value position can be defined locally or globally.
    // Determine if a variable has been defined in this file prior to its use.
    // Properly reference the variable from vars (local) or theme (global).
    // Handle both LESS interpolation @{foo} and vars @foo
    .replace(/@{?(\w+)}?/gm, (match, g1, offset, string) => {
      const precedingContent = string.substr(0, offset)
      const localVar = `vars.${g1} =`
      const localVarRegExp = new RegExp(localVar, 'g')
      const isLocalVar = localVarRegExp.test(precedingContent)

      const prefix = isLocalVar ? 'vars' : 'theme'

      return `\${${prefix}.${g1}}`
    })
    // .replace(/\${([\w.]+)};/gm, '$1;')                           // remove braces from single var usages
    // .replace(/= '?(.*?\$.*?)'?;/gm, '= `$1`;')                   // back tick values with interpolated vars ${}

    // .replace(/= (?!true|false|\()([^'$\n]+?);/gm, '= \'$1\';')   // quote strings, no bools|interpolation|quotes|new lines
    // .replace(/= '([\S\s]+?)';/gm, '= `$1`;')                     // remove quotes from all values
    .replace(/= ([\S\s]+?);/gm, '= `$1`;')                        // back tick all values
    // .replace(/`[\s\S]+?`/gm, m => m.replace(/\n\s+/g, ' '))      // remove all new lines from values
    // .replace(/= `([^$]+?)`;/gm, '= \'$1\';')                      // single quote non template strings

    // PARENS
    // TODO: parens with plain digits need precomputed, not calc(), can we use less directly here?
    // .replace(/(\W)\((.*)\)/g, '$1calc($2)')                 // LESS parens to CSS calc()

    // POST FORMATTING
    .replace(/^(.+)/gm, '  $1')                             // indent lines
    .replace(/;/g, '')                                      // remove semis

  // return 'const theme = {}\nconst vars = {}\n' + jsContent
  return wrapLessVariablesFile(jsContent)
}

/**
 * Heads up!
 * This will copy and overwrite any file at the returned path location!
 *
 * How a SUI definition file path gets mapped to a SUIR filepath.
 *
 * @param filepath
 * @returns {*}
 */
exports.definitionFilepath = filepath => filepath
  .replace('.less', '-rules.js')
  .replace('/less/', '/js/')

/**
 * Heads up!
 * This will copy and overwrite any file at the returned path location!
 *
 * How a SUI variables file path gets mapped to a SUIR filepath.
 *
 * @param filepath
 * @returns {*}
 */
exports.variablesFilepath = filepath => filepath
  .replace('.variables', '-variables.js')
  .replace('/less/', '/js/')

//
// Map parsers to file extensions
//
const CONTENT_PARSERS = {
  '.less': exports.definitionFile,
  '.variables': exports.variablesFile,
}

const PATH_PARSERS = {
  '.less': exports.definitionFilepath,
  '.variables': exports.variablesFilepath,
}

// -----------------------------------------
// Usage
// -----------------------------------------
// Convert Rules
gulp.src('./less/**/*.{less,variables}')
  .pipe(through2.obj((file, enc, cb) => {
    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(path.parse(__filename).name, 'Streaming is not supported'))
      return
    }

    const contentParser = CONTENT_PARSERS[file.extname]
    const pathParser = PATH_PARSERS[file.extname]

    const result = contentParser(file.path)
    const newFilename = pathParser(file.path)

    console.log()
    console.log(file.path)
    console.log(newFilename)

    file.contents = Buffer.from(result)
    file.path = newFilename

    cb(null, file)
  }, (cb) => {
    // const jsPath = path.resolve(__dirname, './js/**/*.js')
    // const command = `$(npm bin)/eslint --fix ${jsPath}`
    // console.log('Linting...')
    // cp.execSync(command, { stdio: 'inherit' })
    cb()
  }))
  .pipe(gulp.dest(({ base }) => base))

