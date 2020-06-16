import _ from 'lodash'
import React, { useState } from "react";
import { Header, Table } from "semantic-ui-react";

const tableData = [
  { name: "John", age: 15, gender: "Male" },
  { name: "Amber", age: 40, gender: "Female" },
  { name: "Leslie", age: 25, gender: "Other" },
  { name: "Ben", age: 70, gender: "Male" },
];

function Table() {
  const [column, updateColumn] = useState(null);
  const [data, updateData] = useState(tableData);
  const [direction, updateDirection] = useState(null);

  const handleSort = (clickedColumn) => {
    if (column !== clickedColumn) {
      updateColumn(clickedColumn);
      updateData(_.sortBy(data, [clickedColumn]));
      updateDirection("ascending");
      return
    }
    updateData(data.reverse())
    updateDirection( direction === 'ascending' ? 'descending' : 'ascending')
  };

  return (
    <div>
      <Header as="h2">Recent files from file table</Header>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "name" ? direction : null}
              onClick={ () => handleSort("name")}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "age" ? direction : null}
              onClick={() => handleSort("age")}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "gender" ? direction : null}
              onClick={() => handleSort("gender")}
            >
              Gender
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ age, gender, name }) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Table;
