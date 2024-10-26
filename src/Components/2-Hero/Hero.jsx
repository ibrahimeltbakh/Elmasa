import "./Hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import img1 from "../../imgs/1.webp";
import img2 from "../../imgs/2.webp";
import img3 from "../../imgs/3.webp";
const sliderData = [{ img: img1 }, { img: img2 }, { img: img3 }];
export default function Hero({ href }) {
  return (
    <Box className="hero ">
      <Box>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1} // Set this to 1 for one slide at a time
          spaceBetween={30} // Adds spacing between slides
          autoplay={{
            delay: 5000, // 3 seconds delay
            disableOnInteraction: false, // keep autoplay even when user interacts
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper">
          {sliderData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img style={{ width: "100%" }} src={item.img} alt="banner" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <a href={href} className="go-down">
        <KeyboardDoubleArrowDownOutlinedIcon
          fontSize="large"
          className="icon"
        />
      </a>
    </Box>
  );
}
// Add prop validation
Hero.propTypes = {
  href: PropTypes.string.isRequired, // Ensures 'href' is a required string
  children: PropTypes.node,
};
