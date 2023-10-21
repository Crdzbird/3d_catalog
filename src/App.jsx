import React from "react"
import {Provider} from "react-redux"
import {Route, Switch} from "react-router"
import { HashRouter as Router } from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import appTheme from "./theme"
import {persistor, store} from "./redux/Store"
import {ROUTE_HOMEPAGE} from "./constants"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={appTheme}>
            <Router basename="https://crdzbird.github.io/3d_catalog">
              <Switch>
                <Route exact path={ROUTE_HOMEPAGE} component={Home} />
              </Switch>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
