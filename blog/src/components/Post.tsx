import Image from "../assets/profile.jpg";
import { PostData } from "./PostLIst";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function Post({post}:{post:PostData}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString().substring(0,20);
  };
  return (
    <div className="grid grid-cols-[0.5fr_2fr_1fr] border-y py-4 border-gray-200  mt-10">
      <div>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-3xl font-bold">{post.title}</h3>
        <p className="mt-2">{formatDate(post.createdAt)} / {post.category}</p>
          <p className="mt-6 w-3/4 break-words text-xs font-thin">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content.length >100 ? post.content.slice(0,100)+`...` : post.content}
            </ReactMarkdown>
          </p>
      </div>
      
      <img src={Image} alt="image" className="w-72 max-w-full object-contain flex-shrink-0 min-h-72" />
    </div>
  );
}

export default Post;
