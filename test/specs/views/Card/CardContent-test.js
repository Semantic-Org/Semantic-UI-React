import * as common from 'test/specs/commonTests'
import CardContent from 'src/views/Card/CardContent'
import CardDescription from 'src/views/Card/CardDescription'
import CardHeader from 'src/views/Card/CardHeader'
import CardMeta from 'src/views/Card/CardMeta'

describe('CardContent', () => {
  common.isConformant(CardContent)

  common.implementsShorthandProp(CardContent, {
    propKey: 'header',
    ShorthandComponent: CardHeader,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(CardContent, {
    propKey: 'meta',
    ShorthandComponent: CardMeta,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(CardContent, {
    propKey: 'description',
    ShorthandComponent: CardDescription,
    mapValueToProps: val => ({ content: val }),
  })

  common.propKeyOnlyToClassName(CardContent, 'extra')
  common.rendersChildren(CardContent)
})
