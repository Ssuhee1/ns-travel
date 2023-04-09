import { BlueTitle } from '../shared/Title';
import { Image } from 'antd';
import { YellowButton } from '../shared/Button';
const Blog = () => {
  return (
    <div className='mt-10'>
      <BlueTitle text='ブログ' />
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-2xl font-semibold mb-5'>モンゴルのゲル</h1>
        <div className='w-full grid grid-cols-3 gap-10 mb-5'>
          <Image preview={false} src='img/svg/ger1.svg' />
          <Image preview={false} src='img/svg/ger2.svg' />
          <Image preview={false} src='img/svg/ger3.svg' />
        </div>
        <YellowButton label='もっと見る' onClick={() => console.log('ger')} />
      </div>
      <div className='w-full flex flex-col items-center mt-6'>
        <h1 className='text-2xl font-semibold mb-5'>モンゴル料理</h1>
        <div className='w-full grid grid-cols-3 gap-10 mb-5'>
          <Image preview={false} src='img/svg/food1.svg' />
          <Image preview={false} src='img/svg/food2.svg' />
          <Image preview={false} src='img/svg/food3.svg' />
        </div>
        <YellowButton label='もっと見る' onClick={() => console.log('food')} />
      </div>
    </div>
  );
};

export default Blog;
