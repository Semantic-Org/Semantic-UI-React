import _ from 'lodash';
import $ from 'jquery';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import META from '../../utils/Meta';
import getUnhandledProps from '../../utils/getUnhandledProps';

/* eslint react/jsx-sort-prop-types:0 */
export default class Dropdown extends Component {
  static propTypes = {
    // Settings
    action: PropTypes.string,
    allowAdditions: PropTypes.bool,
    allowCategorySelection: PropTypes.bool,
    apiSettings: PropTypes.object,
    className: PropTypes.string,
    fields: PropTypes.object,
    forceSelection: PropTypes.bool,
    glyphWidth: PropTypes.number,
    label: PropTypes.object,
    match: PropTypes.string,
    maxSelections: PropTypes.number,
    on: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
    placeholder: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.bool,
    ]),
    saveRemoteData: PropTypes.bool,
    useLabels: PropTypes.bool,

    // Additional Settings
    direction: PropTypes.string,
    keepOnScreen: PropTypes.bool,
    context: PropTypes.object,
    fullTextSearch: PropTypes.bool,
    preserveHTML: PropTypes.bool,
    sortSelect: PropTypes.bool,
    showOnFocus: PropTypes.bool,
    allowTab: PropTypes.bool,
    transition: PropTypes.string,
    duration: PropTypes.number,
    keys: PropTypes.object,
    delay: PropTypes.object,

    // Callbacks
    onChange: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onNoResults: PropTypes.func,
    onLabelSelect: PropTypes.func,
    onLabelRemove: PropTypes.func,
    onLabelCreate: PropTypes.func,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
  };

  componentDidMount() {
    this.element = $(this.refs.select);
    this.element.dropdown({
      // Settings
      action: this.props.action,
      allowAdditions: this.props.allowAdditions,
      allowCategorySelection: this.props.allowCategorySelection,
      apiSettings: this.props.apiSettings,
      fields: this.props.fields,
      forceSelection: this.props.forceSelection,
      glyphWidth: this.props.glyphWidth,
      label: this.props.label,
      match: this.props.match,
      maxSelections: this.props.maxSelections,
      on: this.props.on,
      placeholder: this.props.placeholder,
      saveRemoveData: this.props.saveRemoteData,
      useLabels: this.props.useLabels,

      // Additional Settings
      direction: this.props.delay,
      keepOnScreen: this.props.keys,
      context: this.props.duration,
      fullTextSearch: this.props.transition,
      preserveHTML: this.props.allowTab,
      sortSelect: this.props.showOnFocus,
      showOnFocus: this.props.sortSelect,
      allowTab: this.props.preserveHTML,
      transition: this.props.fullTextSearch,
      duration: this.props.context,
      keys: this.props.keepOnScreen,
      delay: this.props.direction,

      // Callbacks
      onChange: this.props.onChange,
      onHide: this.props.onHide,
      onShow: this.props.onShow,
      onNoResults: this.props.onNoResults,
      onLabelSelect: this.props.onLabelSelect,
      onLabelRemove: this.props.onLabelRemove,
      onLabelCreate: this.props.onLabelCreate,
      onAdd: this.props.onAdd,
      onRemove: this.props.onRemove,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.element.dropdown('refresh');
  }

  componentWillUnmount() {
    this.element.off();
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Dropdown',
    type: META.type.module,
  };

  plugin() {
    return this.element.dropdown(...arguments);
  }

  render() {
    const options = _.map(this.props.options, (opt, i) => {
      return <option key={opt.value} value={opt.value}>{opt.text}</option>;
    });
    const classes = classNames(
      'sd-dropdown',
      'ui',
      this.props.className,
      'dropdown'
    );
    const props = getUnhandledProps(this);

    return (
      <select {...props} className={classes} ref='select'>
        {options}
      </select>
    );
  }
}
