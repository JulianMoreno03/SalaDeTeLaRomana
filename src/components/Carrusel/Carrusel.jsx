import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 

const Carousel = () => {
  const images = [
    '/ImgSlide02.webp',
    '/ImgSlide01.webp',
    '/ImgSlide03.webp',
    '/ImgSlide04.webp',
    '/ImgSlide05.webp',
  ];

  return (
    <Swiper
      spaceBetween={50} 
      slidesPerView={2} 
      loop={images.length > 1}
      pagination={{ clickable: true }}
      modules={[Pagination]} 
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img 
            src={src} 
            alt={`Slide ${index + 1}`} 
            className=" w-[250px] h-[300px] md:w-full md:h-[450px] object-cover rounded-lg "  
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
