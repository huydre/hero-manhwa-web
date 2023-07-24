import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center space-x-4 justify-end">
      <button
        className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-black border-solid transition duration-300"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <div>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </button>
      <button
        className="text-white border-2 border-white p-2 rounded-full hover:bg-white hover:text-black border-solid transition duration-300"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavButton;
