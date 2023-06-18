import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login.js"
import Home from "./components/home/home.js"
import Post from "./components/post/post.js"
import Bookmark from "./components/bookmark/bookmark.js"

function App(){
  return(
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/bookmark' element={<Bookmark/>}></Route>
    </Routes>
  )
}

export default App;
