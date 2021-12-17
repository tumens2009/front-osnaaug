import React, { useContext } from 'react';
import { Space, ConfigProvider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { IntlType } from '@/components/ant/provider/src';
import { useIntl } from '@/components/ant/provider/src';
import { omitBoolean } from '@/components/ant/utils/src';

export type ActionsProps = {
  submitter: React.ReactNode;
  /** 是否收起 */
  collapsed?: boolean;
  /** 收起按钮的事件 */
  onCollapse?: (collapsed: boolean) => void;

  setCollapsed: (collapse: boolean) => void;
  isForm?: boolean;
  style?: React.CSSProperties;
  /** 收起按钮的 render */
  collapseRender?:
    | ((
        collapsed: boolean,
        /** 是否应该展示，有两种情况 列只有三列，不需要收起 form 模式 不需要收起 */
        props: ActionsProps,
        intl: IntlType,
      ) => React.ReactNode)
    | false;
};

const defaultCollapseRender: ActionsProps['collapseRender'] = (collapsed, _, intl) => {
  if (collapsed) {
    return (
      <>
        {intl.getMessage('tableForm.collapsed', 'Unfold')}
        <DownOutlined
          style={{
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
          }}
        />
      </>
    );
  }
  return (
    <>
      {intl.getMessage('tableForm.expand', 'Put away')}
      <DownOutlined
        style={{
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
        }}
      />
    </>
  );
};

/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */
const Actions: React.FC<ActionsProps> = (props) => {
  const { setCollapsed, collapsed = false, submitter, style } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const intl = useIntl();

  const collapseRender = omitBoolean(props.collapseRender) || defaultCollapseRender;
  return (
    <Space style={style} size={16}>
      {submitter}
      {props.collapseRender !== false && (
        <a
          className={getPrefixCls('pro-form-collapse-button')}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapseRender?.(collapsed, props, intl)}
        </a>
      )}
    </Space>
  );
};

export default Actions;
