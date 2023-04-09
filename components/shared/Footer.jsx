import { Image } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full '>
      <div className='flex flex-col w-full mb-20 px-[20px] md:px-[100px] lg:px-[180px] '>
        <button className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          トップページ
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </button>
        <button className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          お申込からご出発まで
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </button>
        <button className='bg-defaultYellow py-2 rounded-xl border-2 border-yellow-300 hover:bg-yellow-200 flex justify-center items-center'>
          よくあるご質問 (FAQ)
          <IoIosArrowDown className='ml-2 -rotate-90' />
        </button>
      </div>
      <div className='bg-defaultGray w-full px-5 md:px-[100px] lg:px-[180px] py-10'>
        <div className='grid grid-cols-2 w-full gap-20'>
          <div className='flex flex-col items-center w-full'>
            <h1 className='text-2xl font-semibold mb-5'>ご利用ガイド</h1>
            <p>よくあるご質問（FAQ）</p>
            <p>お申込からご出発まで</p>
            <p>旅行条件、旅行業約款等</p>
            <p>プライバシーポリシー</p>
            <p>会社概要</p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-semibold mb-5'>モンゴル情報</h1>
              <p>モンゴル　基本データ</p>
              <p>モンゴルのゲル</p>
              <p>モンゴル料理</p>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-semibold mb-5'>
                モンゴルツアー一覧
              </h1>
              <p>乗馬 6日間</p>
              <p>遊牧民の生活 5日間</p>
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
