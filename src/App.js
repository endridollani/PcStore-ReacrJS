import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Favorites from "./components/pages/Favorites";
import ShoopingCart from "./components/pages/ShoopingCart";
import AddProductToDb from "./components/pages/AddProductToDb";
// import Header from "./components/Header";
// import Main from "./components/Main";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>;
        <Route path="/favorites"  element={<Favorites/>}/>;
        <Route path="/shoopingCart"  element={<ShoopingCart/>}/>;
        <Route path="/addProduct"  element={<AddProductToDb/>}/>;
      </Routes>
      <Footer/>

    </Router>
  </>
  );
}

export default App;
