import Image from "../assets/profile.jpg";
function Post() {
  return (
    <div className="grid grid-flow-col grid-cols-2 grid-template-columns: 1fr 200px; relative left-12 place-items-center; border-y py-4 border-gray-200  mt-10">
      <div className="flex flex-col ">
        <h3 className="text-3xl">Title</h3>
        <p className="mt-2">createTime / Category</p>
          <p className="mt-6 w-3/4 break-words">
            asdsadsadasdsadsadsadsadsadasdsadsdsadsadasdsadsadsadsadasdsa
          </p>
      </div>
      <img src={Image} alt="image" className="w-72 max-w-full object-contain flex-shrink-0" />
    </div>
  );
}

export default Post;
