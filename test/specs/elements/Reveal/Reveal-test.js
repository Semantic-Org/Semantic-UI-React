import * as common from 'test/specs/commonTests'
import Reveal from 'src/elements/Reveal/Reveal'
import RevealContent from 'src/elements/Reveal/RevealContent'

describe('Reveal', () => {
  common.isConformant(Reveal)
  common.hasUIClassName(Reveal)
  common.hasSubComponents(Reveal, [RevealContent])
  common.rendersChildren(Reveal)

  common.propKeyOnlyToClassName(Reveal, 'active')
  common.propKeyOnlyToClassName(Reveal, 'disabled')
  common.propKeyOnlyToClassName(Reveal, 'instant')

  common.propValueOnlyToClassName(Reveal, 'effect')
})
