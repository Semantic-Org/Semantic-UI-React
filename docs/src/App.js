import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, withSiteData } from 'react-static'
import { Switch } from 'react-router'
import Routes from 'react-static-routes'

import Sidebar from './components/Sidebar/Sidebar'
import style from './Style'
import { docTypes } from './utils'

const App = ({ componentMenu, versions }) => (
  <div style={style.container}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route path='/layouts/*' component={null} />
          <Route path='/maximize/*' component={null} />

          <Route path='/'>
            {(props) => (
              <Sidebar
                {...props}
                componentMenu={componentMenu}
                style={style.menu}
                version={versions.suir}
              />
            )}
          </Route>
        </Switch>

        <Routes />
      </React.Fragment>
    </Router>
  </div>
)

App.propTypes = {
  componentMenu: docTypes.componentMenu.isRequired,
  versions: docTypes.versions,
}

export default hot(withSiteData(App))
