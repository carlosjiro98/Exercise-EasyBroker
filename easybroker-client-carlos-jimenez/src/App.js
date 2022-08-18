import './App.css';

//components
import About from './Views/About';
import Nav from './components/Nav';
import PropDetail from './Views/PropDetail';
import Properties from './Views/Properties';
import Main from './components/Main';

//utils
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      
      <Nav />

      <Main>
        <Routes>
          <Route path='/' element={ <Properties /> } />
          <Route path='/detalle' element={ <PropDetail /> } />
          <Route path='/acerca' element={ <About /> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </Main>
      
    </div>
  );
}

export default App;
