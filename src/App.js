import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {useSelector}  from 'react-redux'        

import PersonDetails from './Components/persons-detail';
// import Container from './Components/Container';

function App() {
const persons = useSelector ((state)=>{
    return state.users;
})
  return (
    <div className="App">
      {/* <Container /> */}
      <div className="container">

        <h1>Person List - {persons.length}</h1>
        <PersonDetails />
      </div>

    </div>
  );
}

export default App;
