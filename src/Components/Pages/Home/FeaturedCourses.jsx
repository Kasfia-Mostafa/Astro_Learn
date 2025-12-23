import React from "react";
import ButtonOne from "../../Buttons/ButtonOne/ButtonOne";
import { Link } from "react-router";

const FeaturedCourses = ({ data }) => {
  const parsedData = typeof data === "string" ? JSON.parse(data) : data;
  const courses = parsedData?.listing_page?.courses || [];

  if (courses.length === 0) {
    return <div className="text-center py-20">Loading Featured Courses...</div>;
  }

  return (
    <section className="py-60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Featured{" "}
              <span style={{ color: "var(--color-bronze)" }}>Courses</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Hand-picked selections from our top instructors
            </p>
          </div>
          <button className="text-bronze font-semibold hover:underline">
            View All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="group bg-teagreen border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* 1. Course image/thumbnail */}
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full bg-beige object-cover group-hover:scale-105 transition-transform duration-500 p-5"
                />
                {/* 2. Category tag */}
                <span className="absolute top-4 left-4 bg-bronze backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {course.category}
                </span>
              </div>

              <div className="p-6">
                {/* 3. Title of the course */}
                <h3 className="text-xl font-bold text-gray-700 line-clamp-2 h-14">
                  {course.title}
                </h3>

                {/* 4. Author/instructor name */}
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  by{" "}
                  <span className="text-gray-900 font-medium">
                    {course.instructor}
                  </span>
                </p>

                {/* 5. Meta-info */}
                <div className="flex items-center justify-between mt-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <span className="flex items-center gap-1">
                      🕒 {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      👥 {course.reviews}+ students
                    </span>
                  </div>

                  {/* Price/Badge logic */}
                  <div className="text-right">
                    {course.price === 0 ? (
                      <span className="text-bronze font-bold">Free</span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                          ${course.price}
                        </span>
                        {course.old_price > 0 && (
                          <span className="text-xs text-gray-400 line-through">
                            ${course.old_price}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* 6. Call to action */}
                <Link to={`/course/${course.id}`}>
                <ButtonOne />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
