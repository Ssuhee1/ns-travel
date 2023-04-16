import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';
import Footer from '@/components/shared/Footer';

const About = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='mt-2'>
        <YellowTitle text='会社案内' />
        <img src='/img/svg/company.svg' />
        <div className='md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 mb-20 mt-5'>
          <BlueTitle text='我々について' />
          <p>
            人々が集まると、経験を共有し、交流し、成長する機会が生まれます。私たちの使命は、そのビジョンを実現することです。
          </p>
          <p>
            モンゴルは間違いなく地球上で最もユニークでやりがいのある旅行先の1つです。
            私たちは、すべての旅行が環境を尊重し、国の貴重な自然と文化遺産を保護することを保証します。これまでのモンゴル旅行では提供しきれなかった美しく新しいモンゴルの－面、まったく新しい感動の－ページを、弊社を通じて日本の皆様にお届け致したいと願っております。
            一生に一度の冒険のためにモンゴルを発見し、私たちはあなたの信頼できるモンゴルの旅行ガイドになりましょう。
          </p>
          <p>
            料金、スケジュールなど、モンゴルについてご不明な点がございましたら、お問い合わせください。
          </p>
          <p>
            旅が一生の宝物となるよう、スタッフ一同、自信を持ってご旅行サービスをご提供いたします。ジンギスカン国際空港でお待ちしております。
          </p>
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};
export default About;
