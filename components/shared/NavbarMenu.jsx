import {
  CoffeeOutlined,
  CompassOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
const items = [
  {
    label: 'サイトについて',
    key: 'overview',
    icon: <CompassOutlined />,
    children: [
      {
        label: <Link href='/about'>会社概要</Link>,
        key: 'overview:1',
      },
      {
        label: <Link href='/travel_condition'>旅行条件、旅行業約款等</Link>,
        key: 'overview:2',
      },
      {
        label: <Link href='/policy'>プライバシーポリシー</Link>,
        key: 'overview:3',
      },
      {
        label: <Link href='/contact'>お問い合わせ</Link>,
        key: 'overview:4',
      },
    ],
  },
  {
    label: 'ツアー',
    key: 'trip',
    icon: <TeamOutlined />,
    children: [
      {
        label: <Link href='/trip/1'>乗馬 (6日間)</Link>,
        key: 'trip:1',
      },
      {
        label: <Link href='/trip/2'>遊牧生活 (5日間)</Link>,
        key: 'trip:2',
      },
    ],
  },
  {
    label: 'ブログ',
    key: 'blog',
    icon: <CoffeeOutlined />,
    children: [
      {
        label: <Link href='/blog/ger'>モンゴルのゲル</Link>,
        key: 'blog:1',
      },
      {
        label: <Link href='/blog/food'>モンゴル料理</Link>,
        key: 'blog:2',
      },
    ],
  },
];
const NavbarMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      className='bg-transparentw-0 w-10 md:flex md:w-full md:justify-end border-none'
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};
export default NavbarMenu;
