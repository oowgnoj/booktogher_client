import React from "react";

const GoalModal: React.FC = () => {
  return (
    <div>
      <div className="Modal-overlay">
        <div className="Modal">
          <p className="title">
            <input
              type="text"
              className="search-box"
              placeholder="책 제목을 입력해 주세요"
            ></input>
            <button>검색</button>
          </p>

          <div className="content"></div>
          <div className="button-wrap">
            <button> Confirm </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalModal;
