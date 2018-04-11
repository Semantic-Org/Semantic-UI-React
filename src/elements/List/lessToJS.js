const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const wrapLessVariablesFile = (type, name, content) => `// Converted from:
// https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/${type}/${_.lowerCase(name)}.variables
module.exports = (theme) => {
  const vars = {}

${content}
  return vars
}
`


exports.variablesFile = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)
  const less = fs.readFileSync(absPath, 'utf8').toString()

  const parts = absPath.split(path.sep)
  const type = parts[parts.length - 3]
  const name = parts[parts.length - 2]

  const js = less
    //
    // PRE FORMATTING
    //
    .replace(/\/\*\*+[\S\s]+?\*\*\/\n+/, '')                // remove component name header
    .replace(/\s+;/gm, ';')                                 // semis to end of line

    // STRINGS
    .replace(/@{/gm, '@')                                  // LESS interpolation to JS interpolation

    //
    // VARIABLE ASSIGNMENTS
    //
    .replace(/@(\d+px)/gm, '@absolute$1')   // fix vars that start with a number
    .replace(/^@/gm, 'vars.')               // make variable defs members of vars
    .replace(/^(vars\.\w+)\s*:\s+/gm, '$1 = ')     // colon to equal sign

    // Variables used in the value position can be defined locally or globally.
    // Determine if a variable has been defined in this file prior to its use.
    // Properly reference the variable from vars (local) or theme (global).
    .replace(/@(\w+)/gm, (match, g1, offset, string) => {
      const precedingContent = string.substr(0, offset)
      const localVar = `vars.${g1} =`
      const localVarRegExp = new RegExp(localVar, 'g')
      const isLocalVar = localVarRegExp.test(precedingContent)

      const prefix = isLocalVar ? 'vars' : 'theme'

      return `\${${prefix}.${g1}}`
    })

    //
    // VALUES
    //
    // Make all values template strings, since all vars in values are already in template form ${}.
    // Then, convert any templates without interpolation to regular strings.
    // Then, convert any templates with a single interpolated value to a regular variable reference.
    // Then, fix any doubly single quoted strings
    .replace(/= '?([\S\s]+?)'?;/gm, '= `$1`;')              // back tick ALL values, stripping single quotes
    .replace(/`[\s\S]+?`/gm, m => m.replace(/\n\s+/g, ' ')) // remove all new lines from values
    .replace(/`\${([\w.]+)}`/gm, '$1')                      // remove unnecessary back ticks
    .replace(/= `([^$]+?)`;/gm, "= '$1';")                  // single quote non template strings

    // PARENS
    // TODO: parens with plain digits need precomputed, not calc(), can we use less directly here?
    .replace(/(\W)\((.*)\)/g, '$1calc($2)')                 // LESS parens to CSS calc()

    // POST FORMATTING
    .replace(/^(.+)/gm, '  $1')                             // indent lines
    .replace(/;/g, '')                                      // remove semis

  return wrapLessVariablesFile(type, name, js)
}


// -----------------------------------------
// Usage
// -----------------------------------------
const files = [
  './site.variables',
  './list.variables',
]

files.forEach((filename) => {
  const result = exports.variablesFile(filename)
  const newFilename = `${filename.replace('.variables', '-variables')}.js`

  fs.writeFileSync(newFilename, result)

  // Validation
  try {
    require(newFilename)
    console.error('PASS', filename, '=>', newFilename)
  } catch (err) {
    console.error('FAIL', filename, '=>', newFilename)
  }

})

