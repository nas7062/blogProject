import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostData } from "../components/PostLIst";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const numId = Number(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getPostById/${numId}`, {
        params: { numId },
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);

  return (
    <div className="w-3/4 mx-auto border-gray-200 mt-10 border">
      {post ? (
        <div className="flex flex-col gap-2">
          <h1>{post.title}</h1>
          <span>{post.createdAt.slice(0,10)}</span>
          <span>{post.category}</span>
          <p><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown></p>
        </div>
      ) : (
        <div>"포스트 없음"</div>
      )}
    </div>
  );
};

export default PostDetail;
