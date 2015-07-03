var React = require("react");
var ContactCard = require('../components/ContactCard/ContactCard');
var ExampleSection = require('./ExampleSection');

var ContactCardExample = React.createClass({
  render: function() {
    return (
      <ExampleSection title="Contact Card" id="contact-card-example">
        <ContactCard name="Default Size"/>

        <div className="ui divider"></div>
        <ContactCard size="mini" name="Mini Gabriel Anderson"/>
        <ContactCard size="tiny" name="Tiny Surely Randall"/>
      </ExampleSection>
    )
  }
});

module.exports = ContactCardExample;
