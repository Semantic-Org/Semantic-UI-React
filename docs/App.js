var React = require('react');
var ContactCardExample = require('./components/ContactCardExample');
var MainMenu = require('./components/MainMenu');

var App = React.createClass({
  render: function() {
    return (
      <div className="ui text container">
        <MainMenu/>
        <div className="ui divider"></div>
        <ContactCardExample/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
