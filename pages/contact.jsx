import { YellowButton } from '@/components/shared/Button';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import { BlueTitle } from '@/components/shared/Title';
import { Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';

const Contact = () => {
  const [lastName, setLastName] = useState('');
  const [lastNameFuri, setLastNameFuri] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameFuri, setFirstNameFuri] = useState('');
  const [isMale, setIsMale] = useState(true);
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [isMail, setIsMail] = useState(true);
  const [text, setText] = useState('');
  const [status, setStatus] = useState({
    lastName: { status: 'success', help: 'Please enter your last name' },
    firstName: { status: 'success', help: 'Please enter your first name' },
    email: {
      status: 'success',
      help: ['Please enter your email', "Email doesn't match"],
      idx: 0,
    },
  });

  const handleSend = async () => {
    let isNotValid = false;
    // Names validation
    [
      { value: lastName, name: 'lastName' },
      { value: firstName, name: 'firstName' },
    ].forEach((e) => {
      if (!e.value) {
        isNotValid = true;
        setStatus((prev) => {
          prev[e.name].status = 'error';
          return { ...prev };
        });
      } else {
        isNotValid = false;
        setStatus((prev) => {
          prev[e.name].status = 'success';
          return { ...prev };
        });
      }
    });
    if (isNotValid) {
      return;
    }
    // email validation
    if (!email) {
      return setStatus((prev) => {
        prev.email.status = 'error';
        prev.email.idx = 0;
        return { ...prev };
      });
    } else {
      setStatus((prev) => {
        prev.email.status = 'success';
        prev.email.idx = 0;
        return { ...prev };
      });
    }

    if (email !== email2) {
      return setStatus((prev) => {
        prev.email.status = 'error';
        prev.email.idx = 1;
        return { ...prev };
      });
    } else {
      setStatus((prev) => {
        prev.email.status = 'success';
        prev.email.idx = 0;
        return { ...prev };
      });
    }

    const mainInfo = {
      lastName,
      lastNameFuri,
      firstName,
      firstNameFuri,
      sex: isMale ? 'male' : 'female',
      email,
    };

    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        mainInfo,
        text: text,
        name: `${firstName} ${lastName}`,
      }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className='relative'>
      <Navbar />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20 mt-5'>
        <BlueTitle text='お問い合わせ' />
        <p className='text-orange-500 mb-5'>
          空席状況や日程など、なんでもお気軽にお問い合わせ下さい。一営業日以内に、折り返し弊社スタッフよりご連絡を差し上げます。
        </p>
        <Form
          className='bg-defaultGray p-5'
          labelCol={{
            span: 24,
          }}>
          <div className='grid grid-cols-2 gap-5'>
            <Form.Item
              label='お名前（姓）*'
              validateStatus={status.lastName.status}
              help={
                status.lastName.status !== 'success' && status.lastName.help
              }>
              <Input
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='フリガナ（姓）'>
              <Input
                placeholder='Last name (Furigana)'
                value={lastNameFuri}
                onChange={(e) => setLastNameFuri(e.target.value)}
              />
            </Form.Item>
          </div>
          <div className='grid grid-cols-2 mt-5 gap-5'>
            <Form.Item
              label='お名前（名）*'
              validateStatus={status.firstName.status}
              help={
                status.firstName.status !== 'success' && status.firstName.help
              }>
              <Input
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='フリガナ（名）'>
              <Input
                placeholder='First name (Furigana)'
                value={firstNameFuri}
                onChange={(e) => setFirstNameFuri(e.target.value)}
              />
            </Form.Item>
          </div>
          <Form.Item
            label='メールアドレス*'
            validateStatus={status.email.status}
            help={
              status.email.status !== 'success' &&
              status.email.help[status.email.idx]
            }>
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label='メールアドレス再入力*'
            validateStatus={status.email.status}
            help={
              status.email.status !== 'success' &&
              status.email.help[status.email.idx]
            }>
            <Input
              type='email'
              required
              placeholder='re-Email'
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
          </Form.Item>
          <div className='mt-5'>
            <Radio.Group
              value={isMale}
              onChange={(e) => setIsMale(e.target.value)}>
              <Radio value={true}>男性</Radio>
              <Radio value={false}>女性</Radio>
            </Radio.Group>
          </div>
          <div className='mt-5'>
            <span>電話番号 :</span>
            <span>MN</span>
            <span>0000-0000</span>
          </div>
          <div className='mt-5'>希望連絡方法</div>
          <Radio.Group
            className='mt-2'
            value={isMail}
            onChange={(e) => setIsMail(e.target.value)}>
            <Radio value={true}>Mail</Radio>
            <Radio value={false}>Phone</Radio>
          </Radio.Group>
          <Input.TextArea
            className='mt-5'
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='w-full flex justify-center mt-5'>
            <YellowButton
              type='submit'
              label='Send'
              onClick={handleSend}
              icon={false}
            />
          </div>
        </Form>
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
};
export default Contact;
