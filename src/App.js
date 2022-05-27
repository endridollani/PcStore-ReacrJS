import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import ShoopingCart from "./components/pages/ShoopingCart";
import AddProductToDb from "./components/pages/AddProductToDb";
import AddCategory from "./components/pages/AddCategory";
import AddSubCategory from "./components/pages/AddSubCategory";
import ProductsByCategory from "./components/pages/ProductsByCategory";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />;
          <Route path="/shoopingCart" element={<ShoopingCart />} />;
          <Route path="/addProduct" element={<AddProductToDb />} />;
          <Route path="/addCategory" element={<AddCategory />} />;
          <Route path="/addSubCategory" element={<AddSubCategory />} />;
          <Route
            path="/products/cat/:categoryId"
            element={<ProductsByCategory />}
          />
          ;
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
