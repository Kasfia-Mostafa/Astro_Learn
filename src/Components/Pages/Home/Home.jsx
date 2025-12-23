import { useLoaderData } from "react-router";
import AcademyCTA from "./AcademyCTA";
import Banner from "./Banner";
import FeaturedCourses from "./FeaturedCourses";
import Highlight from "./Highlight";
import LatestArticles from "./LatestArticles";
import Testimonials from "./Testimonials";
import TopCategories from "./TopCategories";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      <Banner />
      <TopCategories data={data} />
      <FeaturedCourses data={data} />
      <Highlight />
      <Testimonials />
      <AcademyCTA />
      <LatestArticles />
    </div>
  );
};

export default Home;
