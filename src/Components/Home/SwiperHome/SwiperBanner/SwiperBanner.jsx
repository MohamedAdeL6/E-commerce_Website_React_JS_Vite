import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import images from "./BannerImages";
import "./SwiperBanner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperBanner = () => {
  return (
    <Container>
      <div className="banner_container">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 30000000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <Link to="/products">
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="img-box">
                    <img src={image} alt="..." style={{ width: "100%" }} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Link>
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperBanner;
