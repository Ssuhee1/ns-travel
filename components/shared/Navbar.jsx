import { Image } from 'antd';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex md:mx-20 px-5 lg:mx-40 justify-between items-center h-[50px]'>
      <Link href='/'>
        <div className='flex w-full'>
          <Image
            src='/img/svg/logo.svg'
            height={40}
            preview={false}
            className='sm:mr-5'
          />
          <Image
            src='/img/svg/logo-text-blue.svg'
            height={40}
            preview={false}
            className='mr-5'
          />
        </div>
      </Link>
      <NavbarMenu />
    </div>
  );
};
export default Navbar;
