import { Table } from 'antd';
import { BlueTitle } from '../shared/Title';

const TripTable = ({ data }) => {
  const { columns, dataSource } = data;
  return (
    <div>
      <BlueTitle text='出発日・旅行代金' />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <div className='flex flex-col gap-1 mb-2'>
        <span className='bg-defaultYellow w-fit px-2 py-1 rounded-lg'>
          旅行代金に含まれているもの
        </span>
        <p>旅行日程に記載した食事料金・サービス料金</p>
        <p>旅行日程に記載した宿泊料金・サービス料金</p>
        <p>旅行日程に記載した観光料金（ガイド料金・入場料金）</p>
      </div>
      <div className='flex flex-col gap-1 mb-2'>
        <span className='bg-defaultYellow w-fit px-2 py-1 rounded-lg'>
          旅行代金に含まれないもの
        </span>
        <p>往復国際航空券又は国際列車代</p>
        <p>オプショナルツアー代金</p>
        <p>海外旅行保険</p>
        <p>個人的なお土産</p>
        <p>ビール、酒などアルコール飲種など</p>
      </div>
      <div className='flex flex-col gap-1 mb-2'>
        <span className='bg-defaultYellow w-fit px-2 py-1 rounded-lg'>
          キャンセル料について
        </span>
        <p>
          参加日の10営業日前の現地時間18:00から8営業日前の現地時間18:00まで、予約総額の20%
        </p>
        <p>
          参加日の7営業日前の現地時間18:00から5営業日前の現地時間18:00まで、予約総額の30%
        </p>
        <p>
          参加日の4営業日前の現地時間18:00から2営業日前の現地時間18:00まで、予約総額の40%
        </p>
        <p>参加日の2営業日前の現地時間18:00から1営業日前まで、予約総額の50%</p>
        <p>参加日時、予約総額の100%</p>
      </div>
    </div>
  );
};

export default TripTable;
