import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Navbar from "./components/navbar/Navbar";
import Certificate from "./components/certificate/Certificate";

function App() {
  return (
    <>
      <Navbar />
      <Nav />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
