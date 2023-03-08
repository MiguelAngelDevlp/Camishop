import { Route, Routes } from 'react-router-dom';
import './App.css';
import EndFooter from './Components/EndFooter/EndFooter';
import Header from './Components/Header/Header';
// import Prueba from './Components/Prueba/Prueba';
// import Prueba from './Components/prueba/prueba';
// import Individual from './Components/prueba/prueba';
import { ContextProvider } from './Context/Context';
import Alemania from './Pages/Alemania/Alemania';
import Cesta from './Pages/Cesta/Cesta';
import Chandals from './Pages/Chandals/Chandals';
import España from './Pages/España/España';
import Francia from './Pages/Francia/Francia';
import HomePage from './Pages/HomePage/HomePage';
import Inglaterra from './Pages/Inglaterra/Inglaterra';
import Italia from './Pages/Italia/Italia';
import NBA from './Pages/NBA/NBA';
import Pago from './Pages/Pago/Pago';
import Prueba from './Pages/Prueba/Prueba';
import Succes from './Pages/Succes/Succes';
import Tienda from './Pages/Tienda/Tienda';
import Tienda2 from './Pages/Tienda2/Tienda2';
import Tienda3 from './Pages/Tienda3/Tienda3';



function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/España' element={<España />} />
        <Route path='/Alemania' element={<Alemania />} />
         <Route path='/Italia' element={<Italia/>} />
         <Route path='/Tienda2' element={<Tienda2/>} />
         <Route path='/Tienda3' element={<Tienda3/>} />
         {/* <Route path='/Tienda3' element={<Tienda3/>} /> */}
        <Route path='/Chandals' element={<Chandals/>} />
        <Route path='/NBA' element={<NBA />} />
        <Route path='/Francia' element={<Francia />} />
        <Route path='/shirt/:team_name' element={<Prueba />} />
        <Route path='/Inglaterra' element={<Inglaterra />} /> 
        <Route path='/Tienda' element={<Tienda />} />
        <Route path='/Cesta' element={<Cesta />} />  
        <Route path='/Pago' element={<Pago />} />  
        <Route path='/Succes' element={<Succes />} /> 
    
      </Routes>
      <EndFooter/>
      </ContextProvider>
    </div>
  );
}

export default App;
