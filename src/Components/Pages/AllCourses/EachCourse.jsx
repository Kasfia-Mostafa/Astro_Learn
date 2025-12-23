
import { Link } from "react-router";
import ButtonTwo from "../../Buttons/ButtonTwo/ButtonTwo";

const EachCourse = ({ courseInfo }) => {
  if (!courseInfo) return null;

  return (
    <div className="bg-beige border border-gray-200 rounded-2xl p-4 flex flex-col hover:shadow-xl transition-all">
       <img src={courseInfo.thumbnail} className="rounded-xl h-96 object-cover bg-teagreen" alt="" />
       <div className="mt-4 grow">
          <span className="text-[10px] font-black text-bronze-600 uppercase tracking-widest">{courseInfo.category}</span>
          <h3 className="font-bold text-lg leading-tight mt-1 line-clamp-2">{courseInfo.title}</h3>
          <p className="text-sm text-gray-500 mt-2">By {courseInfo.instructor}</p>
       </div>
       <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold">${courseInfo.price}</span>
          <Link to={`/course/${courseInfo.id}`}>
          <ButtonTwo />
          </Link>
       </div>
    </div>
  );
};

export default EachCourse;
