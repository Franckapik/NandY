import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import './styles/App.scss';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode >
    <StoreProvider store={store}> 
      <App />
    </StoreProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
