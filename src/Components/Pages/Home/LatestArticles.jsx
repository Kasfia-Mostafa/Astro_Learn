import article1 from "../../../assets/Images/Article/article1.png";
import article2 from "../../../assets/Images/Article/article2.png";
import article3 from "../../../assets/Images/Article/atricle3.png";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      image: article1,
      title: "The Future of Digital Learning in 2025",
      date: "Dec 15, 2024",
      summary: "Explore how AI and immersive technologies are reshaping the way we consume educational content.",
    },
    {
      id: 2,
      image: article2,
      title: "Mastering the Art of Remote Instruction",
      date: "Dec 10, 2024",
      summary: "Key strategies for educators to keep online students engaged and motivated throughout the semester.",
    },
    {
      id: 3,
      image: article3,
      title: "Transitioning from Student to Professional",
      date: "Dec 05, 2024",
      summary: "How to leverage your online certifications to land your first high-paying role in tech.",
    }
  ];

  return (
    <section className="py-24 px-6 my-60" style={{ backgroundColor: 'var(--color-cornsilk)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Insights & <span style={{ color: 'var(--color-bronze)' }}>Expertise</span>
            </h2>
            <p className="text-lg text-slate-600">
              Stay ahead of the curve with our latest thoughts on education, technology, and career growth.
            </p>
          </div>
          <button
            className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:shadow-md"
            style={{ borderColor: 'var(--color-bronze)', color: 'var(--color-bronze)' }}
          >
            All Articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-beige rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110 bg-bronze"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: 'var(--color-papaya)', color: 'var(--color-bronze)' }}
                >
                  Education
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col grow">
                <span className="text-sm font-medium text-slate-400 mb-3">{article.date}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-bronze transition-colors"
                    style={{ color: 'var(--color-bronze)' }}>
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {article.summary}
                </p>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all"
                          style={{ color: 'var(--color-bronze)' }}>
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
