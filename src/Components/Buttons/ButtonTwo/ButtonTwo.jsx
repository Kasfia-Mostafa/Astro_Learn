import React from "react";

const ButtonTwo = () => {
  return (
    <div>
      <button class="cursor-pointer group relative bg-teagreen hover:bg-beige text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12">
        <div class="relative flex items-center justify-center gap-2">
          <span class="relative inline-block overflow-hidden">
            <span class="block transition-transform duration-300 group-hover:-translate-y-full">
              See Details
            </span>
            <span class="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              Right Now
            </span>
          </span>

          <svg
            class="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
            viewBox="0 0 24 24"
          >
            <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="white"
              d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ButtonTwo;
