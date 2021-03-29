export const regexpName = /^[a-zA-Z\u00C0-\u00ff]+$/;
export const regexpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const limit = 16;
export const dateNow = new Date().toISOString().split('T')[0];
export const regexpLogin = /^[0-9a-zA-Z]+$/;
export const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

export const fields = ['firstName', 'lastName', 'email', 'date', 'login', 'password', 'repeatPassword'];