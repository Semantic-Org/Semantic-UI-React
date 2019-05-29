import _ from 'lodash'

import { SUI } from 'src/lib'
import CardContent from 'src/views/Card/CardContent'
import CardDescription from 'src/views/Card/CardDescription'
import CardHeader from 'src/views/Card/CardHeader'
import CardMeta from 'src/views/Card/CardMeta'
import * as common from 'test/specs/commonTests'

describe('CardContent', () => {
  common.isConformant(CardContent)
  common.rendersChildren(CardContent)

  common.implementsShorthandProp(CardContent, {
    autoGenerateKey: false,
    propKey: 'header',
    ShorthandComponent: CardHeader,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(CardContent, {
    autoGenerateKey: false,
    propKey: 'meta',
    ShorthandComponent: CardMeta,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(CardContent, {
    autoGenerateKey: false,
    propKey: 'description',
    ShorthandComponent: CardDescription,
    mapValueToProps: val => ({ content: val }),
  })

  common.implementsTextAlignProp(CardContent, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))
  common.propKeyOnlyToClassName(CardContent, 'extra')
})
