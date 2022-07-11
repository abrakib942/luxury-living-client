import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useQuery } from "react-query";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery("testimonials", () =>
    fetch("testimonial.json").then((res) => res.json())
  );

  return (
    <div
      style={{
        background: "#F6F6F6",
      }}
      className="lg:p-32"
    >
      <h2 className="text-center text-secondary font-bold text-3xl mb-12">
        Testimonials
      </h2>

      <Swiper
        // install Swiper modules

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide className="">
            <div className="card w-80 gap-2 bg-base-100 shadow-xl mb-12 p-5">
              <div className="flex items-center">
                <div className="w-12 mr-3">
                  <img src={testimonial.img} alt="" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{testimonial.name}</h2>
                  <p className="font-semibold text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p>{testimonial.description}</p>
              <Rating
                initialRating={testimonial.rating}
                fullSymbol={
                  <FontAwesomeIcon icon={faStar} className="text-[#FFAC0C]" />
                }
                emptySymbol={
                  <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                }
                readonly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
