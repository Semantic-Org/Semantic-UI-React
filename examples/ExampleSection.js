var React = require("react");
var ContactCard = require('../components/ContactCard/ContactCard');

var ExampleSection = React.createClass({
  render: function() {
    return (
      <div className="example-section">
        <h2 className="ui header">{ this.props.title }</h2>
        { this.props.children }
      </div>
    )
  }
});

module.exports = ExampleSection;
