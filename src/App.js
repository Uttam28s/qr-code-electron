import React from "react";
import { BrowserRouter, Route,Routes, HashRouter } from "react-router-dom";
import routes from "./routes";
import Index from "./Componants/Index"


function App() {
  return (
    <HashRouter>
    <Routes>
        <Route  path={"/"} element={<Index/>} />
      
        </Routes>
  </HashRouter>
  );
}

export default App;
