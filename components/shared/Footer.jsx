import { Image } from 'antd';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
const Footer = () => {
  // md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96
  return (
    <div className='flex flex-col items-center w-full '>
      <div className='flex flex-col w-full mb-20 px-[20px] md:px-[116px] lg:px-[212px] xl:px-[276px] 2xl:px-[404px]'>
        <Link
          href='/'
          className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          トップページ
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </Link>
        <Link
          href='/departure'
          className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          お申込からご出発まで
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </Link>
        <Link
          href='/faq'
          className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          よくあるご質問 (FAQ)
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </Link>
      </div>
      <div className='bg-defaultGray w-full px-5 md:px-[116px] lg:px-[212px] xl:px-[276px] 2xl:px-[404px] py-10'>
        <div className='grid grid-cols-2 w-full gap-20'>
          <div className='flex flex-col items-center w-full'>
            <h1 className='text-2xl font-semibold mb-5'>ご利用ガイド</h1>
            <p className='my-5'>よくあるご質問（FAQ）</p>
            <p className='my-5'>お申込からご出発まで</p>
            <p className='my-5'>旅行条件、旅行業約款等</p>
            <p className='my-5'>プライバシーポリシー</p>
            <p className='my-5'>会社概要</p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-semibold mb-5'>モンゴル情報</h1>
              <p className='my-5'>モンゴル　基本データ</p>
              <p className='my-5'>モンゴルのゲル</p>
              <p className='my-5'>モンゴル料理</p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-semibold mb-5'>
                モンゴルツアー一覧
              </h1>
              <p className='my-5'>乗馬 6日間</p>
              <p className='my-5'>遊牧民の生活 5日間</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end mt-10'>
          <div className='grid grid-cols-3 gap-5'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
