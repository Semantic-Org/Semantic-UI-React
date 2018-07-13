import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createElement } from 'react'

import { exampleContext, truncateStyle } from 'docs/src/utils'
import { Grid, List } from 'semantic-ui-react'
import { examplePathPatterns } from './ComponentExample'
import ContributionPrompt from './ContributionPrompt'

interface IComponentExamples {
  displayName: string
}

export default class ComponentExamples extends Component<IComponentExamples, any> {
  public static propTypes = {
    displayName: PropTypes.string.isRequired,
  }

  public render() {
    return this.renderExamples() || this.renderMissingExamples()
  }

  /**
   * RULES for a component with displayName=MyComponent:
   * 1. create a file at ./docs/src/components/MyComponent/index.tsx referencing all MyComponent examples
   * 2. all example file names must contain the word 'Example'; e.g.: MyComponentExampleCircular.tsx
   * 3. all example files must be under ./docs/src/components/MyComponent path; e.g.: ./docs/src/components/MyComponent/SomeType/SomeExample.tsx
   * 2. for every ./docs/src/components/{...}/{...}MyComponent{...}Example{...}.tsx there needs to be a shorthand version of it:
   *              ./docs/src/components/{...}/{...}MyComponent{...}Example{...}.shorthand.tsx
   */
  private renderExamples = (): JSX.Element => {
    const { displayName } = this.props
    const allPaths = exampleContext.keys()

    // rule #1
    const indexPath = _.find(allPaths, path => new RegExp(`${displayName}/index.tsx$`).test(path))
    if (!indexPath) {
      return null
    }

    const ExamplesElement = createElement(exampleContext(indexPath).default) as any
    if (!ExamplesElement) {
      return null
    }

    // rules #2 and #3
    const missingPaths = this.testExamplesStructure(displayName, allPaths)
    return missingPaths && missingPaths.length ? (
      <div>
        {this.renderMissingShorthandExamples(missingPaths)} {ExamplesElement}
      </div>
    ) : (
      ExamplesElement
    )
  }

  private renderMissingExamples = () => {
    const { displayName } = this.props

    return this.renderElementWrappedInGrid(
      <ContributionPrompt>
        <div style={truncateStyle}>
          Looks like we're missing <code title={displayName}>{`<${displayName} />`}</code> examples.
        </div>
      </ContributionPrompt>,
    )
  }

  private renderMissingShorthandExamples = (missingPaths: string[]) => {
    return this.renderElementWrappedInGrid(
      <ContributionPrompt>
        <div>Looks like we're missing examples at following paths:</div>
        <List items={missingPaths} />
      </ContributionPrompt>,
    )
  }

  private renderElementWrappedInGrid = (Element: JSX.Element) => (
    <Grid padded>
      <Grid.Column>{Element}</Grid.Column>
    </Grid>
  )

  private testExamplesStructure(displayName: string, allPaths: string[]): string[] {
    const examplesPattern = `\.\/\\w*\/${displayName}[\\w\/]*\/\\w+Example`
    const allExamplesRegExp = new RegExp(`${examplesPattern}[\\w\.]*\.tsx$`)

    const [normalExtension, shorthandExtension] = [
      examplePathPatterns.normal,
      examplePathPatterns.shorthand,
    ].map(pattern => `${pattern}.tsx`)
    const [normalRegExp, shorthandRegExp] = [normalExtension, shorthandExtension].map(
      extension => new RegExp(`${examplesPattern}\\w*${extension}$`),
    )

    const allExamplesPaths = allPaths.filter(path => allExamplesRegExp.test(path))
    const expectedShorthandExamples = allExamplesPaths
      .filter(path => normalRegExp.test(path))
      .map(path => path.replace(normalExtension, shorthandExtension))
    const actualShorthandExamples = allExamplesPaths.filter(path => shorthandRegExp.test(path))

    return _.difference(expectedShorthandExamples, actualShorthandExamples)
  }
}
