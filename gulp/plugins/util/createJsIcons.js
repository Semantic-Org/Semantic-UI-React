import generate from 'babel-generator'
import * as t from 'babel-types'
import _ from 'lodash/fp'

const createJsGroupExport = ([name, icons]) => {
  const arrayExpression = t.ArrayExpression(_.map(t.StringLiteral, icons))
  const variableDeclarator = t.VariableDeclarator(t.Identifier(name), arrayExpression)
  const variableDeclaration = t.VariableDeclaration('const', [variableDeclarator])

  return t.ExportNamedDeclaration(variableDeclaration, [])
}

const createJsGroupingExport = (icons) => {
  const names = _.filter(name => name !== 'ICON_ALIASES', _.keys(icons))

  const arrayExpression = t.ArrayExpression(_.map(name => t.SpreadElement(t.Identifier(name)), names))
  const variableDeclarator = t.VariableDeclarator(t.Identifier('ICONS'), arrayExpression)
  const variableDeclaration = t.VariableDeclaration('const', [variableDeclarator])

  return t.ExportNamedDeclaration(variableDeclaration, [])
}

const createJsTotalsExport = () => {
  const arrayExpression = t.ArrayExpression([
    t.SpreadElement(t.Identifier('ICONS')),
    t.SpreadElement(t.Identifier('ICON_ALIASES')),
  ])
  const variableDeclarator = t.VariableDeclarator(t.Identifier('ICONS_AND_ALIASES'), arrayExpression)
  const variableDeclaration = t.VariableDeclaration('const', [variableDeclarator])

  return t.ExportNamedDeclaration(variableDeclaration, [])
}

const createJsIcons = (icons) => {
  const ast = t.program([
    ..._.map(createJsGroupExport, _.toPairs(icons)),
    createJsGroupingExport(icons),
    createJsTotalsExport(),
  ])
  const { code } = generate(ast)

  return code
}

export default createJsIcons
