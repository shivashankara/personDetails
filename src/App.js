import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PersonDetails from './Components/Persons-detail';
// import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      {/* <Container /> */}
      <div className="container">

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora beatae, aperiam esse ab quidem itaque ?</h1>
        <PersonDetails />
      </div>

    </div>
  );
}

export default App;
