import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess } from './actions';

export function* signin({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  const { token, user } = response.data;
  try {
    yield put(signInSuccess(token, user));

    // adicona o token na Api
    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (user.provider) {
      history.push('/system');
    } else {
      history.push('/');
    }
  } catch (error) {
    alert('aconteceu um erro');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export function* signUp({ payload }) {
  try {
    yield call(api.post, '/users', payload);
  } catch (error) {
    console.tron.warn('Erro. usuario nao disponivel');
  }
}
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signin),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
