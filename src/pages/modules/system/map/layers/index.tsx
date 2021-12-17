import React, { useState } from 'react';
import type { ProColumns } from '@/components/ant/table/src'; // '@ant-design/pro-table';
import { DragSortTable } from '@/components/ant/table/src'; // '@ant-design/pro-table';
import { message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useIntl} from "@@/plugin-locale/localeExports";

import { ModalForm } from '@/components/ant/form/src'; //'@/components/ant/form/src'; // 
import { ProFormText , ProFormTextArea } from '@/components/ant/form/src'; //'@/components/ant/form/src'; //
import { AmsMapLayersControllerFind } from '@/services/swagger/AmsMapLayersController';

import { Radio, Input } from 'antd';
import { useRequest } from 'umi';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

// const data = [
//   {
//     key: 'key1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     index: 0,
//   },
//   {
//     key: 'key2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     index: 1,
//   },
//   {
//     key: 'key3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     index: 2,
//   },
// ];

export default () => {
  const { data, loading } = useRequest(async () => {
    return {data: {list: await AmsMapLayersControllerFind({ })}};
  });
  
  const list = data?.list || [];
  const nullData = {};
  
  const columns: ProColumns[] = [
    {
      title:'Sort',
      dataIndex:'sort',
      render: (dom, rowData, index) => {
        return <span className="customRender">{`[${index} - ${rowData.name}]`}</span>;
      },
    },
    {
      title:'Name',
      dataIndex:'name',
      className:'drag-visible',
    },{
      title:'Category',
      dataIndex:'category_id',
    },{
      title:'URL',
      dataIndex:'url',
    },
  ];
  // const columns2: ProColumns[] = [
  //   {
  //     title:'Sort',
  //     dataIndex:'sort',
  //   },
  //   {
  //     title:'Name',
  //     dataIndex:'name',
  //     className:'drag-visible',
  //   },
  //   {
  //     title:'Age',
  //     dataIndex:'age',
  //   },
  //   {
  //     title:'Address',
  //     dataIndex:'address',
  //   },
  // ];

  const [dataSource1, setDatasource1] = useState(list);
  // const [dataSource2, setDatasource2] = useState(data);

  const handleDragSortEnd1 = (newDataSource: any) => {
    console.log(newDataSource);
    console.log('Sorted data', newDataSource);
    setDatasource1(newDataSource);
    message.success('The modified list is sorted successfully');
  };

  // const handleDragSortEnd2 = (newDataSource: any) => {
  //   console.log('Sorted data', newDataSource);
  //   setDatasource2(newDataSource);
  //   message.success('The modified list is sorted successfully');
  // };

  // const dragHandleRender = (rowData: any, idx: any) => (
  //   <>
  //     <MenuOutlined style={{ cursor: 'grab', color: 'gold' }} />
  //     &nbsp;{idx + 1} - {rowData.name}
  //   </>
  // );
  const intl = useIntl();
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  const extraContent = (
    <div>
      <RadioGroup defaultValue="all">
        <RadioButton value="all">All</RadioButton>
         <RadioButton value="progress">In progress</RadioButton>
         <RadioButton value="waiting">Waiting</RadioButton>
      </RadioGroup>
      <Search  placeholder="Please enter" onSearch={() => ({})} />
    </div>
  );
    
  return (
    <PageContainer extraContent={extraContent}>
      <DragSortTable
        headerTitle="Drag and drop sort (default handle)"
        columns={columns}
        rowKey="key"
        loading={loading}
        pagination={false}
        dataSource={[nullData, ...list] }
        dragSortKey="sort"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> {intl.formatMessage({ id: 'pages.lookups.list.add', defaultMessage: "New"})}
          </Button>,
        ]}
        onDragSortEnd={handleDragSortEnd1}
      />
      <ModalForm
        title="New rule"
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          // const success = await handleAdd(value as TableListItem);
          // if (success) {
          //   handleModalVisible(false);
          //   if (actionRef.current) {
          //     actionRef.current.reload();
          //   }
          //}
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: 'Rule name is required',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      {/* <DragSortTable
        headerTitle="Drag and drop sort (custom handle)"
        columns={columns2}
        rowKey="index"
        search={false}
        pagination={false}
        dataSource={dataSource2}
        dragSortKey="sort"
        dragSortHandlerRender={dragHandleRender}
        onDragSortEnd={handleDragSortEnd2}
      /> */}
    </PageContainer>
  );
};