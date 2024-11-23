import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation} from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
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
      spaceBetween={1} 
      slidesPerView={1} 
      loop={images.length > 1}
      pagination={{ clickable: true }}
      navigation 
      autoplay={{
        delay: 3000, // Tiempo entre transiciones
        disableOnInteraction: false, // Autoplay sigue después de interacción
      }}
      modules={[Pagination, Autoplay, Navigation]} 
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img 
            src={src} 
            alt={`Slide ${index + 1}`} 
            className=" w-full h-[300px] md:w-full md:h-[450px] object-cover rounded-lg "  
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
