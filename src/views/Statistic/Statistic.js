import META from '../../utils/Meta'

import StatisticGroup from './StatisticGroup'
import StatisticItem from './StatisticItem'

const Statistic = {}

Statistic._meta = {
  library: META.library.semanticUI,
  name: 'Statistic',
  type: META.type.view,
}

Statistic.Group = StatisticGroup
Statistic.Item = StatisticItem

export default Statistic
