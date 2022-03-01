import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


// import rootReducer from './reducers/rootReducer';
// import reducer from './reducers/rootReducer';



// const store = createStore(reducer);
const store = createStore(manageRestaurant);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
