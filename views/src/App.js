import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import NotFoundPage from './components/404';
import Header from './components/Header';
import Page from './components/Page'
import Dvp from './components/Dvp'


export default function App() {
  return (<BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Dvp}/>
        <Route path="/agenda" render={() => <Page name="agenda" />}/>
        <Route path="/blog" render={() => <Page name="blog" />}/>
        <Route path="/galleries" render={() => <Page name="gallerie" />}/>
        <Route path="/forum" render={() => <Page name="forum" />}/>
        <Route path="/dvp" component={Dvp}/>
        <Route component={NotFoundPage}/>
      </Switch>
  </BrowserRouter>)
}
