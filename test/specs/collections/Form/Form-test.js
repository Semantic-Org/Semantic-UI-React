import { Form } from 'stardust'
import FormField from 'src/collections/Form/FormField'
import FormFields from 'src/collections/Form/FormFields'
import * as common from 'test/specs/commonTests'

describe('Form', () => {
  common.isConformant(Form)
  common.hasUIClassName(Form)
  common.hasSubComponents(Form, [FormField, FormFields])
  common.rendersChildren(Form)
})
