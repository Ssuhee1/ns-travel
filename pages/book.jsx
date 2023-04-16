import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle, YellowTitle } from '@/components/shared/Title';
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Select,
  Space,
  Steps,
  Table,
  notification,
} from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { tripTableData as trip1Data } from './trip/1';

const { Step } = Steps;
const { TextArea } = Input;
const { Meta } = Card;

const ButtonCtrl = ({
  onClick1 = () => {},
  onClick2 = () => {},
  button2Text = '次へ',
  button2Type = 'button',
  isLoading2,
  disabled1 = true,
  disabled2 = false,
}) => {
  return (
    <div className='w-full flex justify-center mb-10'>
      <Button
        className='mr-10'
        disabled={disabled1}
        size='large'
        onClick={onClick1}>
        戻る
      </Button>
      <Button
        loading={isLoading2}
        type={button2Type}
        disabled={disabled2}
        className='bg-defaultYellow text-black'
        size='large'
        onClick={onClick2}>
        {button2Text}
      </Button>
    </div>
  );
};

const Book = () => {
  const router = useRouter();
  const { trip, option } = router.query;
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // Userinput : step 2
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstnameFuri, setFirstnameFuri] = useState('');
  const [lastnameFuri, setLastnameFuri] = useState('');
  const [birthday, setBirthday] = useState('');
  const [region, setRegion] = useState('');
  const [sex, setSex] = useState('男性');
  const [postalCode, setPostalCode] = useState('');
  const [prefecture, setPrefecture] = useState('default');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [building, setBuilding] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [profession, setProfession] = useState('');
  const [possession, setPossession] = useState('持っている');
  const [contact, setContact] = useState(['email']);
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  // Userinput : step 3
  const [passportNumber, setPassportNumber] = useState('');
  const [seat, setSeat] = useState('default');
  const [arrangement, setArrangement] = useState('');
  const [emContact, setEmContact] = useState('');
  const [emContactFuri, setEmContactFuri] = useState('');
  const [emContactRel, setEmContactRel] = useState('夫');
  const [emContactAddr, setEmContactAddr] = useState('');
  const [emContactPhone, setEmContactPhone] = useState('');
  const [foodAlergy, setFoodAlergy] = useState('default');
  const [foodAlergyDetail, setFoodAlergyDetail] = useState('');
  const [medicineAlergy, setMedicineAlergy] = useState('default');
  const [medicineAlergyDetail, setMedicineAlergyDetail] = useState('');
  const [smoking, setSmoking] = useState('default');
  const [travelExp, setTravelExp] = useState('default');
  const [horseRideExp, setHorseRideExp] = useState('default');
  const [agreeWith, setAgreeWith] = useState(false);
  const [vaccination, setVaccination] = useState('1回以下');
  const [comment, setComment] = useState('');

  if (trip) {
    let render;

    if (currentStep === 0) {
      const columns1 = [
        {
          key: 'no',
          title: 'No.',
          dataIndex: 'no',
        },
        {
          key: 'trip',
          title: 'ツアー',
          dataIndex: 'trip',
        },
        {
          key: 'cost',
          title: '講座名旅行・講座代金 ',
          dataIndex: 'cost',
        },
        {
          key: 'place',
          title: '出発地',
          dataIndex: 'place',
        },
      ];
      const dataSource1 = [
        { no: 1, trip: trip1Data.name, ...trip1Data.dataSource[option] },
      ];
      render = (
        <div>
          <p className='mb-10'>
            ツアーの仮予約手続きへ進みます。以下のツアーでお間違いなければ「次へ」を押してお進みください。
          </p>
          <Table
            className='mb-5'
            columns={columns1}
            dataSource={dataSource1}
            pagination={false}
          />
          <p>通貨 : {dataSource1[0].cost} 円</p>

          <ButtonCtrl onClick2={() => setCurrentStep(1)} />
          <p className='text-orange-500'>
            -正式なご旅行契約成立は、弊社が申込金（50,000¥）を受領した時点となります。
            仮予約完了後、書面、またはメールにてご案内させていただきますので、お手続きをお願いいたします。
          </p>
          <p className='text-orange-500'>
            -上記ご旅行代金には、燃油特別付加運賃、各国諸税等は含みません。別途申し受けますのでご了承ください。
          </p>
        </div>
      );
    } else if (currentStep === 1) {
      const options = [
        {
          value: 'default',
          label: '--選択--',
        },
        { value: '北海道', label: '北海道' },
        { value: '青森県', label: '青森県' },
        { value: '岩手県', label: '岩手県' },
        { value: '宮城県', label: '宮城県' },
        { value: '秋田県', label: '秋田県' },
        { value: '山形県', label: '山形県' },
        { value: '福島県', label: '福島県' },
        { value: '茨城県', label: '茨城県' },
        { value: '栃木県', label: '栃木県' },
        { value: '群馬県', label: '群馬県' },
        { value: '埼玉県', label: '埼玉県' },
        { value: '千葉県', label: '千葉県' },
        { value: '東京都', label: '東京都' },
        { value: '神奈川県', label: '神奈川県' },
        { value: '新潟県', label: '新潟県' },
        { value: '富山県', label: '富山県' },
        { value: '石川県', label: '石川県' },
        { value: '福井県', label: '福井県' },
        { value: '山梨県', label: '山梨県' },
        { value: '長野県', label: '長野県' },
        { value: '岐阜県', label: '岐阜県' },
        { value: '静岡県', label: '静岡県' },
        { value: '愛知県', label: '愛知県' },
        { value: '三重県', label: '三重県' },
        { value: '滋賀県', label: '滋賀県' },
        { value: '京都府', label: '京都府' },
        { value: '大阪府', label: '大阪府' },
        { value: '兵庫県', label: '兵庫県' },
        { value: '奈良県', label: '奈良県' },
        { value: '和歌山県', label: '和歌山県' },
        { value: '鳥取県', label: '鳥取県' },
        { value: '島根県', label: '島根県' },
        { value: '岡山県', label: '岡山県' },
        { value: '広島県', label: '広島県' },
        { value: '山口県', label: '山口県' },
        { value: '徳島県', label: '徳島県' },
        { value: '香川県', label: '香川県' },
        { value: '愛媛県', label: '愛媛県' },
        { value: '高知県', label: '高知県' },
        { value: '福岡県', label: '福岡県' },
        { value: '佐賀県', label: '佐賀県' },
        { value: '長崎県', label: '長崎県' },
        { value: '熊本県', label: '熊本県' },
        { value: '大分県', label: '大分県' },
        { value: '宮崎県', label: '宮崎県' },
        { value: '鹿児島県', label: '鹿児島県' },
        { value: '沖縄県', label: '沖縄県' },
      ];

      const confirm = () => {
        // Validation
        if (!firstname) {
          return notification.warning({
            message: 'フォームの検証',
            description: 'お名前を入力してください',
          });
        }
        if (!birthday) {
          return notification.warning({
            message: 'フォームの検証',
            description: '生年月日を入力してください',
          });
        }
        if (!postalCode) {
          return notification.warning({
            message: 'フォームの検証',
            description: '郵便番号を入力してください',
          });
        }
        if (prefecture === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '都道府県を選択してください',
          });
        }
        if (!city) {
          return notification.warning({
            message: 'フォームの検証',
            description: '市区郡町村を選択してください',
          });
        }
        if (!address) {
          return notification.warning({
            message: 'フォームの検証',
            description: '番地を選択してください',
          });
        }
        if (!phone) {
          return notification.warning({
            message: 'フォームの検証',
            description: '電話番号を選択してください',
          });
        }
        if (!profession) {
          return notification.warning({
            message: 'フォームの検証',
            description: '職業を選択してください',
          });
        }
        if (!email) {
          return notification.warning({
            message: 'フォームの検証',
            description: 'メールアドレスを選択してください',
          });
        }
        if (!email2) {
          return notification.warning({
            message: 'フォームの検証',
            description: 'メールアドレス(再入力)を選択してください',
          });
        }
        if (email !== email2) {
          return notification.warning({
            message: 'フォームの検証',
            description: 'メールが一致しません',
          });
        }

        setCurrentStep((prev) => prev + 1);
      };

      render = (
        <div>
          <Form>
            <div className='p-5 bg-defaultGray mb-5'>
              <div className='grid grid-cols-2 gap-5 mb-5'>
                <div>
                  <div className='grid grid-cols-5 items-start gap-3'>
                    <label htmlFor='firstname' className='col-span-1'>
                      ＊お名前
                    </label>
                    <Input
                      className='col-span-4'
                      id='firstname'
                      placeholder='First Name'
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className='grid grid-cols-5 grap-3 items-start'>
                    <label htmlFor='lastname' className='col-span-1'>
                      姓
                    </label>
                    <Input
                      className='col-span-4'
                      id='lastname'
                      placeholder='Last Name'
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 mb-5'>
                <div>
                  <div className='grid grid-cols-5 gap-3 items-start'>
                    <label className='col-span-1' htmlFor='firstnameFuri'>
                      フリガナ
                    </label>
                    <Input
                      id='firstnameFuri'
                      className='col-span-4'
                      placeholder='First Name (Furigana)'
                      value={firstnameFuri}
                      onChange={(e) => setFirstnameFuri(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className='grid grid-cols-5 gap-3 items-start'>
                    <label className='col-span-1' htmlFor='lastnameFuri'>
                      セイ
                    </label>
                    <Input
                      id='lastnameFuri'
                      className='col-span-4'
                      placeholder='Last Name (Furigana)'
                      value={lastnameFuri}
                      onChange={(e) => setLastnameFuri(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='birthday' className='col-span-1'>
                    *生年月日
                  </label>
                  <DatePicker
                    id='birthday'
                    className='col-span-9'
                    onChange={(_, dateString) => setBirthday(dateString)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='region'>国籍</label>
                  <Input
                    className='col-span-9'
                    id='region'
                    placeholder='Region'
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <label className='mr-5'>＊パスポート上の性別</label>
                <Radio.Group
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}>
                  <Radio value='男性'>男性</Radio>
                  <Radio value='女性'>女性</Radio>
                </Radio.Group>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='postalCode' className=''>
                    *郵便番号
                  </label>
                  <Input
                    id='postalCode'
                    placeholder='Postal Code'
                    className='col-span-9'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='prefecture'>*都道府県</label>
                  <Select
                    value={prefecture}
                    id='prefecture'
                    onChange={(e) => setPrefecture(e)}
                    className='col-span-9'
                    options={options}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='city' className=''>
                    *市区郡町村
                  </label>
                  <Input
                    id='city'
                    placeholder='City'
                    className='col-span-9'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='address'>*番地</label>
                  <Input
                    id='address'
                    className='col-span-9'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='building'>ビル名</label>
                  <Input
                    id='building'
                    className='col-span-9'
                    placeholder='Building'
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='phone'>＊電話番号</label>
                  <Input
                    id='phone'
                    placeholder='Phone'
                    className='col-span-9'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='mobile'>携帯番号</label>
                  <Input
                    id='mobile'
                    className='col-span-9'
                    placeholder='Mobile Phone'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='profession'>＊職業</label>
                  <Input
                    id='profession'
                    className='col-span-9'
                    placeholder='Profession'
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <label className='mr-5'>【パスポート】所持</label>
                <Radio.Group
                  value={possession}
                  onChange={(e) => setPossession(e.target.value)}>
                  <Radio value='持っている'>持っている</Radio>
                  <Radio value='持っていない'>持っていない</Radio>
                  <Radio value='申請中'>申請中</Radio>
                </Radio.Group>
              </div>
              <div className='mb-5'>
                <label className='mr-5'>希望連絡手段</label>
                <Checkbox.Group value={contact} onChange={(e) => setContact(e)}>
                  <Checkbox value='email'>Eメール</Checkbox>
                  <Checkbox value='mobile'>携帯電話</Checkbox>
                  <Checkbox value='phone'>自宅電話</Checkbox>
                </Checkbox.Group>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='email'>*メールアドレス</label>
                  <Input
                    id='email'
                    placeholder='Email'
                    className='col-span-9'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-5'>
                <div className='grid grid-cols-10 items-start gap-3'>
                  <label htmlFor='email2'>*メールアドレス(再入力)</label>
                  <Input
                    id='email2'
                    placeholder='re-Email'
                    className='col-span-9'
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <ButtonCtrl
              disabled1={false}
              type1=''
              button2Type='submit'
              onClick1={() => setCurrentStep((prev) => prev - 1)}
              onClick2={confirm}
            />
          </Form>
        </div>
      );
    } else if (currentStep === 2) {
      const seatOptions = [
        {
          value: 'default',
          label: '希望なし',
        },
        {
          value: '2',
          label: '窓側',
        },
        {
          value: '3',
          label: '通路側',
        },
      ];
      const alergyOptions = [
        {
          value: 'default',
          label: '選択してください',
        },
        {
          value: 'ある',
          label: 'ある',
        },
        {
          value: 'ない',
          label: 'ない',
        },
      ];
      const smokingOptions = [
        {
          value: 'default',
          label: '選択してください',
        },
        {
          value: '喫煙する',
          label: '喫煙する',
        },
        {
          value: '喫煙しない',
          label: '喫煙しない',
        },
      ];
      const travelExpOptions = [
        {
          value: 'default',
          label: '選択してください',
        },
        {
          value: '今回が初めて',
          label: '今回が初めて',
        },
        {
          value: '経験あり',
          label: '経験あり',
        },
      ];
      const horseRidingExpOptions = [
        { value: 'default', label: '選択してください' },
        {
          value: '未経験者',
          label: '未経験者',
        },
        {
          value: '初心者',
          label: '初心者',
        },
        {
          value: '初級者',
          label: '初級者',
        },
        {
          value: '中級者',
          label: '中級者',
        },
        {
          value: '上級者',
          label: '上級者',
        },
      ];
      const confirm = () => {
        if (!passportNumber) {
          return notification.warning({
            message: 'フォームの検証',
            description: 'パスポート番号を入力してください',
          });
        }
        if (!emContact) {
          return notification.warning({
            message: 'フォームの検証',
            description: '【緊急連絡先】氏名をを入力してください',
          });
        }
        if (!emContactFuri) {
          return notification.warning({
            message: 'フォームの検証',
            description: '緊急連絡先】ふりがなを入力してください',
          });
        }
        if (!emContactRel) {
          return notification.warning({
            message: 'フォームの検証',
            description: '【緊急連絡先】続柄を選択してください',
          });
        }
        if (!emContactPhone) {
          return notification.warning({
            message: 'フォームの検証',
            description: '【緊急連絡先】電話・携帯を入力してください',
          });
        }
        if (foodAlergy === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '食事への配慮・食物アレルギーを選択してください',
          });
        }
        if (foodAlergy === 'ある' && !foodAlergyDetail) {
          return notification.warning({
            message: 'フォームの検証',
            description:
              '制限食物または食事への配慮（具体的に）を入力してください',
          });
        }
        if (medicineAlergy === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '薬アレルギーを選択してください',
          });
        }
        if (medicineAlergy === 'ある' && !medicineAlergyDetail) {
          return notification.warning({
            message: 'フォームの検証',
            description: '薬アレルギー（具体的に）を入力してください',
          });
        }
        if (smoking === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '喫煙の有無を選択してください',
          });
        }
        if (travelExp === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '海外旅行経験を選択してください',
          });
        }
        if (horseRideExp === 'default') {
          return notification.warning({
            message: 'フォームの検証',
            description: '乗馬経験を選択してください',
          });
        }
        if (!agreeWith) {
          return notification.warning({
            message: 'フォームの検証',
            description: '同意をチェックしてください',
          });
        }
        setCurrentStep((prev) => prev + 1);
      };

      render = (
        <div>
          <h3 className='w-full flex justify-center text-3xl underline mb-2'>
            同行者情報
          </h3>
          <div className='grid grid-cols-3 gap-2 mb-10'>
            <div className='col-span-1 bg-gray-100 flex justify-center items-center'>
              お申込み代表者様情報
            </div>
            <div className='col-span-2 bg-defaultGray p-5'>
              <p>名前: {firstname}</p>
              <p>性別: {sex}</p>
              <p>
                住所: {prefecture} {city} {building} | {postalCode}
              </p>
              <p>メールアドレス: {email}</p>
              <p>【パスポート】所持: {possession}</p>
            </div>
          </div>
          <div className='w-full flex justify-center mb-5'>
            <div className='w-[60%] bg-defaultYellow p-10'>
              以上で「ツアー仮予約」に必要な情報入力は終わりです。ツアーの正式なご予約にあたっては「ご旅行申込書」のご提出が必要となります。
            </div>
          </div>
          <div className='flex justify-center h-[50px] mb-5'>
            <img src='/img/svg/triangle.svg' />
          </div>
          <div className='w-full flex justify-center text-3xl underline mb-2'>
            ご旅行申込書
          </div>
          <div className='bg-defaultGray p-5 mb-5'>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='passportnumber' className='col-span-3'>
                ＊【パスポート】パスポート番号
              </label>
              <Input
                id='passportnumber'
                placeholder='Passport Number'
                className='col-span-7'
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='seat' className='col-span-3'>
                飛行機の座席希望
              </label>
              <Select
                id='seat'
                className='col-span-7'
                options={seatOptions}
                value={seat}
                onChange={(e) => setSeat(e)}
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='seat' className='col-span-3'>
                ＊旅行保険の加入
              </label>
              <p id='seat' className='col-span-7 text-orange-500'>
                ※当社では、すべての参加者に海外旅行保険への加入をお願いしております。特に高所や乗馬等、事故発生の場合に高額な緊急搬送費用を必要とするコースでは、一定額以上の治療救援費用が付加された保険への加入を参加条件とさせていただきます。海外旅行保険に加入いただけない場合は、参加をお断りする場合があります。
              </p>
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='arrangement' className='col-span-3'>
                アレンジ希望
              </label>
              <Input
                id='arrangement'
                value={arrangement}
                placeholder='Arrangement request'
                onChange={(e) => setArrangement(e.target.value)}
                className='col-span-7'
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='emcontact' className='col-span-3'>
                ＊【緊急連絡先】氏名
              </label>
              <Input
                id='emcontact'
                value={emContact}
                placeholder='Emergency Contact Name'
                onChange={(e) => setEmContact(e.target.value)}
                className='col-span-7'
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='emcontactfuri' className='col-span-3'>
                ＊【緊急連絡先】ふりがな
              </label>
              <Input
                id='emcontactfuri'
                value={emContactFuri}
                placeholder='Emergency Contact Name (Furigana)'
                onChange={(e) => setEmContactFuri(e.target.value)}
                className='col-span-7'
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='emcontactrel' className='col-span-3'>
                ＊【緊急連絡先】続柄
              </label>
              <Radio.Group
                id='emcontactrel'
                value={emContactRel}
                onChange={(e) => setEmContactRel(e.target.value)}
                className='col-span-7'>
                <Radio value='夫'>夫</Radio>
                <Radio value='妻'>妻</Radio>
                <Radio value='母'>母</Radio>
                <Radio value='兄'>兄</Radio>
                <Radio value='弟'>弟</Radio>
                <Radio value='姉'>姉</Radio>
                <Radio value='妹'>妹</Radio>
                <Radio value='子'>子</Radio>
                <Radio value='親戚'>親戚</Radio>
                <Radio value='知人'>知人</Radio>
                <Radio value='その他'>その他</Radio>
              </Radio.Group>
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='emcontactaddr' className='col-span-3'>
                【緊急連絡先】住所
              </label>
              <Input
                id='emcontactaddr'
                value={emContactAddr}
                placeholder='Emergency Contact Address'
                onChange={(e) => setEmContactAddr(e.target.value)}
                className='col-span-7'
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='emcontactphone' className='col-span-3'>
                ＊【緊急連絡先】電話・携帯
              </label>
              <Input
                id='emcontactphone'
                value={emContactPhone}
                placeholder='Emergency Contact Phone'
                onChange={(e) => setEmContactPhone(e.target.value)}
                className='col-span-7'
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='foodalergy' className='col-span-3'>
                ＊食事への配慮・食物アレルギー
              </label>
              <Select
                id='foodalergy'
                value={foodAlergy}
                options={alergyOptions}
                onChange={(e) => setFoodAlergy(e)}
                className='col-span-7'
              />
            </div>
            {foodAlergy === 'ある' && (
              <div className='mb-5 grid grid-cols-10 items-start gap-3'>
                <label htmlFor='foodalergydetail' className='col-span-3'>
                  ＊制限食物または食事への配慮（具体的に）{' '}
                </label>
                <Input
                  id='foodalergydetail'
                  value={foodAlergyDetail}
                  placeholder='Food Allergies Detail'
                  onChange={(e) => setFoodAlergyDetail(e.target.value)}
                  className='col-span-7'
                />
              </div>
            )}
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='medicineAlergy' className='col-span-3'>
                ＊薬アレルギー
              </label>
              <Select
                id='medicineAlergy'
                value={medicineAlergy}
                options={alergyOptions}
                onChange={(e) => setMedicineAlergy(e)}
                className='col-span-7'
              />
            </div>
            {medicineAlergy === 'ある' && (
              <div className='mb-5 grid grid-cols-10 items-start gap-3'>
                <label htmlFor='medicinealergydetail' className='col-span-3'>
                  ＊薬アレルギー（具体的に）
                </label>
                <Input
                  id='medicinealergydetail'
                  value={medicineAlergyDetail}
                  placeholder='Drug Allergies Detail'
                  onChange={(e) => setMedicineAlergyDetail(e.target.value)}
                  className='col-span-7'
                />
              </div>
            )}
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='smoking' className='col-span-3'>
                ＊喫煙の有無
              </label>
              <div className='col-span-7'>
                <Select
                  className='w-full'
                  id='smoking'
                  value={smoking}
                  options={smokingOptions}
                  onChange={(e) => setSmoking(e)}
                />
                <div className='text-orange-500'>
                  禁煙ルーム、喫煙ルームなどの手配をお約束するものではありません。
                </div>
              </div>
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='travelExp' className='col-span-3'>
                ＊海外旅行経験
              </label>
              <Select
                className='col-span-7'
                id='travelExp'
                value={travelExp}
                options={travelExpOptions}
                onChange={(e) => setTravelExp(e)}
              />
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label htmlFor='horseExp' className='col-span-3'>
                ＊乗馬経験
              </label>
              <div className='col-span-7'>
                <Select
                  className='w-full'
                  id='horseExp'
                  value={horseRideExp}
                  options={horseRidingExpOptions}
                  onChange={(e) => setHorseRideExp(e)}
                />
                <div className='text-orange-500'>
                  <p>未経験者：乗⾺未経験または、引き綱ありの乗⾺体験のみ。</p>
                  <p>
                    初⼼者：停⽌時と常歩時に安定した姿勢が維持できる。引き綱をした状態の軽速歩で安定した姿勢が維持できる。
                  </p>
                  <p>
                    初級者：⾃⾝の操作で発進・停⽌ができる。軽速歩で安定した姿勢が維持できる。常歩時に⼿綱の操作で⽅向転換ができる。
                  </p>
                  <p>
                    中級者：常歩、速歩、停⽌までをスムーズにできる。速歩時も⼿綱の操作が概ねできる。常歩時に⼿綱の操作で⽅向転換ができる。
                  </p>
                  <p>
                    上級者：⾃⾝の操作で駈歩発進、速度調節、停⽌までをスムーズにできる。駈歩時に安定した姿勢が維持できる。
                  </p>
                </div>
              </div>
            </div>
            <div className='mb-5'>
              <label className='mr-10'>
                ＊新型コロナウイルス感染症ワクチンの接種回数をお知らせください
              </label>
              <Radio.Group
                value={vaccination}
                onChange={(e) => setVaccination(e.target.value)}>
                <Radio value='1回以下'>1回以下</Radio>
                <Radio value='2回'>2回</Radio>
                <Radio value='3回以上'>3回以上</Radio>
                <Radio value='回答できません'>回答できません</Radio>
              </Radio.Group>
            </div>
            <div className='mb-5 grid grid-cols-10 items-start gap-3'>
              <label className='col-span-3'>
                ＊ご旅行条件、個人情報提供に関する同意
              </label>
              <div className='bg-white col-span-7 h-[400px] overflow-auto p-5'>
                <YellowTitle text='第一章 総則' />
                <p>
                  <p>（適用範囲）</p>
                  <p>第一条</p>
                  <p>
                    1.当社が旅行者との間で締結する手配旅行契約は、この約款の定めるところによります。この約款に定めのない事項については、法令又は一般に確立された慣習によります。
                  </p>
                  <p>
                    2.当社が法令に反せず、かつ、旅行者の不利にならない範囲で書面により特約を結んだときは、前項の規定にかかわらず、その特約が優先します。
                  </p>
                </p>
                <p>
                  <p>(用語の定義）</p>
                  <p>第二条</p>
                  <p>
                    1.この約款で「手配旅行契約」とは、当社が旅行者の委託により、旅行者のために代理、媒介又は取次をすること等により旅行者が運送・宿泊機関等の提供する運送、宿泊その他の旅行に関するサービス（以下「旅行サービス」といいます。）の提供を受けることができるように、手配することを引き受ける契約をいいます。
                  </p>
                  <p>
                    2.この約款で「国内旅行」とは、本邦内のみの旅行をいい、「海外旅行」とは、国内旅行以外の旅行をいいます。
                  </p>
                  <p>
                    3.この約款で「旅行代金」とは、当社が旅行サービスを手配するために、運賃、宿泊料その他の運送・宿泊機関等に対して支払う費用及び当社所定の旅行業務取扱料金（変更手続料金及び取消手続料金を除きます。）をいいます。
                  </p>
                  <p>
                    4.この部で「通信契約」とは、当社が提携するクレジットカード会社（以下「提携会社」といいます。）のカード会員との間で電話、郵便、ファクシミリその他の通信手段による申込みを受けて締結する手配旅行契約であって、当社が旅行者に対して有する手配旅行契約に基づく旅行代金等に係る債権又は債務を、当該債権又は債務が履行されるべき日以降に別に定める提携会社のカード会員規約に従って決済することについて、旅行者があらかじめ承諾し、かつ旅行代金等を第十六条第二項又は第五項に定める方法により支払うことを内容とする手配旅行契約をいいます。
                  </p>
                  <p>
                    5.この部で「電子承諾通知」とは、契約の申込みに対する承諾の通知であって、情報通信の技術を利用する方法のうち当社が使用する電子計算機、ファクシミリ装置、テレックス又は電話機（以下「電子計算機等」といいます。）と旅行者が使用する電子計算機等とを接続する電気通信回線を通じて送信する方法により行うものをいいます。
                  </p>
                  <p>
                    6.この約款で「カード利用日」とは、旅行者又は当社が手配旅行契約に基づく旅行代金等の支払又は払戻債務を履行すべき日をいいます。
                  </p>
                </p>
                <p>
                  <p>（手配債務の終了）</p>
                  <p>第三条</p>
                  <p>
                    1.当社が善良な管理者の注意をもって旅行サービスの手配をしたときは、手配旅行契約に基づく当社の債務の履行は終了します。したがって、満員、休業、条件不適当等の事由により、運送・宿泊機関等との間で旅行サービスの提供をする契約を締結できなかった場合であっても、当社がその義務を果たしたときは、旅行者は、当社に対し、当社所定の旅行業務取扱料金（以下「取扱料金」といいます。）
                    を支払わなければなりません。通信契約を締結した場合においては、カード利用日は、当社が運送・宿泊機関等との間で旅行サービスの提供をする契約を締結できなかった旨、旅行者に通知した日とします。
                  </p>
                </p>
                <p>
                  <p>（手配代行者）</p>
                  <p>第四条</p>
                  <p>
                    1.当社は、手配旅行契約の履行に当たって、手配の全部又は一部を本邦内又は本邦外の他の旅行業者、手配を業として行う者その他の補助者に代行させることがあります。s
                  </p>
                </p>
                <YellowTitle text='第二章 契約の成立' />
                <p>
                  <p>（契約の申込み）</p>
                  <p>第五条</p>
                  <p>
                    1.
                    当社と手配旅行契約を締結しようとする旅行者は、当社所定の申込書に所定の事項を記入の上、当社が別に定める金額の申込金とともに、当社に提出しなければなりません。
                  </p>
                  <p>
                    2.
                    当社と通信契約を締結しようとする旅行者は、前項の規定にかかわらず、会員番号及び依頼しようとする旅行サービスの内容を当社に通知しなければなりません。
                  </p>
                  <p>
                    3.
                    第一項の申込金は、旅行代金、取消料その他の旅行者が当社に支払うべき金銭の一部として取り扱います。
                  </p>
                </p>
                <p>
                  <p>（契約締結の拒否）</p>
                  <p>第六条</p>
                  <p>
                    1.
                    当社は、次に掲げる場合において、手配旅行契約の締結に応じないことがあります。一通信契約を締結しようとする場合であって、旅行者の有するクレジットカードが無効である等、旅行者が旅行代金等に係る債務の一部又は全部を提携会社のカード会員規約に従って決済できないとき。二旅行者が、暴力団員、暴力団準構成員、暴力団関係者、暴力団関係企業又は総会屋等その他の反社会的勢力であると認められるとき。三旅行者が、当社に対して暴力的な要求行為、不当な要求行為、取引に関して脅迫的な言動若しくは暴力を用いる行為又はこれらに準ずる行為を行ったとき。四旅行者が、風説を流布し、偽計を用い若しくは威力を用いて当社の信用を毀損し若しくは当社の業務を妨害する行為又はこれらに準ずる行為を行ったとき。五その他当社の業務上の都合があるとき。
                  </p>
                </p>
                <p>
                  <p>（契約の成立時期）</p>
                  <p>第七条</p>
                  <p>
                    1.
                    手配旅行契約は、当社が契約の締結を承諾し、第五条第一項の申込金を受理した時に成立するものとします。
                  </p>
                  <p>
                    2.
                    通信契約は、前項の規定にかかわらず、当社が第五条第二項の申込みを承諾する旨の通知を発した時に成立するものとします。ただし、当該契約において電子承諾通知を発する場合は、当該通知が旅行者に到達した時に成立するものとします。
                  </p>
                </p>
                <p>
                  <p>（契約成立の特則）</p>
                  <p>第八条</p>
                  <p>
                    1.
                    当社は、第五条第一項の規定にかかわらず、書面による特約をもって、申込金の支払いを受けることなく、契約の締結の承諾のみにより手配旅行契約を成立させることがあります。
                  </p>
                  <p>
                    2.
                    前項の場合において、手配旅行契約の成立時期は、前項の書面において明らかにします。{' '}
                  </p>
                </p>
                <p>
                  <p>（乗車券及び宿泊券等の特則）</p>
                  <p>第九条 </p>
                  <p>
                    1.
                    当社は、第五条第一項及び前条第一項の規定にかかわらず、運送サービス又は宿泊サービスの手配のみを目的とする手配旅行契約であって旅行代金と引換えに当該旅行サービスの提供を受ける権利を表示した書面を交付するものについては、口頭による申込みを受け付けることがあります。
                  </p>
                  <p>
                    2.
                    前項の場合において、手配旅行契約は、当社が契約の締結を承諾した時に成立するもとのします。
                  </p>
                </p>
                <p>
                  <p>（契約書面）</p>
                  <p>第十条</p>
                  <p>
                    1.
                    当社は、手配旅行契約の成立後速やかに、旅行者に、旅行日程、旅行サービスの内容、旅行代金その他の旅行条件及び当社の責任に関する事項を記載した書面（以下「契約書面」といいます。）を交付します。ただし、当社が手配するすべての旅行サービスについて乗車券類、宿泊券その他の旅行サービスの提供を受ける権利を表示した書面を交付するときは、当該契約書面を交付しないことがあります。
                  </p>
                  <p>
                    2.
                    前項本文の契約書面を交付した場合において、当社が手配旅行契約により手配する義務を負う旅行サービスの範囲は、当該契約書面に記載するところによります。
                  </p>
                </p>
                <p>
                  <p>（情報通信の技術を利用する方法）</p>
                  <p>第十一条</p>
                  <p>
                    1.
                    当社は、あらかじめ旅行者の承諾を得て、手配旅行契約を締結しようとするときに旅行者に交付する旅行日程、旅行サービスの内容、旅行代金その他の旅行条件及び当社の責任に関する事項を記載した書面又は契約書面の交付に代えて、情報通信の技術を利用する方法により当該書面に記載すべき事項（以下この条において「記載事項」といいます。）を提供したときは、旅行者の使用する通信機器に備えられたファイルに記載事項が記録されたことを確認します。
                  </p>
                  <p>
                    2. ２
                    前項の場合において、旅行者の使用に係る通信機器に記載事項を記録するためのファイルが備えられていないときは、当社の使用する通信機器に備えられたファイル（専ら当該旅行者の用に供するものに限ります。）に記載事項を記録し、旅行者が記載事項を閲覧したことを確認します。
                  </p>
                </p>
                <YellowTitle text='第三章契約の変更及び解除' />
                <p>
                  <p>（契約内容の変更）</p>
                  <p>第十二条</p>
                  <p>
                    1.
                    旅行者は、当社に対し、旅行日程、旅行サービスの内容その他の手配旅行契約の内容を変更す
                    るよう求めることができます。この場合において、当社は、可能な限り旅行者の求めに応じます。
                  </p>
                  <p>
                    2.
                    前項の旅行者の求めにより手配旅行契約の内容を変更する場合、旅行者は、既に完了した手配を取り
                    消す際に運送・宿泊機関等に支払うべき取消料、違約料その他の手配の変更に要する費用を負担するほ
                    か、当社に対し、当社所定の変更手続料金を支払わなければなりません。また、当該手配旅行契約の内
                    容の変更によって生ずる旅行代金の増加又は減少は旅行者に帰属するものとします。
                  </p>
                </p>
                <p>
                  <p>（旅行者による任意解除）</p>
                  <p>第十三条</p>
                  <p>
                    1.
                    旅行者は、いつでも手配旅行契約の全部又は一部を解除することができます。
                  </p>
                  <p>
                    2.
                    前項の規定に基づいて手配旅行契約が解除されたときは、旅行者は、既に旅行者が提供を受けた旅行
                    サービスの対価として、又はいまだ提供を受けていない旅行サービスに係る取消料、違約料その他の運
                    送・宿泊機関等に対して既に支払い、又はこれから支払う費用を負担するほか、当社に対し、当社所定
                    の取消手続料金及び当社が得るはずであった取扱料金を支払わなければなりません。
                  </p>
                </p>
                <p>
                  <p>（旅行者の責に帰すべき事由による解除）</p>
                  <p>第十四条</p>
                  <p>
                    1.
                    当社は、次に掲げる場合において、手配旅行契約を解除することがあります。一旅行者が所定の期日までに旅行代金を支払わないとき。二通信契約を締結した場合であって、旅行者の有するクレジットカードが無効になる等、旅行者が旅
                    行代金等に係る債務の一部又は全部を提携会社のカード会員規約に従って決済できなくなったとき。三旅行者が第六条第二号から第四号までのいずれかに該当することが判明したとき。
                  </p>
                  <p>
                    2.
                    前項の規定に基づいて手配旅行契約が解除されたときは、旅行者は、いまだ提供を受けていない旅行
                    サービスに係る取消料、違約料その他の運送・宿泊機関等に対して既に支払い、又はこれから支払わな
                    ければならない費用を負担するほか、当社に対し、当社所定の取消手続料金及び当社が得るはずであっ
                    た取扱料金を支払わなければなりません。
                  </p>
                </p>
                <p>
                  <p>（当社の責に帰すべき事由による解除）</p>
                  <p>第十五条</p>
                  <p>
                    旅行者は、当社の責に帰すべき事由により旅行サービスの手配が不可能になったときは、手配
                    旅行契約を解除することができます。
                  </p>
                  <p>
                    前項の規定に基づいて手配旅行契約が解除されたときは、当社は、旅行者が既にその提供を受けた旅行サービスの対価として、運送・宿泊機関等に対して既に支払い、又はこれから支払わなければならな
                    い費用を除いて、既に収受した旅行代金を旅行者に払い戻します。
                  </p>
                  <p>
                    前項の規定は、旅行者の当社に対する損害賠償の請求を妨げるものではありません。
                  </p>
                </p>
                <YellowTitle text='第四章旅行代金' />
                <p>
                  <p>（旅行代金）</p>
                  <p>第十六条</p>
                  <p>
                    1.
                    旅行者は、旅行開始前の当社が定める期間までに、当社に対し、旅行代金を支払わなければな
                    りません。
                  </p>
                  <p>
                    2.
                    通信契約を締結したときは、当社は、提携会社のカードにより所定の伝票への旅行者の署名なくして
                    旅行代金の支払いを受けます。この場合において、カード利用日は、当社が確定した旅行サービスの内
                    容を旅行者に通知した日とします。
                  </p>
                  <p>
                    3.
                    当社は、旅行開始前において、運送・宿泊機関等の運賃・料金の改訂、為替相場の変動その他の事由
                    により旅行代金の変動を生じた場合は、当該旅行代金を変更することがあります。
                  </p>
                  <p>
                    4.
                    前項の場合において、旅行代金の増加又は減少は、旅行者に帰属するものとします。
                  </p>
                  <p>
                    5.
                    当社は、旅行者と通信契約を締結した場合であって、第三章又は第四章の規定により旅行者が負担す
                    べき費用等が生じたときは、当社は、提携会社のカードにより所定の伝票への旅行者の署名なくして当
                    該費用等の支払いを受けます。この場合において、カード利用日は旅行者が当社に支払うべき費用等の
                    額又は当社が旅行者に払い戻すべき額を、当社が旅行者に通知した日とします。ただし、第十四条第一
                    項第二号の規定により当社が手配旅行契約を解除した場合は、旅行者は、当社の定める期日までに、当
                    社の定める支払方法により、旅行者が当社に支払うべき費用等を支払わなければなりません。
                  </p>
                </p>
                <p>
                  <p>（旅行代金の精算）</p>
                  <p>第十七条</p>
                  <p>
                    1.
                    当社は、当社が旅行サービスを手配するために、運送・宿泊機関等に対して支払った費用で旅
                    行者の負担に帰すべきもの及び取扱料金（以下「精算旅行代金」といいます。）と旅行代金として既に
                    収受した金額とが合致しない場合において、旅行終了後、次項及び第三項に定めるところにより速やか
                    に旅行代金の精算をします。
                  </p>
                  <p>
                    2.
                    精算旅行代金が旅行代金として既に収受した金額を超えるときは、旅行者は、当社に対し、その差額
                    を支払わなければなりません。
                  </p>
                  <p>
                    3.
                    精算旅行代金が旅行代金として既に収受した金額に満たないときは、当社は、旅行者にその差額を払
                    い戻します。
                  </p>
                </p>
                <YellowTitle text='第五章団体・グループ手配' />
                <p>
                  <p>（団体・グループ手配）</p>
                  <p>第十八条</p>
                  <p>
                    1.
                    当社は、同じ行程を同時に旅行する複数の旅行者がその責任ある代表者（以下「契約責任者」
                    といいます。）を定めて申し込んだ手配旅行契約の締結については、本章の規定を適用します。
                  </p>
                </p>
                <p>
                  <p>（契約責任者）</p>
                  <p>第十九条</p>
                  <p>
                    1.
                    当社は、特約を結んだ場合を除き、契約責任者はその団体・グループを構成する旅行者（以下
                    「構成者」といいます。）の手配旅行契約の締結に関する一切の代理権を有しているものとみなし、当
                    該団体・グループに係る旅行業務に関する取引及び第二十二条第一項の業務は、当該契約責任者との間
                    で行います。
                  </p>
                  <p>
                    2.
                    契約責任者は、当社が定める日までに、構成者の名簿を当社に提出し、又は人数を当社に通知しなけ
                    ればなりません。
                  </p>
                  <p>
                    3.
                    当社は、契約責任者が構成者に対して現に負い、又は将来負うことが予測される債務又は義務につい
                    ては、何らの責任を負うものではありません。
                  </p>
                  <p>
                    4.
                    当社は、契約責任者が団体・グループに同行しない場合、旅行開始後においては、あらかじめ契約責
                    任者が選任した構成者を契約責任者とみなします。
                  </p>
                </p>
                <p>
                  <p>（契約成立の特則）</p>
                  <p>第二十条</p>
                  <p>
                    1.
                    当社は、契約責任者と手配旅行契約を締結する場合において、第五条第一項の規定にかかわら
                    ず、申込金の支払いを受けることなく手配旅行契約の締結を承諾することがあります。
                  </p>
                  <p>
                    2.
                    前項の規定に基づき申込金の支払いを受けることなく手配旅行契約を締結する場合には、当社は、契
                    約責任者にその旨を記載した書面を交付するものとし、手配旅行契約は、当社が当該書面を交付した時
                    に成立するものとします。
                  </p>
                </p>
                <p>
                  <p>（構成者の変更）</p>
                  <p>第二十一条</p>
                  <p>
                    1.
                    当社は、契約責任者から構成者の変更の申出があったときは、可能な限りこれに応じます。
                  </p>
                  <p>
                    2.
                    前項の変更によって生じる旅行代金の増加又は減少及び当該変更に要する費用は、構成者に帰属する
                    ものとします。
                  </p>
                </p>
                <p>
                  <p>（添乗サービス）</p>
                  <p>第二十二条</p>
                  <p>
                    1.
                    当社は、契約責任者からの求めにより、団体・グループに添乗員を同行させ、添乗サービス
                    を提供することがあります。
                  </p>
                  <p>
                    2.
                    添乗員が行う添乗サービスの内容は、原則として、あらかじめ定められた旅行日程上、団体・グルー
                    プ行動を行うために必要な業務とします。
                  </p>
                  <p>
                    3.
                    添乗員が添乗サービスを提供する時間帯は、原則として、八時から二十時までとします。
                  </p>
                  <p>
                    4.
                    当社が添乗サービスを提供するときは、契約責任者は、当社に対し、所定の添乗サービス料を支払わ
                    なければなりません。
                  </p>
                </p>
                <YellowTitle text='第六章責任' />
                <p>
                  <p>（当社の責任）</p>
                  <p>第二十三条</p>
                  <p>
                    1.
                    当社は、手配旅行契約の履行に当たって、当社又は当社が第四条の規定に基づいて手配を代
                    行させた者（以下「手配代行者」といいます。）が故意又は過失により旅行者に損害を与えたときは、
                    その損害を賠償する責に任じます。ただし、損害発生の翌日から起算して二年以内に当社に対して通知
                    があったときに限ります。
                  </p>
                  <p>
                    2.
                    旅行者が天災地変、戦乱、暴動、運送・宿泊機関等の旅行サービス提供の中止、官公署の命令その他
                    の当社又は当社の手配代行者の関与し得ない事由により損害を被ったときは、当社は、前項の場合を除
                    き、その損害を賠償する責任を負うものではありません。
                  </p>
                  <p>
                    3.
                    当社は、手荷物について生じた第一項の損害については、同項の規定にかかわらず、損害発生の翌日
                    から起算して、国内旅行にあっては十四日以内に、海外旅行にあっては二十一日以内に当社に対して通
                    知があったときに限り、旅行者一名につき十五万円を限度（当社に故意又は重大な過失がある場合を除
                    きます。）として賠償します。
                  </p>
                </p>
                <p>
                  <p>（旅行者の責任）</p>
                  <p>第二十四条</p>
                  <p>
                    1.
                    旅行者の故意又は過失により当社が損害を被ったときは、当該旅行者は、損害を賠償しなけ
                    ればなりません。
                  </p>
                  <p>
                    2.
                    旅行者は、手配旅行契約を締結するに際しては、当社から提供された情報を活用し、旅行者の権利義
                    務その他の手配旅行契約の内容について理解するよう努めなければなりません。
                  </p>
                  <p>
                    3.
                    旅行者は、旅行開始後において、契約書面に記載された旅行サービスを円滑に受領するため、万が一
                    契約書面と異なる旅行サービスが提供されたと認識したときは、旅行地において速やかにその旨を当社、
                    当社の手配代行者又は当該旅行サービス提供者に申し出なければなりません。
                  </p>
                </p>
              </div>
            </div>
            <div className='mb-5'>
              <Checkbox
                checked={agreeWith}
                onChange={(e) => setAgreeWith(e.target.checked)}>
                取引条件説明書面に記載の旅行条件および旅行手配のために必要な範囲内での運送・宿泊機関等その他への個人情報の提供について同意の上、上記の旅行に申し込みます。
              </Checkbox>
            </div>
            <div className='grid grid-cols-10 items-start gap-3'>
              <label className='col-span-3'>備考 </label>
              <TextArea
                rows={4}
                className='col-span-7'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <ButtonCtrl
            disabled1={false}
            onClick1={() => setCurrentStep((prev) => prev - 1)}
            onClick2={confirm}
          />
        </div>
      );
    } else if (currentStep === 3) {
      const sendEmail = async () => {
        const mainInfo = {
          firstname,
          lastname,
          firstnameFuri,
          lastnameFuri,
          birthday,
          region,
          sex,
          postalCode,
          prefecture,
          city,
          address,
          building,
          phone,
          mobile,
          profession,
          possession,
          contact,
          email,
          passportNumber,
          seat,
          arrangement,
          emContact,
          emContactFuri,
          emContactRel,
          emContactAddr,
          emContactPhone,
          foodAlergy,
          foodAlergyDetail,
          medicineAlergy,
          medicineAlergyDetail,
          smoking,
          travelExp,
          horseRideExp,
          agreeWith,
          vaccination,
          comment,
        };
        try {
          setIsLoading(true);
          const response = await fetch('/api/reserve', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mainInfo,
            }),
          });
          if (response.status === 200) {
            notification.success({
              message: 'Reservation Sent',
              description:
                'Your request is successfull. We will contact you as soon as possible',
            });
            setCurrentStep((prev) => prev + 1);
          } else {
            notification.error({
              message: 'Reservation Failed',
              description:
                'There was an error on your reservation. Please try again later.',
            });
          }
        } catch {
        } finally {
          setIsLoading(false);
        }
      };
      render = (
        <div>
          <h3 className='w-full flex justify-center text-3xl underline mb-2'>
            お客様情報
          </h3>
          <div className='bg-defaultGray p-5 mb-5'>
            <p>メールアドレス: {email}</p>
            <p>お名前: {firstname}</p>
            <p>フリガナ: {firstnameFuri}</p>
            <p>生年月日: {birthday}</p>
            <p>国籍: {region}</p>
            <p>パスポート上の性別 : {sex}</p>
            <p>郵便番号: {postalCode}</p>
            <p>都道府県: {prefecture}</p>
            <p>市区郡町村: {city}</p>
            <p>番地: {address}</p>
            <p>ビル名: {building}</p>
            <p>電話番号: {phone}</p>
            <p>携帯: {mobile}</p>
            <p>職業: {profession}</p>
          </div>
          <h3 className='w-full flex justify-center text-3xl underline mb-2'>
            ご旅行申込書
          </h3>
          <div className='bg-defaultGray p-5 mb-5'>
            <p>【パスポート】パスポート番号: {passportNumber}</p>
            <p>飛行機の座席希望: {seat}</p>
            <p>旅行保険の加入</p>
            <p>アレンジ希望: {arrangement}</p>
            <p>【緊急連絡先】氏名: {emContact}</p>
            <p>【緊急連絡先】ふりがな: {emContactFuri}</p>
            <p>【緊急連絡先】続柄: {emContactRel}</p>
            <p>【緊急連絡先】住所: {emContactAddr}</p>
            <p>【緊急連絡先】電話・携帯: {emContactPhone}</p>
            <p>食事への配慮・食物アレルギー: {foodAlergyDetail}</p>
            <p>薬アレルギー: {medicineAlergyDetail}</p>
            <p>喫煙の有無: {smoking}</p>
            <p>海外旅行経験: {travelExp}</p>
            <p>乗馬経験: {horseRideExp}</p>
            <p>
              新型コロナウイルス感染症ワクチンの接種回数をお知らせください:{' '}
              {vaccination}
            </p>
            <p>備考: {comment}</p>
            <p>ご旅行条件、個人情報提供に関する同意: {agreeWith}</p>
          </div>
          <ButtonCtrl
            disabled1={false}
            onClick1={() => setCurrentStep((prev) => prev - 1)}
            isLoading2={isLoading}
            onClick2={sendEmail}
          />
        </div>
      );
    } else if (currentStep === 4) {
      const finish = () => {
        router.push('/');
      };
      render = (
        <div>
          <div className='mb-5'>
            仮予約を受け付けました。ご⼊⼒いただき誠にありがとうございます。
            弊社が申込⾦（50,000）を受領した時点で、正式なご契約成⽴となります。⼀営業⽇以内に空席状況を確認し、担当者より連絡いたしますので、今しばらくお待ちいただきますようお願い申し上げます。
            仮予約をお受けした事をお知らせする⾃動返信メールをお送りします。
            ※⾃動返信メールが届かない場合、弊社で仮予約を確認できていない可能性がございます。お⼿数ですが、メールまたはお電話にてご⼀報ください。
          </div>
          <div className='mb-5'>
            <p>お電話でのお問い合わせ: 0000-0000</p>
            <p>メールでのお問い合わせ: sarantumen1@gmail.com</p>
          </div>
          <div className='w-full flex justify-center mb-5'>
            <div className='w-[50%]'>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <Image
                    alt='trip1'
                    src='/img/svg/trip1.svg'
                    height={'auto'}
                    preview={false}
                  />
                }>
                <Meta
                  title='乗馬 (6日間)'
                  description={
                    <Space direction='vertical' size='small'>
                      <p>出発日 4月28日～9月25日</p>
                      <p>旅行代金 259,000円- 319,000円</p>
                    </Space>
                  }
                />
              </Card>
            </div>
          </div>
          <ButtonCtrl
            disabled1={false}
            onClick1={() => setCurrentStep((prev) => prev - 1)}
            onClick2={finish}
            button2Text='完了'
          />
        </div>
      );
    }

    return (
      <div className='relative'>
        <Navbar />
        <div className='md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 mb-20 mt-5'>
          <BlueTitle text='仮予約ツアー確認' />
          <Steps current={currentStep} className='mb-10'>
            <Step title='仮予約ツアー確認' />
            <Step title='お客様情報の入力' />
            <Step title='同行者・ご旅行申込書の入力' />
            <Step title='入力内容の確認' />
            <Step title='仮予約完了' />
          </Steps>

          {render}
        </div>
        <Footer />
        <StickyContact />
      </div>
    );
  } else {
    return (
      <div className='relative h-[100vh]'>
        <Navbar />
        <div className='md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 mb-20 mt-5'>
          Trip not selected
        </div>
        <div className='absolute bottom-0 w-full'>
          <Footer />
        </div>
        <StickyContact />
      </div>
    );
    return null;
  }
};

export default Book;
