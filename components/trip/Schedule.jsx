import { BlueTitle } from '../shared/Title';

const defaultdata = [
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

const Schedule = ({ data = defaultdata }) => {
  return (
    <div className='mb-10'>
      <BlueTitle text='スケジュール' />
      {data.map((day, key) => (
        <div
          className='border-b border-t border-defaultGray flex flex-col items-center justify-between py-5 min-h-[300px]'
          key={`${day.title}+${key}`}>
          <div className='mb-5'>
            <span className='bg-defaultYellow px-5 py-2 rounded-lg text-xl font-semibold'>
              {key + 1}日目
            </span>
          </div>
          {day.title && (
            <div className='text-xl bg-defaultGray px-4 rounded-lg py-1 mb-5'>
              {day.title}
            </div>
          )}
          <div className='text-xl'>{day.text}</div>
          <div
            className={`w-full mt-5 ${
              day.img ? 'grid gap-2 grid-cols-2' : 'flex justify-center'
            }`}>
            <div className='flex items-center justify-end'>
              {day.img && <img src={`/img/svg/${day.img}`} className='h-36' />}
            </div>
            <div className='flex items-end'>
              {day.subTitle && (
                <span className='text-xl bg-defaultGray px-4 rounded-lg py-1'>
                  {day.subTitle}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
