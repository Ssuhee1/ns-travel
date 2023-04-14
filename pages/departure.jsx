import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';

const Departure = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
        <BlueTitle text='お申込からご出発まで ' />
        <div>
          <YellowTitle text='仮予約する' />
          <p>1. ツアーを選ぶ</p>
          <p>ホームページ、パンフレットよりご希望のツアーを探します。</p>
          <p>2.ツアーページの「予約する」ボタンをクリック.</p>
          <p>
            希望のツアーが見つかったら、ツアー詳細ページの「予約する」ボタンをクリック.
          </p>
          <p>3. 必要事項をご記入の上、送信してください。</p>
          <p>空席がある場合は、出発の1～2週間前までお申し込みいただけます。</p>
          <p>必要事項:</p>
          <p>・参加者全員のパスポートのお名前（ローマ字つづり）</p>
          <p>・ご連絡先（住所・電話番号・携帯電話番号など）</p>
          <p>・ご年齢</p>
          <p>・性別など</p>
        </div>
        <div>
          <YellowTitle text='正式お申し込み・お支払い' />
          <p>4.ホームページよりお申込依頼の場合</p>
          <p>お申込依頼書を旅行参加申込書に振替と致します。</p>
          <p>
            (お申込みをお受けできる場合、お申込依頼のメールに受諾できる旨のご返信をさせていただきます。)
          </p>
          <p>
            同時にお申込依頼受諾後、3日以内に「お申込金」お一人様50,000円を銀行振込みまたは現金書留にてお支払ください。（お申込金は当該旅行代金の一部として充当されます）
          </p>
          <p>お申込金入金確認後、契約成立となります。</p>
          <p>(DANS)</p>
        </div>
        <div>
          <YellowTitle text='旅行会社からの連絡' />
          <p>
            5.ご請求書を発送またはメール添付送信させて頂きますので、ご確認の上、請求書の支払期日
            までに残金ををお支払いください。
          </p>
          <p>
            6.
            ご入金確認後、ご出発の約1週間前（遅くとも前日）頃に最終ご日程表、ご出発のご案内などをご自宅へ発送致します。ご説明会にご参加頂くこともできます。
          </p>
        </div>
        <div>
          <YellowTitle text='出発' />
          <p>
            7.ご出発当日、出発のご案内に記載されている指定集合場所、指定集合時間にご集合ください。
          </p>
          <p>係員より出発のご案内を致します。</p>
          <p>8．中止の判断</p>
          <p>
            申込み人数、天候及びその他事由により、事前に中止の判断をする場合があります。・申込み人数よる中止の場合：開講日の7日前までにご連絡いたします。・天候、その他事由による中止の場合：開講日の前日までにご連絡いたします。
          </p>
        </div>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Departure;
