import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import { useGetCategoriesQuery } from "../../../store/servicesGadgets";
import "./CategorySlider.css";


const CategorySlider  = () => {
  const swiperRef = useRef(null);
  const { data, isFetching } = useGetCategoriesQuery();
  // console.log(data);

  if (isFetching) return "Loading .....";

  const params = {
    slidesPerView: 6,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    loop: true,
    autoplay: true,
  };

  const responsiveParams = {
    320: {
      slidesPerView: 5,
      spaceBetween: 15,
      initialSlide: 0,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
      initialSlide: 1,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
      initialSlide: 3,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 50,
      initialSlide: 3,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 60,
      initialSlide: 4,
    },
    1920: {
      slidesPerView: 8,
      spaceBetween: 70,
      initialSlide: 5,
    },
  };

  return (
    <div>
      <div className="cp-section-home banner-spacing">
        <div className="scroll-banner">
          <div className="sec-cont">
            <div className="swiper-container ">
              <div className="swiper-wrapper">
                <Swiper
                  {...params}
                  ref={swiperRef}
                  breakpoints={responsiveParams}
                >
                  {data?.map((slide, id) => (
                    <div
                      key={id}
                      className="swiper-slide"
                      style={{ width: "98.2353px", marginRight: "10px" }}
                    >
                      <Link to={`/ProCategory/${slide.categories}`}>
                        <img
                          src={slide.CategoryImage}
                          alt="#"
                          loading="lazy"
                          className="lazy-load-image-background blur"
                          style={{
                            color: "transparent",
                            display: "inline-block",
                          }}
                        />
                      </Link>
                      <div className="category-name">{slide.categories}</div>
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySlider;