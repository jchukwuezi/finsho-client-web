import './App.css';
import {Routes, Route} from 'react-router-dom'
import Registration from './components/pages/Registration';
import UploadProduct from './components/pages/UploadProduct';
import Login from './components/pages/Login';
import AddProducts from './components/pages/AddProducts';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<Registration />}/>
        <Route path='/login' element = {<Login />}/>
        <Route element={<PrivateRoutes />}> 
          <Route path='/upload' element = {<UploadProduct />}/>
          <Route path='/add/product/' element= {<AddProducts/>}/>
          <Route path ='/dashboard' element = {<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
