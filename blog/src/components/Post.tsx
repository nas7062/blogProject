import Image from "../assets/profile.jpg";
function Post() {
  return (
    <div className=" w-4/6 mx-auto border-t border-b py-4 border-gray-200 flex justify-between mt-10">
      <div className="flex flex-col ">
        <h3 className="text-3xl">Title</h3>
        <p className="mt-2">createTime / Category</p>
          <p className="mt-6 w-3/4 break-words">
            asdsadsadasdsadsadsadsadsadasdsadsadasdsadsadsadsadsadasdsadsadasdsadsadsadsadsadasdsadsadasdsadsadsadsadsad
          </p>
      </div>
      <img src={Image} alt="image" className="w-72 max-w-full object-contain flex-shrink-0" />
    </div>
  );
}

export default Post;
