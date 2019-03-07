import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ReduxToastr from 'react-redux-toastr'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import setupSocket from './sockets'


const store = createStore(
  reducers
)

const socket = setupSocket(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <div>
        <App />
        <ReduxToastr
          timeOut={6000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick/>
    </div>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
