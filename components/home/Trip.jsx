import { Card, Image, Space } from 'antd';
import { YellowTitle } from '../shared/Title';
const { Meta } = Card;
const Trip = () => {
  return (
    <div className='mt-10'>
      <YellowTitle text='モンゴルツアー一覧' />
      <div className='grid grid-cols-2 gap-10'>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={
            <Image
              alt='trip1'
              src='img/svg/trip1.svg'
              height={'auto'}
              preview={false}
            />
          }>
          <Meta
            title='乗馬 (6日間)'
            description={
              <Space direction='vertical' size='small'>
                <p>出発日 4月28日～9月25日</p>
                <p>旅行代金 259,000円- 319,000円</p>
              </Space>
            }
          />
        </Card>
        <Card
          hoverable
          style={{ width: '100%' }}
          cover={
            <Image
              alt='trip2'
              src='img/svg/trip2.svg'
              height={'auto'}
              preview={false}
            />
          }>
          <Meta
            title=' 遊牧民の生活 (5日間)'
            description={
              <Space direction='vertical' size='small'>
                <p>出発日 4月24日～9月15日</p>
                <p>旅行代金 209,000円- 299,000円</p>
              </Space>
            }
          />
        </Card>
      </div>
    </div>
  );
};

export default Trip;
