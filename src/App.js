import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <AddStudent/>
      <br></br>
      {/* <AddStudent></AddStudent> */}
      <br></br>
      <SearchStudent/>
      <br></br>
      <DeleteStudent/>
      <ViewAll/>
    </div>
  );
}

export default App;
