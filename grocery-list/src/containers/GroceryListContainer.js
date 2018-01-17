import {connect} from 'react-redux';
import GroceryList from '../components/GroceryList';

import {addItem} from '../actions';
import ITEM_CATEGORIES from '../actions';
import PURCHASED_STATES from '../actions';

const showGroceryList = (items, itemFilter, purchasedFilter) => {
  var itemsCopy;
  switch (itemFilter) {
    case ITEM_CATEGORIES.ALL: 
      itemsCopy = items.slice();
    default: 
      itemsCopy = items.filter(item => item.category === itemFilter);
  }
  switch (purchasedFilter) {
    case PURCHASED_STATES.ALL: 
      itemsCopy = itemsCopy;
    default: 
      itemsCopy = itemsCopy.filter(item => item.isPurchased === purchasedFilter);
  }
  return itemsCopy;
};

const mapStateToProps = (state) => {
  return {
    items: showGroceryList(state.items, state.itemFilter, state.purchasedFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    }
  };
};

const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

export default GroceryListContainer;