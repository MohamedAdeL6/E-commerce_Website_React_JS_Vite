// import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// import { FreeMode, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductCard from "../SwipersCard/ProductCard";




const SwiperLaptop = () => {

  const products = useSelector(products => products.CardSystem)

  const Laptops = products.filter((laptop) => {
    return laptop.category === "laptops";
  });

  return (
    <Container className="justify-content-center">
      <div className="shadow" >
        <Swiper
          freeMode={true}
          grabCursor={true}
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
          }}
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
          {Laptops.map((product) => {
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

export default SwiperLaptop;

