import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { useLocation } from "react-router-dom";
export interface PostData {
  id: number;
  title: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function PostList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  useEffect(() => {
    const url = category
      ? `http://localhost:8080/getPostByCategory/${category}`
      : "http://localhost:8080/getAllPost";
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, [category]);
  return (
    <div className="mt-10">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 prose prose-lg">게시글이 없습니다.</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />) // Post 컴포넌트로 전달
      )}
    </div>
  );
}

export default PostList;
