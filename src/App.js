import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreelanceMarketplace from "./pages/Home";
import FindWork from "./pages/findwork";
import Error from "./pages/Error";
import "./App.css";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<FreelanceMarketplace />} />
            <Route exact path="/find-work" element={<FindWork />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;