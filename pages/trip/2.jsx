import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import Footer from '@/components/shared/Footer';
import { Image } from 'antd';
import { YellowTitle } from '@/components/shared/Title';
import Overview from '@/components/trip/Overview';
import Outline from '@/components/trip/Outline';
import Point from '@/components/trip/Point';
import Schedule from '@/components/trip/Schedule';
import TripTable from '@/components/trip/TripTable';
import Other from '@/components/trip/Other';
import Something from '@/components/trip/Something';

const tripTableData = {
  columns: [
    {
      key: 'date',
      title: '出発日',
      dataIndex: 'date',
    },
    {
      key: 'cost',
      title: '旅行代金',
      dataIndex: 'cost',
    },
    {
      key: 'place',
      title: '出発地',
      dataIndex: 'place',
    },
    {
      key: 'k1',
      title: '催行状況他',
      dataIndex: 'k1',
    },
  ],

  dataSource: [
    { date: '2023/4/2（月）', cost: '249,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/8 （月）', cost: '209,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/22（月）', cost: '239,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/5 （月）', cost: '249,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/19（月）', cost: '249,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/3（月）', cost: '269,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/17（月）', cost: '269,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/31（月）', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/14（月）', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/28（月）', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/9/11（月）', cost: '229,000¥', place: '東京', k1: '募集中' },
  ],
};
const scheduleData = [
  {
    title: '東京ウランバートル',
    text: (
      <>
        <p>
          午後:東京(成田)MIATモンゴル航空発、モンゴルの首都ウランバートルへ。
        </p>
        <p>今夜:到着後、日本のガイドと一緒にケンプまで車で行きます。</p>
      </>
    ),
    subTitle: '食事/朝食（機内食）・昼食・夕食付',
    img: 'trip1S1.svg',
  },
  {
    img: 'trip1S2.svg',
    title: null,
    subTitle: null,
    text: (
      <>
        <p>
          午前; 事前に決められた時間に、ツアー ガイドが宿泊先までお迎えにあが
          ります。そして、世界最大（高さ40m）の騎馬像であるジンギスカンの像コンプレックスに向かいます。像の複合施設を探索し、像の頂上からの素晴らしいパノラマビューをお楽しみください。
        </p>
        <p>
          その後、テレルジ国立公園に車で行き、カラフルで雄大な高山の景色を楽しむことができます。国立公園エリアは非常に印象的で、風光明媚な谷と丘の間に巨大な岩層があり、川や木々があります。旅行者は、さまざまな野生の花でいっぱいの牧草地をのんびりと散歩したり、魅力的な岩層、松に覆われた山々を鑑賞したり、樹木が茂った山々を散歩したりできます。
        </p>
        <p>夕方:キャンプまで車で行く</p>
      </>
    ),
  },
  {
    img: 'trip1S3.svg',
    title: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>
          -
          終日の乗馬、ハイキング、遊牧民の家族の訪問。そこでは、遊牧民が家畜とどのように暮らしているかを知るために、家族や日常の仕事について尋ねることができます。
        </p>
      </>
    ),
  },
  {
    img: 'trip1S4.svg',
    title: null,
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>午前：朝食後、車でウランバートルへ戻ります。</p>
        <p>
          午後：ウランバートル市内ミニ観光。モンゴルの生活や歴史を学べるモンゴル国立博物館に入場し、ウランバートル中心部のスフバートル広場を歩いて見学します。その後、デパートに立ち寄ります。
        </p>
      </>
    ),
  },
  {
    title: null,
    subTitle: '食事/朝食・昼食（機内食）付               宿泊なし（帰国）',
    text: (
      <>
        <p>ウランバートル東京</p>
        <p>早朝：車で空港へ。</p>
        <p>
          午前：MIATモンゴル航空（またはアエロモンゴリア航空）にて帰国の途へ。
        </p>
        <p>午後：東京（成田）着。</p>
      </>
    ),
  },
];

export default function Trip1() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='mt-2'>
        <YellowTitle text='遊牧民の生活 5日間' />
        <img src='/img/svg/trip1Full.svg' className='w-full' />
        <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
          <Overview
            startDate='4月24日～9月15日'
            cost='209,000円- 299,000円'
            person='2-14'
            startPlace='東京'
          />
          <Outline text='この旅を通して、モンゴルの多様な雄大な風景、文化、歴史、遊牧民の生活、そして多様な野生生物を体験する機会があります。美しい景色で有名な「テレルジ国立公園」に立ち寄ります。 そして、象徴的なジンギスカン像の複合体を観光し、より遊牧民の生活を探索するために地元の人々に会いましょう。' />
          <Point>
            <li>
              1.乗馬初めての方・初級の方は、遊牧民・日本語乗馬ガイドによる馬の乗り方、降り方、基本操作などの説明（レクチャー）から始まります。
            </li>
            <li>徐々に並足で馬と草原に慣れていきましょう。</li>
            <li>
              2.ガイドによる乗馬中の写真撮影サービスなども行なっています。
            </li>
            <li>
              3.
              特別なモンゴル馬用の鞍をご用意！サポーター（チャップス）、ヘルメットを無料で貸し出しています！
            </li>
            <li>
              4.より快適な乗馬のために上達レベルによるグループ分けがあります。
            </li>
            <li>
              5.乗馬の上達レベルによって乗馬スタッフ（遊牧民）が判断し、それぞれにあわせたコースやスケジュールで乗馬ライディングを進めていきます。
            </li>
            <li>
              6.３６０度見渡す限りの大草原。乗馬コースは変化に富んでいます。
            </li>
            <li>
              7.乗馬ライディングの際に、遊牧民のゲル（家庭）を訪問します。（日程中記載）
            </li>
            <li>
              8. 天候がよければ、星が降るような満天の星空を見ることができます。
            </li>
          </Point>
          <Schedule data={scheduleData} />
          <TripTable data={tripTableData} />
          <Other />
          <Something trip={2} />
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
}
