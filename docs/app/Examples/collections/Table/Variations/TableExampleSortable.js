import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Female' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

class TableExampleSortable extends Component {
  state = {
    sortProp: null,
    sortDirection: null,
    data: tableData,
  }

  handleSort = (prop) => () => {
    const { data, sortDirection, sortProp } = this.state

    if (sortProp !== prop) {
      const sortedData = _.sortBy(data, [prop])
      this.setState({ data: sortedData, sortDirection: 'ascending', sortProp: prop })
    } else {
      const sortedData = data.slice(0).reverse()
      const direction = sortDirection === 'ascending' ? 'descending' : 'ascending'
      this.setState({ data: sortedData, sortDirection: direction })
    }
  }

  render() {
    const { data, sortDirection, sortProp } = this.state

    return (
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={sortProp === 'name' ? sortDirection : null}
              onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={sortProp === 'age' ? sortDirection : null}
              onClick={this.handleSort('age')}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={sortProp === 'gender' ? sortDirection : null}
              onClick={this.handleSort('gender')}
            >
              Gender
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, (item) => (
            <Table.Row key={item.name}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.age}</Table.Cell>
              <Table.Cell>{item.gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default TableExampleSortable
