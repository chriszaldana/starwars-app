import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import Bg1 from '../images/BGimg1.jpg'
import Bg2 from '../images/BGimg2.jpg'
import Bg3 from '../images/BGimg3.jpg'
import Bg4 from '../images/BGimg4.jpg'
import { Box } from '@chakra-ui/react';


const MainPage = () => {
  return (
    <>
    <Box>
    <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 5000, 
      disableOnInteraction: false, 
    }}
    className="mySwiper"
  >
      <SwiperSlide className="slide" style={{ backgroundImage: `url(${Bg1})` }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: `url(${Bg2})` }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: `url(${Bg3})` }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: `url(${Bg4})` }}></SwiperSlide>
  </Swiper>
    </Box>
      
    </>
    
  )
}

export default MainPage