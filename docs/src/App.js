import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, withSiteData } from 'react-static'
import Routes from 'react-static-routes'
import style from './Style'
import Sidebar from './components/Sidebar/Sidebar'
import { docTypes } from './utils'

const App = ({ componentMenu, versions }) => (
  <div style={style.container}>
    <Router>
      <React.Fragment>
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
