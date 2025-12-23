import highlightImage from "../../../assets/Images/highlight.png";

const Highlight = () => {
  const stats = [
    {
      data: "50K+",
      title: "Active Students",
    },
    {
      data: "1.2K+",
      title: "Expert Instructors",
    },
    {
      data: "94%",
      title: "Student Satisfaction",
    },
    {
      data: "24/7+",
      title: "Mentor Support",
    },
  ];

  return (
    <section className="py-14 my-60">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src={highlightImage}
            alt="highlightImage"
            className="rounded-lg"
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Master the Skills That Matter Today
            </h3>
            <p className="mt-3 max-w-xl">
              Join over 50,000 learners gaining practical expertise from
              industry leaders. Your next career breakthrough starts with a
              single click
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-bronze font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
