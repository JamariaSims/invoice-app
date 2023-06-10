import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Invoice:id' element={<div>Invoice</div>}/>
      </Routes>
    </div>
  );
}

export default App;
