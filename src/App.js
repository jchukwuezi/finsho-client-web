import './App.css';
import {Routes, Route} from 'react-router-dom'
/*
import Registration from './components/pages/Registration';
import UploadProduct from './components/pages/UploadProduct';
import Login from './components/pages/Login';
import AddProducts from './components/pages/AddProducts';
import Dashboard from './components/dashboard/Dashboard';
*/

import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/pages/LandingPage';
import UploadProductPage from './components/pages/UploadProductPage';
import ProtectedRoute from './utils/ProtectedRoutes';
import TrueLayerSuccessPage from './components/pages/TrueLayerSuccessPage';
import TrueLayerTestPage from './components/pages/TrueLayerTestPage';
import ProductPage from './components/pages/ProductPage';
import { mainStore } from './store/store';


function App() {

  const isAuth = mainStore((state) => state.isAuth)

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
        <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/truelayer' element={<TrueLayerTestPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
