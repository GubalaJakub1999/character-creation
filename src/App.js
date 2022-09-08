import { Container, Navbar, Nav} from "react-bootstrap";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Creator from "./components/Creator/Creator";
import Features from "./components/Features/Features";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Help from "./components/Help/Help";
import About from "./components/About/About";

function App() {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
      <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Creator" element={<Creator />}/>
        <Route path="/Features" element={<Features />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Help" element={<Help />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </Container>
  );
}

export default App;
