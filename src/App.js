import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/main/Main';
import Login from './components/auth/Login';
import Singup from './components/auth/Singup';
import {Provider as RoomTypeProvider} from './context/RoomTypeController';
import {Provider as AuthProvider} from './context/authContext';
import Reservation from './components/Reservation/Reservation';
import Room from './components/Rooms/Room';
import { useEffect } from 'react';

function App() {
  
  return (
    <AuthProvider>
      <RoomTypeProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Singup/>}/>
            <Route exact path='/reservation' element={<Reservation/>}/>
            <Route exact path='/room/:id' element={<Room/>}/>
          </Routes>
        </Router>
      </RoomTypeProvider>
    </AuthProvider>
  );
}

export default App;
