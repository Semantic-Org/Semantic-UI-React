import { deprecateComponents } from './utils/deprecate'

// Addons
import Confirm from './addons/Confirm/Confirm'
import Textarea from './addons/Textarea/Textarea'

// Collections
import Form from './collections/Form/Form'
import Grid from './collections/Grid/Grid'
import Menu from './collections/Menu/Menu'
import Message from './collections/Message/Message'
import Table from './collections/Table/Table'

// Elements
import Button from './elements/Button/Button'
import Buttons from './elements/Button/Buttons'
import Container from './elements/Container/Container'
import Divider from './elements/Divider/Divider'
import Header from './elements/Header/Header'
import Image from './elements/Image/Image'
import Input from './elements/Input/Input'
import List from './elements/List/List'
import Segment from './elements/Segment/Segment'
import Segments from './elements/Segment/Segments'

// Modules
import Checkbox from './modules/Checkbox/Checkbox'
import Progress from './modules/Progress/Progress'
import Modal from './modules/Modal/Modal'
import Dropdown from './modules/Dropdown/Dropdown'

// Views
import Item from './views/Items/Item'
import Items from './views/Items/Items'
import Statistic from './views/Statistic/Statistic'

const stardust = {
  // Addons
  Confirm,
  Textarea,

  // Collections
  Form,
  Grid,
  Menu,
  Message,
  Table,

  // Elements
  Button,
  Buttons,
  Container,
  Divider,
  Header,
  Image,
  Input,
  List,
  Segment,
  Segments,

  // Modules
  Checkbox,
  Dropdown,
  Modal,
  Progress,

  // Views
  Item,
  Items,
  Statistic,
}

deprecateComponents(stardust, [
  ['Field', 'Use "Form.Field" instead.', Form.Field],
  ['Fields', 'Use "Form.Fields" instead.', Form.Fields],
  ['Column', `Use "Grid.Column" instead.`, Grid.Column],
  ['TableColumn', `Use "Table.Column" instead.`, Table.Column],
  ['ListItem', `Use "List.Item" instead.`, List.Item],
  ['MenuItem', `Use "Menu.Item" instead.`, Menu.Item],
  ['ModalContent', `Use "Modal.Content" instead.`, Modal.Content],
  ['ModalFooter', `Use "Modal.Footer" instead.`, Modal.Footer],
  ['ModalHeader', `Use "Modal.Header" instead.`, Modal.Header],
  ['Row', `Use "Grid.Row" instead.`, Grid.Row],
])

export default stardust
