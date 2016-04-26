import _ from 'lodash'
import $ from 'jquery'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import META from '../../utils/Meta'
import { getPluginProps, getComponentProps } from '../../utils/propUtils'
import { customPropTypes } from '../../utils/propUtils'

import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import Icon from '../../elements/Icon/Icon'

const pluginPropTypes = {
  // Settings
  action: PropTypes.string,
  allowAdditions: PropTypes.bool,
  allowCategorySelection: PropTypes.bool,
  apiSettings: PropTypes.object,
  fields: PropTypes.object,
  forceSelection: PropTypes.bool,
  glyphWidth: PropTypes.number,
  label: PropTypes.object,
  match: PropTypes.string,
  maxSelections: PropTypes.number,
  on: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  saveRemoteData: PropTypes.bool,
  useLabels: PropTypes.bool,

  // Additional Settings
  allowTab: PropTypes.bool,
  context: PropTypes.object,
  delay: PropTypes.object,
  direction: PropTypes.string,
  duration: PropTypes.number,
  fullTextSearch: PropTypes.bool,
  keepOnScreen: PropTypes.bool,
  keys: PropTypes.object,
  preserveHTML: PropTypes.bool,
  showOnFocus: PropTypes.bool,
  sortSelect: PropTypes.bool,
  transition: PropTypes.string,

  // Callbacks
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
  onHide: PropTypes.func,
  onRemove: PropTypes.func,
  onShow: PropTypes.func,
  onLabelSelect: PropTypes.func,
  onLabelRemove: PropTypes.func,
  onLabelCreate: PropTypes.func,
  onNoResults: PropTypes.func,
}

export default class Dropdown extends Component {
  static propTypes = {
    ...pluginPropTypes,
    text: PropTypes.string,
    defaultText: PropTypes.string,
    className: PropTypes.string,
    children: customPropTypes.mutuallyExclusive(['options']),
    icon: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    })),
  }

  static defaultProps = {
    icon: 'dropdown',
  }

  componentDidMount() {
    this.element = $(this.refs.element).dropdown({
      ...getPluginProps(this.props, pluginPropTypes),
      onAdd: this.handleAdd,
      onChange: this.handleChange,
      onRemove: this.handleRemove,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    _.invoke(this, 'element.dropdown', 'refresh')
    const isDOMInSync = _.isEqual(this.props.value, this.getValue())
    if (!isDOMInSync && this.isSelection()) this._syncFromProps()
  }

  componentWillUnmount() {
    _.invoke(this, 'element.off')
  }

  handleAdd = (value) => {
    if (this._isSyncing) return
    if (this.props.onAdd) this.props.onAdd(value) // eslint-disable-line
  }

  handleChange = () => {
    if (this._isSyncing) return
    // callback with the appropriate value type
    if (this.props.onChange) this.props.onChange(this.getValue()) // eslint-disable-line
  }

  handleRemove = (value) => {
    if (this._isSyncing) return
    if (this.props.onRemove) this.props.onRemove(value) // eslint-disable-line
  }

  // dropdown values are stored in a hidden input value (string)
  // multiselect dropdown values should be arrays since they accept array values
  // empty values should not be empty strings ""
  getValue = () => {
    const value = _.invoke(this, 'element.dropdown', 'get value')
    if (value) {
      // multiselect dropdown values are delimited strings
      return this.isMultiple() ? value.split(Dropdown._DELIMITER) : value
    }

    // sensible empty values
    return this.isMultiple() ? [] : undefined
  }

  // sync's the jQuery module to the React props
  _syncFromProps = () => {
    // flag that we are syncing so we don't call back on React -> DOM syncing changes
    this._isSyncing = true
    const { value } = this.props
    this.setValue(value)
    this._isSyncing = false
  }

  static _DELIMITER = ','
  static _meta = {
    library: META.library.semanticUI,
    name: 'Dropdown',
    type: META.type.module,
  }
  static Divider = DropdownDivider
  static Item = DropdownItem
  static Menu = DropdownMenu

  isMultiple = () => _.includes(this.props.className, 'multiple')
  isSelection = () => _.includes(this.props.className, 'selection')
  setValue = (value) => _.invoke(this, 'element.dropdown', 'set exactly', value)

  render() {
    const { children, className, defaultText, defaultValue, icon, options, text } = this.props
    const classes = cx(
      'sd-dropdown',
      'ui',
      className,
      'dropdown'
    )
    const iconClasses = cx(
      'sd-dropdown-icon',
      icon,
      'icon'
    )
    const items = _.map(options, (opt, i) => (
      <DropdownItem key={`${opt.value}-${i}`} data-text={opt.text} data-value={opt.value}>
        {opt.text}
      </DropdownItem>
    ))
    const componentProps = getComponentProps(this.props, pluginPropTypes)
    return (
      <div {...componentProps} className={classes} ref='element' onChange={this.handleChange}>
        {this.isSelection() && <input type='hidden' defaultValue={defaultValue} />}
        {text && <div className='text'>{text}</div>}
        {icon && <Icon className={iconClasses} />}
        {this.isSelection() && <div className='default text'>{defaultText}</div>}
        <DropdownMenu>
          {children || items}
        </DropdownMenu>
      </div>
    )
  }
}
