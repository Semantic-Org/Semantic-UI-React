var React = require("react");
var ContactCard = require('../../src/components/ContactCard/ContactCard');
var ExampleSection = require('./ExampleSection');

var ContactCardExample = React.createClass({
  render: function() {
    return (
      <ExampleSection title="Contact Card" id="contact-card-example">
        <p>
          <ContactCard name="Default Size"/>
        </p>

        <p>
          <ContactCard name="Mini Gabriel Anderson" size="mini"/>
        </p>

        <p>
          <ContactCard name="Tiny Surely Randall" size="tiny"/>
        </p>
      </ExampleSection>
    )
  }
});

module.exports = ContactCardExample;
