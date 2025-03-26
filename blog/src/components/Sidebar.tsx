import ProfileImage from "../assets/profile.jpg";
function SideBar() {
  return (
    <div className="max-w-80 bg-green-200 h-screen sticky top-0 float-left">
      <div className="w-3/5 mx-auto text-center ">
        <img src={ProfileImage} alt="text" className="mt-44 border-r-0 rounded-full" />
        <p className="mt-4">프론트엔드 개발자</p>
        <p className="mt-2">10012</p>
        <div className="mt-4">
          <span>전체 10</span>
          <span className="ml-10">오늘 5</span>
        </div>
      </div>
      <div className="mt-10 w-4/5 mx-auto">
        <p>카테고리(전체개수)</p>
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <span>title</span>
            <span>(1)</span>
          </li>
          <li>
            <span>title</span>
            <span>(1)</span>
          </li>
          <li>
            <span>title</span>
            <span>(1)</span>
          </li>
          <li>
            <span>title</span>
            <span>(1)</span>
          </li>
          <li>
            <span>title</span>
            <span>(1)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
