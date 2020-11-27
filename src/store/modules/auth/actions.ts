export function signInRequest(email: any, password: any) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(login: any) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {login},
  };
}

export function signUpRequest(name: any, email: any, password: any) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {name, email, password},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
