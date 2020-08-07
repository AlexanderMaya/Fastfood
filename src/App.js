import React from "react";
import "./styles.css";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import section from "./Componentes/section";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Main />
      <section />
    </div>
  );
}
