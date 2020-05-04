import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import NotFoundPage from './404';
import Header from './Header';
import Page from './Page'
import Dvp from './Dvp'
import { StoreProvider } from 'easy-peasy';
import store from './store/store';


export default function App() {
  return (<BrowserRouter>
    <div>
    <Header></Header>
    <StoreProvider store={store}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/agenda" render={() => <Page name="agenda" />}/>
        <Route path="/blog" render={() => <Page name="blog" />}/>
        <Route path="/galleries" render={() => <Page name="gallerie" />}/>
        <Route path="/forum" render={() => <Page name="forum" />}/>
        <Route path="/dvp" component={Dvp}/>
        <Route component={NotFoundPage}/>
      </Switch>
      </StoreProvider>
    </div>
  </BrowserRouter>)
}
