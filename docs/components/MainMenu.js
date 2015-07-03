var React = require('react');

var MainMenu = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui borderless main menu">
          <div className="ui text container">
            <div href="#" className="header item">
              Stardust
            </div>
            <a href="#contact-card-example" className="item">
              Contact Card
            </a>
            <a href="#" className="ui right floated dropdown item"
               tabIndex="0">

              Dropdown <i className="dropdown icon"></i>

              <div className="menu" tabIndex="-1">
                <div className="item">Link Item</div>
                <div className="item">Link Item</div>
                <div className="divider"></div>
                <div className="header">Header Item</div>
                <div className="item">
                  <i className="dropdown icon"></i>
                  Sub Menu
                  <div className="menu">
                    <div className="item">Link Item</div>
                    <div className="item">Link Item</div>
                  </div>
                </div>
                <div className="item">Link Item</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainMenu;
