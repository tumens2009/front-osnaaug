import React from 'react';
import ProCard from '@ant-design/pro-card';

export default () => {
  return (
    <>
      <ProCard style={{ marginTop: 8 }} gutter={[16, 16]} wrap title="换行">
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
      </ProCard>
    </>
  );
};
