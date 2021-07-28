import Reveal from 'src/elements/Reveal/Reveal'
import RevealContent from 'src/elements/Reveal/RevealContent'
import * as common from 'test/specs/commonTests'

describe('Reveal', () => {
  common.isConformant(Reveal)
  common.forwardsRef(Reveal)
  common.hasSubcomponents(Reveal, [RevealContent])
  common.hasUIClassName(Reveal)
  common.rendersChildren(Reveal)

  common.propKeyOnlyToClassName(Reveal, 'active')
  common.propKeyOnlyToClassName(Reveal, 'disabled')
  common.propKeyOnlyToClassName(Reveal, 'instant')

  common.propValueOnlyToClassName(Reveal, 'animated', [
    'fade',
    'small fade',
    'move',
    'move right',
    'move up',
    'move down',
    'rotate',
    'rotate left',
  ])
})
