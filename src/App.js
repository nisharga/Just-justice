import "./App.css";
import Nav from "./Components/Shared/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import NotFound from "./Components/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element="{<SIGNUP />}" />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
