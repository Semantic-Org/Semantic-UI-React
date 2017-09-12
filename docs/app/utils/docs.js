import _ from 'lodash/fp'

import docInfo from 'docs/app/docgenInfo.json'
import * as semanticUIReact from 'src'
import { repoURL } from './constants'

const docPaths = _.keys(docInfo)

export const getDocPath = name => _.find(path => new RegExp(`${__PATH_SEP__}${name}.js$`).test(path), docPaths)

export const getDocInfo = name => _.get(getDocPath(name), docInfo)

export const getDocProps = name => _.get('props', getDocInfo(name))

export const getDocDescription = name => _.get('docBlock.description', getDocInfo(name))

export const getDocSubComponents = name => _.map(
  '_meta.name',
  _.filter(component => _.get('_meta.parent', component) === name, semanticUIReact),
)

export const getPosixPath = name => getDocPath(name).replace(new RegExp(_.escapeRegExp(__PATH_SEP__), 'g'), '/')

export const getGithubSourceUrl = name => `${repoURL}/blob/master/${getPosixPath(name)}`

export const getSemanticUIDocsUrl = (name, type) => `https://semantic-ui.com/${type}s/${name}`.toLowerCase()

export const getSeeLinks = componentName => _.map(({ description }) => {
  const seeMeta = _.get('_meta', semanticUIReact[description])

  if (!seeMeta) return
  const { type, name } = seeMeta

  return { description, name, type }
}, _.filter(['title', 'see'], _.get('docBlock.tags', getDocInfo(componentName))))
