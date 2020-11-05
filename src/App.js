import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import { Container } from "react-bootstrap";


function App() {

  return (
    <Container >
      <div className="App">
        <AddTask />
        <ListTask />
      </div>
    </Container>
  );
}

export default App;
