import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';

const Food = () => {
  return (
    <div className='relative'>
      <Navbar />
      <img src='/img/svg/food.svg' className='w-full' />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
        <div className='mb-10'>
          <BlueTitle text='モンゴルのゲル' />
          <p>
            モンゴルの食事は、基本的にシンプルです。調理方法や味付けのバラエティーが少なく、ほとんどの料理は煮ることが基本となっています。揚げ物もありますが、やはり少ないです。
          </p>
          <p>
            味付けは基本的に塩のみで、お肉もちょっと肉臭さがあり、食べ慣れるまで苦労しました。羊肉を使うことが多く、中国料理と似たモンゴル風餃子や火鍋などもありました。
          </p>
          <p>
            モンゴルの伝統的な食べ物は、白い食べ物と赤い食べ物の2つに分けられており、白い食べ物は家畜の乳から作られた乳製品、赤い食べ物はお肉のことを指します。
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='ボーズ' />
          <img src='/img/svg/foodpage1.svg' className='w-full mb-5' />
          <p>
            小麦粉に水を加えてこね生地を作り、その中にひき肉を餡として入れて包んだ、モンゴル風蒸し餃子。モンゴルの旧正月など、お祝いや特別な行事の際は欠かせない料理です。
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='ホーショル' />
          <img src='/img/svg/foodpage2.svg' className='w-full mb-5' />
          <p>
            「ホーショル」は小麦粉を練って作った皮に挽肉と野菜を大判位の大きさに包み油で揚げた料理です。別名、「揚げ餃子」です。ちなみに「ポーズ」と「ホーショル」は材料は同じで形状と調理方法が異なります。材料は肉は牛と豚の合挽肉、野菜は玉葱、キャベツをみじん切りにした野菜、形状は「ポーズ」が肉まんの形、「ホーショル」は木の葉の形をしたひらべったい形です{' '}
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='ツォイバン' />
          <img src='/img/svg/foodpage3.svg' className='w-full mb-5' />
          <p>
            牛肉と野菜を炒め、麺とともに蒸す料理です。味は皿うどんに似ており、日本人でも食べやすいのでオススメ。
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='バンシタイツァイ' />
          <img src='/img/svg/foodpage4.svg' className='w-full mb-5' />
          <p>
            モンゴルでは、ミルクティーはお茶としてだけでなく、汁物としてもいただくそう。このバンシタイツァイは、ミルクティーの中に小さめの餃子を入れ、岩塩のみで味付けする家庭料理です。
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='ホルホッグ' />
          <img src='/img/svg/foodpage5.svg' className='w-full mb-5' />
          <p>
            羊やヤギなどをさばいた肉を、ミルク缶などの大型容器に焼け石と共に入れて調理する石焼焼肉です。祝いの時に作る料理です。「ホルホグ」は羊１頭を丸ごと解体し、これに野菜を一緒に、焼いた石と共に牛乳缶に詰め、きちんと蓋を閉めた後、外から強火で焼き、蒸し煮します。これはモンゴルで一番の料理です。{' '}
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='バンタン' />
          <img src='/img/svg/foodpage6.svg' className='w-full mb-5' />
          <p>
            「モンゴル風クリームスープ」モンゴルでは小麦粉を使った料理が多い。練ってうどん状にしたり、肉を包む皮をつくったりするほか、バンタンのように、スープに小麦粉を入れたりもする。
          </p>
          <p>
            これは本当にうまい。羊の肉のほか、玉ねぎ、にんじんなどの具が入っている。羊肉は脂身が少なくて、噛みごたえがある。固いという意味ではない。本当に、肉だなあという感触だ。肉がたっぷり入っているのはモンゴルならではだろう
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='ゴリルタイシュールモンゴルうどん' />
          <img src='/img/svg/foodpage7.svg' className='w-full mb-5' />
          <p>
            (グリルタイショル) =
            小麦粉から作った自家製麺を使った肉うどん。いわゆるマトン入りうどんです。遊牧民の主食、ゴリルタイシュール。日本の「肉うどん」のようなものです。小麦粉で作ったうどん状の麺に肉や野菜を加えたスープです。味付けは塩のみ。
          </p>
        </div>
        <div className='mb-10'>
          <YellowTitle text='アイラグ（馬乳酒）' />
          <img src='/img/svg/foodpage8.svg' className='w-full mb-5' />
          <p>
            代表的な乳製品です。モンゴルには数十種類の乳製品があります。乳製品は「白い食べ物」と呼ばれ、夏に生産されることが多い。アロールは硬いチーズのようなものです。さまざまな家畜の乳から作られ、さまざまな味と形があります。アイラグは馬乳を何千回もかき混ぜて作られています。アルコールなのにアルコール度数は低め。夏だけ作られますが、大切に保管され、旧正月などのお祝い事に供されます。
          </p>
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Food;
