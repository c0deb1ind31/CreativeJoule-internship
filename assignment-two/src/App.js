import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/ Contactus';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/aboutus' element={ <Aboutus/> } />
      <Route path='/contactus' element={ <Contactus/> } />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
