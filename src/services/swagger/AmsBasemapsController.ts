// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /ams-basemaps/count */
export async function AmsBasemapsControllerCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-basemaps/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-basemaps/${param0} */
export async function AmsBasemapsControllerFindById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerFindByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.amsBasemapId>(`/ams-basemaps/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /ams-basemaps/${param0} */
export async function AmsBasemapsControllerReplaceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerReplaceByIdParams,
  body: API.AmsBasemaps,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-basemaps/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /ams-basemaps/${param0} */
export async function AmsBasemapsControllerDeleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerDeleteByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-basemaps/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-basemaps/${param0} */
export async function AmsBasemapsControllerUpdateById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerUpdateByIdParams,
  body: API.AmsBasemapsPartial,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-basemaps/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-basemaps */
export async function AmsBasemapsControllerFind(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerFindParams,
  options?: { [key: string]: any },
) {
  return request<API.getAmsBasemaps[]>('/ams-basemaps', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ams-basemaps */
export async function AmsBasemapsControllerCreate(
  body: API.NewAmsBasemaps,
  options?: { [key: string]: any },
) {
  return request<API.AmsBasemaps>('/ams-basemaps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-basemaps */
export async function AmsBasemapsControllerUpdateAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsBasemapsControllerUpdateAllParams,
  body: API.amsBasemapsPartial,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-basemaps', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
