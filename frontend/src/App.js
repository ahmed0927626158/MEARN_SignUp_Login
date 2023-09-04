
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Loging from './Pages/Loging';
import SignUp from './Pages/SignUp';
import Home from './Components/home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Loging/>}/>
      <Route path='/signup' element={ <SignUp/>}/>
        <Route path='/home' element={ <Home/>}/>
     

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
