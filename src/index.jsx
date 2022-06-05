import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hooks.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Useparams from "./Hooks/Useparams";
import UseContext from "./Hooks/UseContext";
// import UseEffect from "./Hooks/UseEffect"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        {/* useParams */}
        {/* <Route path="/book/:name/:id" element={<Useparams />} /> */}
        {/* useEffect */}
        {/* <Route path="/" element={<UseEffect/>}/> */}
        {/* useContext */}
        <Route path="/" element={<UseContext/>}/>
      </Routes>
    </BrowserRouter>
  </>
);
