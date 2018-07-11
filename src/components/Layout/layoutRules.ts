import { debugRoot, debugArea, debugGap } from '../../styles/debugRules'

const truncateRule = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const layoutRules = {
  root: ({ props, vertical }) => {
    const {
      alignItems,
      debug,
      gap,
      justifyItems,
      main,
      mainSize,
      end,
      endSize,
      rootCSS,
      start,
      startSize,
    } = props
    return {
      ...(debug && debugRoot()),
      justifyItems,
      alignItems,
      display: 'grid',
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
    }
  },

  gap: ({ props }) => ({
    ...(props.debug && debugGap({ vertical: props.vertical })),
  }),

  start: ({ props }) => ({
    ...(props.debug && debugArea()),
    ...(props.truncateStart && truncateRule),
    ...props.startCSS,
  }),

  main: ({ props }) => ({
    ...(props.debug && debugArea()),
    ...(props.truncateMain && truncateRule),
    ...props.mainCSS,
  }),

  end: ({ props }) => ({
    ...(props.debug && debugArea()),
    ...(props.truncateEnd && truncateRule),
    ...props.endCSS,
  }),
}

export default layoutRules
