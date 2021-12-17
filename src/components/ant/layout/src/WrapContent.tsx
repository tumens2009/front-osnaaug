import type { CSSProperties } from 'react';
import React from 'react';
import { Layout } from 'antd';
import { ConfigProviderWrap } from '@/components/ant/provider/src';
import { ErrorBoundary } from '@/components/ant/utils/src';

const WrapContent: React.FC<{
  isChildrenLayout?: boolean;
  className?: string;
  style?: CSSProperties;
  location?: any;
  contentHeight?: number | string;
  ErrorBoundary?: any;
}> = (props) => {
  const { style, className, children } = props;
  const ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return (
    <ConfigProviderWrap autoClearCache>
      <ErrorComponent>
        <Layout.Content className={className} style={style}>
          {children}
        </Layout.Content>
      </ErrorComponent>
    </ConfigProviderWrap>
  );
};

export default WrapContent;
