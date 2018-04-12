import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import './assets/styles/form.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/store/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
