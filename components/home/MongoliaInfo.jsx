import { BlueTitle } from '../shared/Title';

const MongoliaInfo = () => {
  return (
    <div className='mt-10 '>
      <BlueTitle text='モンゴル 基本データ' />
      <div className='z-100'>
        <ul>
          <li className='relative'>
            正式名称 モンゴル国 Монгол Улс（モンゴル・オルス） Mongol Uls 国旗
            <img
              src='/img/svg/mongoliaFlag.svg'
              className='hidden absolute lg:flex top-0 h-20 right-0 z-50'
            />
          </li>
          <li>首 都 ウランバートル Ulaanbaatar</li>
          <li>人 口 3,200,000人 (2019年) ※日本の約40分の1</li>
          <li>面 積 156万4100km2 ※日本の約4倍</li>
          <li>言 語 モンゴル語 バヤンウルギーではカザフ語も</li>
          <li>民 族 モンゴル民族が多数 その他、カザフ民族、トゥバ民族等</li>
          <li>
            宗 教 チベット仏教
            バヤンウルギーなどカザフ系民族はイスラム教やシャーマニズムを信仰する者も多い
          </li>
          <li>通 貨 トゥグリグ TgまたはMNTと表記される</li>
          <li>
            両 替
            空港やウランバートル市内の銀行や両替所では日本円からトゥグルグへの両替が可能
          </li>
          <li>ビ ザ 観光目的で30日以内の滞在ならビザ(査証)は不要です。</li>
          <li>
            残 存 モンゴル入国時に残存期間が6ヶ月以上残っている旅券が必要です。
          </li>
          <li>
            時 差 日本-1時間 サマータイム中は時差なし /
            西部はウランバートル-1時間
          </li>
          <li>電 圧 220V / 50Hz プラグはA型とC型が混在</li>
          <li>
            通 信
            空港・市内などでSIMカードを入手可能。ホテル、レストランではWi-Fiが利用できる事がほとんど。草原では国際ローミング可能な電話での通話は可能だが、インターネット接続はほぼ出来ない。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MongoliaInfo;
