import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
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

  useEffect(() => {
    axios
      .get("http://localhost:8080/getPost") // 게시글 데이터 가져오기
      .then((response) => {
        setPosts(response.data); // 상태 업데이트
        console.log(response.data);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);
  return(
    <div className="mt-10">
    {posts.length === 0 ? (
      <p className="text-center text-gray-500">게시글이 없습니다.</p>
    ) : (
      posts.map((post) => <Post key={post.id} post={post} />) // Post 컴포넌트로 전달
    )}
  </div>
  );
}

export default PostList;