import React from "react";

interface IProps {
  handleActive: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
const NavBar: React.FC<IProps> = ({ handleActive }) => {
  return (
    <div style={{ paddingTop: "0" }}>
      <nav
        className="uk-navbar-container uk-margin"
        uk-navbar="mode: click"
        style={{ backgroundColor: "white", paddingTop: "0" }}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li id="review" onClick={handleActive} style={{ width: "auto" }}>
              <a>review</a>
            </li>
            <li id="curation" onClick={handleActive}>
              <a>curation</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
