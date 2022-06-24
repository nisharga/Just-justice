import "./App.css";
import Nav from "./Components/Shared/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Signup from "./Components/Signup/Signup";
import Checkout from "./Components/Shared/Checkout/Checkout";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element={<Signup />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
