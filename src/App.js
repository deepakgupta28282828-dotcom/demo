import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/outus/AboutUs";
import Services from "./pages/services/Services";
import ContactUs from "./pages/contactus/ContactUs";
import CaseStudies from "./pages/caseStudies/CaseStudies";
import Careers from "./pages/careers/Career";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}

export default App;
