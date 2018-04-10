const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const wrapLessVariablesFile = (type, name, content) => `// Converted from:
// https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/${type}/${_.lowerCase(name)}.variables
module.exports = (siteVars) => {
  const vars = {}

${content}
  return vars
}
`


exports.varsFile = (type, name, filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)

  const content = fs.readFileSync(absPath, 'utf8').toString()
    .replace(/\s*:\s*/g, ' = ')                       // colon to equal sign

    //
    // PRE FORMATTING
    //
    .replace(/\/\*\*+[\S\s]+?\*\*\/\n+/, '')          // remove component name header
    .replace(/\s+;/gm, ';')                           // semis to end of line

    //
    // VARIABLE REFERENCES
    //
    .replace(/^@/gm, 'vars.')                         // make variable defs members of vars

    // Variables used in the value position can be defined locally or globally.
    // Determine if a variable has been defined in this file prior to its use.
    // Properly reference the variable from vars (local) or siteVars (global).
    .replace(/@(\w+)/gm, (match, g1, offset, string) => {
      const precedingContent = string.substr(0, offset)
      const localVar = `vars.${g1} =`
      const localVarRegExp = new RegExp(localVar, 'g')
      const isLocalVar = localVarRegExp.test(precedingContent)

      const prefix = isLocalVar ? 'vars' : 'siteVars'

      return `\${${prefix}.${g1}}`
    })            // BAD assume other vars are siteVars

    //
    // VALUES
    //
    // Make all values template strings, since all vars in values are already in template form ${}.
    // Then, convert any templates without interpolation to regular strings.
    // Then, convert any templates with a single interpolated value to a regular variable reference.
    // Then, fix any doubly single quoted strings
    .replace(/= ([\S\s]+?);/gm, '= `$1`;')       // back tick ALL values
    .replace(/= `([^$]+?)`;/gm, "= '$1';")       // single quote non tpls
    .replace(/`\${(siteVars\.\w+)}`/gm, '$1')    // remove unnecessary back ticks
    .replace(/''([\S\s]+?)''/g, "'$1'")          // fix nested single quotes

    // PARENS
    .replace(/(\W)\((.*)\)/g, '$1calc($2)')             // LESS parens to CSS calc()

    // POST FORMATTING
    .replace(/^(.+)/gm, '  $1')                       // indent lines
    .replace(/;/g, '')                                // remove semis

  return wrapLessVariablesFile(type, name, content)
}


// -----------------------------------------
// Usage
// -----------------------------------------
const filename = './list.variables'
const result = exports.varsFile('elements', 'List', filename)

fs.writeFileSync(`${filename}.js`, result)

// -----------------------------------------
// Validation
// -----------------------------------------
const listVars = require('./list.variables.js')

console.log(
  listVars({}),
)
