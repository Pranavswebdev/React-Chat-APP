
import './App.css';

import { Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer'
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
     
   

  


     <Route path='/login' component={HomePage}  / > 
     <Route path='/chats' component={ChatPage} / >
    <Route path='/' component={LandingPage} exact />


    </div>
  );
}

export default App;
