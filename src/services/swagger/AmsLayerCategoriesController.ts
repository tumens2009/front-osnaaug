// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /ams-layer-categories/count */
export async function AmsLayerCategoriesControllerCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-layer-categories/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-layer-categories/${param0} */
export async function AmsLayerCategoriesControllerFindById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerFindByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.AmsLayerCategoriesWithRelations>(`/ams-layer-categories/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /ams-layer-categories/${param0} */
export async function AmsLayerCategoriesControllerReplaceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerReplaceByIdParams,
  body: API.AmsLayerCategories,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-layer-categories/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /ams-layer-categories/${param0} */
export async function AmsLayerCategoriesControllerDeleteById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerDeleteByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-layer-categories/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-layer-categories/${param0} */
export async function AmsLayerCategoriesControllerUpdateById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerUpdateByIdParams,
  body: API.AmsLayerCategoriesPartial,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ams-layer-categories/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ams-layer-categories */
export async function AmsLayerCategoriesControllerFind(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerFindParams,
  options?: { [key: string]: any },
) {
  return request<API.AmsLayerCategoriesWithRelations[]>('/ams-layer-categories', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ams-layer-categories */
export async function AmsLayerCategoriesControllerCreate(
  body: API.NewAmsLayerCategories,
  options?: { [key: string]: any },
) {
  return request<API.AmsLayerCategories>('/ams-layer-categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ams-layer-categories */
export async function AmsLayerCategoriesControllerUpdateAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AmsLayerCategoriesControllerUpdateAllParams,
  body: API.AmsLayerCategoriesPartial,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/ams-layer-categories', {
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
