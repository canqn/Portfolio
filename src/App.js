// Import application sass styles
import { BrowserRouter as Router } from "react-router-dom";
import ScrollUp from './components/Common/ScrollUp';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Portfolio from './components/Layout/Portfolio';
import Project from './components/Layout/Project';
import Qualification from './components/Layout/Qualification';
import Services from './components/Layout/Services';
import Skills from './components/Layout/Skills';
import Testimonial from './components/Layout/Testimonial';
import './styles/style.scss';


function App() {
  return (
    <Router>
      {/* <Router>*/}
      <Header />
      <main className='main'>
        {/* 
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      */}
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Project />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
      <ScrollUp />
      {/* </Router>*/}
    </Router>
  );
}

export default App;
