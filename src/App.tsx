import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const App = () => {
  return (
    <div>
      <Routes>
       
         <Route path="/" element={<Login />} />
 <Route path="/home" element={<Home />} />
  <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
};

export default App;
