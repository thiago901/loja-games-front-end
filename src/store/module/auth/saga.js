import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signin({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    yield put(signInSuccess(token, user));

    // adicona o token na Api
    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (user.provider) {
      history.push('/system');
    } else {
      history.push('/');
    }
  } catch (error) {
    toast.error('Login ou Senha invalidos, Tente novamente!');
    yield put(signFailure());
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
  toast.info('Você está deslogado');
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
