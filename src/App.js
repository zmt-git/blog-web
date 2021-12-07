import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Detail from "./views/detail/detail";
import WriteArticle from './views/writeArticle/writeArticle'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/writeArticle' element={<WriteArticle/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
