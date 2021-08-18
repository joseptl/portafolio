import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills'
import Projects from './Pages/Projects';
import { ThemeProvider } from './Context/ThemeContext';
import ToTop from './Components/ToTop';




function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <ToTop/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
