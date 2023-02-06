import './App.css';
import {Routes, Route} from 'react-router-dom'
import Registration from './components/pages/Registration';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<Registration />}/>
      </Routes>
    </div>
  );
}

export default App;
