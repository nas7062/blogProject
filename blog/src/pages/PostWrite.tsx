import { useState } from "react";
import ReactMarkdown from "react-markdown";
function PostWrite() {
  const [text, setText] = useState<string >("");

  return (
    <div className="flex">
      <div className="w-5/6 mx-auto border ">
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="">
            제목: <input type="text" className="w-2/5" />
          </label>
          <label htmlFor="">
            카테고리:
            <input type="text" className="w-2/5" />
          </label>
          <label htmlFor="">내용:</label>
          <textarea
            className="min-h-96 w-2/5"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <button>글 작성하기</button>
      </div>
      <div className="w-1/2 h-screen p-4 bg-gray-100 overflow-auto">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default PostWrite;
