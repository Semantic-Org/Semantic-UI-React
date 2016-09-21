import * as common from 'test/specs/commonTests'
import Table from 'src/collections/Table/Table'
import TableBody from 'src/collections/Table/TableBody'
import TableCell from 'src/collections/Table/TableCell'
import TableFooter from 'src/collections/Table/TableFooter'
import TableHeader from 'src/collections/Table/TableHeader'
import TableRow from 'src/collections/Table/TableRow'

describe('Table', () => {
  common.isConformant(Table)
  common.hasUIClassName(Table)
  common.hasSubComponents(Table, [TableBody, TableCell, TableFooter, TableHeader, TableRow])
})
