// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /auth/login */
export async function AuthControllerLogin(
  body: {
    email: string;
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ token?: string }>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /currentUser */
export async function AuthControllerCurrentUser(options?: { [key: string]: any }) {
  return request<string>('/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /logout */
export async function AuthControllerLogout(options?: { [key: string]: any }) {
  return request<string>('/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /signup */
export async function AuthControllerSignUp(body: API.NewUser, options?: { [key: string]: any }) {
  return request<API.User>('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
