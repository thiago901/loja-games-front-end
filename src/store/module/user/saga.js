import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateUserSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { client, user } = payload;
    console.tron.warn(payload);

    yield call(api.put, `/clients/${client.id}`, { client, user });

    yield put(updateUserSuccess(client.name));
    toast.success('Dados alterados com sucesso');
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Opss, um erro aconteceu');
    }
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
