import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './styles/global.css';

function App() {
  return (
    <div className="bg-black text-white mx-auto max-w-4xl my-[300px]">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;