// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /ping */
export async function PingControllerPing(options?: { [key: string]: any }) {
  return request<API.PingResponse>('/ping', {
    method: 'GET',
    ...(options || {}),
  });
}
