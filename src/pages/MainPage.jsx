// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const MainPage = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className="mySwiper"
  >
      <SwiperSlide className="slide" style={{ backgroundImage: "url('https://swiperjs.com/demos/images/nature-1.jpg')" }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: "url('https://swiperjs.com/demos/images/nature-2.jpg')" }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: "url('https://swiperjs.com/demos/images/nature-3.jpg')" }}></SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: "url('https://swiperjs.com/demos/images/nature-4.jpg')" }}></SwiperSlide>
  </Swiper>
  )
}

export default MainPage