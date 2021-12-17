import { Card } from 'antd';
import type { FC } from 'react';

import Map from './components/Map';
import ListView from './components/ListView';



import styles from './style.less';


const Monitor: FC = () => {
  return (
    <div className={styles.dvContainer} style={{ width: '100%', height: '100%'}} >
        <Map/>
        <div>
          <Card title="DataList" className={styles.mapChart}   style={{ width: '100%', height: '100%' }} bodyStyle={{ textAlign: 'center' }}> 
            <ListView />
          </Card> 
        </div>
    </div>
  );
};

export default Monitor;
