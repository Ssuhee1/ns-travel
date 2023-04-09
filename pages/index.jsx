import Blog from '@/components/home/Blog';
import HomeCarousel from '@/components/home/Carousel';
import MongoliaInfo from '@/components/home/MongoliaInfo';
import Overview from '@/components/home/Overview';
import Trip from '@/components/home/Trip';
import Navbar from '@/components/shared/Navbar';
import StickyContact from '@/components/shared/StikcyContact';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <HomeCarousel />
      <div className='md:mx-20 px-5 lg:mx-40 mb-20'>
        <Overview />
        <MongoliaInfo />
        <Trip />
        <Blog />
      </div>
      <Footer />
      <StickyContact />
    </div>
  );
}
