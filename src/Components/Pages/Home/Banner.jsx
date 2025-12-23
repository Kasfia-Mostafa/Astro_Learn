import React from "react";
import robotImage from "../../../assets/Images/robot.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-145"></div>
      <div className="relative">
        <section>
          <div className="max-w-7xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center justify-between">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-bronze text-white">
                  News
                </span>
                <p className="flex items-center">
                  Read the launch post from here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="font-bold text-4xl text-bronze font-press">
                The Classroom{" "}
                <span className="text-teagreen"> That Fits in </span>
                <span className="text-beige"> Your Pocket</span>
              </h1>
              <p className="text-gray-600 text-[25px]">
                Bridge the Gap Between Where You Are and Where You Want to Be.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 font-medium bg-teagreen duration-150 hover:text-gray-600 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Join now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img src={robotImage} alt="Robot" className="max-w-xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
