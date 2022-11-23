import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Category } from './pages/Category';
import { Home } from './pages/Home';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:id" element={<Category/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
