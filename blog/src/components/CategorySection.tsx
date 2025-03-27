import { Link } from "react-router-dom";

function CategorySection () {
  return(
    <div className="h-72 bg-sky-100 w-full relative text-center justify-center align">
      <div className="text-center relative   ">
          <h2 className="absolute left-2/4 top-32 text-4xl ">타이틀</h2>
      </div>
      <h3 className="float-right mr-4 mt-4 bg-lime-200 px-1.5 py-1.5  rounded-xl cursor-pointer">
      <Link to="/write">  새 글 작성
      </Link>
      </h3>
    </div>
  );
}


export default CategorySection;