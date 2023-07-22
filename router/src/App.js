import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
