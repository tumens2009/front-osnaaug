import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import type { CardListItemDataType } from './data.d';
import { AmsBasemapsControllerFind } from '@/services/swagger/AmsBasemapsController';
import styles from './style.less';

const { Paragraph } = Typography;

const CardList = () => {
  const { data, loading } = useRequest(async () => {
    return {data: {list:  await AmsBasemapsControllerFind({ })}};
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
                    actions={[<a key="option1">Засах</a>, <a key="option2">Хасах</a>]}
                    cover={<img alt={item.title} src={item.cover} />}
                  >
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.baseTypeIdn}</a>}
                      description={
                        <Paragraph className={styles.item} ellipsis={{ rows: 3 }}> {item.description} </Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              );
            }
            return (
              <List.Item>
                <Button type="dashed" className={styles.newButton}>
                  <PlusOutlined /> New product
                </Button>
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};

export default CardList;
