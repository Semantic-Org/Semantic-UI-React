import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Icon,
  Table,
} from 'semantic-ui-react'

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
        <TableHeader>
          <TableRow>
            <TableHeaderCell />
            <TableHeaderCell>Multiple Visible</TableHeaderCell>
            <TableHeaderCell>Supports Vertical Sidebars</TableHeaderCell>
            <TableHeaderCell>Supports Horizontal Sidebars</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Overlay</TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Push</TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Scale Down</TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Uncover</TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Slide Along</TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Slide Out</TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
            <TableCell>
              <Icon color='green' name='check' />
            </TableCell>
            <TableCell>
              <Icon color='red' name='cancel' />
            </TableCell>
          </TableRow>
        </TableBody>
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
