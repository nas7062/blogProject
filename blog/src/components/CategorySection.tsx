import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";
import { PostData } from "./PostLIst";
function CategorySection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState<string | null>("전체보기");

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    if (id) {
      const fetchTitle = async () => {
        try {
          const response = await axios.get<PostData>(`http://localhost:8080/getPostById/${id}`);
          setTitle(response.data.title);
        } catch (error) {
          console.error("제목 불러오기 실패", error);
        }
      };

      fetchTitle();
    } else {
      setTitle("전체보기");
    }
  }, [id]);
  return (
    <div className="h-72 bg-sky-100 w-full relative text-center justify-center align">
      <div className="text-center relative   ">
        <h2 className="absolute  left-1/2 top-32 text-4xl  transform -translate-x-1/2">
          {category ? category : title ? title : `전체보기`}
        </h2>
      </div>
      <h3 className="float-right mr-4 mt-4 bg-lime-200 px-1.5 py-1.5  rounded-xl cursor-pointer">
        <Link to="/write"> 새 글 작성</Link> : <p onClick={() => setIsOpen(true)}>로그인</p>
      </h3>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default CategorySection;
