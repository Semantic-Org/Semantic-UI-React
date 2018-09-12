import _ from 'lodash'

const partitionTransitionProps = (rawProps, visibleProp) => {
  const { transition, ...componentProps } = rawProps
  const visible = rawProps[visibleProp]

  const transitionProps = _.isObject(transition)
    ? { ...transition, visible }
    : { animation: transition, visible }

  return {
    componentProps,
    transitionProps,
  }
}

export default partitionTransitionProps
