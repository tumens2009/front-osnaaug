import component from './mn-MN/component';
import globalHeader from './mn-MN/globalHeader';
import menu from './mn-MN/menu';
import pages from './mn-MN/pages';
import pwa from './mn-MN/pwa';
import settingDrawer from './mn-MN/settingDrawer';
import settings from './mn-MN/settings';

export default {
  'navBar.lang': 'Хэл',
  'layout.user.link.help': 'Тусламж',
  'layout.user.link.privacy': 'Нууцлал',
  'layout.user.link.terms': 'Нөхцөл',
  'app.copyright.produced': 'Орон сууц, нийтийн аж ахуйн удирдах газар',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
