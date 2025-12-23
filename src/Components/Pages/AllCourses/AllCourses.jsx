import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import EachCourse from "./EachCourse";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";

const AllCourses = () => {
  const data = useLoaderData();
  const parsedData = typeof data === "string" ? JSON.parse(data) : data;

  const allCourses = parsedData?.listing_page?.courses || [];
  const categories = parsedData?.listing_page?.sidebar?.categories || [];
  const filters = parsedData?.listing_page?.sidebar?.filters || [];

  // --- 1. STATE MANAGEMENT ---
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({});
  const coursesPerPage = 6;

  // --- 2. FILTERING LOGIC ---
  const handleFilterChange = (groupLabel, option) => {
    setActiveFilters((prev) => {
      const currentGroup = prev[groupLabel] || [];
      const isSelected = currentGroup.includes(option);
      const newGroup = isSelected
        ? currentGroup.filter((item) => item !== option)
        : [...currentGroup, option];

      return { ...prev, [groupLabel]: newGroup };
    });
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  // Memoize filtered results for performance
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      return Object.entries(activeFilters).every(([label, selectedOptions]) => {
        if (!selectedOptions || selectedOptions.length === 0) return true;

        // Logic for "Level" or "Category"
        if (label === "Level") return selectedOptions.includes(course.level || course.category);

        // Logic for "Price"
        if (label === "Price") {
          if (selectedOptions.includes("Free")) return course.price === 0;
          if (selectedOptions.includes("Paid")) return course.price > 0;
        }
        return true;
      });
    });
  }, [allCourses, activeFilters]);

  // --- 3. PAGINATION CALCULATION ---
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header & View Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-black text-gray-900">
            Explore <span className="text-bronze">Courses</span>
          </h2>
          <p className="text-gray-500 mt-2">Showing {filteredCourses.length} courses</p>
        </div>

        <div className="flex items-center gap-4 bg-papaya p-1.5 rounded-xl">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-beige text-bronze shadow-sm" : "text-gray-400"}`}
          >
            <HiOutlineViewGrid size={22} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-beige text-bronze shadow-sm" : "text-gray-400"}`}
          >
            <HiOutlineViewList size={22} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* --- SIDEBAR (Left) --- */}
        <aside className="w-full lg:w-80 space-y-6">
          {filters.map((group, i) => (
            <div key={i} className="bg-papaya p-6 rounded-3xl border-teagreen">
              <h3 className="font-black text-gray-700 mb-4">{group.label}</h3>
              <div className="space-y-3">
                {group.options.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={activeFilters[group.label]?.includes(opt) || false}
                      onChange={() => handleFilterChange(group.label, opt)}
                      className="w-5 h-5 rounded border-gray-300 accent-bronze cursor-pointer"
                    />
                    <span className={`text-sm transition-colors ${activeFilters[group.label]?.includes(opt) ? "text-bronze font-bold" : "text-gray-600"}`}>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* --- COURSE GRID/LIST  --- */}
        <div className="flex-1">
          <div className={`grid gap-6 transition-all duration-500 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {currentCourses.map((item) => (
              <div key={item.id} className={viewMode === "list" ? "lg:flex lg:gap-6" : ""}>
                 <EachCourse courseInfo={item} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-teageen rounded-3xl">
              <p className="text-gray-500 font-bold">No courses match your selected filters.</p>
              <button onClick={() => setActiveFilters({})} className="text-bronze underline mt-2">Clear all filters</button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === i + 1 ? "bg-bronze text-white" : "bg-beige text-gray-400 hover:teeagreen hover:text-bronze"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
