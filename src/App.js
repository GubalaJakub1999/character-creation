import { Container, Navbar, Nav} from "react-bootstrap";
import Header from "./components/Header/Header";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import './App.scss';

function App() {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
      <Navigationbar></Navigationbar>
      <Header></Header>
    </Container>
  );
}

export default App;
