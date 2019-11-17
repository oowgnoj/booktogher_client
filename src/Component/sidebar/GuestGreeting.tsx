import React, { ReactElement } from "react";

const GuestGreeting: React.SFC = (): React.ReactElement => {
  return (
    <div className="sidebar_guest">
      <button>로그인</button>
      <button>회원가입</button>
      <button>홈</button>
    </div>
  );
};

export default GuestGreeting;
