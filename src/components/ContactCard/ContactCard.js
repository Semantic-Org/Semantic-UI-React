var _ = require('lodash');
var React = require('react');
var validate = require('../../utils/validate');
var component = 'ContactCard';
var supportedSizes = ['mini', 'tiny'];
var defaultSize = 'mini';

var ContactCard = React.createClass({
  componentWillMount: function() {
    this.props.size = this.props.size || defaultSize;

  },
  componentDidMount: function() {
    validate.componentProp(component, this.props.size, supportedSizes);
  },
  render: function() {
    return (
      <div className="sd-contact-card">
        <img className={"ui top aligned circular image " + this.props.size} src="//unsplash.it/300"/>
        <span className={"ui header " + this.props.size}>{this.props.name}</span>
      </div>
    )
  }
});

module.exports = ContactCard;
