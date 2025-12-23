import React, { useState, useEffect } from "react";
import {
  HiOutlinePlay,
  HiChevronDown,
  HiChevronUp,
  HiStar,
  HiClock,
  HiAcademicCap,
  HiUsers,
  HiArrowRight
} from "react-icons/hi";
import { useLoaderData, useParams, Link } from "react-router";

const CourseDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const allCourses = data?.listing_page?.courses || [];
  const singleCourse = allCourses.find((course) => String(course.id) === String(id));

  const [activeTab, setActiveTab] = useState("Curriculum");
  const [openModule, setOpenModule] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!singleCourse) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-[--color-cornsilk]">
        <h2 className="text-3xl font-black text-gray-900">Course Not Found</h2>
        <Link to="/" className="text-[--color-bronze] font-bold flex items-center gap-2">
          Return to Catalog <HiArrowRight />
        </Link>
      </div>
    );
  }

  const {
    title,
    instructor,
    price,
    old_price,
    thumbnail,
    category,
    rating,
    reviews,
    duration,
    lessons,
    badge
  } = singleCourse;

  const relatedCourses = allCourses
    .filter((c) => c.category === category && String(c.id) !== String(id))
    .slice(0, 3);

  const tabs = ["Overview", "Curriculum", "Instructor", "FAQ", "Reviews"];
  const modules = [
    { title: "Module 1: Getting Started", lessons: ["Introduction", "Setup Environment", "Basic Syntax"] },
    { title: "Module 2: Intermediate Deep Dive", lessons: ["Core Architecture", "Data Handling", "Logic Flow"] },
    { title: "Module 3: Final Project & Deployment", lessons: ["Building the App", "Optimization", "Hosting"] },
  ];

  return (
    <div className="min-h-screen font-sans ">
      {/* --- HERO SECTION --- */}
      <div className="bg-teagreen py-16 border-b border-papaya">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                {badge && (
                  <span className="bg-bronze text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {badge}
                  </span>
                )}
                <span className="text-bronze text-sm font-bold uppercase tracking-widest">{category}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
                {title}
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Master industry-standard skills with <span className="font-bold">{instructor}</span>.
                This comprehensive course covers everything from fundamentals to advanced implementation.
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-bronze">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className={i < Math.floor(rating) ? "fill-current" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="font-black text-gray-900">{rating}</span>
                  <span className="text-gray-500 text-sm">({reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <HiUsers className="text-bronze text-lg" />
                  <span>25.4k+ Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-1/3"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- MAIN CONTENT --- */}
          <div className="flex-1">
            {/* TABS */}
            <div className="flex border-b border-papaya mb-10 overflow-x-auto no-scrollbar scroll-smooth">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => tab === "Curriculum" && setActiveTab(tab)}
                  className={`py-4 px-8 font-black text-sm transition-all whitespace-nowrap border-b-4 ${
                    activeTab === tab
                      ? "border-bronze text-bronze"
                      : "border-transparent text-gray-400 hover:text-bronze"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* CURRICULUM SECTION */}
            {activeTab === "Curriculum" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-gray-900">Course Content</h3>
                  <div className="text-sm font-bold text-bronze bg-papaya px-4 py-2 rounded-full">
                    {lessons} lessons • {duration} total length
                  </div>
                </div>

                <div className="space-y-4">
                  {modules.map((module, idx) => (
                    <div key={idx} className="border border-papaya rounded-3xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenModule(openModule === idx ? -1 : idx)}
                        className={`w-full flex justify-between items-center p-6 transition-all ${
                          openModule === idx ? "bg-cornsilk" : "bg-beige"
                        }`}
                      >
                        <span className="font-black text-gray-900 text-left">{module.title}</span>
                        {openModule === idx ? (
                          <HiChevronUp className="text-bronze text-xl" />
                        ) : (
                          <HiChevronDown className="text-gray-400 text-xl" />
                        )}
                      </button>

                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openModule === idx ? "max-h-250 opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <ul className="divide-y divide-papaya border-t bord-papaya">
                          {module.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} className="p-5 flex items-center justify-between hover:bg-[--color-beige]/20 group cursor-pointer">
                              <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-papaya flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-white transition-colors">
                                  <HiOutlinePlay />
                                </div>
                                <span className="text-sm font-bold text-gray-700">{lesson}</span>
                              </div>
                              <span className="text-xs font-mono text-gray-400">10:00</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --- STICKY SIDEBAR --- */}
          <aside className="w-full lg:w-[400px]">
            <div className="lg:sticky lg:top-10 bg-beige border border-papaya rounded-[40px] p-8 shadow-xl">
              <div className="relative rounded-4xl overflow-hidden mb-8 aspect-video group cursor-pointer">
                <img src={thumbnail} className="w-full h-full object-cover" alt={title} />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <HiOutlinePlay className="text-bronze text-2xl ml-1" />
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-black text-gray-900">
                  {price === 0 ? "Free" : `$${price}`}
                </span>
                {old_price > 0 && price < old_price && (
                  <span className="text-xl text-gray-400 line-through font-bold">${old_price}</span>
                )}
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 bg-bronze text-white font-black rounded-2xl text-lg hover:brightness-95 transition-all">
                  Enroll Now
                </button>
                <button className="w-full py-5 border-2 border-[--color-papaya] text-gray-900 font-black rounded-2xl text-lg hover:bg-cornsilk transition-all">
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-10 pt-10 border-t border-papaya space-y-5">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Course Features</h4>
                <div className="space-y-4">
                   {[
                     { icon: <HiClock />, text: `${duration} Content` },
                     { icon: <HiAcademicCap />, text: "Certificate of Completion" },
                     { icon: <HiOutlinePlay />, text: `${lessons} Downloadable Lessons` }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-gray-700 font-bold">
                       <div className="w-6 h-6 rounded-md bg-papaya flex items-center justify-center text-bronze">{item.icon}</div>
                       <span className="text-sm">{item.text}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* --- RELATED COURSES SECTION --- */}
      {relatedCourses.length > 0 && (
        <div className="bg-cornsilk/50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-black text-gray-900 mb-12">More in {category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="bg-beige p-6 rounded-4xl border border-papaya hover:shadow-xl transition-all group"
                >
                  <img src={course.thumbnail} className="w-full bg-teagreen object-cover rounded-2xl mb-6" alt={course.title} />
                  <span className="text-[10px] font-black textcolor-bronze uppercase tracking-widest">{course.category}</span>
                  <h4 className="font-black text-gray-900 mt-2 line-clamp-2 group-hover:text-bronze transition-colors">{course.title}</h4>
                  <div className="mt-6 pt-6 border-t border-cornsilk flex justify-between items-center">
                    <span className="font-black text-xl">${course.price}</span>
                    <span className="text-bronze font-black text-sm flex items-center gap-1">View Details <HiArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
