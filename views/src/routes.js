import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import NotFoundPage from './404';
import Header from './Header';
import Page from './Page'
import Dvp from './Dvp'



export default function MainRouter() {
  return (<BrowserRouter>
    <div>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/agenda" render={() => <Page name="agenda" />}/>
        <Route path="/blog" render={() => <Page name="blog" />}/>
        <Route path="/galleries" render={() => <Page name="gallerie" />}/>
        <Route path="/forum" render={() => <Page name="forum" />}/>
        <Route path="/dvp" component={Dvp}/>
        <Route component={NotFoundPage}/>

      </Switch>
    </div>
  </BrowserRouter>)
}
