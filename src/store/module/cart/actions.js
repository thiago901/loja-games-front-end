export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_TO_CART_REQUEST',
    payload: { id },
  };
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_TO_CART_SUCCESS',
    payload: product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    payload: { id, amount },
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    payload: { id, amount },
  };
}
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_CART_SUCCESS',
    payload: { id },
  };
}
export function clearCart() {
  return {
    type: '@cart/CLEAR_CART_SUCCESS',
  };
}
