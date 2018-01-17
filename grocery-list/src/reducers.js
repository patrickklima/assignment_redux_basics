import {combineReducers} from 'redux';

import {
  ADD_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
} from './actions';

import {ITEM_CATEGORIES} from './actions';

import {PURCHASED_STATES} from './actions';


function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM: 
      return [
        ...state,
        action.data
      ];
    case PURCHASE_ITEM: 
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item, 
            isPurchased: true,
          };
        } else {
          return item;
        }
      });
    default: 
      return state;
  }
}


function itemFilter(state = ITEM_CATEGORIES.ALL, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action;
    default: 
      return state;
  }
}


function purchasedFilter(state = PURCHASED_STATES.ALL, action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action;
    default: 
      return state;
  }
}

export const groceriesApp = combineReducers({
  items,
  itemFilter,
  purchasedFilter
});
