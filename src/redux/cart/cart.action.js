import CartedActionType from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartedActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartedActionType.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartedActionType.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartedActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});
