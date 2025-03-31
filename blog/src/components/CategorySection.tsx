import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategorySection() {
  const [login, setlogin] = useState<boolean>(true);
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  const category = queryParams.get("category");
  return (
    <div className="h-72 bg-sky-100 w-full relative text-center justify-center align">
      <div className="text-center relative   ">
        <h2 className="absolute  left-1/2 top-32 text-4xl  transform -translate-x-1/2">{category ? category :`전체보기`}</h2>
      </div>
      <h3 className="float-right mr-4 mt-4 bg-lime-200 px-1.5 py-1.5  rounded-xl cursor-pointer">
        {login ? <Link to="/write"> 새 글 작성</Link> : <p>로그인</p>}
      </h3>
    </div>
  );
}

export default CategorySection;
