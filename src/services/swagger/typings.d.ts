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
    

  type getAmsBasemaps =
     {
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type amsBasemapsPartial =
     {
      'id'?: number;
      'baseTypeId'?: number;
      'description'?: string;
      'url'?: string;
     }
    

  type amsBasemapId =
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
    

  type AmsCustomer =
     {
      'id': string;
      'apartmentId'?: string;
      'oldNumber'?: string;
      'number'?: string;
      'activeFlg'?: number;
      'deleteFlg'?: string;
      'createUser'?: string;
      'createDate'?: string;
      'updateUser'?: string;
      'updateDate'?: string;
      'numberType'?: string;
      'division'?: string;
      'direction'?: string;
      'phone'?: number;
      'smsPhone'?: number;
      'ccode'?: string;
      'noat'?: boolean;
      'branchId'?: string;
      'phone1'?: string;
      'discount'?: boolean;
      'accountNumber'?: string;
      'userFlg'?: boolean;
     }
    

  type NewAmsCustomer =
     {
      'apartmentId'?: string;
      'oldNumber'?: string;
      'number'?: string;
      'activeFlg'?: number;
      'deleteFlg'?: string;
      'createUser'?: string;
      'createDate'?: string;
      'updateUser'?: string;
      'updateDate'?: string;
      'numberType'?: string;
      'division'?: string;
      'direction'?: string;
      'phone'?: number;
      'smsPhone'?: number;
      'ccode'?: string;
      'noat'?: boolean;
      'branchId'?: string;
      'phone1'?: string;
      'discount'?: boolean;
      'accountNumber'?: string;
      'userFlg'?: boolean;
     }
    

  type getCustomers =
     {
      'id': string;
      'apartmentId'?: string;
      'oldNumber'?: string;
      'number'?: string;
      'activeFlg'?: number;
      'deleteFlg'?: string;
      'phone'?: number;
      'ccode'?: string;
      'accountNumber'?: string;
     }
    

  type AmsCustomerPartial =
     {
      'id'?: string;
      'apartmentId'?: string;
      'oldNumber'?: string;
      'number'?: string;
      'activeFlg'?: number;
      'deleteFlg'?: string;
      'createUser'?: string;
      'createDate'?: string;
      'updateUser'?: string;
      'updateDate'?: string;
      'numberType'?: string;
      'division'?: string;
      'direction'?: string;
      'phone'?: number;
      'smsPhone'?: number;
      'ccode'?: string;
      'noat'?: boolean;
      'branchId'?: string;
      'phone1'?: string;
      'discount'?: boolean;
      'accountNumber'?: string;
      'userFlg'?: boolean;
     }
    

  type AmsCustomerWithRelations =
     {
      'id': string;
      'apartmentId'?: string;
      'oldNumber'?: string;
      'number'?: string;
      'activeFlg'?: number;
      'deleteFlg'?: string;
      'createUser'?: string;
      'createDate'?: string;
      'updateUser'?: string;
      'updateDate'?: string;
      'numberType'?: string;
      'division'?: string;
      'direction'?: string;
      'phone'?: number;
      'smsPhone'?: number;
      'ccode'?: string;
      'noat'?: boolean;
      'branchId'?: string;
      'phone1'?: string;
      'discount'?: boolean;
      'accountNumber'?: string;
      'userFlg'?: boolean;
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
    

  type amsMapLayers =
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
      /** AmsCustomer.Fields */
      'fields'?: { id?: boolean; apartmentId?: boolean; oldNumber?: boolean; number?: boolean; activeFlg?: boolean; deleteFlg?: boolean; createUser?: boolean; createDate?: boolean; updateUser?: boolean; updateDate?: boolean; numberType?: boolean; division?: boolean; direction?: boolean; phone?: boolean; smsPhone?: boolean; ccode?: boolean; noat?: boolean; branchId?: boolean; phone1?: boolean; discount?: boolean; accountNumber?: boolean; userFlg?: boolean; } | "id" | "apartmentId" | "oldNumber" | "number" | "activeFlg" | "deleteFlg" | "createUser" | "createDate" | "updateUser" | "updateDate" | "numberType" | "division" | "direction" | "phone" | "smsPhone" | "ccode" | "noat" | "branchId" | "phone1" | "discount" | "accountNumber" | "userFlg"[];
     }
    

  type Filter1 =
     {
      'offset'?: number;
      'limit'?: number;
      'skip'?: number;
      'order'?: string | string[];
      /** AmsCustomer.WhereFilter */
      'where'?: Record<string, any>;
      /** AmsCustomer.Fields */
      'fields'?: { id?: boolean; apartmentId?: boolean; oldNumber?: boolean; number?: boolean; activeFlg?: boolean; deleteFlg?: boolean; createUser?: boolean; createDate?: boolean; updateUser?: boolean; updateDate?: boolean; numberType?: boolean; division?: boolean; direction?: boolean; phone?: boolean; smsPhone?: boolean; ccode?: boolean; noat?: boolean; branchId?: boolean; phone1?: boolean; discount?: boolean; accountNumber?: boolean; userFlg?: boolean; } | "id" | "apartmentId" | "oldNumber" | "number" | "activeFlg" | "deleteFlg" | "createUser" | "createDate" | "updateUser" | "updateDate" | "numberType" | "division" | "direction" | "phone" | "smsPhone" | "ccode" | "noat" | "branchId" | "phone1" | "discount" | "accountNumber" | "userFlg"[];
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
      'id': string;
      'filter'?: any;
     }
    

  type replaceByIdParams =
     {
      'id': string;
     }
    

  type deleteByIdParams =
     {
      'id': string;
     }
    

  type updateByIdParams =
     {
      'id': string;
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