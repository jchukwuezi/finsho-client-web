import './App.css';
import {Routes, Route} from 'react-router-dom'
/*
import Registration from './components/pages/Registration';
import UploadProduct from './components/pages/UploadProduct';
import Login from './components/pages/Login';
import AddProducts from './components/pages/AddProducts';
import Dashboard from './components/dashboard/Dashboard';
*/
import Dashboard from './chakra/components/Dashboard/Dashboard';
import LandingPage from './chakra/pages/LandingPage';
import UploadProductPage from './chakra/pages/UploadProductPage';
import PrivateRoutes from './utils/PrivateRoutes';
import TrueLayerSuccessPage from './chakra/pages/TrueLayerSuccessPage';
import TrueLayerTestPage from './chakra/pages/TrueLayerTestPage';

function App() {
  return (
    <div>
      {/*
      <Routes>
        <Route exact path='/' element = {<Registration />}/>
        <Route path='/login' element = {<Login />}/>
        <Route element={<PrivateRoutes />}> 
          <Route path='/upload' element = {<UploadProduct />}/>
          <Route path='/add/product/' element= {<AddProducts/>}/>
          <Route path ='/dashboard' element = {<Dashboard />} />
        </Route>
      </Routes>
      */}
      {/*
        <div>
          <Routes>
            <Route exact path='/' element = {<TrueLayerTestPage />} />
            <Route exact path='/truelayer/success' element = {< TrueLayerSuccessPage/>} />
              <Route element={<PrivateRoutes />}> 
              </Route>
          </Routes>
        </div>
    */}

      <Routes>
        <Route exact path='/' element = {<LandingPage />}/>
        <Route>
          <Route path='/add/product' element={<UploadProductPage/>}/>
          <Route path='/truelayer' element={<TrueLayerTestPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
