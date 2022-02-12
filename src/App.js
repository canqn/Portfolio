// Import application sass styles
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/Layout/About';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Skills from './components/Layout/Skills';
import './styles/style.scss';


function App() {
  return (
    <Router>
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
      </main>
    </Router>
  );
}

export default App;
