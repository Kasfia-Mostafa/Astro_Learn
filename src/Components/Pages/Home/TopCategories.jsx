import React from "react";
import {
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineSpeakerphone,
  HiOutlineChartBar,
  HiOutlineDatabase,
} from "react-icons/hi";

const TopCategories = ({ data }) => {
  const parsedData = typeof data === "string" ? JSON.parse(data) : data;
  const categories = parsedData?.listing_page?.sidebar?.categories || [];

  // Helper to map category names to icons
  const getIcon = (name) => {
    switch (name) {
      case "Development":
        return <HiOutlineCode />;
      case "Design":
        return <HiOutlineColorSwatch />;
      case "Marketing":
        return <HiOutlineSpeakerphone />;
      case "Business":
        return <HiOutlineChartBar />;
      case "Data Science":
        return <HiOutlineDatabase />;
      default:
        return <HiOutlineCode />;
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with "All Categories" Button */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Top{" "}
              <span style={{ color: "var(--color-bronze)" }}>Categories</span>
            </h2>

            <p className="text-gray-500 mt-1">
              Explore our most popular subjects
            </p>
          </div>

          {/* Using your custom .button class here */}
          <button className="text-bronze font-semibold hover:underline">
            All Categories
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 bg-teagreen hover:bg-beige hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-center cursor-pointer"
            >
              <div className="text-4xl text-bronze mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {getIcon(cat.name)}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{cat.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{cat.count} Courses</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
