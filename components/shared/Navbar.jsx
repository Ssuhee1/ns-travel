import { Image } from 'antd';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';

const Navbar = () => {
  return (
    // md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 mb-20
    <div className='flex md:mx-24 px-5 lg:mx-48 xl:mx-64 2xl:mx-96 justify-between items-center h-[50px]'>
      <Link href='/'>
        <div className='flex w-full'>
          <Image
            src='/img/logo.jpg'
            height={40}
            preview={false}
            className='sm:mr-5'
          />
        </div>
      </Link>
      <NavbarMenu />
    </div>
  );
};
export default Navbar;
