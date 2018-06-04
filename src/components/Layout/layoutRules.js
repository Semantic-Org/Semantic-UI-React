import { debugRoot, debugArea, debugGap } from '../../styles/debugRules'

const truncateRule = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const layoutRules = ({
  alignItems,
  debug,
  gap,
  justifyItems,
  main,
  mainCSS,
  mainSize,
  end,
  endCSS,
  endSize,
  rootCSS,
  start,
  startCSS,
  startSize,
  truncateStart,
  truncateMain,
  truncateEnd,
  vertical,
}) => ({
  root: {
    ...(debug && debugRoot()),
    display: 'grid',
    justifyItems,
    alignItems,
    [vertical ? 'gridTemplateRows' : 'gridTemplateColumns']: [
      // Heads up!
      // IE11 Doesn't support grid-gap, insert virtual columns instead
      start && startSize,
      gap && start && main && gap,
      main && mainSize,
      gap && (start || main) && end && gap,
      end && endSize,
    ]
      .filter(Boolean)
      .join(' '),
    ...(vertical && {
      gridAutoFlow: 'row',
    }),
    ...rootCSS,
  },

  gap: {
    ...(debug && debugGap({ vertical })),
  },

  start: {
    ...(debug && debugArea()),
    ...(truncateStart && truncateRule),
    ...startCSS,
  },

  main: {
    ...(debug && debugArea()),
    ...(truncateMain && truncateRule),
    ...mainCSS,
  },

  end: {
    ...(debug && debugArea()),
    ...(truncateEnd && truncateRule),
    ...endCSS,
  },
})

export default layoutRules
