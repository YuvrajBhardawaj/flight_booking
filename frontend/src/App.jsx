import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import _404 from './components/_404';
import Home from './components/Home';
import Forms from './components/Forms';
import bgImg from '/bg.webp'
import logo from '/logo.png'
function App() {
  const appStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add other styles as needed
    height: '100vh', // Set a height for the container, adjust as needed
  };

  return (
    <div style={appStyle}>
      <NavBar logo={logo}/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<_404 />} />
        <Route path='/home/booking' element={<Forms/>}/>
      </Routes>
    </div>
  );
}

export default App;
