// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /ams-map-layers/count */
export async function AmsMapLayersControllerCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-map-layers/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-map-layers/${param0} */
export async function AmsMapLayersControllerFindById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerFindByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.AmsMapLayersWithRelations>(`/ams-map-layers/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /ams-map-layers/${param0} */
export async function AmsMapLayersControllerReplaceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerReplaceByIdParams,
  body: API.AmsMapLayers,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-map-layers/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /ams-map-layers/${param0} */
export async function AmsMapLayersControllerDeleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerDeleteByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-map-layers/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-map-layers/${param0} */
export async function AmsMapLayersControllerUpdateById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerUpdateByIdParams,
  body: API.AmsMapLayersPartial,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-map-layers/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-map-layers */
export async function AmsMapLayersControllerFind(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerFindParams,
  options?: { [key: string]: any },
) {
  return request<API.AmsMapLayersWithRelations[]>('/ams-map-layers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ams-map-layers */
export async function AmsMapLayersControllerCreate(
  body: API.NewAmsMapLayers,
  options?: { [key: string]: any },
) {
  return request<API.AmsMapLayers>('/ams-map-layers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-map-layers */
export async function AmsMapLayersControllerUpdateAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsMapLayersControllerUpdateAllParams,
  body: API.AmsMapLayersPartial,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-map-layers', {
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
