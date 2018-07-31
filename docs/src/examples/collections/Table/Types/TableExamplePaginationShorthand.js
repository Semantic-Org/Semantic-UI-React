import React from 'react'
import { Table, Label, Menu } from 'semantic-ui-react'

const tableData = [
  { lang: 'english', one: 'one', two: 'two', three: 'three' },
  { lang: 'french', one: 'un', two: 'deux', three: 'trois' },
  { lang: 'spanish', one: 'uno', two: 'dos', three: 'tres' },
]

const headerRow = ['Language', '1', '2', '3']

const renderBodyRow = ({ lang, one, two, three }, i) => ({
  key: lang || `row-${i}`,
  cells: [i === 0 ? { key: lang, content: <Label ribbon>First</Label> } : lang, one, two, three],
})

const footerMenuItems = [
  { key: 'prev', as: 'a', icon: 'chevron left' },
  { key: '1', as: 'a', name: '1' },
  { key: '2', as: 'a', name: '2' },
  { key: '3', as: 'a', name: '3' },
  { key: '4', as: 'a', name: '4' },
  { key: 'next', as: 'a', icon: 'chevron right' },
]

const footerMenu = <Menu floated='right' pagination items={footerMenuItems} />

const footerRow = [
  {
    key: 1,
    colSpan: 4,
    as: 'th',
    content: footerMenu,
  },
]

const TableExamplePaginationShorthand = () => (
  <Table
    celled
    headerRow={headerRow}
    renderBodyRow={renderBodyRow}
    tableData={tableData}
    footerRow={footerRow}
  />
)

export default TableExamplePaginationShorthand
