var React = require('react');
var ContactCardExample = require('./examples/ContactCardExamples');

var App = React.createClass({
  render: function() {
    return (
      <div className="ui text container">
        <h1>Stardust</h1>
        <ContactCardExample />
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
