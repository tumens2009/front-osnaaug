declare namespace API {
  
  type AmsBasemaps =
     {
      'id': number;
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type NewAmsBasemaps =
     {
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type AmsBasemapsWithRelations =
     {
      'id': number;
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type AmsBasemapsPartial =
     {
      'id'?: number;
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type AmsLayerCategories =
     {
      'id': number;
      'name': string;
      'createdAt'?: string;
     }
    

  type NewAmsLayerCategories =
     {
      'name': string;
      'createdAt'?: string;
     }
    

  type AmsLayerCategoriesWithRelations =
     {
      'id': number;
      'name': string;
      'createdAt'?: string;
     }
    

  type AmsLayerCategoriesPartial =
     {
      'id'?: number;
      'name'?: string;
      'createdAt'?: string;
     }
    

  type AmsMapLayers =
     {
      'id': number;
      'categoryId'?: number;
      'layerType'?: number;
      'name': string;
      'url'?: string;
      'orderIndex'?: number;
      'isActive'?: number;
      'isOnLoadVisible'?: number;
      'isHasPopup'?: number;
      'createdAt'?: string;
      'updatedAt'?: string;
     }
    

  type NewAmsMapLayers =
     {
      'categoryId'?: number;
      'layerType'?: number;
      'name': string;
      'url'?: string;
      'orderIndex'?: number;
      'isActive'?: number;
      'isOnLoadVisible'?: number;
      'isHasPopup'?: number;
      'createdAt'?: string;
      'updatedAt'?: string;
     }
    

  type AmsMapLayersWithRelations =
     {
      'id': number;
      'categoryId'?: number;
      'layerType'?: number;
      'name': string;
      'url'?: string;
      'orderIndex'?: number;
      'isActive'?: number;
      'isOnLoadVisible'?: number;
      'isHasPopup'?: number;
      'createdAt'?: string;
      'updatedAt'?: string;
     }
    

  type AmsMapLayersPartial =
     {
      'id'?: number;
      'categoryId'?: number;
      'layerType'?: number;
      'name'?: string;
      'url'?: string;
      'orderIndex'?: number;
      'isActive'?: number;
      'isOnLoadVisible'?: number;
      'isHasPopup'?: number;
      'createdAt'?: string;
      'updatedAt'?: string;
     }
    

  type User =
     {
      'id'?: string;
      'firstname'?: string;
      'lastname'?: string;
      'name'?: string;
      'userid'?: string;
      'address'?: string;
      'phone'?: string;
      'email': string;
      'role'?: string;
     }
    

  type NewUser =
     {
      'id'?: string;
      'firstname'?: string;
      'lastname'?: string;
      'name'?: string;
      'userid'?: string;
      'address'?: string;
      'phone'?: string;
      'email': string;
      'role'?: string;
      'password': string;
     }
    

  type NewUserRequest =
     {
      'id'?: string;
      'firstname'?: string;
      'lastname'?: string;
      'name'?: string;
      'userid'?: string;
      'address'?: string;
      'phone'?: string;
      'email': string;
      'role'?: string;
      'password': string;
     }
    

  type Count =
     {
      'count'?: number;
     }
    

  type Filter =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsBasemaps.Fields */
      'fields'?: { id?: boolean; baseTypeId?: boolean; description?: boolean; url?: boolean; } | "id" | "baseTypeId" | "description" | "url"[];
     }
    

  type Filter1 =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsBasemaps.WhereFilter */
      'where'?: Record<string, any>;
      /** AmsBasemaps.Fields */
      'fields'?: { id?: boolean; baseTypeId?: boolean; description?: boolean; url?: boolean; } | "id" | "baseTypeId" | "description" | "url"[];
     }
    

  type Filter =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsLayerCategories.Fields */
      'fields'?: { id?: boolean; name?: boolean; createdAt?: boolean; } | "id" | "name" | "createdAt"[];
     }
    

  type Filter1 =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsLayerCategories.WhereFilter */
      'where'?: Record<string, any>;
      /** AmsLayerCategories.Fields */
      'fields'?: { id?: boolean; name?: boolean; createdAt?: boolean; } | "id" | "name" | "createdAt"[];
     }
    

  type Filter =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsMapLayers.Fields */
      'fields'?: { id?: boolean; categoryId?: boolean; layerType?: boolean; name?: boolean; url?: boolean; orderIndex?: boolean; isActive?: boolean; isOnLoadVisible?: boolean; isHasPopup?: boolean; createdAt?: boolean; updatedAt?: boolean; } | "id" | "categoryId" | "layerType" | "name" | "url" | "orderIndex" | "isActive" | "isOnLoadVisible" | "isHasPopup" | "createdAt" | "updatedAt"[];
     }
    

  type Filter1 =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsMapLayers.WhereFilter */
      'where'?: Record<string, any>;
      /** AmsMapLayers.Fields */
      'fields'?: { id?: boolean; categoryId?: boolean; layerType?: boolean; name?: boolean; url?: boolean; orderIndex?: boolean; isActive?: boolean; isOnLoadVisible?: boolean; isHasPopup?: boolean; createdAt?: boolean; updatedAt?: boolean; } | "id" | "categoryId" | "layerType" | "name" | "url" | "orderIndex" | "isActive" | "isOnLoadVisible" | "isHasPopup" | "createdAt" | "updatedAt"[];
     }
    

  type ParamLogin =
     {
      'password': string;
      'userId': string;
     }
    

  type currentUser =
     {
      'id'?: string;
      'firstname'?: string;
      'lastname'?: string;
      'name'?: string;
      'userid'?: string;
      'address'?: string;
      'phone'?: string;
      'email': string;
      'role'?: string;
      'password': string;
     }
    

  type PingResponse =
     {
      'greeting'?: string;
      'date'?: string;
      'url'?: string;
      'headers'?: { Content-Type?: string; };
     }
    

  type countParams =
     {
      'where'?: any;
     }
    

  type findByIdParams =
     {
      'id': number;
      'filter'?: any;
     }
    

  type replaceByIdParams =
     {
      'id': number;
     }
    

  type deleteByIdParams =
     {
      'id': number;
     }
    

  type updateByIdParams =
     {
      'id': number;
     }
    

  type findParams =
     {
      'filter'?: any;
     }
    

  type updateAllParams =
     {
      'where'?: any;
     }
    

  type countParams =
     {
      'where'?: any;
     }
    

  type findByIdParams =
     {
      'id': number;
      'filter'?: any;
     }
    

  type replaceByIdParams =
     {
      'id': number;
     }
    

  type deleteByIdParams =
     {
      'id': number;
     }
    

  type updateByIdParams =
     {
      'id': number;
     }
    

  type findParams =
     {
      'filter'?: any;
     }
    

  type updateAllParams =
     {
      'where'?: any;
     }
    

  type countParams =
     {
      'where'?: any;
     }
    

  type findByIdParams =
     {
      'id': number;
      'filter'?: any;
     }
    

  type replaceByIdParams =
     {
      'id': number;
     }
    

  type deleteByIdParams =
     {
      'id': number;
     }
    

  type updateByIdParams =
     {
      'id': number;
     }
    

  type findParams =
     {
      'filter'?: any;
     }
    

  type updateAllParams =
     {
      'where'?: any;
     }
    

}