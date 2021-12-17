import type { Settings as LayoutSettings } from '@/components/ant/layout/src';
import { PageLoading } from '@/components/ant/layout/src';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import type { RequestOptionsInit } from 'umi-request';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
//import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { AuthControllerCurrentUser as queryCurrentUser } from './services/swagger/AuthController';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@@/plugin-locale/localeExports';
// https://developers.arcgis.com/javascript/latest/typescript-setup/
// npm run openapi

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** When obtaining user information is slow, one will be displayed loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

// export const request3: RequestConfig = {
//   // prefix:'http://49.0.170.181:3003',
//   prefix:'http://127.0.0.1:3000',
//   //credentials:'include', // Does the default request bring cookies
//   errorHandler, // default error handling
//   credentials:'same-origin', // Whether the default request carries cookies
// };
// request.interceptors.request.use(authHeaderInterceptor);

const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const authHeader = { Authorization: 'Bearer ' + localStorage.getItem("ACCESS_TOKEN") };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

const errorHandler = (param: any) => {
  console.log("default error handling> ", param);
}

export const request: RequestConfig = {
  errorHandler,
  prefix:'http://127.0.0.1:3000',
  requestInterceptors: [authHeaderInterceptor],
};





/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {

  

  const fetchUserInfo = async () => {    
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // If it is a login page, do not execute
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    console.log("currentUser: ", currentUser );
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  console.log("istory.location.pathname: ", fetchUserInfo );

  return {
    fetchUserInfo,
    settings: {},
  };
}

console.log("RunTimeLayoutConfig" );

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>
              <FormattedMessage id="layout.user.link.help" defaultMessage="Help" />
            </span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
