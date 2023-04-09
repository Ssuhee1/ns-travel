import { Affix, Image, Space } from 'antd';
import { useEffect, useState } from 'react';
const StickyContact = () => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    setTop(window.innerHeight / 2 - 100);
  }, []);
  return (
    <>
      <Affix offsetTop={top} className='absolute top-64 left-5'>
        <Space direction='vertical' style={{ background: 'inherit' }}>
          <Image
            className='cursor-pointer'
            preview={false}
            src='/img/png/facebook.png'
            height={60}
          />
          <Image
            className='cursor-pointer'
            preview={false}
            src='/img/png/instagram.png'
            height={60}
          />
          <Image
            className='cursor-pointer'
            preview={false}
            src='/img/png/line.png'
            height={60}
          />
        </Space>
      </Affix>
    </>
  );
};
export default StickyContact;
