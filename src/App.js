import "./App.css";
import Home from "./components/Home";
import Blogs from "./components/Blog";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notfound from "./components/404";
import { Navigate } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>{" "}
        <Route path="/about" element={<About />}>
          {" "}
        </Route>{" "}
        <Route path="/blogs" element={<Blogs />}>
          {" "}
        </Route>{" "}
        <Route path="" element={<About />}>
          {" "}
        </Route>{" "}
        <Route path="*" element={<Notfound />}>
          {" "}
        </Route>{" "}
        <Route path="/home" element={<Navigate to="/" />}>
          {" "}
        </Route>{" "}
        <Route path="/info" element={<Navigate to="/about" />}>
          {" "}
        </Route>{" "}
        <Route path="/blog/:id" element={<Detail />}>
          {" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
