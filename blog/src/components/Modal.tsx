import React from "react";

interface ModalProps {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({onClose}) =>{
  const handleBackgroundClick = () => {
    onClose(); // 배경 클릭하면 모달 닫힘
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 모달 내부 클릭은 닫힘 방지
  };

  return (
    <div className="w-full h-screen bg-gray-100 relative " onClick={handleBackgroundClick}>
      <div onClick={handleModalClick} className="absolute w-96 h-72 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-6">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-2xl mt-10">로그인</h2>
          <div className="w-80">
            <label htmlFor="">이메일:</label>
            <input type="text" className="border w-64" />
          </div>
          <div className="w-80">
            <label htmlFor="">비밀번호:</label>
            <input type="password" name="" id="" className="border w-60" />
          </div>
          <button className="bg-lime-400 hover:bg-lime-500 text-white py-2 rounded mt-2">로그인하기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
