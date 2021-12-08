import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Detail from "./views/detail/detail";
import WriteArticle from './views/writeArticle/writeArticle'
import 'moment/locale/zh-cn'
import Login from "./components/login/Login";
import eventBus from "./utils/eventBus";
function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(() => {
    eventBus.on('showLogin', (status) => {
      setLoginStatus(status)
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<Detail/>} />
          <Route path='/writeArticle' element={<WriteArticle/>} />
        </Routes>
      </BrowserRouter>
      { loginStatus ? <Login/> : null}
    </>
  );
}

export default App;
