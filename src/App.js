import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-full">
        <Navbar />
        <Hero />
        <ContactUs />
        <Footer />
      </div>
      <Routes>
        {/* <Route path='/' element={<Hero />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
