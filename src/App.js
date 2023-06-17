
import NavBar from "./components/NavBar";
import Home from "./components/home components/Home";
import './general.css'
import Section1 from "./components/home components/Section1";
import Section2 from "./components/home components/section2";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Section1 />
      <Section2/>
    </div>
  );
}

export default App;
