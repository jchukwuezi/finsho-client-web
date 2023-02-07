import './App.css';
import {Routes, Route} from 'react-router-dom'
import Registration from './components/pages/Registration';
import UploadProduct from './components/pages/UploadProduct';
import Login from './components/pages/Login';
import AddProducts from './components/pages/AddProducts';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<Registration />}/>
        <Route path='/upload' element = {<UploadProduct />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/add/product/' element= {<AddProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
