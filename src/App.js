import './App.css';
import Nav from './Components/Nav.jsx'
import Program from './Pages/Program'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
// import CardSlider from './Components/CardSlider.jsx';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <Nav/>
<Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/Program' element ={<Program/>}/>                      
        <Route path='/Login' element ={<Login/>}/>                      
 </Routes>  


    

     
    </div>
  );
}

export default App;
