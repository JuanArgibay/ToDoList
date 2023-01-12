import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TestComponent } from './components/testComponent/TestComponent';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import React from 'react';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:id" element={<Category/>}/>
          <Route path="/addcategory/" element={<TestComponent/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
