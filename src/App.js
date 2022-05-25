import Homepage from './pages/Homepage';
import './styles/css/main.css';
import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import {basketContext} from './Contexts/shopContext';
import {RegisterContext} from './Contexts/RegisterContext';
import Basket from './pages/Basket';

function App() {
  const [isOpen, setOpen] = useState(false)
  //register state
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
//login state
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [basketNumber,setBasketNumber] = useState(0);
  return (
    <div className="App">
      <Router>

      <basketContext.Provider value={{basketNumber,setBasketNumber}}>
        <RegisterContext.Provider value={{registerEmail,setRegisterEmail,registerPassword,setRegisterPassword}}>
        <Routes>
          <Route path='/' element={<Homepage isOpen={isOpen} setOpen={setOpen}></Homepage>}/>
          <Route path='/login' element={<Login isOpen={isOpen} setOpen={setOpen} ></Login>}/>
          <Route path='/register' element={<Register isOpen={isOpen} setOpen={setOpen}></Register>}/>
          <Route path='/basket/:id' element={<Basket/>}/>    
        </Routes>
        </RegisterContext.Provider>
        </basketContext.Provider>  
      </Router>
    </div>
  );
}

export default App;
