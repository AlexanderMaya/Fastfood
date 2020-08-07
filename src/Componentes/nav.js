import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" id="active" href="#cards">
            Comidas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="link" href="#horarios">
            Horarios
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="link" href="#contactanos">
            Contactanos
          </a>
        </li>
      </ul>
    );
  }
}
export default Nav;
