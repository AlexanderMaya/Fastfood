import React from "react";
import Carrusel from "./carrusel";
import Cards from "./cards";
class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Carrusel />
          <Cards />
        </div>
      </div>
    );
  }
}
export default Main;
