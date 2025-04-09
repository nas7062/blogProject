import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostData } from '../components/PostLIst';
const PostDetail = () => {
  const { id } = useParams<{ id: string  }>();
  const [post,setPost] = useState<PostData | null>(null);
  const numId = Number(id);
  useEffect(()=> {
    axios
      .get(`http://localhost:8080/getPostById/${numId}`,{
        params:{numId},
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  },[])

  return (
    <div>
      {post? <p>{post.title}</p> : <div>"포스트 없음"</div>}
      
    </div>
  )
}

export default PostDetail
