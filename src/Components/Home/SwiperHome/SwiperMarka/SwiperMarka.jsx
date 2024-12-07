import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "./MarkaImages";
import "./SwiperMarka.css";

const SwiperMarka = () => {
  return (
    <Container className="justify-content-center mb-5">
      <Swiper
        freeMode={true}
        grabCursor={true}
        slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper position-relative py-3"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
      {images.map((image, index) => {
        return (
          <SwiperSlide
          key={index}
          className="border border-warning rounded-2"
          >
          <Link to="/showProduct" className="d-flex justify-content-center">
                <img
                  src={image}
                  alt="..."
                  style={{ width: "120px", height: "90px" }}
                />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default SwiperMarka;
