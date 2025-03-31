import { Link } from "react-router-dom";
import ProfileImage from "../assets/profile.jpg";
interface SideBarProps {
  categories: { category: string; postCount: number }[];
}
function SideBar({ categories }:SideBarProps ) {
  return (
    <div className="max-w-64 bg-green-200 h-screen sticky top-0 float-left">
      <div className="w-3/5 mx-auto text-center ">
        <img src={ProfileImage} alt="text" className="mt-44 border-r-0 rounded-full" />
        <p className="mt-4">프론트엔드 개발자</p>
        <p className="mt-2">
          <Link to="/">10012</Link>
        </p>
        <div className="mt-4">
          <span>전체 10</span>
          <span className="ml-10">오늘 5</span>
        </div>
      </div>
      <div className="mt-10 w-4/5 mx-auto">
        <p><Link to="/">카테고리(전체)</Link></p>
        <ul className="flex flex-col gap-4 mt-4">
          {categories.map((category, idx) => (
            <li key={idx} className="cursor-pointer">
              <Link to={`/?category=${category.category}`}>
                {category.category} ({category.postCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
