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
    effect: 'Weight',
    efficacy: 3,
    consensus: 100,
    studies: 65,
    comments:
      'Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency',
  },
]

const headerRow = [
  { key: 'rating', singleLine: true, content: 'Evidence Rating' },
  'Effect',
  'Efficacy',
  'Consensus',
  'Comments',
]

const renderBodyRow = ({ rating, effect, efficacy, consensus, studies, comments }, i) => ({
  key: effect || `row-${i}`,
  cells: [
    { key: 'rating', content: <Header as='h2' textAlign='center' content={rating} /> },
    { key: 'effect', content: effect, singleLine: true },
    { key: 'efficacy', content: <Rating icon='star' defaultRating={efficacy} maxRating={3} /> },
    {
      key: 'consensus',
      content: (
        <span>
          {`${consensus}%`}
          <br />
          <a href='#'>{studies} studies</a>
        </span>
      ),
      textAlign: 'right',
    },
    comments,
  ],
})

const TableExamplePaddedShorthand = () => (
  <Table celled padded headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExamplePaddedShorthand
