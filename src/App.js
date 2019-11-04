import React, {Component} from 'react';
import {BrowserRouter as Route,Link,Switch,HashRouter} from "react-router-dom"
import routesConfig from './router/index'

class App extends Component{
  render(){
    return(
      <HashRouter>
      <Switch>
        {
          routesConfig.map((route, i) => {
            return(
              <Route
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} routes={route.routes}/>
                )}
              />
            )
          })
        }
      </Switch>
    </HashRouter>
    )
  }
}

export default App;
