import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { updateUserSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { client, password, oldPassword, confirmPassword } = payload;

    yield call(api.put, `/clients/${client.id}`, {
      name: client.name,
    });

    if (oldPassword) {
      yield call(api.put, `/users`, {
        oldPassword,
        password,
        confirmPassword,
      });
      console.tron.warn('Tentando alterar senha');
    }
    yield put(updateUserSuccess(client.name));
  } catch (error) {
    console.tron.log(error);
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
