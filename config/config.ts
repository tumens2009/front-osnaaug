// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'mn-MN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      icon: 'home',
      name: 'welcome',
      path: '/welcome',
      component: './welcome',
    },
    {
      name: 'monitor',
      icon: 'dashboard',
      path: '/monitor',
      component: './dashboard/monitor',
    },
    {
      name: 'analysis',
      icon: 'fund',
      path: '/analysis',
      component: './dashboard/analysis',
    },
    {
      icon: 'table',
      path: '/list',
      name: 'list',
      routes: [
        {
          path: '/list/search',
          name: 'search-list',
          component: './list/search',
          routes: [
            {
              path: '/list/search',
              redirect: '/list/search/articles',
            },
            {
              name: 'articles',
              icon: 'smile',
              path: '/list/search/articles',
              component: './list/search/articles',
            },
            {
              name: 'projects',
              icon: 'smile',
              path: '/list/search/projects',
              component: './list/search/projects',
            },
            {
              name: 'applications',
              icon: 'smile',
              path: '/list/search/applications',
              component: './list/search/applications',
            },
          ],
        },
        {
          path: '/list',
          redirect: '/list/table-list',
        },
        {
          name: 'table-list',
          icon: 'smile',
          path: '/list/table-list',
          component: './modules/base',
        },
        {
          name: 'basic-list',
          icon: 'smile',
          path: '/list/basic-list',
          component: './list/basic-list',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/list/card-list',
          component: './list/card-list',
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      icon: 'profile',
      routes: [
        {
          path: '/profile',
          redirect: '/profile/basic',
        },
        {
          name: 'basic',
          icon: 'smile',
          path: '/profile/basic',
          component: './profile/basic',
        },
        {
          name: 'advanced',
          icon: 'smile',
          path: '/profile/advanced',
          component: './profile/advanced',
        },
      ],
    },
    // {
    //   name: 'customers',
    //   icon: 'CheckCircleOutlined',
    //   path: '/customers',
    //   routes: [
    //     {
    //       path: '/result',
    //       redirect: '/customers/companies',
    //     },
    //     {
    //       name: 'companies',
    //       icon: 'smile',
    //       path: '/customers/companies',
    //       component: './modules/customers/companies',
    //     },
    //     {
    //       name: 'fail',
    //       icon: 'smile',
    //       path: '/result/fail',
    //       component: './result/fail',
    //     },
    //   ],
    // },
    {
      icon: 'question',
      path: '/classification',
      name: 'classification',
      routes: [
        {
          path: '/classification',
          redirect: '/classification/types',
        },
        {
          name: 'types',
          icon: 'smile',
          path: '/classification/types',
          component: './modules/classification/types',
        },
        {
          name: 'classes',
          icon: 'smile',
          path: '/classification/classes',
          component: './modules/classification/classes',
        }
      ],
    },
    {
      path: '/lut',
      icon: 'form',
      name: 'lut',
      routes: [
        {
          path: '/lut',
          redirect: '/lut/static',
        },
        {
          name: 'company',
          icon: 'smile',
          path: '/lut/company',
          redirect: '/lut/company',
        },
        {
          name: 'static',
          icon: 'smile',
          path: '/lut/static',
          component: './modules/lut/static',
        },
        {
          name: 'step-form',
          icon: 'smile',
          path: '/form/step-form',
          component: './form/step-form',
        },
        {
          name: 'advanced-form',
          icon: 'smile',
          path: '/form/advanced-form',
          component: './form/advanced-form',
        },
      ],
      
    },
    {
      name: 'sys',
      icon: 'warning',
      path: '/sys',
      routes: [
        {
          path: '/sys',
          redirect: '/sys/basemaps',
        },
        {
          name: 'basemaps',
          icon: 'smile',
          path: '/sys/basemaps',
          component: './modules/system/map/basemaps',
        },
        {
          name: 'layers',
          icon: 'smile',
          path: '/sys/layers',
          component: './modules/system/map/layers',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      name: 'account',
      icon: 'user',
      path: '/account',
      routes: [
        {
          path: '/account',
          redirect: '/account/center',
        },
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: './account/center',
        },
        {
          name: 'settings',
          icon: 'smile',
          path: '/account/settings',
          component: './account/settings',
        },
      ],
    },
    // {
    //   name: 'editor',
    //   icon: 'highlight',
    //   path: '/editor',
    //   routes: [
    //     {
    //       path: '/editor',
    //       redirect: '/editor/flow',
    //     },
    //     {
    //       name: 'flow',
    //       icon: 'smile',
    //       path: '/editor/flow',
    //       component: './editor/flow',
    //     },
    //     {
    //       name: 'mind',
    //       icon: 'smile',
    //       path: '/editor/mind',
    //       component: './editor/mind',
    //     },
    //     {
    //       name: 'koni',
    //       icon: 'smile',
    //       path: '/editor/koni',
    //       component: './editor/koni',
    //     },
    //   ],
    // },
    // {
    //   icon: 'home',
    //   name: 'home',
    //   path: '/home',
    //   component: './home',
    // },
    {
      icon: 'home',
      name: 'admin',
      path: '/admin',
      component: './admin',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // Or use the online version
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'http://127.0.0.1:3000/openapi.json',
      // schemaPath: 'http://49.0.170.181:3003/explorer/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
