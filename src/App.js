import React from "react";
import "./css/app.css";
import { Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import FicheLogement from "./pages/fiche-logement";
import About from "./pages/about";
import Error404 from "./pages/404";
import Footer from "./components/footer";

export default function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/Kasa" element={<Home />}/>
        <Route path="/Kasa/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/Kasa/about" element={<About />} />
        <Route path="/Kasa/*" element={<Error404 />} />
      </Routes>
    <Footer />
    </>
  );
}