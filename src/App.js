import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScollButton from "./components/ScollButton";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className=" font-poppins text-gray dark:text-white bg-gradient-to-b from-slate-200 to-slate-300  dark:from-gray dark:to-[#213f50] ">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <ScollButton />
    </div>
  );
}

export default App;
