import generate from '@babel/generator'
import template from '@babel/template'
import * as t from '@babel/types'
import _ from 'lodash'

const fromComponent = template.ast(`
export const fromComponent = (Component) => {
  const displayName = Component.displayName || Component.name
  
  return byDisplayName[displayName]
}
`)

const generateComponentIndex = (files) => {
  const infoImports = _.map(files, (info, filename) =>
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier(info.filenameWithoutExt))],
      t.stringLiteral(`./${filename}`),
    ),
  )

  const byApiPath = t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('byAPIPath'),
        t.objectExpression(
          _.map(files, info =>
            t.objectProperty(t.stringLiteral(info.apiPath), t.identifier(info.filenameWithoutExt)),
          ),
        ),
      ),
    ]),
    [],
  )

  const byDisplayName = t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('byDisplayName'),
        t.objectExpression(
          _.map(files, info =>
            t.objectProperty(
              t.stringLiteral(info.displayName),
              t.identifier(info.filenameWithoutExt),
            ),
          ),
        ),
      ),
    ]),
    [],
  )

  const ast = {
    type: 'Program',
    body: [...infoImports, byApiPath, byDisplayName, fromComponent],
  }
  const output = generate(ast)

  return output.code
}

export default generateComponentIndex
