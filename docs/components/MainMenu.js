var React = require('react');

var MainMenu = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui borderless main menu">
          <div className="ui text container">
            <a href="#" className="header item">
              Stardust
            </a>
            <a href="#contact-card-example" className="item">
              Contact Card
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainMenu;
