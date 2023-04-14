import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';
import { IoIosArrowDown } from 'react-icons/io';

const TravelCondition = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
        <BlueTitle text='旅行条件、旅行業約款等' />
        <YellowTitle text='モンゴル旅行各モデルぷらん 旅行条件' />
        <div className='grid grid-cols-3 gap-4 bg-defaultGray p-5'>
          <div className='col-span-1'>ご利用予定 航空会社</div>
          <div className='col-span-2'>ＭＩＡＴモンゴル航空</div>
        </div>
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='col-span-1'>ご利用予定宿泊施設</div>
          <div className='col-span-2'>
            ツーリストキャンプ：各地ツーリストキャンプゲルまたは同等クラス＊ツーリストキャンプゲルではいずれの地も基本的に男女別、３～４名様利用となります。＊プランによりテント泊、遊牧民ゲル泊、市内家庭泊となる場合があります（プラン中に明記）
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-defaultGray p-5'>
          <div className='col-span-1'>食事</div>
          <div className='col-span-2'>
            各コース日程表に記載
            食事はランチボックスになる場合、ホテル/レストラン/
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='col-span-1'>各プラン最少催行人員</div>
          <div className='col-span-2'>
            <p>２名様（但し、各プラン日程表に記載のあるものはそれに準じる）</p>
            <p>
              -プランにより１名様でも催行できます（別紙料金表をご参照ください）
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-defaultGray p-5'>
          <div className='col-span-1'>添乗員</div>
          <div className='col-span-2'>
            現地は日本語ガイドがご同行・ご説明日本よりの添乗はご希望などがあればご同行させて頂きます。（別途料金要）弊社スタッフが同行する場合もございます。詳しくはお問い合わせください。
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='col-span-1'>出発日旅行代金</div>
          <div className='col-span-2'>
            別途料金表に記載しています。ご参照ください。
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-defaultGray p-5'>
          <div className='col-span-1'>各国空港税施設使用料等</div>
          <div className='col-span-2'>
            旅行代金には含まれておりません。別途料金表に記載しています。
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='col-span-1'>査証（ビザ）代行申請料等</div>
          <div className='col-span-2'>
            別途料金表に記載しています。ご参照ください。
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-defaultGray p-5'>
          <div className='col-span-1'>ご注意</div>
          <div className='col-span-2'>
            現地事情によりプラン中の一部日程や訪問都市の順番が変更になる場合があります。また国内線が定期便またはチャーター便になる場合があります。予めご了承の上、ご参加ください。
          </div>
        </div>
        <YellowTitle text='手配旅行・他に関する約款・条件書' />
        <div className='flex justify-center'>
          <ul className='w-[90%] list-decimal'>
            <li className='flex items-center '>
              旅行業約款（手配旅行契約）
              <IoIosArrowDown className='ml-2 -rotate-90' />
            </li>
            <li className='flex items-center'>
              旅行業約款（渡航手続代行契約）
              <IoIosArrowDown className='ml-2 -rotate-90' />
            </li>
            <li className='flex items-center'>
              旅行業約款（旅行相談契約）
              <IoIosArrowDown className='ml-2 -rotate-90' />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default TravelCondition;
