import { Affix } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const StickyReserver = ({ id }) => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    setTop(window.innerHeight / 2 - 100);
  }, []);

  return (
    <>
      <Affix offsetTop={top} className='absolute top-64 right-5'>
        <Link
          href={`/reserve/${id}`}
          className='bg-defaultYellow rounded-2xl text-5xl px-10 py-20 text-center select-none hover:bg-yellow-200 hover:text-black cursor-pointer'
          style={{
            writingMode: 'vertical-lr',
            textOrientation: 'upright',
          }}>
          予約する
        </Link>
      </Affix>
    </>
  );
};
export default StickyReserver;
