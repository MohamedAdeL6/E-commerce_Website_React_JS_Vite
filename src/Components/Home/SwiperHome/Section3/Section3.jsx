// Import Styles for Section3
import "./Section3.css";
// Import Images
import sectionImages from "./Section3Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { filterBrand } from "../../../../Store/Slices/ProductFilter";
import { useDispatch } from "react-redux";

const Section3 = () => {
  const dispatch = useDispatch();
  return (
    <div className="section3 container">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 30000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <Link to="/products">
          {sectionImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  to="/showProduct"
                  onClick={() =>
                    dispatch( filterBrand(image.split("/")[sectionImages.length].split(".")[0]) )
                  }
                >
                  <img src={image} alt="..." />
                </Link>
              </SwiperSlide>
            );
          })}
        </Link>
      </Swiper>
    </div>
  );
};

export default Section3;
