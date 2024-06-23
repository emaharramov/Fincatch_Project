import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [page, setPage] = useState("home");

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setPage("home");
    } else if (path === "/about") {
      setPage("aboutus");
    } else if (path === "/pricing") {
      setPage("pricing");
    } else if (path === "/blog") {
      setPage("blog");
    } else if (path === "/contact") {
      setPage("contact");
    } else {
      setPage("NotFound");
    }
  }, [location.pathname]);

  const className = page === "home" ? "slide" : "customBg";
  const classNameTx = page === "home" ? "text-white" : "text-[#242528]";
  const menuTxt = page === "home" ? "menuTxt" : "menuTxtOther";
  const hidden = page === "home" ? "" : "bg-[#242528]";
  const show = page === "home" ? "homeHead" : "aboutHead";

  return (
    <>
      <Header
        setPage={setPage}
        page={page}
        className={className}
        classNameTx={classNameTx}
        menuTxt={menuTxt}
        hidden={hidden}
        show={show}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
