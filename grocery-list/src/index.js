import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {groceriesApp} from './reducers';

import {ITEM_CATEGORIES} from './actions';

const initialGroceryList = [
  {name: "tomatoes", category: ITEM_CATEGORIES.PRODUCE, isPurchased: false, id: 1},
  {name: "bread", category: ITEM_CATEGORIES.DELI, isPurchased: true, id: 2},
  {name: "oatmeal", category: ITEM_CATEGORIES.DRY_GOODS, isPurchased: true, id: 3},
  {name: "milk", category: ITEM_CATEGORIES.DAIRY, isPurchased: false, id: 4}
];


var store = createStore(groceriesApp, {
  items: initialGroceryList
});

console.log('initial state', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));



