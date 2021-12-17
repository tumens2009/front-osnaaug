import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import { queryFakeList } from './service';
import type { CardListItemDataType } from './data.d';
import styles from './style.less';
import type { ProFormColumnsType } from '@/components/ant/form/src'; // '@ant-design/pro-form';
import { BetaSchemaForm } from '@/components/ant/form/src'; //'@ant-design/pro-form';

const { Paragraph } = Typography;

const valueEnum = {
  all: {text:'all', status:'Default' },
   open: {
     text:'Unresolved',
     status:'Error',
   },
   closed: {
     text:'Resolved',
     status:'Success',
     disabled: true,
   },
   processing: {
     text:'Solved',
     status:'Processing',
   },
};

type DataItem = {
  name: string;
  state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title:'Title',
    dataIndex:'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message:'This item is required',
        },
      ],
    },
    width:'m',
  },
  {
    title:'Status',
    dataIndex:'state',
    valueType:'select',
    valueEnum,
    width:'m',
  },
  {
    title:'label',
    dataIndex:'labels',
    width:'m',
  },
  {
    title:'Created time',
    key:'showTime',
    dataIndex:'createName',
    valueType:'date',
  },
  {
    valueType: 'divider',
  },
  {
    title:'Group',
    valueType:'group',
    columns: [
      {
        title:'Status',
        dataIndex:'groupState',
        valueType:'select',
        width:'xs',
        valueEnum,
      },
      {
        title:'Title',
        width:'md',
        dataIndex:'groupTitle',
        formItemProps: {
          rules: [
            {
              required: true,
              message:'This item is required',
            },
          ],
        },
      },
    ],
  },
  {
    title:'List',
    valueType:'formList',
    dataIndex:'list',
    initialValue: [{ state:'all', title:'title' }],
    columns: [
      {
        valueType:'group',
        columns: [
          {
            title:'Status',
            dataIndex:'state',
            valueType:'select',
            width:'xs',
            valueEnum,
          },
          {
            title:'Title',
            dataIndex:'title',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message:'This item is required',
                },
              ],
            },
            width:'m',
          },
        ],
      },
    ],
  },
  {
    title:'FormSet',
    valueType:'formSet',
    dataIndex:'formSet',
    columns: [
      {
        title:'Status',
        dataIndex:'groupState',
        valueType:'select',
        width:'xs',
        valueEnum,
      },
      {
        title:'Title',
        dataIndex:'groupTitle',
        tip:'The title will automatically shrink if it is too long',
        formItemProps: {
          rules: [
            {
              required: true,
              message:'This item is required',
            },
          ],
        },
        width:'m',
      },
    ],
  },
  {
    title: 'Creation time',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    transform: (value) => {
      return {
        startTime: value[0],
        endTime: value[1],
      };
    },
  },
];

const CardList = () => {
  const { data, loading } = useRequest(() => {
    return queryFakeList({
      count: 8,
    });
  });

  const list = data?.list || [];

  const nullData: Partial<CardListItemDataType> = {};
  return (
    <PageContainer>
      <div className={styles.cardList}>
        <List<Partial<CardListItemDataType>>
          rowKey="id"
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[nullData, ...list]}
          renderItem={(item) => {
            if (item && item.id) {
              return (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[
                      <BetaSchemaForm<DataItem>
                        trigger={
                          <a key="Option1">Засах</a>
                          }
                        layoutType={'ModalForm'}
                        onFinish={async (values) => {
                          console.log(values);
                        }}
                        columns={columns}
                      />,
                      <a key="Option2">Хасах</a>
                    ]}
                  >
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}>
                          {item.description}
                        </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
                <BetaSchemaForm<DataItem>
                  trigger={
                    <Button type="dashed" className={styles.newButton}>
                      <PlusOutlined /> New product
                    </Button>
                    }
                  layoutType={'ModalForm'}
                  onFinish={async (values) => {
                    console.log(values);
                  }}
                  columns={columns}
                />
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};

export default CardList;
