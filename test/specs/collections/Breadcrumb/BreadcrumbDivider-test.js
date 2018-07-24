import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbDivider', () => {
  common.isConformant(BreadcrumbDivider)
  common.rendersChildren(BreadcrumbDivider)

  common.implementsIconProp(BreadcrumbDivider, {
    shorthandDefaultProps: {
      className: 'divider',
    },
  })
})
