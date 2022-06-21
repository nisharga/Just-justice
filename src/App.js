import "./App.css";
import Nav from "./Components/Shared/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element="{<SIGNUP />}" />
        <Route path="blogs" element="{<NewTBLOGSeamForm />}" />
        <Route path="about" element="{<ABOUT />}"></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
