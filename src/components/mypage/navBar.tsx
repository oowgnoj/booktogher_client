import React from "react";

interface IProps {
  handleActive: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
const NavBar: React.FC<IProps> = ({ handleActive }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li id="review" onClick={handleActive}>
              <a>나의 서평</a>
            </li>
            <li id="collection" onClick={handleActive}>
              <a>나의 컬렉션</a>
            </li>
            <li id="books" onClick={handleActive}>
              <a>내가 읽은 책</a>
            </li>
            <li id="memoAndHilight" onClick={handleActive}>
              <a>나의 메모 & 하이라이트</a>
            </li>
            <li id="likes" onClick={handleActive}>
              <a>좋아요</a>
            </li>
            <li id="stats" onClick={handleActive}>
              <a>통계</a>
            </li>
          </ul>
        </div>
      </nav>{" "}
    </div>
  );
};
export default NavBar;
