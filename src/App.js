
import {  BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';
import Service from './Pages/Service';
function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/appointment' element={<Appointment />}></Route>
          <Route path='/services' element={<Service />}></Route>
      </Routes> 
      </Router>
    </>
  );
}

export default App;
