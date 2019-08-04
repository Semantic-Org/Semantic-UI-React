import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SidebarExamplesExamples = () => (
  <ExampleSection title='Examples'>
    <ComponentExample
      title='Transitions'
      description={[
        'Not all sidebar Transitions are available for every sidebar direction, or when multiple sidebars are',
        'visible at a time.',
      ].join(' ')}
      examplePath='modules/Sidebar/Examples/SidebarExampleTransitions'
    >
      <Table celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Multiple Visible</Table.HeaderCell>
            <Table.HeaderCell>Supports Vertical Sidebars</Table.HeaderCell>
            <Table.HeaderCell>Supports Horizontal Sidebars</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Overlay</Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Push</Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Scale Down</Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Uncover</Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Slide Along</Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Slide Out</Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='green' name='check' />
            </Table.Cell>
            <Table.Cell>
              <Icon color='red' name='cancel' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </ComponentExample>
    <ComponentExample
      title='Displaying Multiple'
      description={
        <span>
          Multiple sidebars can be displayed at the same time only when using a
          supported animation like
          <code>push</code> or <code>overlay</code>.
        </span>
      }
      examplePath='modules/Sidebar/Examples/SidebarExampleMultiple'
    />
  </ExampleSection>
)

export default SidebarExamplesExamples
