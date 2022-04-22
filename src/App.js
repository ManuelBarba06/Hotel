import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/main/Main';
import Login from './components/auth/Login';
import Singup from './components/auth/Singup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Singup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
