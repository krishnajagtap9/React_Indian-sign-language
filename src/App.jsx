import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Predict from "./pages/Predict"
import TextToSign from "./pages/TextToSign"
import Tutorial from "./pages/Tutorial"
import Contact from "./pages/Contact"
import FloatingButton from "./components/FloatingButton"
import { ThemeProvider } from "./components/ThemeProvider"
import ScrollToTop from "./ScrollToTop";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false     // Animation runs every time, including on refresh
    });
    AOS.refresh();    // Optional: refresh AOS when component loads
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vanni-theme">
      <Router>
      <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="/text-to-sign" element={<TextToSign />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/documentation" element={<DocumentationPage />} />
            </Routes>
            <FloatingButton />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}


