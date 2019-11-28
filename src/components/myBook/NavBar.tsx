import React from "react";

interface IProps {
  handleActive: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
const NavBar: React.FC<IProps> = ({ handleActive }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <nav
        className="uk-navbar-container uk-margin"
        uk-navbar="mode: click"
        style={{ backgroundColor: "white" }}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li id="to_read" onClick={handleActive} style={{ width: "100px" }}>
              <a>to read</a>
            </li>
            <li id="reading" onClick={handleActive}>
              <a>reading</a>
            </li>
            <li id="finished" onClick={handleActive}>
              <a>finished</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
