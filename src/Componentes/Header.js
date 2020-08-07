import React from "react";
import Nav from "./nav";

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Nav />
        </div>
      </div>
    );
  }
}
export default Header;
