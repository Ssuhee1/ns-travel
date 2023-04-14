import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';

const Policy = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
        <BlueTitle text='プライバシーポリシー' />
        <p>個人情報保護への取り組み</p>
        <YellowTitle text='1.個人情報の収集・利用について' />
        <p>
          NSトラベル株式会社(以下「当社」といいます。）および受託旅行業社は、旅行申し込みの際に提出された、申込書に記載された個人情報について、お客様との間のご連絡のために利用させていただくほか、お客様がお申込みいただいた旅行において運送・宿泊機関等（主要な運送・宿泊機関等についてはスケジュール表及び確定書面に記載されています。）の提供するサービスの手配およびそれらのサービスを受領するための手続き（以下「手配等」といいます。）に必要な範囲内、又は当社の旅行契約上の責任、事故時の費用等を担保する保険の手続き上必要な範囲内で、利用させていただきます。
        </p>
        <div className='w-full flex flex-col items-center my-5'>
          <p className='w-full'>この他、当社および受託旅行業者では、</p>
          <ul className='list-disc w-[90%]'>
            <li>
              会社および会社と提携する企業の商品サービス、キャンペーンのご案内
            </li>
            <li>旅行参加後のご意見やご感想の提供のお願い</li>
            <li>アンケートのお願い</li>
            <li>特典・サービスの提供</li>
            <li>統計資料の作成</li>
            <li>
              将来、よりよい旅行商品を開発するための市場調査やマーケティング、新製品やサービスの開発・研究のため
            </li>
            <li>お客様に事前にご同意いただいた目的</li>
          </ul>
          <p>
            にお客様の個人情報を利用させていただくことがあります。お客様の同意なく、上記利用目的の範囲外で個人情報を利用することはありません。
          </p>
        </div>
        <YellowTitle text='2.個人情報の第三者への提供について' />
        <p>
          当社は、以下の場合を除き、お客様からご提供いただいた個人情報を、第三者に提供することはありません。
        </p>
        <div className='w-full flex flex-col items-center my-5'>
          <ul className='list-disc w-[90%]'>
            <li>お客様の同意がある場合</li>
            <li>
              個人情報保護法その他関連法令等に基づいて個人情報の提供に応じる場合
            </li>
            <li>アンケートのお願い</li>
            <li>
              統計資料などのように個人を特定することが不可能な状態で開示する場合
            </li>
          </ul>
        </div>
        <YellowTitle text='3.個人情報の管理について' />
        <p className='mb-5'>
          個人情報管理責任者を設置するとともに、その役割を明確にし、適切に個人情報保護に関する活動を行える体制を整備し、さらに継続的な改善を実施いたします。
        </p>
        <YellowTitle text='4.個人情報の開示・訂正・削除について' />
        <p className='mb-5'>
          当社は、保有するお客様の個人情報の開示・訂正・削除等の求めに対して、合理的な範囲で対応させていただきます。開示・訂正・削除等をご希望される場合は、当社までお問合せください。お客様の本人確認後に、必要があれば合理的な期間内で開示・訂正・削除等の対応をさせていただきます。
        </p>
        <YellowTitle text='5.個人情報に関する法令および規範の遵守について' />
        <p className='mb-5'>
          個人情報の取り扱いにおいて、当該個人情報の保護に適用される法令および関連するガイドライン・その他の規範を遵守します。
        </p>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};
export default Policy;
