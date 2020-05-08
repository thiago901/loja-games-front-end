import { produce } from 'immer';

const INITIAL_STATE = {
  cart: [],
};
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        draft.cart.push(action.payload);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.cart.findIndex(
          i => i.id === action.payload.id
        );
        if (productIndex >= 0) {
          draft.cart[productIndex].amount = Number(action.payload.amount);
        }
      });
    case '@cart/REMOVE_CART_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.cart.findIndex(
          i => i.id === action.payload.id
        );
        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1);
        }
      });
    case '@cart/CLEAR_CART_SUCCESS':
      return produce(state, draft => {
        draft.cart = [];
      });
    default:
      return state;
  }
}
