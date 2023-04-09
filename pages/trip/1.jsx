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
    { date: '2023/4/28(金)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/3(水)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/12(金)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/17(水)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/26(金)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/5/31(水)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/9(金)', cost: '279,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/14(水)', cost: '279,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/23(金)', cost: '279,000¥', place: '東京', k1: '募集中' },
    { date: '2023/6/28(水)', cost: '279,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/7(金)', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/12(水)', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/21(金)', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/7/26(水)', cost: '299,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/4(金)', cost: '319,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/9(水)', cost: '319,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/18(金)', cost: '319,000¥', place: '東京', k1: '募集中' },
    { date: '2023/8/23(水)', cost: '319,000¥', place: '東京', k1: '募集中' },
    { date: '2023/9/1(金)', cost: '319,000¥', place: '東京', k1: '募集中' },
    { date: '2023/9/6(水)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/9/15(金)', cost: '259,000¥', place: '東京', k1: '募集中' },
    { date: '2023/9/20(水)', cost: '259,000¥', place: '東京', k1: '募集中' },
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
    img: 'trip2S1.svg',
  },
  {
    img: 'trip2S2.svg',
    title: null,
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>
          午前 :
          乗馬の講義で朝を始めます。日本のガイドやスタッフが、キャンプ周辺で乗馬の練習をしながら、丁寧に乗り方を教えてくれます。
        </p>
        <p>
          午後:参加者はレベルに応じてチームに分けられ、引き続き馬に乗ります。
        </p>
      </>
    ),
  },
  {
    img: 'trip2S3.svg',
    title: null,
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>
          終日:前日から続けると、レベルに応じてモンゴルの広大な地域で馬に乗ることになります。また、地元の家族から遊牧民のライフスタイルについて探索する機会もあります
        </p>
      </>
    ),
  },
  {
    img: 'trip2S4.svg',
    title: null,
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>
          朝食後、世界最大（高さ40m）の騎馬像であるジンギスカンの像コンプレックスに向かいます。像の複合施設を探索し、像の頂上からの素晴らしいパノラマビューをお楽しみください。その後、テレルジ国立公園に車で行き、カラフルで雄大な高山の景色を楽しむことができます。国立公園エリアは非常に印象的で、風光明媚な谷と丘の間に巨大な岩層があり、川や木々があります。旅行者は、さまざまな野生の花でいっぱいの牧草地をのんびりと散歩したり、魅力的な岩層、松に覆われた山々を鑑賞したり、樹木が茂った山々を散歩したりできます。
        </p>
      </>
    ),
  },
  {
    img: 'trip2S5.svg',
    title: null,
    subTitle: '食事/朝食・昼食・夕食    宿泊/ツーリストキャンプ ゲル泊',
    text: (
      <>
        <p>午前：朝食後、車でウランバートルへ戻ります。</p>
        <p>
          午後：ウランバートル市内ミニ観光。モンゴルの生活や歴史を学べるモンゴル国立博物館に入場し、ウランバートル中心部のスフバートル広場を歩いて見学します。その後、デパートに立ち寄ります。
        </p>
        <p>夕刻：民族音楽コンサート鑑賞。</p>
      </>
    ),
  },
  {
    title: null,
    subTitle: '食事/朝食・昼食（機内食）付               宿泊なし（帰国）',
    text: (
      <>
        <p>前：朝食後、車でウランバートルへ戻ります。</p>
        <p>
          午後：ウランバートル市内ミニ観光。モンゴルの生活や歴史を学べるモンゴル国立博物館に入場し、ウランバートル中心部のスフバートル広場を歩いて見学します。その後、デパートに立ち寄ります。
        </p>
      </>
    ),
  },
];

export default function Trip1() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='mt-2'>
        <YellowTitle text='乗馬6日間' />
        <img src='/img/svg/trip2Full.svg' className='w-full' />
        <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
          <Overview
            startDate='4月28日～9月25日'
            cost='259,000円- 319,000円'
            person='2-14'
            startPlace='東京'
          />
          <Outline text='馬は、動物の家畜化の時代から今日まで、モンゴルの文化とライフスタイルにおいて主要な役割を果たしてきました。現代の世界で420万頭以上の馬を飼っていることは、モンゴルで遊牧民のライフスタイルがまだどのように回転しているかを証明しています。したがって、モンゴルでの馬の旅はこの国を体験する良い機会です。現地での体力や習熟度に応じて当日のコースを選べる自由度の高い乗馬ツアーです。各トレーニングセッションは日本人ガイドと一緒なので、安心して馬に乗ることができます!' />
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
          <Something />
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
}
