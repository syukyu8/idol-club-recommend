import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StoreContext } from 'redux-react-hook'
import ErrorBoundary from './components/abstracts/error-boundary'
import Header from './components/modules/header'
import Counter from './pages/counter'
import Home from './pages/home'
import NotFound from './pages/not-found'
import store from './store'

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreContext.Provider>,
  document.querySelector('#root')
)
