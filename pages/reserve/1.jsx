import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { tripTableData } from '../trip/1';
import { Button, Table } from 'antd';
import { useRouter } from 'next/router';

const Reserve1 = () => {
  const router = useRouter();
  const { columns: defaultColumns, dataSource: defaultDataSource } =
    tripTableData;

  const onClick = (id) => {
    router.push(`/book?trip=1&option=${id}`);
  };

  const newDataSource = defaultDataSource.map((rowData, idx) => {
    const additionalRow = {
      row: {
        id: idx,
      },
    };
    return { ...rowData, ...additionalRow };
  });

  const newColumns = [
    ...defaultColumns.map((e) => {
      if (e.key === 'k1') {
        return {
          ...e,
          render: (k1) => (
            <span className='bg-defaultBlue p-2 round-lg'>{k1}</span>
          ),
        };
      } else {
        return e;
      }
    }),
    {
      key: 'row',
      title: '予約',
      dataIndex: 'row',
      render: (row) => (
        <Button className='bg-defaultYellow' onClick={() => onClick(row.id)}>
          仮予約する
        </Button>
      ),
    },
  ];

  return (
    <div className='relative'>
      <Navbar />
      <div className='md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 mb-20 mt-5'>
        <Table
          columns={newColumns}
          dataSource={newDataSource}
          pagination={false}
        />
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Reserve1;
