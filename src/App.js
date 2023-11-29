import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/main/Main';
import Login from './components/auth/Login';
import Singup from './components/auth/Singup';
import {Provider as RoomTypeProvider} from './context/room_typeContext';
import {Provider as AuthProvider} from './context/authContext';
import Reservation from './components/Reservation/Reservation';
import Room from './components/Rooms/Room';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  
  return (
    <AuthProvider>
      <RoomTypeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Main/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<Singup/>}/>
              <Route exact path='/reservation' element={<Reservation/>}/>
              <Route exact path='/room/:id' element={<Room/>}/>
            </Routes>
          </Router>
        </LocalizationProvider>
      </RoomTypeProvider>
    </AuthProvider>
  );
}

export default App;
