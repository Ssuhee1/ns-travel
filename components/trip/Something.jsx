import { Card, Image, Space } from 'antd';
import { BlueTitle } from '../shared/Title';
import { useRouter } from 'next/router';
const { Meta } = Card;
const Something = ({ trip = 1 }) => {
  const router = useRouter();
  return (
    <div>
      <BlueTitle text='類似ツアー' />
      <div className='flex justify-center'>
        <div className='w-80'>
          <Card
            onClick={() => router.push(`/trip/${trip === 1 ? 2 : 1}`)}
            hoverable
            style={{ width: '100%' }}
            cover={
              <Image
                alt={`trip${trip}`}
                src={`/img/svg/trip${trip}.svg`}
                height={'auto'}
                preview={false}
              />
            }>
            {trip === 1 ? (
              <Meta
                title=' 遊牧民の生活 (5日間)'
                description={
                  <Space direction='vertical' size='small'>
                    <p>出発日 4月24日～9月15日</p>
                    <p>旅行代金 209,000円- 299,000円</p>
                  </Space>
                }
              />
            ) : (
              <Meta
                title='乗馬 (6日間)'
                description={
                  <Space direction='vertical' size='small'>
                    <p>出発日 4月28日～9月25日</p>
                    <p>旅行代金 259,000円- 319,000円</p>
                  </Space>
                }
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Something;
