import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PricingContent from './components/pages/PricingContent';
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import About from './components/pages/About';
import ServicesContent from './components/pages/ServicesContent'
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pricing' element={<PricingContent />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/deploy' element={''} />
        <Route path='/project' element={''} />
        <Route path='/services' element={<ServicesContent/>} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
