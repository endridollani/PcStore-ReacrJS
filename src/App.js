import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>;
      </Routes>
      <Footer/>

    </Router>
  </>
  );
}

export default App;
