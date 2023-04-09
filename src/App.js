import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import Header from "./component/Header"
import AppNavbar  from "./component/AppNavbar";


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <AppNavbar/>
        
      </div>
    </>
  );
}

export default App;

