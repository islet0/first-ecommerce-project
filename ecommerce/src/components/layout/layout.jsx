import Navbar from "./navbar";
import Footer from "./footer";
import Homepage from "../../pages/hompage";
import AboutPage from "../../pages/about-page";
import { Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
