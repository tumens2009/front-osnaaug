import { useIntl } from 'umi';
import { /*ReadOutlined,*/ ApiFilled } from '@ant-design/icons';
import { DefaultFooter } from '@/components/ant/layout/src';
export default
() => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: intl.formatMessage({ id: 'layout.user.link.privacy', defaultMessage: 'ОСНААУГ Веб', }),
          title: intl.formatMessage({ id: 'layout.user.link.privacy', defaultMessage: 'ОСНААУГ Веб', }),
          href: 'http://osnaaug.ub.gov.mn/',
          blankTarget: true,
        },
        {
          key: 'API Documentation',
          title: <ApiFilled />,
          href: '/~doc',
          blankTarget: true,
        },
        {
          key: intl.formatMessage({ id: 'layout.user.link.terms', defaultMessage: 'Help', }),
          title: intl.formatMessage({ id: 'layout.user.link.terms', defaultMessage: 'Help', }),
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
