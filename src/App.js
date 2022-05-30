import Homepage from './pages/Homepage';
import './styles/css/main.css';
import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import {basketContext} from './Contexts/shopContext';
import {RegisterContext} from './Contexts/RegisterContext';
import Basket from './pages/Basket';
import {UserContext} from './Contexts/UserContext';
import {LoginContext} from './Contexts/LoginContext';
import Profile from './pages/Profile.jsx';
import Product from './pages/Product';
import HamburgerMenu from './components/HamburgerMenu';
import Header from './components/Header';
import Hamburger from 'hamburger-react';

function App() {
  const [isOpen, setOpen] = useState(false)
  //register state
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  //login state
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  //basket Number state
  const [basketNumber,setBasketNumber] = useState(0);
  //basket Items
  const [basketItems,setBasketItems] = useState([]);
  const [quantity,setQuantity] = useState(0);


  //user state
  const [user,setUser] = useState({});
  return (
    <div className="App">
      <Router>
      <basketContext.Provider value={{basketNumber,setBasketNumber,basketItems,setBasketItems,quantity,setQuantity}}>
      <RegisterContext.Provider value={{registerEmail,setRegisterEmail,registerPassword,setRegisterPassword}}>
      <LoginContext.Provider value={{loginEmail,setLoginEmail,loginPassword,setLoginPassword}}>
      <UserContext.Provider value={{user,setUser}}>
      <Hamburger toggled={isOpen} toggle={setOpen} ></Hamburger>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/Product/:id' element={<Product/>}/>
          <Route path='/profile/:name' element={<Profile/>}/>
        </Routes>
        {isOpen && <HamburgerMenu />}  
        </UserContext.Provider>
        </LoginContext.Provider>
        </RegisterContext.Provider>
        </basketContext.Provider>
      </Router>
    </div>
  );
}

export default App;
