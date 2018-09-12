import { partitionTransitionProps } from 'src/modules/Transition/lib'

describe('partitionTransitionProps', () => {
  it('partitions props when "transition" prop is a string', () => {
    const { componentProps, transitionProps } = partitionTransitionProps(
      {
        foo: 'foo',
        transition: 'fade',
        visible: true,
      },
      'visible',
    )

    componentProps.should.toEqual({ foo: 'foo' })
    transitionProps.should.toEqual({ transition: 'fade', visible: true })
  })
})
