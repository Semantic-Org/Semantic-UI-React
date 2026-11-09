/** Checks that the passed object is a valid React ref object. */
export default function isRefObject(ref) {
  // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
  return (
    ref !== null && typeof ref === 'object' && Object.prototype.hasOwnProperty.call(ref, 'current')
  )
}
