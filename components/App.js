var React = require('react');
var Title = require('./Title/Title');
var App = React.createClass({
  render: function() {
    return (
      <div>
        <Title title="Stardust."/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
