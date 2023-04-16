import { Affix, Image, Space } from 'antd';
import Link from 'next/link';
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
          <Link href='https://www.facebook.com/saran.tumen'>
            <Image
              className='cursor-pointer'
              preview={false}
              src='/img/png/facebook.png'
              height={60}
              width={60}
            />
          </Link>
          <Link href='https://www.instagram.com/saran_0119'>
            <Image
              className='cursor-pointer'
              preview={false}
              src='/img/png/instagram.png'
              height={60}
              width={60}
            />
          </Link>
          <Image
            className='cursor-pointer'
            preview={false}
            src='/img/png/line.png'
            height={60}
            width={60}
          />
        </Space>
      </Affix>
    </>
  );
};
export default StickyContact;
