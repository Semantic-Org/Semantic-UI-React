import _ from 'lodash';
import React, {Component} from 'react';

// import stardust from 'index.js';
// import docgenInfo from 'docs/app/docgenInfo';

// let components = _.map(docgenInfo, (definition, name) => {
//   var filename = name.substr(name.lastIndexOf('/') + 1).replace(/\.js$/, '');
//   console.log(filename);
// console.log(req('./' + filename + '/index.js'));

// let req2 = require('docs/app/examples/' + filename + '/index.js');
// console.log(req2);
// });

let req = require.context('docs/app/examples/', true, /\.js$/);

let comps = _.map(req.keys(), (modulePath, moduleId) => {
  let Example = req(modulePath);

  return (
    <div className='ui segment' id={name}>
      <h3>{name}</h3>
      {React.createElement(Example, null)}
    </div>
  );
});

class Examples extends Component {
  render() {
    return (
      <div>
        {comps}
      </div>
    );
  }
}

export default Examples;
