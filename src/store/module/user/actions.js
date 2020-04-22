export function updateUserRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: data,
  };
}

export function updateUserSuccess(name) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: name,
  };
}
