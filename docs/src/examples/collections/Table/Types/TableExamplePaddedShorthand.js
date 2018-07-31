import React from 'react'
import { Table, Rating, Header } from 'semantic-ui-react'

const tableData = [
  {
    rating: 'A',
    effect: 'Power Output',
    efficacy: 3,
    consensus: 80,
    studies: 18,
    comments:
      'Creatine supplementation is the reference compound for increasing muscular creatine levels; there is' +
      'variability in this increase, however, with some nonresponders.',
  },
  {
    rating: 'A',
    effect: 'Power Output',
    efficacy: 3,
    consensus: 80,
    studies: 18,
    comments:
      'Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency',
  },
]

const headerRow = [
  { singleLine: true, content: 'Evidence Rating' },
  'Effect',
  'Efficacy',
  'Consensus',
  'Comments',
]

const renderBodyRow = ({ rating, effect, efficacy, consensus, studies, comments }, i) => ({
  key: effect || `row-${i}`,
  cells: [
    { content: <Header as='h2' textAlign='center' content={rating} /> },
    { content: effect, singleLine: true },
    { content: <Rating icon='star' defaultRating={efficacy} maxRating={3} /> },
    { content: [`${consensus}%`, <br />, <a href='#'>{studies} studies</a>], textAlign: 'right' },
    comments,
  ],
})

const TableExamplePaddedShorthand = () => (
  <Table celled padded headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExamplePaddedShorthand
