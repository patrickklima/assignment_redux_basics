
// ACTIONS
export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

export const ITEM_CATEGORIES = {
  ALL: "ALL",
  PRODUCE: "PRODUCE",
  DELI: "DELI",
  DRY_GOODS: "DRY_GOODS",
  DAIRY: "DAIRY"
};

export const PURCHASED_STATES = {
  ALL: "ALL",
  YES: true,
  NO: false,
};

var nextItem = 1;

export function addItem(itemData) {
  return {
    type: ADD_ITEM,
    data: {
      ...itemData,
      id: nextItem++
    }
  };
}

export function purchaseItem(itemId) {
  return {
    type: PURCHASE_ITEM,
    data: itemId
  };
}

export function setPurchasedFilter(filterSetting) {
  return {
    type: SET_PURCHASED_FILTER,
    data: filterSetting
  };
}

export function setCategoryFilter(filterSetting) {
  return {
    type: SET_CATEGORY_FILTER,
    data: filterSetting
  };
}