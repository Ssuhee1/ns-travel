import { Carousel, Image } from 'antd';
import CarouselImg from '../shared/CarouselImg';
const images = [
  'img/svg/home1.svg',
  'img/svg/home2.svg',
  'img/svg/home3.svg',
  'img/svg/home4.svg',
];

const HomeCarousel = () => {
  return (
    <Carousel autoplay className='absolute left-0 right-0'>
      {images.map((src) => (
        <CarouselImg src={src} />
      ))}
    </Carousel>
  );
};
export default HomeCarousel;
