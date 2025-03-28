import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function PostWrite() {
  const sampleText = `
# 제목 테스트
**굵게**  
_기울임_  
- 리스트 1  
1. 순서 리스트  

| 제목1 | 제목2 |
| --- | --- |
| 내용1 | 내용2 |

\`\`\`js
console.log("Hello, world!");
\`\`\`
`;
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [text, setText] = useState<string>(sampleText);

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || category.trim() === "" || text.trim() === "") return;
    console.log(title, category, text);
    setTitle("");
    setCategory("");
    setText(sampleText);
  };
  return (
    <div className="grid grid-cols-2 h-screen border">
      <div className="border-r  flex flex-col gap-4 border-gray-500">
        <form action="" className="flex flex-col gap-4 border border-gray-300 p-10">
          <label htmlFor="">
            제목:{" "}
            <input
              type="text"
              className="w-5/6 border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            카테고리:
            <input
              type="text"
              className="w-5/6 border"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label htmlFor="">내용:</label>
          <textarea
            className="min-h-96 w-11/12 border"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className="flex">
          <span className=" text-center mx-auto text-white bg-green-300  w-28 px-4 py-2 rounded-md cursor-pointer">
            임시 저장
          </span>
          <span
            className=" text-center mx-auto text-white bg-green-300  w-32 px-4 py-2 rounded-md cursor-pointer"
            onClick={submitPost}
          >
            글 작성하기
          </span>
        </div>
      </div>
      <div className=" prose prose-lg w-11/12 min-h-5/6  m-4 bg-gray-100 overflow-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default PostWrite;
