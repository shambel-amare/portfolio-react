import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

function App() {
  return (
    <>
    <Header/>
    <Nav />
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;