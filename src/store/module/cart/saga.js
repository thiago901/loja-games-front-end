import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import {
  addToCartSuccess,
  updateAmountSuccess,
  removeFromCart,
} from './actions';
import { formatPrice } from '../../../util/format';

export function* addToCart({ payload }) {
  try {
    const { id } = payload;
    const productExist = yield select(state =>
      state.cart.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const currentAmount = productExist ? productExist.amount : 0;
    const stockAmount = stock.data ? stock.data.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      toast.error('Produto fora de estoque');
      return;
    }

    if (productExist) {
      yield put(updateAmountSuccess(id, amount));
    } else {
      const response = yield call(api.get, `/products/${id}`);
      const data = {
        ...response.data,
        formatPrice: formatPrice(response.data.price),
        amount: 1,
      };
      yield put(addToCartSuccess(data));
      history.push('/cart');
    }
  } catch (error) {
    toast.error('Aconteceu um erro');
  }
}
function* updateAmount({ payload }) {
  const { id, amount } = payload;
  if (amount < 1) {
    yield put(removeFromCart(id));
    return;
  }
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Produto fora de estoque');
    return;
  }

  try {
    yield put(updateAmountSuccess(id, amount));
  } catch (error) {
    toast.error('erro');
  }
}
export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
