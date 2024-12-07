import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductCard from "../SwipersCard/ProductCard";
import { useSelector } from "react-redux";

const SwiperMobile = () => {
  const products = useSelector((products) => products.CardSystem);

  const mobilesPhone = products.filter((mobile) => {
    return mobile.category === "mobiles";
  });

  return (
    <Container className=" justify-content-center">
      <div>
        <Swiper
          freeMode={true}
          grabCursor={true}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          className="mySwiper py-2"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1399: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {mobilesPhone.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperMobile;
