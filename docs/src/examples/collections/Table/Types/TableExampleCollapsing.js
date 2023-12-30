import React from 'react'
import {
  HeaderSubheader,
  HeaderContent,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Header,
  Image,
  Table,
} from 'semantic-ui-react'

const TableExampleCollapsing = () => (
  <Table basic='very' celled collapsing>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Employee</TableHeaderCell>
        <TableHeaderCell>Correct Guesses</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/lena.png' rounded size='mini' />
            <HeaderContent>
              Lena
              <HeaderSubheader>Human Resources</HeaderSubheader>
            </HeaderContent>
          </Header>
        </TableCell>
        <TableCell>22</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
            <HeaderContent>
              Matthew
              <HeaderSubheader>Fabric Design</HeaderSubheader>
            </HeaderContent>
          </Header>
        </TableCell>
        <TableCell>15</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
            <HeaderContent>
              Lindsay
              <HeaderSubheader>Entertainment</HeaderSubheader>
            </HeaderContent>
          </Header>
        </TableCell>
        <TableCell>12</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/mark.png' rounded size='mini' />
            <HeaderContent>
              Mark
              <HeaderSubheader>Executive</HeaderSubheader>
            </HeaderContent>
          </Header>
        </TableCell>
        <TableCell>11</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleCollapsing
