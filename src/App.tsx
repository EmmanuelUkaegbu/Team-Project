import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import CoursePage from "./Pages/CoursePage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
