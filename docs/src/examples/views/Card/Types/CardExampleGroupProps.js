import React from 'react'
import { CardGroup } from 'semantic-ui-react'

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

const CardExampleGroupProps = () => <CardGroup items={items} />

export default CardExampleGroupProps
